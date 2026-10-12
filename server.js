'use strict';

const http = require('node:http');
const path = require('node:path');
const fs = require('node:fs');
const crypto = require('node:crypto');
const {WebSocketServer, WebSocket} = require('ws');

const PORT = Number(process.env.PORT || 3000);
const SUPABASE_URL = String(process.env.SUPABASE_URL || '').replace(/\/$/, '');
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || '';
const STATIC_ROOT = __dirname;
const MAX_MESSAGE_BYTES = 4096;
const AUTH_TIMEOUT_MS = 8000;
const queue = [];
const matches = new Map();
const socketsByUser = new Map();
const lastMessages = new WeakMap();

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('Set SUPABASE_URL and SUPABASE_ANON_KEY in the service environment.');
  process.exit(1);
}

const publicFiles = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/index.html', ['index.html', 'text/html; charset=utf-8']],
  ['/script.js', ['script.js', 'text/javascript; charset=utf-8']],
  ['/version8.js', ['version8.js', 'text/javascript; charset=utf-8']],
  ['/online.js', ['online.js', 'text/javascript; charset=utf-8']],
  ['/styles.css', ['styles.css', 'text/css; charset=utf-8']],
  ['/styles-v8.css', ['styles-v8.css', 'text/css; charset=utf-8']],
  ['/styles-v9.css', ['styles-v9.css', 'text/css; charset=utf-8']]
]);

const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host || 'localhost'}`);
  if (url.pathname === '/healthz') {
    response.writeHead(200, {'content-type': 'application/json; charset=utf-8'});
    response.end(JSON.stringify({ok: true, service: 'last-light-matchmaking'}));
    return;
  }
  const file = publicFiles.get(url.pathname);
  if (!file) {
    response.writeHead(404, {'content-type': 'text/plain; charset=utf-8'});
    response.end('Not found');
    return;
  }
  const [filename, contentType] = file;
  fs.readFile(path.join(STATIC_ROOT, filename), (error, contents) => {
    if (error) {
      response.writeHead(500, {'content-type': 'text/plain; charset=utf-8'});
      response.end('Unable to load game asset');
      return;
    }
    response.writeHead(200, {
      'content-type': contentType,
      'cache-control': filename.endsWith('.html') ? 'no-cache' : 'public, max-age=300',
      'x-content-type-options': 'nosniff',
      'referrer-policy': 'strict-origin-when-cross-origin'
    });
    response.end(contents);
  });
});

const wsServer = new WebSocketServer({noServer: true, maxPayload: MAX_MESSAGE_BYTES});
server.on('upgrade', (request, socket, head) => {
  const pathname = new URL(request.url, `http://${request.headers.host || 'localhost'}`).pathname;
  if (pathname !== '/ws') { socket.destroy(); return; }
  wsServer.handleUpgrade(request, socket, head, ws => wsServer.emit('connection', ws, request));
});

