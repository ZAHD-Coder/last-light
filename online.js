(() => {
  const SUPABASE_URL = 'https://yzhjovdrrulkvwzycocq.supabase.co';
  const SUPABASE_ANON_KEY = 'sb_publishable_9oDrdcLvRbDHivgFO3xGgw_PVtIdZKY';
  const PROFILE_TABLE = 'profiles';
  const SESSION_KEY = 'lastlight-online-session';
  const $ = id => document.getElementById(id);
  const panel = $('onlinePanel');
  const authForm = $('onlineAuthForm');
  let session = null;
  let registering = false;
  let socket = null;
  let reconnectingSearch = false;

  function showStatus(message, error = false) {
    const node = $('onlineStatus');
    node.textContent = message;
    node.classList.toggle('error', error);
  }
  function showMatchStatus(message, error = false) {
    const node = $('matchStatus');
    node.textContent = message;
    node.classList.toggle('error', error);
  }
  function saveSession(value) {
    session = value;
    try {
      if (value?.access_token) sessionStorage.setItem(SESSION_KEY, JSON.stringify(value));
      else sessionStorage.removeItem(SESSION_KEY);
    } catch {}
    updateAuthView();
  }
  function headers(token = '') {
    return {
      apikey: SUPABASE_ANON_KEY,
      ...(token ? {Authorization: `Bearer ${token}`} : {}),
      'Content-Type': 'application/json'
    };
  }
  async function responseJson(response) {
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.msg || data.message || data.error_description || data.error || `Request failed (${response.status})`);
    return data;
  }
  async function authRequest(path, body) {
    const response = await fetch(`${SUPABASE_URL}/auth/v1/${path}`, {
      method: 'POST', headers: headers(), body: JSON.stringify(body)
    });
    return responseJson(response);
  }
  async function apiRequest(path, options = {}) {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
      ...options,
      headers: {...headers(session?.access_token), ...(options.headers || {})}
    });
    return responseJson(response);
  }
  function updateAuthView() {
    const signedIn = Boolean(session?.access_token && session?.user?.id);
    authForm.classList.toggle('hidden', signedIn);
    $('onlineSignedIn').classList.toggle('hidden', !signedIn);
    $('onlineModeToggle').textContent = registering ? 'BACK TO SIGN IN' : 'CREATE ACCOUNT';
    $('onlineUsername').required = registering;
    $('onlinePassword').autocomplete = registering ? 'new-password' : 'current-password';
    $('onlineSubmit').innerHTML = registering ? 'REGISTER <span>→</span>' : 'SIGN IN <span>→</span>';
    if (signedIn) {
      showStatus(`Signed in as ${session.user.email || 'commander'}.`, false);
      loadProfile();
    }
  }
  async function refreshSessionIfNeeded() {
    if (!session?.refresh_token || !session?.expires_at || Date.now() / 1000 < session.expires_at - 120) return;
    try {
      const refreshed = await authRequest('token?grant_type=refresh_token', {refresh_token: session.refresh_token});
      saveSession(refreshed);
    } catch {
      saveSession(null);
      showStatus('Your session expired. Sign in again to use online features.', true);
    }
  }
  async function loadProfile() {
    if (!session?.access_token) return;
    const userId = session.user.id;
    try {
      const rows = await apiRequest(`${PROFILE_TABLE}?select=id,username,wins,losses,elo&id=eq.${encodeURIComponent(userId)}&limit=1`);
      const profile = rows[0];
      if (!profile) throw new Error('No profile row exists yet. Add the server-side auth.users profile trigger described in README-online.md.');
      $('onlineCallsign').textContent = profile.username || 'Commander';
      $('onlineWins').textContent = Number(profile.wins || 0).toLocaleString();
      $('onlineLosses').textContent = Number(profile.losses || 0).toLocaleString();
      $('onlineElo').textContent = Number(profile.elo ?? 1000).toLocaleString();
      $('profileSummary').textContent = `${profile.username || 'Commander'} · ${Number(profile.wins || 0)} wins · ${Number(profile.elo ?? 1000)} ELO`;
      showStatus(`Online profile loaded · ${profile.username || 'Commander'}.`);
    } catch (error) {
      showStatus(`Profile could not load: ${error.message}. Expected profiles(id, username, wins, losses, elo) with RLS allowing own-row access.`, true);
    }
  }
  async function loadLeaderboard() {
    const holder = $('onlineLeaderboard');
    holder.textContent = 'Loading leaderboard…';
    try {
      const rows = await apiRequest(`${PROFILE_TABLE}?select=username,wins,losses,elo&order=elo.desc&limit=25`);
      if (!rows.length) { holder.textContent = 'No ranked profiles yet.'; return; }
      const table = document.createElement('table');
      table.className = 'leaderboard-table';
      const head = document.createElement('thead');
      head.innerHTML = '<tr><th>#</th><th>CALLSIGN</th><th>W</th><th>L</th><th>ELO</th></tr>';
      table.appendChild(head);
      const body = document.createElement('tbody');
      rows.forEach((row, index) => {
        const tr = document.createElement('tr');
        [String(index + 1), String(row.username || 'Commander'), String(Number(row.wins || 0)), String(Number(row.losses || 0)), String(Number(row.elo ?? 1000))].forEach(value => {
          const cell = document.createElement('td'); cell.textContent = value; tr.appendChild(cell);
        });
        body.appendChild(tr);
      });
      table.appendChild(body);holder.replaceChildren(table);
    } catch (error) {
      holder.textContent = `Leaderboard unavailable: ${error.message}. Enable public SELECT on profiles through your RLS policy.`;
    }
  }
  function setSearching(searching) {
    $('findMatchButton').classList.toggle('hidden', searching);
    $('cancelMatchButton').classList.toggle('hidden', !searching);
  }
  function closeSocket() {
    if (!socket) return;
    const old = socket; socket = null;
    old.onclose = null; old.close();
    setSearching(false);
  }
  function findMatch() {
    if (!session?.access_token) { showMatchStatus('Sign in before joining matchmaking.', true); return; }
    const endpoint = $('wsEndpoint').value.trim() || localStorage.getItem('lastLightWsEndpoint') || '';
    if (!endpoint) { showMatchStatus('Enter your Render WebSocket URL (wss://…/ws) first.', true); return; }
    let url;
    try { url = new URL(endpoint); } catch { showMatchStatus('That WebSocket URL is invalid.', true); return; }
    if (url.protocol !== 'wss:' && !(url.protocol === 'ws:' && ['localhost', '127.0.0.1'].includes(url.hostname))) {
      showMatchStatus('Use a secure wss:// URL for the hosted server.', true); return;
    }
    localStorage.setItem('lastLightWsEndpoint', url.href);
    $('wsEndpoint').value = url.href;
    reconnectingSearch = true;
    socket = new WebSocket(url.href);
    setSearching(true);
    showMatchStatus('Connecting to the matchmaking server…');
    socket.addEventListener('open', () => socket?.send(JSON.stringify({type: 'auth', token: session.access_token})));
    socket.addEventListener('message', event => {
      let message;
      try { message = JSON.parse(event.data); } catch { return; }
      if (message.type === 'authenticated') {
        if (reconnectingSearch) { socket?.send(JSON.stringify({type: 'matchmake'})); reconnectingSearch = false; }
      } else if (message.type === 'queued') {
        showMatchStatus('Searching for an opponent…');
      } else if (message.type === 'matchFound') {
        setSearching(false);
        showMatchStatus(`Opponent found · match ${message.matchId}. The server has paired both players; live battle synchronization is not enabled yet.`);
      } else if (message.type === 'matchEnded') {
        closeSocket();
        showMatchStatus('The opponent disconnected. No game result was recorded.', true);
      } else if (message.type === 'error') {
        showMatchStatus(message.message || 'Matchmaking error.', true);
      } else if (message.type === 'cancelled') {
        setSearching(false);showMatchStatus('Match search cancelled.');
      }
    });
    socket.addEventListener('error', () => showMatchStatus('Could not connect to the match server. Check the Render URL and service status.', true));
    socket.addEventListener('close', () => {
      setSearching(false);
      if (socket) { socket = null;showMatchStatus('Connection closed. Reconnect to search again.', true); }
    });
  }

  $('onlineAccountButton').addEventListener('click', () => panel.classList.remove('hidden'));
  $('closeOnline').addEventListener('click', () => panel.classList.add('hidden'));
  $('onlineModeToggle').addEventListener('click', () => { registering = !registering;updateAuthView(); });
  authForm.addEventListener('submit', async event => {
    event.preventDefault();
    const email = $('onlineEmail').value.trim();
    const password = $('onlinePassword').value;
    const username = $('onlineUsername').value.trim().replace(/\s+/g, ' ');
    if (registering && (!username || username.length > 24)) { showStatus('Choose a callsign of 1–24 characters.', true);return; }
    $('onlineSubmit').disabled = true;
    showStatus(registering ? 'Creating your account…' : 'Signing in…');
    try {
      const data = registering
        ? await authRequest('signup', {email, password, data: {display_name: username}})
        : await authRequest('token?grant_type=password', {email, password});
      if (!data.access_token) {
        showStatus('Registration received. Check your email to confirm the account, then sign in.', false);
      } else {
        saveSession(data);
        await loadProfile();
      }
    } catch (error) { showStatus(error.message, true); }
    finally { $('onlineSubmit').disabled = false; }
  });
  $('onlineSignOut').addEventListener('click', async () => {
    closeSocket();
    try { if (session?.access_token) await fetch(`${SUPABASE_URL}/auth/v1/logout`, {method: 'POST', headers: headers(session.access_token)}); } catch {}
    saveSession(null);showStatus('Signed out.');$('profileSummary').textContent = 'Offline progress is saved on this device.';
  });
  $('findMatchButton').addEventListener('click', findMatch);
  $('cancelMatchButton').addEventListener('click', () => {
    if (socket?.readyState === WebSocket.OPEN) socket.send(JSON.stringify({type: 'cancel'}));
    closeSocket();showMatchStatus('Match search cancelled.');
  });
  document.querySelectorAll('.online-tab').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('.online-tab').forEach(tab => tab.classList.toggle('active', tab === button));
    const leaderboard = button.dataset.onlineTab === 'leaderboard';
    $('onlineProfileView').classList.toggle('hidden', leaderboard);
    $('onlineLeaderboardView').classList.toggle('hidden', !leaderboard);
    if (leaderboard) loadLeaderboard();
  }));
  $('refreshLeaderboard').addEventListener('click', loadLeaderboard);
  setInterval(() => {
    refreshSessionIfNeeded();
    const leaderboardOpen = !$('onlineLeaderboardView').classList.contains('hidden') && !panel.classList.contains('hidden');
    if (leaderboardOpen && session?.access_token) loadLeaderboard();
  }, 30000);
  $('wsEndpoint').value = localStorage.getItem('lastLightWsEndpoint') || '';
  document.addEventListener('keydown', event => { if (event.key === 'Escape') panel.classList.add('hidden'); });

  try {
    const restored = JSON.parse(sessionStorage.getItem(SESSION_KEY) || 'null');
    if (restored?.access_token && restored?.user?.id) {
      session = restored;
      fetch(`${SUPABASE_URL}/auth/v1/user`, {headers: headers(session.access_token)})
        .then(responseJson).then(user => { session.user = user;saveSession(session); })
        .catch(() => saveSession(null));
    }
  } catch {}
  updateAuthView();
})();