function send(ws, type, fields = {}) {
  if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify({type, ...fields}));
}
function removeFromQueue(ws) {
  const index = queue.indexOf(ws);
  if (index !== -1) queue.splice(index, 1);
}
function detachFromMatch(ws, reason = 'opponentDisconnected') {
  const matchId = ws.matchId;
  if (!matchId) return;
  const match = matches.get(matchId);
  ws.matchId = null;
  if (!match) return;
  matches.delete(matchId);
  for (const player of match.players) {
    player.matchId = null;
    if (player !== ws) send(player, 'matchEnded', {reason});
  }
}
async function authenticate(accessToken) {
  if (typeof accessToken !== 'string' || accessToken.length < 20 || accessToken.length > 8192) throw new Error('Invalid access token.');
  const response = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
    headers: {apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${accessToken}`},
    signal: AbortSignal.timeout(6000)
  });
  if (!response.ok) throw new Error('Supabase rejected the session. Sign in again.');
  const user = await response.json();
  if (!user?.id || user.aud !== 'authenticated') throw new Error('The session is not authenticated.');
  return user;
}
function pairPlayers() {
  while (queue.length >= 2) {
    const first = queue.shift();
    const second = queue.shift();
    if (first.readyState !== WebSocket.OPEN || second.readyState !== WebSocket.OPEN) continue;
    const matchId = crypto.randomUUID();
    const players = [first, second];
    const match = {id: matchId, players, createdAt: Date.now()};
    matches.set(matchId, match);
    players.forEach((player, index) => {
      player.matchId = matchId;
      player.queued = false;
      send(player, 'matchFound', {
        matchId,
        side: index === 0 ? 'north' : 'south',
        opponent: {id: players[1 - index].user.id, callsign: players[1 - index].user.user_metadata?.display_name || 'Commander'},
        note: 'Pairing established. Ranked results are not recorded by this matchmaking-only release.'
      });
    });
  }
}

wsServer.on('connection', ws => {
  ws.isAlive = true;
  ws.authenticated = false;
  ws.queued = false;
  ws.user = null;
  const authTimer = setTimeout(() => {
    if (!ws.authenticated) { send(ws, 'error', {message: 'Authentication timed out.'}); ws.close(4001, 'Authentication required'); }
  }, AUTH_TIMEOUT_MS);

  ws.on('pong', () => { ws.isAlive = true; });
  ws.on('message', async raw => {
    const now = Date.now();
    const previous = lastMessages.get(ws) || 0;
    if (now - previous < 60) { send(ws, 'error', {message: 'Messages are arriving too quickly.'}); return; }
    lastMessages.set(ws, now);
    let message;
    try { message = JSON.parse(raw.toString()); } catch { send(ws, 'error', {message: 'Malformed message.'}); return; }
    if (!message || typeof message.type !== 'string') { send(ws, 'error', {message: 'Invalid message.'}); return; }

    if (!ws.authenticated) {
      if (message.type !== 'auth') { send(ws, 'error', {message: 'Authenticate before matchmaking.'}); return; }
      try {
        ws.user = await authenticate(message.token);
        if (ws.readyState !== WebSocket.OPEN) return;
        if (socketsByUser.has(ws.user.id)) {
          send(ws, 'error', {message: 'This account already has a matchmaking connection.'});
          ws.close(4002, 'Duplicate session');
          return;
        }
        ws.authenticated = true;
        socketsByUser.set(ws.user.id, ws);
        clearTimeout(authTimer);
        send(ws, 'authenticated');
      } catch (error) {
        send(ws, 'error', {message: error.message || 'Authentication failed.'});
        ws.close(4003, 'Authentication failed');
      }
      return;
    }

    if (message.type === 'matchmake') {
      if (ws.matchId) { send(ws, 'error', {message: 'You are already in a match.'}); return; }
      if (ws.queued) { send(ws, 'queued'); return; }
      ws.queued = true;
      queue.push(ws);
      send(ws, 'queued', {position: queue.length});
      pairPlayers();
    } else if (message.type === 'cancel') {
      removeFromQueue(ws);
      ws.queued = false;
      send(ws, 'cancelled');
    } else if (message.type === 'leave') {
      removeFromQueue(ws);
      ws.queued = false;
      detachFromMatch(ws, 'opponentLeft');
      send(ws, 'left');
    } else if (message.type === 'result' || message.type === 'rankedResult' || message.type === 'action') {
      send(ws, 'error', {message: 'Gameplay actions and client-submitted results are disabled: the game simulation is not yet authoritative on this server.'});
    } else {
      send(ws, 'error', {message: 'Unknown protocol message.'});
    }
  });

  ws.on('close', () => {
    clearTimeout(authTimer);
    removeFromQueue(ws);
    ws.queued = false;
    detachFromMatch(ws);
    if (ws.user && socketsByUser.get(ws.user.id) === ws) socketsByUser.delete(ws.user.id);
  });
  ws.on('error', error => console.warn('WebSocket client error:', error.message));
});

const heartbeat = setInterval(() => {
  for (const ws of wsServer.clients) {
    if (!ws.isAlive) { ws.terminate(); continue; }
    ws.isAlive = false;
    ws.ping();
  }
}, 25000);

server.listen(PORT, '0.0.0.0', () => console.log(`Last Light online service listening on port ${PORT}`));
server.on('close', () => clearInterval(heartbeat));
