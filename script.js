const catalog = {
  defense: [
    ['Scout Blaster','',55,2,2,42],['Pulse Pod','',115,3,2,54],['Thorn Spitter','',240,3,3,62],['Twin Cannon','',500,4,2,75],['Frost Beacon','',1050,2,3,88],['Arc Coil','',2200,5,2,105],['Ember Sentry','',4600,5,3,120],['Heavy Mortar','',9600,8,3,145],['Sniper Spire','',20000,12,4,165],['Drone Nest','',42000,5,4,185],['Acid Mortar','',88000,7,4,210],['Laser Array','',184000,12,3,240],['Prism Cannon','',386000,10,5,275],['Guardian Mech','',810000,16,4,320],['Nova Core','',1700000,22,5,380],['Blackhole Projector','',2600000,35,5,440],['Inferno Tower','',3900000,28,3,480],['Acid Spreader','',5600000,30,4,520],
    ['Celestial Railgun','',1000000000,180,9,620],['Nebula Repeater','',2500000000,42,11,680],['Quasar Twinlance','',6000000000,115,10,740],['Pulsar Sprayer','',12000000000,75,8,800],
    ['Eventide Flamer','',25000000000,125,7,860],['Orbit Breaker','',50000000000,260,12,920],['Nova Gatling','',100000000000,95,13,980],['Rift Mortar','',200000000000,420,14,1050],
    ['Starlance Battery','',400000000000,680,15,1120],['Dark Matter Coil','',800000000000,360,12,1190],['Supernova Array','',1500000000000,240,14,1260],['Comet Barrage','',3000000000000,520,16,1340],
    ['Voidglass Cannon','',6000000000000,1100,17,1420],['Eclipse Repeater','',12000000000000,390,18,1500],['Singularity Engine','',25000000000000,1800,16,1580],['Aurora Lance','',50000000000000,950,19,1660],
    ['Galactic Anvil','',100000000000000,2600,17,1740],['Chrono Turbine','',200000000000000,780,20,1820],['Astral Devastator','',400000000000000,3200,19,1900],['Cosmic Tempest','',800000000000000,1400,21,1980],
    ['Event Horizon','',1000000000000000,5000,20,2060],['Blue Giant','',1200000000000000,2200,22,2140],['Starforge Bastion','',1500000000000000,6800,18,2220],['Prismatic Singularity','',2000000000000000,3500,23,2300],
    ['Heavenfall Cannon','',2500000000000000,9000,21,2380],['Omega Sun','',3000000000000000,4600,24,2460],['Galaxion Core','',4000000000000000,12000,22,2540],['Infinity Mortar','',5000000000000000,7200,25,2620],
    ['Last-Light Colossus','',6000000000000000,18000,23,2700],['Cosmic Crown','',8000000000000000,11000,26,2780]
  ],
  blocks: [
    ['Sandbag','🟫',20,90],['Wooden Crate','📦',35,145],['Stone Slab','🪨',50,220],['Scrap Wall','🧱',70,300],['Steel Plate','🔩',95,410],['Reinforced Fence','🚧',120,520],['Concrete Barrier','🏗️',150,680],['Shielded Wall','🛡️',185,850],['Blast Door','🚪',225,1050],['Alloy Rampart','🔒',270,1300],['Fortress Panel','🏰',320,1580],['Titan Wall','🗿',375,1900],['Aegis Barrier','🔷',435,2300],['Obsidian Gate','⬛',500,2800],['Last-Light Bulwark','✨',580,3500]
  ],
  traps: [
    ['Spike Strip','📌',35,35],['Tripwire','🪤',50,55],['Landmine','💥',70,95],['Acid Pool','☣️',95,115],['Frost Snare','❄️',120,125],['Flame Vent','🔥',145,155],['Shock Pad','⚡',175,180],['Shrapnel Charge','💣',205,230],['Laser Grid','🔴',240,210],['Toxic Sprayer','🧪',280,260],['Arc Mine','🌩️',320,300],['Void Snare','🌀',365,355],['Solar Flare','☀️',415,420],['Quantum Trap','💠',475,500],['Singularity Well','🌌',550,620],['Cryo Burst','❄️',680,760],['Hellfire Charge','🔥',760,920],['Acid Bloom','☣️',840,1050],['Shock Cage','⚡',960,1280],['Rift Imploder','🌀',1150,1600]
  ],
  decoration: [
    ['Glow Mushroom','🍄',15,1],['Tiny Cactus','🌵',25,1],['Signal Flag','🚩',40,2],['Solar Lantern','🏮',55,2],['Lucky Gnome','🧙',75,3],['Wind Spinner','🎐',95,3],['Supply Crate','🧰',120,4],['Holo Sign','🪧',150,4],['Crystal Cluster','💠',185,5],['Moon Garden','🌙',225,5],['Beacon Totem','🗼',270,6],['Arc Reactor Decor','🔋',320,7],['Victory Statue','🗽',380,8],['Aurora Fountain','⛲',455,10],['Star Monument','🌟',540,12]
  ]
};
const addedTurretNames=['Ion Reaper','Starfall Cannon','Nebula Talon','Riftneedle','Aurora Stormer','Void Harvester','Solar Flareline','Chrono Shredder','Eclipse Lancer','Quantum Barrage','Astral Saw','Comet Repeater','Event Horizon Gun','Pulsar Vortex','Darkstar Lance','Celestial Anvil','Nova Seraph','Singularity Fang','Galactic Tempest','Infinity Breaker','Moonfire Engine','Prism Warden','Cosmic Executioner','Hyperion Array','Dreadnought Crown','Stellar Guillotine','Omega Paragon','Worldlight Cannon','Last Horizon','Eternal Beacon'];
addedTurretNames.forEach((name,index)=>catalog.defense.push([name,'',Math.round(1e16*Math.pow(1.42,index)),Math.round(22000*Math.pow(1.31,index)),27+Math.floor(index/3),2850+index*95]));
const addedBlockNames=['Basalt Bastion','Titanium Rampart','Obsidian Citadel','Aether Wall','Meteorite Slab','Prismatic Fort','Voidstone Barrier','Starforged Gate','Quantum Bulkhead','Celestial Keep','Nova Shieldwall','Gravity Anchor','Eclipse Fortress','Cometstone Wall','Pulsar Bastion','Dark Matter Bulwark','Astral Rampart','Supernova Gate','Chrono Bastion','Nebula Citadel','Solaris Wall','Singularity Fortress','Galaxium Barrier','Eventide Bastion','Hypersteel Keep','Riftstone Rampart','Starlight Bulwark','Omega Bastion','Eternity Gate','Cosmic Monolith','Last-Light Aegis','Worldbreaker Wall','Infinity Citadel','Aurora Rampart','Voidheart Keep','Star-Eater Barrier','Quantum Citadel','Celestial Rampart','Nova Imperium','Oblivion Wall','Dawnforge Bastion','Empyrean Gate','Astral Crownwall','Galactic Bulwark','Eclipse Monolith','Final Frontier Wall','Heavenfall Bastion','Ultimate Aegis','Unbroken Horizon','Worldshield Omega'];
addedBlockNames.forEach((name,index)=>catalog.blocks.push([name,'⬡',Math.round(850*Math.pow(1.24,index)),Math.round(4200*Math.pow(1.28,index))]));
const abilities = [
  {name:'Airstrike',cost:1800,damage:600,cooldown:30000,radius:2.5,detail:'600 DAMAGE · LOCAL STRIKE'},
  {name:'Tsunami',cost:3000,damage:800,cooldown:45000,radius:99,detail:'800 DAMAGE · WHOLE GRID'},
  {name:'EMP Surge',cost:6000,damage:450,cooldown:60000,radius:99,stun:3500,detail:'450 DAMAGE · GRIDWIDE STUN'},
  {name:'Meteor Barrage',cost:10000,damage:1800,cooldown:75000,radius:3.2,detail:'1,800 DAMAGE · BLAST ZONE'},
  {name:'Core Overdrive',cost:16000,damage:0,cooldown:90000,repair:true,detail:'REPAIRS CORE · DEFENSES'},
  {name:'Stellar Lance',cost:24000,damage:3200,cooldown:105000,radius:3.5,detail:'3,200 DAMAGE · PRECISION STRIKE'},
  {name:'Gravity Well',cost:36000,damage:1250,cooldown:120000,radius:99,stun:6000,detail:'1,250 DAMAGE · GRIDWIDE GRAVITY'},
  {name:'Aegis Protocol',cost:52000,damage:0,cooldown:150000,repair:true,detail:'REPAIRS CORE · DEFENSES · BLOCKS'}
];
abilities.sort((a,b)=>a.cost-b.cost);
 catalog.permanent = abilities.map(ability=>[ability.name,'',ability.cost,ability.damage,ability.cooldown/1000]);
const weaponTuning={
  'Scout Blaster':[2.8,1420],'Pulse Pod':[1.15,300],'Thorn Spitter':[1.5,680],'Twin Cannon':[.72,560],
  'Frost Beacon':[1.55,1020],'Arc Coil':[1.35,780],'Ember Sentry':[1.7,920],'Heavy Mortar':[3.4,1900],
  'Sniper Spire':[4.8,2250],'Drone Nest':[.9,230],'Acid Mortar':[2.1,1450],'Laser Array':[.82,650],
  'Prism Cannon':[1.8,1050],'Guardian Mech':[2.2,1300],'Nova Core':[1.7,1050],'Blackhole Projector':[1.8,1250],
  'Inferno Tower':[.92,610],'Acid Spreader':[.8,470]
};
const weaponStyle={
  'Scout Blaster':'shell','Pulse Pod':'rapid','Thorn Spitter':'spray','Twin Cannon':'double',
  'Frost Beacon':'rapid','Arc Coil':'laser','Ember Sentry':'double','Heavy Mortar':'shell',
  'Sniper Spire':'shell','Drone Nest':'rapid','Acid Mortar':'acid','Laser Array':'laser',
  'Prism Cannon':'double','Guardian Mech':'double','Nova Core':'laser','Blackhole Projector':'gravity',
  'Inferno Tower':'flame','Acid Spreader':'spray'
};
const addedWeaponStyles=['shell','rapid','double','spray','flame','laser','rapid','shell','double','gravity','laser','double','shell','rapid','gravity','laser','double','spray','shell','rapid','double','flame','laser','gravity','double','rapid','laser','shell','spray','gravity'];
catalog.defense.slice(18,48).forEach((entry,index)=>{
  const style=addedWeaponStyles[index];
  weaponStyle[entry[0]]=style;
  weaponTuning[entry[0]]=[style==='rapid'?.48:style==='spray'?.72:style==='double'?.85:style==='laser'?.95:1.25,style==='rapid'?280:style==='double'?520:style==='spray'?650:style==='flame'?720:style==='shell'?1450:style==='gravity'?1250:850];
});
catalog.defense.slice(48).forEach((entry,index)=>{
  const style=['laser','gravity','rapid','double','flame','shell'][index%6];
  weaponStyle[entry[0]]=style;
  weaponTuning[entry[0]]=[style==='rapid'?.38:style==='double'?.7:style==='laser'?.72:style==='gravity'?.8:.95,style==='rapid'?240:style==='double'?390:style==='flame'?540:style==='shell'?980:style==='gravity'?760:520];
});
const categoryNames = {defense:'Defense',blocks:'Blocks',traps:'Traps',decoration:'Decoration',permanent:'Permanent Ability'};
const descriptions = {
  defense:'Unique towers fire heavy rounds, volleys, beams, acid, fire, and gravity weapons.',
  blocks:'Distinct barriers block paths, but enemies will attack through them—even if every entrance is sealed.',
  traps:'Traps deal heavy damage; frost slows, acid poisons, and fire burns enemies over time.',
  decoration:'Decorations are harmless, and reward extra credits after each wave.',
  permanent:'Buy each ability once, then activate it from the controls below.'
};
const enemies = [
  ['Moss Walker','',34,5,5,1],['Bone Runner','',30,6,7,1],['Cave Bat','',26,4,4,1],['Scrap Crawler','',46,6,7,1],['Bog Slime','',58,7,8,1],
  ['Ash Zombie','',72,8,9,1],['Skull Guard','',86,10,12,1],['Night Howler','',80,10,11,1],['Tunnel Brute','',125,14,15,1.35],['Spore Beast','',110,12,12,1],
  ['Grey Invader','',138,12,13,1],['Shield Skeleton','',158,14,16,1.25],['Venom Stalker','',148,14,15,1.15],['Riot Husk','',185,17,18,1.2],['Void Leech','',172,16,17,1.1],
  ['Plated Marauder','',225,18,20,1.5],['Crypt Knight','',270,21,23,1.65],['Acid Brute','',260,20,22,1.7],['Warp Ghoul','',240,19,21,1.2],['Dread Hound','',285,22,25,1.5],
  ['Alien Ravager','',330,25,28,1.4],['Bone Colossus','',390,29,32,1.8],['Siege Mutant','',465,34,38,2],['Star Eater','',535,38,42,1.6],['The Warden','',640,44,48,2],
  ['Grave Shambler','',720,48,52,2.2],['Crypt Bomber','',610,52,58,2.4],['Mutant Screamer','',850,58,62,1.8],['Plague Brute','',1050,65,72,2.5],['Razor Ghoul','',780,56,60,1.7],
  ['Toxic Juggernaut','',1380,78,86,2.8],['Bone Reaper','',1200,75,80,2.2],['Void Stalker','',1550,88,92,2.4],['Siege Abomination','',1950,100,110,3],['Overlord Husk','',2300,115,125,3.2],
  ['BOSS · Grave Titan','',1400,120,78,2],['BOSS · Hive Mother','',2100,155,100,2.2],['BOSS · Iron Behemoth','',3000,200,130,2.5],['BOSS · Void Dragon','',4400,260,170,2.8],['BOSS · The Last King','',6200,340,230,3],
  ['BOSS · Mire Colossus','',7800,390,255,3.2],['BOSS · Starforged Wyrm','',9600,470,300,3.4],['BOSS · The Hollow Queen','',11800,560,355,3.6],['BOSS · Worldbreaker Engine','',14500,680,420,4],['BOSS · Eclipse Sovereign','',18000,820,500,4.2],
  ['BOSS · The Cinder Maw','',21500,960,570,4.4],['BOSS · Thornheart Behemoth','',25200,1120,640,4.6],['BOSS · The Glass Revenant','',29600,1280,710,4.8],['BOSS · Abyssal Leviathan','',34500,1480,800,5],['BOSS · The Pale Architect','',40200,1700,900,5.2],
  ['BOSS · The Nebula Tyrant','',48000,1950,980,5.4],['BOSS · The Star Eclipsor','',56000,2250,1080,5.6],['BOSS · The Quantum Hydra','',65000,2600,1180,5.8],['BOSS · The Celestial Maw','',76000,3000,1300,6],['BOSS · The Last Constellation','',90000,3500,1450,6.2]
].map(([name,shape,hp,reward,damage,structureDamage])=>({name,hp,reward,damage,structureDamage,boss:name.startsWith('BOSS')}));
const regularEnemies=enemies.filter(enemy=>!enemy.boss);
const bossEnemies=enemies.filter(enemy=>enemy.boss);
const megaBoss={name:'BOSS · THE SUPER MEGA OVERLORD',hp:42000,reward:9500,damage:2100,structureDamage:9,boss:true};
const ultimateBoss={name:'BOSS · THE ULTIMATE LAST BOSS',hp:180000,reward:50000,damage:6500,structureDamage:16,boss:true};

const GRID_SIZE = 11;
const CORE_X = 5;
const CORE_Y = 10;
const $ = id => document.getElementById(id);
const menuScreen = $('menuScreen');
const gameScreen = $('gameScreen');
const boardElement = $('board');
let difficulty = 'Medium';
let credits = 0;
let baseHp = 0;
let baseMaxHp = 0;
let wave = 0;
let active = false;
let gameFinished = false;
let selected = null;
let selectedTurret = null;
let unlockedAbilities = new Set();
let abilityReadyAt = {};
let category = 'defense';
let speedMultiplier = 1;
let autoWave = false;
let autoWaveTimer = null;
let lastWavePayout = 0;
let cashToastTimer = null;
let grid = [];
let liveEnemies = [];
let spawnQueue = [];
let spawnClock = 0;
let lastTick = 0;
let soundOn = true;
let audioContext = null;
let gameTimer = null;
let bossTimer = null;
let endTimer = null;
let battleCanvas = $('battleCanvas');
let shots = [];

function setupGrid() {
  grid = Array.from({length:GRID_SIZE},(_,y)=>Array.from({length:GRID_SIZE},(_,x)=>({x,y,item:null,hp:0,maxHp:0,cooldown:0,trapReady:true})));
  grid[CORE_Y][CORE_X].base = true;
  grid[CORE_Y][CORE_X].level = 1;
  grid[CORE_Y][CORE_X].investedCost = 5000;
}
function cellAt(x,y){return x>=0&&x<GRID_SIZE&&y>=0&&y<GRID_SIZE?grid[y][x]:null;}
function effectScale(){return ({potato:.05,low:.25,standard:.65,fast:.35,high:.85,fancy:1}[$('app')?.dataset.graphics]??.65);}
function routeFrom(x,y) {
  const queue=[[x,y]], visited=new Set([`${x},${y}`]);
  for(let i=0;i<queue.length;i++){
    const [cx,cy]=queue[i];
    if(cx===CORE_X&&cy===CORE_Y)return true;
    for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){
      const nx=cx+dx,ny=cy+dy,key=`${nx},${ny}`,cell=cellAt(nx,ny);
      if(!cell||(cell.base&&!(nx===CORE_X&&ny===CORE_Y))||visited.has(key)||(cell.item&&cell.item.category==='blocks'))continue;
      visited.add(key);queue.push([nx,ny]);
    }
  }
  return false;
}
function nextStep(x,y,enemy={}) {
  const startX=Math.max(0,Math.min(GRID_SIZE-1,Math.round(x))),startY=Math.max(0,Math.min(GRID_SIZE-1,Math.round(y)));
  const startKey=`${startX},${startY}`,goalKey=`${CORE_X},${CORE_Y}`;
  const distance=new Map([[startKey,0]]),previous=new Map([[startKey,null]]),open=[[startX,startY]];
  while(open.length){
    let best=0;for(let i=1;i<open.length;i++)if(distance.get(`${open[i][0]},${open[i][1]}`)<distance.get(`${open[best][0]},${open[best][1]}`))best=i;
    const [cx,cy]=open.splice(best,1)[0],key=`${cx},${cy}`;if(key===goalKey)break;
    for(const [dx,dy] of [[0,1],[-1,0],[1,0],[0,-1]]){
      const nx=cx+dx,ny=cy+dy,nextCell=cellAt(nx,ny);if(!nextCell)continue;
      const nextKey=`${nx},${ny}`,blocked=nextCell.item&&['blocks','defense'].includes(nextCell.item.category);
      const terrainCost=blocked?2.35:1;
      const variation=(((nx*17+ny*31+(enemy.routeBias||0))%7)+7)%7*.012;
      const candidate=distance.get(key)+terrainCost+variation;
      if(candidate>=(distance.get(nextKey)??Infinity))continue;
      distance.set(nextKey,candidate);previous.set(nextKey,[cx,cy]);open.push([nx,ny]);
    }
  }
  if(!previous.has(goalKey))return null;
  let cursor=[CORE_X,CORE_Y],key=goalKey;
  while(previous.get(key)&&!(previous.get(key)[0]===startX&&previous.get(key)[1]===startY)){cursor=previous.get(key);key=`${cursor[0]},${cursor[1]}`;}
  return cursor;
}
function renderBoard(){
  if(!grid.length)return;
  if(boardElement.querySelectorAll('.tile').length!==GRID_SIZE*GRID_SIZE){
    const html=[];
    for(let y=0;y<GRID_SIZE;y++)for(let x=0;x<GRID_SIZE;x++)html.push(`<button class="tile" data-x="${x}" data-y="${y}"></button>`);
    boardElement.innerHTML=html.join('');
  }
  const tiles=boardElement.querySelectorAll('.tile');
  for(let y=0;y<GRID_SIZE;y++)for(let x=0;x<GRID_SIZE;x++){
    const cell=grid[y][x],item=cell.item,tile=tiles[y*GRID_SIZE+x];
    tile.className=`tile${cell.base?' base-tile':''}${item?` occupied-${item.category}`:''}${selectedTurret?.x===x&&selectedTurret?.y===y?' turret-selected':''}${cell.deployUntil>performance.now()?' deploying':''}`;
    tile.setAttribute('aria-label',`${cell.base?'Core · ':''}Tile ${x+1}, ${y+1}${item?`: ${item.name}${item.category==='defense'?` · level ${item.level||1}`:''} · ${Math.ceil(cell.hp)} HP`:''}`);
  }
  if(battleCanvas.parentElement!==boardElement)boardElement.appendChild(battleCanvas);
  drawBattlefield();
  updateTurretActions();
}
function drawBattlefield(){
  if(!battleCanvas||!boardElement.clientWidth)return;
  const bounds=boardElement.getBoundingClientRect(),deviceRatio=window.devicePixelRatio||1,quality=$('app')?.dataset.graphics||'standard',ratio=Math.min(deviceRatio,{potato:1,low:1,standard:1.35,fast:1.35,high:1.75,fancy:2}[quality]||1.35);
  if(battleCanvas.width!==Math.round(bounds.width*ratio)||battleCanvas.height!==Math.round(bounds.height*ratio)){
    battleCanvas.width=Math.round(bounds.width*ratio);battleCanvas.height=Math.round(bounds.height*ratio);
  }
  const ctx=battleCanvas.getContext('2d');ctx.setTransform(ratio,0,0,ratio,0,0);ctx.clearRect(0,0,bounds.width,bounds.height);
  const pad=4,gap=bounds.width-2*pad,size=gap/GRID_SIZE,center=(x,y)=>({x:pad+(x+.5)*size,y:pad+(y+.5)*size});
  for(const row of grid)for(const cell of row){
    const p=center(cell.x,cell.y),r=size*.32;
    if(cell.base){ctx.fillStyle='#b7b2ff';ctx.shadowColor='#91cfff';ctx.shadowBlur=14*effectScale();ctx.beginPath();ctx.arc(p.x,p.y,r*1.16,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;ctx.fillStyle='#18264e';ctx.fillRect(p.x-r*.72,p.y-r*.68,r*1.44,r*1.3);ctx.fillStyle='#d7f7ff';ctx.fillRect(p.x-r*.12,p.y-r*.34,r*.24,r*.55);ctx.fillStyle='#c3c0ff';ctx.font=`bold ${Math.max(6,size*.13)}px monospace`;ctx.textAlign='center';ctx.fillText('CORE',p.x,p.y+r*1.55);}
    const item=cell.item;if(!item)continue;
    if(item.category==='defense')drawTurret(ctx,p.x,p.y,r,item,cell);
    else if(item.category==='blocks')drawBlock(ctx,p.x,p.y,r,cell);
    else if(item.category==='traps')drawTrap(ctx,p.x,p.y,r,cell);
    else drawDecor(ctx,p.x,p.y,r,item);
  }
  for(const enemy of liveEnemies)drawEnemy(ctx,center(enemy.x,enemy.y),size,enemy);
  const now=performance.now();shots=shots.filter(shot=>now-shot.time<320);
  for(const shot of shots){const from=center(shot.x,shot.y),to=center(shot.tx,shot.ty),progress=Math.min(1,(now-shot.time)/320),fade=1-progress;const colors={laser:'#64efff',acid:'#b9ff53',flame:'#ff713c',gravity:'#c78bff',bullet:'#fff08a'};const color=colors[shot.type]||colors.bullet;ctx.strokeStyle=color;ctx.globalAlpha=fade;ctx.lineWidth=Math.max(1,size*(shot.type==='laser'?.14:.075));ctx.shadowColor=color;ctx.shadowBlur=(shot.type==='laser'?16:11)*effectScale();ctx.beginPath();if(shot.type==='bullet'){const px=from.x+(to.x-from.x)*progress,py=from.y+(to.y-from.y)*progress;ctx.moveTo(px-(to.x-from.x)*.12,py-(to.y-from.y)*.12);ctx.lineTo(px,py);ctx.stroke();ctx.fillStyle=color;ctx.beginPath();ctx.arc(px,py,Math.max(2,size*.09),0,Math.PI*2);ctx.fill();}else{ctx.moveTo(from.x,from.y);ctx.lineTo(to.x,to.y);ctx.stroke();}if(['acid','gravity','flame'].includes(shot.type)){ctx.beginPath();ctx.arc(to.x,to.y,size*(shot.type==='gravity'?.7:.48)*fade,0,Math.PI*2);ctx.stroke();}ctx.globalAlpha=1;ctx.shadowBlur=0;}
}
function drawTurret(ctx,x,y,r,item,cell){
  const designs=drawTurret.designs??=(()=>{
    const basic=[
      ['round','#b4ed81','#477d53',1],['square','#8be4e3','#31758a',1],['twin','#ffc278','#986343',2],['thorn','#d5a8ff','#614c9d',3],
      ['hex','#baff62','#547d32',1],['coil','#70edff','#327a9b',1],['ember','#ff9b52','#873d2e',2],['mortar','#e7c18c','#71513e',1],
      ['spire','#c7eaff','#416386',1],['drone','#a8f0c4','#39765e',2],['acid','#baff62','#547d32',1],['laser','#70edff','#327a9b',1],
      ['prism','#e1a8ff','#59428b',3],['mech','#ffcf86','#795436',2],['nova','#ffe678','#94642e',4],['void','#d39aff','#49316e',1],['inferno','#ff9b52','#873d2e',2],['spreader','#9ce875','#487641',3]
    ];
    const colors=['#80eaff','#b28cff','#ff83c8','#ffc875','#77f2d2','#a7a4ff','#ff9874','#d4ff77','#69c7ff','#ed9cff','#87ffae','#ffdb7b','#86b7ff','#ff8fa1','#a5ffe7'];
    return basic.concat(Array.from({length:60},(_,i)=>[`relic-${i}`,colors[i%colors.length],`hsl(${(i*47+205)%360} 42% 25%)`,1+i%4]));
  })();
  const index=Math.max(0,catalog.defense.findIndex(entry=>entry[0]===item.name)),[shape,glow,body,barrels]=designs[index]||designs[0];
  const angle=(cell.aim??-Math.PI/2)+Math.PI/2;
  ctx.save();ctx.translate(x,y);ctx.rotate(angle);ctx.lineWidth=Math.max(1,r*.12);ctx.strokeStyle=glow;ctx.fillStyle='#18282a';ctx.shadowColor=glow;ctx.shadowBlur=(cell.flashUntil>performance.now()?13:4)*effectScale();
  if(shape==='round'){ctx.beginPath();ctx.arc(0,0,r*.49,0,Math.PI*2);ctx.fill();ctx.stroke();}
  else if(shape==='square'||shape==='mortar'||shape==='mech'){ctx.fillRect(-r*.48,-r*.42,r*.96,r*.84);ctx.strokeRect(-r*.48,-r*.42,r*.96,r*.84);}
  else if(shape==='twin'||shape==='drone'||shape==='spreader'){ctx.beginPath();ctx.moveTo(-r*.5,-r*.36);ctx.lineTo(r*.5,-r*.36);ctx.lineTo(r*.38,r*.43);ctx.lineTo(-r*.38,r*.43);ctx.closePath();ctx.fill();ctx.stroke();}
  else if(shape==='thorn'||shape==='inferno'){ctx.beginPath();for(let i=0;i<8;i++){const a=i*Math.PI/4-Math.PI/2,rad=i%2?r*.36:r*.57;ctx.lineTo(Math.cos(a)*rad,Math.sin(a)*rad);}ctx.closePath();ctx.fill();ctx.stroke();}
  else if(shape==='hex'||shape==='acid'){ctx.beginPath();for(let i=0;i<6;i++){const a=i*Math.PI/3-Math.PI/2;ctx.lineTo(Math.cos(a)*r*.52,Math.sin(a)*r*.52);}ctx.closePath();ctx.fill();ctx.stroke();}
  else if(shape==='coil'||shape==='laser'){ctx.beginPath();ctx.moveTo(-r*.44,-r*.36);ctx.lineTo(r*.44,-r*.36);ctx.lineTo(r*.32,r*.42);ctx.lineTo(-r*.32,r*.42);ctx.closePath();ctx.fill();ctx.stroke();ctx.beginPath();ctx.arc(0,0,r*.26,0,Math.PI*2);ctx.stroke();}
  else if(shape==='spire'){ctx.beginPath();ctx.moveTo(0,-r*.57);ctx.lineTo(r*.48,r*.42);ctx.lineTo(-r*.48,r*.42);ctx.closePath();ctx.fill();ctx.stroke();}
  else if(shape==='prism'||shape==='nova'){ctx.beginPath();ctx.moveTo(0,-r*.58);ctx.lineTo(r*.5,0);ctx.lineTo(0,r*.58);ctx.lineTo(-r*.5,0);ctx.closePath();ctx.fill();ctx.stroke();}
  else if(shape==='void'){ctx.beginPath();ctx.arc(0,0,r*.48,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.beginPath();ctx.arc(0,0,r*.22,0,Math.PI*2);ctx.stroke();}
  else if(shape.startsWith('relic-')){
    const relicIndex=Number(shape.split('-')[1])||0,sides=4+(relicIndex%5),twist=(relicIndex%3)*.17;
    ctx.beginPath();for(let i=0;i<sides*2;i++){const angle=-Math.PI/2+i*Math.PI/sides+twist,rad=r*(i%2===0?.55:(.3+(relicIndex%3)*.035));const px=Math.cos(angle)*rad,py=Math.sin(angle)*rad;i?ctx.lineTo(px,py):ctx.moveTo(px,py);}ctx.closePath();ctx.fill();ctx.stroke();
    ctx.beginPath();ctx.ellipse(0,0,r*(.17+(relicIndex%4)*.035),r*.28,twist,0,Math.PI*2);ctx.stroke();
    for(let fin=0;fin<1+relicIndex%3;fin++){const angle=fin*Math.PI*2/(1+relicIndex%3)+twist;ctx.beginPath();ctx.moveTo(Math.cos(angle)*r*.34,Math.sin(angle)*r*.34);ctx.lineTo(Math.cos(angle)*r*.63,Math.sin(angle)*r*.63);ctx.stroke();}
  }
  else{ctx.beginPath();ctx.arc(0,0,r*.43,0,Math.PI*2);ctx.fill();ctx.stroke();}
  ctx.shadowBlur=0;ctx.strokeStyle=glow;ctx.lineWidth=Math.max(1,r*.055);
  if(shape==='square'){ctx.strokeRect(-r*.25,-r*.2,r*.5,r*.4);}
  if(shape==='mortar'){ctx.beginPath();ctx.arc(0,0,r*.3,0,Math.PI*2);ctx.stroke();}
  if(shape==='mech'){ctx.fillStyle=body;ctx.fillRect(-r*.57,-r*.18,r*.15,r*.48);ctx.fillRect(r*.42,-r*.18,r*.15,r*.48);}
  if(shape==='twin'){ctx.beginPath();ctx.moveTo(-r*.35,r*.2);ctx.lineTo(0,r*.38);ctx.lineTo(r*.35,r*.2);ctx.stroke();}
  if(shape==='drone'){ctx.beginPath();ctx.ellipse(-r*.48,0,r*.14,r*.34,-.35,0,Math.PI*2);ctx.ellipse(r*.48,0,r*.14,r*.34,.35,0,Math.PI*2);ctx.stroke();}
  if(shape==='spreader'){ctx.beginPath();ctx.moveTo(-r*.22,-r*.15);ctx.lineTo(-r*.38,r*.24);ctx.moveTo(0,-r*.2);ctx.lineTo(0,r*.28);ctx.moveTo(r*.22,-r*.15);ctx.lineTo(r*.38,r*.24);ctx.stroke();}
  if(shape==='thorn'){ctx.beginPath();ctx.moveTo(-r*.35,-r*.25);ctx.lineTo(-r*.58,-r*.47);ctx.moveTo(r*.35,-r*.25);ctx.lineTo(r*.58,-r*.47);ctx.stroke();}
  if(shape==='inferno'){ctx.beginPath();ctx.moveTo(-r*.3,r*.2);ctx.lineTo(-r*.43,r*.44);ctx.lineTo(-r*.16,r*.34);ctx.moveTo(r*.3,r*.2);ctx.lineTo(r*.43,r*.44);ctx.lineTo(r*.16,r*.34);ctx.stroke();}
  ctx.fillStyle=body;ctx.beginPath();ctx.arc(0,0,r*.2,0,Math.PI*2);ctx.fill();
  for(let b=0;b<barrels;b++){const offset=(b-(barrels-1)/2)*r*.24;ctx.fillStyle='#18282a';ctx.fillRect(offset-r*.075,-r*.78,r*.15,r*.54);ctx.fillStyle=glow;ctx.fillRect(offset-r*.045,-r*.83,r*.09,r*.14);}
  if(cell.flashUntil>performance.now()){ctx.fillStyle='#fff4a3';ctx.shadowColor='#ffe66b';ctx.shadowBlur=16;ctx.beginPath();ctx.arc(0,-r*.9,r*.2,0,Math.PI*2);ctx.fill();}ctx.restore();
  drawHealth(ctx,x,y+r*.57,r*1.38,cell.hp,cell.maxHp);
  if((item.level||1)>1){ctx.save();ctx.fillStyle='#e7ffad';ctx.font=`bold ${Math.max(6,r*.5)}px monospace`;ctx.textAlign='center';ctx.fillText(`L${item.level}`,x,y-r*.85);ctx.restore();}
}
function drawBlock(ctx,x,y,r,cell){
  const index=Math.max(0,catalog.blocks.findIndex(entry=>entry[0]===cell.item?.name)),hue=(index*37+24)%360,style=index%8;
  const dark=`hsl(${hue} 38% 24%)`,mid=`hsl(${hue} 48% 39%)`,edge=`hsl(${hue} 78% 72%)`;
  ctx.save();ctx.translate(x,y);ctx.lineWidth=Math.max(1,r*.09);ctx.fillStyle=mid;ctx.strokeStyle=edge;ctx.shadowColor=edge;ctx.shadowBlur=2;
  ctx.beginPath();
  if(style===0){ctx.moveTo(-r*.62,-r*.35);ctx.lineTo(-r*.4,-r*.5);ctx.lineTo(r*.54,-r*.4);ctx.lineTo(r*.62,r*.31);ctx.lineTo(r*.35,r*.47);ctx.lineTo(-r*.57,r*.38);}
  else if(style===1){ctx.moveTo(-r*.55,-r*.48);ctx.lineTo(r*.55,-r*.48);ctx.lineTo(r*.55,r*.48);ctx.lineTo(-r*.55,r*.48);}
  else if(style===2){ctx.moveTo(-r*.62,-r*.36);ctx.lineTo(0,-r*.5);ctx.lineTo(r*.62,-r*.36);ctx.lineTo(r*.46,r*.42);ctx.lineTo(-r*.46,r*.42);}
  else if(style===3){ctx.moveTo(-r*.62,-r*.46);ctx.lineTo(r*.42,-r*.46);ctx.lineTo(r*.62,-r*.22);ctx.lineTo(r*.62,r*.46);ctx.lineTo(-r*.42,r*.46);ctx.lineTo(-r*.62,r*.22);}
  else if(style===4){ctx.moveTo(-r*.52,-r*.5);ctx.lineTo(r*.52,-r*.5);ctx.lineTo(r*.62,0);ctx.lineTo(r*.52,r*.5);ctx.lineTo(-r*.52,r*.5);ctx.lineTo(-r*.62,0);}
  else if(style===5){ctx.moveTo(-r*.62,-r*.4);ctx.lineTo(-r*.24,-r*.5);ctx.lineTo(r*.18,-r*.4);ctx.lineTo(r*.62,-r*.5);ctx.lineTo(r*.62,r*.4);ctx.lineTo(-r*.62,r*.4);}
  else if(style===6){ctx.moveTo(-r*.58,-r*.45);ctx.lineTo(r*.58,-r*.45);ctx.lineTo(r*.42,r*.45);ctx.lineTo(-r*.42,r*.45);}
  else{ctx.moveTo(-r*.62,-r*.35);ctx.lineTo(-r*.35,-r*.5);ctx.lineTo(r*.35,-r*.5);ctx.lineTo(r*.62,-r*.35);ctx.lineTo(r*.62,r*.35);ctx.lineTo(r*.35,r*.5);ctx.lineTo(-r*.35,r*.5);ctx.lineTo(-r*.62,r*.35);}
  ctx.closePath();ctx.fill();ctx.stroke();ctx.shadowBlur=0;ctx.fillStyle=dark;ctx.strokeStyle=edge;
  if(style===0||style===2){ctx.beginPath();ctx.moveTo(-r*.45,-r*.18);ctx.lineTo(0,-r*.3);ctx.lineTo(r*.4,-r*.2);ctx.lineTo(r*.35,r*.22);ctx.lineTo(-r*.4,r*.2);ctx.closePath();ctx.fill();ctx.stroke();}
  else if(style===1||style===3){for(let seam=-1;seam<=1;seam++){ctx.beginPath();ctx.moveTo(seam*r*.3,-r*.4);ctx.lineTo(seam*r*.3,r*.4);ctx.stroke();}ctx.beginPath();ctx.moveTo(-r*.5,0);ctx.lineTo(r*.5,0);ctx.stroke();}
  else if(style===4||style===7){ctx.beginPath();ctx.arc(0,0,r*.23,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.beginPath();ctx.arc(0,0,r*.36,0,Math.PI*2);ctx.stroke();}
  else{ctx.beginPath();ctx.moveTo(-r*.42,0);ctx.lineTo(0,-r*.28);ctx.lineTo(r*.42,0);ctx.lineTo(0,r*.28);ctx.closePath();ctx.stroke();}
  ctx.restore();drawHealth(ctx,x,y+r*.59,r*1.4,cell.hp,cell.maxHp);
}
function drawTrap(ctx,x,y,r,cell){
  const name=cell.item?.name||'',time=performance.now()/1000,ready=cell.trapReady;
  ctx.save();ctx.lineWidth=Math.max(1,r*.1);
  if(name==='Acid Pool'||name==='Toxic Sprayer'){
    const puddle=ctx.createRadialGradient(x-r*.12,y-r*.08,1,x,y+r*.12,r*.68);puddle.addColorStop(0,ready?'rgba(209,255,101,.78)':'rgba(116,151,74,.35)');puddle.addColorStop(.62,ready?'rgba(104,201,66,.62)':'rgba(72,105,59,.32)');puddle.addColorStop(1,'rgba(33,62,39,.08)');
    ctx.fillStyle=puddle;ctx.strokeStyle=ready?'#c9ff69':'#728758';
    ctx.beginPath();ctx.ellipse(x,y+r*.12,r*.64,r*.39,Math.sin(time*1.5)*.08,0,Math.PI*2);ctx.fill();ctx.stroke();
    ctx.save();ctx.globalAlpha=.45;ctx.strokeStyle='#dcff8b';ctx.lineWidth=Math.max(1,r*.07);ctx.beginPath();ctx.ellipse(x+Math.sin(time*1.3)*r*.12,y+r*.11,r*(.38+.035*Math.sin(time*2)),r*.18,Math.sin(time)*.18,time*.65,time*.65+Math.PI*1.35);ctx.stroke();ctx.restore();
    for(let i=0;i<5;i++){const phase=(time*1.15+i*.23)%1,fx=x+Math.sin(time*2.2+i*2.4)*r*(.2+phase*.34),fy=y-r*.18-phase*r*.62;ctx.globalAlpha=Math.max(.04,.42*(1-phase));ctx.fillStyle=i%2?'#c3ff7b':'#e1ffae';ctx.beginPath();ctx.ellipse(fx,fy,r*(.08+phase*.08),r*(.12+phase*.1),Math.sin(time+i)*.4,0,Math.PI*2);ctx.fill();}
  }else if(name==='Flame Vent'||name==='Solar Flare'){
    ctx.fillStyle=ready?'rgba(255,106,46,.5)':'rgba(115,59,43,.38)';ctx.strokeStyle=ready?'#ffbd67':'#91634c';
    ctx.beginPath();ctx.ellipse(x,y+r*.18,r*.63,r*.28,0,0,Math.PI*2);ctx.fill();ctx.stroke();
    if(ready)for(let i=0;i<3;i++){const sway=Math.sin(time*8+i*2)*r*.08,fx=x+(i-1)*r*.32+sway,flameY=y-r*(.08+Math.abs(Math.sin(time*5+i))* .2);ctx.fillStyle=i===1?'#fff08a':'#ff743e';ctx.globalAlpha=.75+Math.sin(time*10+i)*.2;ctx.beginPath();ctx.ellipse(fx,flameY,r*.11,r*(.2+Math.abs(Math.sin(time*6+i))*.08),sway/r,0,Math.PI*2);ctx.fill();}
  }else{
    ctx.strokeStyle=ready?'#ff906f':'#81594d';ctx.fillStyle=ready?'#ffb178':'#744c48';
    ctx.beginPath();ctx.moveTo(x-r*.52,y+r*.34);ctx.lineTo(x-r*.3,y-r*.35);ctx.lineTo(x-r*.08,y+r*.34);ctx.lineTo(x+r*.14,y-r*.35);ctx.lineTo(x+r*.35,y+r*.34);ctx.lineTo(x+r*.54,y-r*.35);ctx.stroke();ctx.beginPath();ctx.arc(x,y,r*.18,0,Math.PI*2);ctx.fill();
  }
  ctx.restore();drawHealth(ctx,x,y+r*.59,r*1.4,cell.hp,cell.maxHp);
}
function drawDecor(ctx,x,y,r,item){
  const index=catalog.decoration.findIndex(entry=>entry[0]===item.name),colors=['#c7f36b','#77dfcf','#ffbd78','#f59ab0','#c4a6ff'];
  const color=colors[Math.max(0,index)%colors.length];ctx.save();ctx.translate(x,y);ctx.lineWidth=Math.max(1,r*.12);ctx.strokeStyle=color;ctx.fillStyle=color;ctx.shadowColor=color;ctx.shadowBlur=6;
  if(index===0){ctx.beginPath();ctx.arc(0,-r*.25,r*.29,Math.PI,Math.PI*2);ctx.fill();ctx.stroke();ctx.fillRect(-r*.08,-r*.25,r*.16,r*.55);ctx.beginPath();ctx.moveTo(-r*.23,r*.32);ctx.lineTo(r*.23,r*.32);ctx.stroke();}
  else if(index===8){ctx.beginPath();ctx.moveTo(0,-r*.52);ctx.lineTo(r*.34,-r*.05);ctx.lineTo(0,r*.4);ctx.lineTo(-r*.34,-r*.05);ctx.closePath();ctx.fill();ctx.stroke();ctx.beginPath();ctx.moveTo(0,-r*.52);ctx.lineTo(0,r*.4);ctx.stroke();}
  else if(index===14){ctx.beginPath();for(let a=0;a<10;a++){const angle=-Math.PI/2+a*Math.PI/5,rad=a%2?r*.19:r*.48;ctx.lineTo(Math.cos(angle)*rad,Math.sin(angle)*rad);}ctx.closePath();ctx.fill();ctx.stroke();}
  else if(index===1){ctx.beginPath();ctx.moveTo(0,r*.55);ctx.lineTo(0,-r*.3);ctx.stroke();ctx.beginPath();ctx.ellipse(-r*.13,-r*.15,r*.18,r*.27,-.5,0,Math.PI*2);ctx.ellipse(r*.13,-r*.02,r*.18,r*.24,.5,0,Math.PI*2);ctx.fill();}
  else if(index===2){ctx.beginPath();ctx.moveTo(0,r*.55);ctx.lineTo(0,-r*.5);ctx.stroke();ctx.beginPath();ctx.moveTo(0,-r*.48);ctx.lineTo(r*.48,-r*.3);ctx.lineTo(0,-r*.08);ctx.closePath();ctx.fill();}
  else if(index===7){ctx.beginPath();ctx.moveTo(0,r*.55);ctx.lineTo(0,-r*.5);ctx.stroke();ctx.strokeRect(-r*.42,-r*.42,r*.84,r*.58);ctx.beginPath();ctx.moveTo(-r*.28,-r*.24);ctx.lineTo(r*.28,-r*.24);ctx.moveTo(-r*.28,-r*.08);ctx.lineTo(r*.16,-r*.08);ctx.stroke();}
  else if(index===3){ctx.strokeRect(-r*.28,-r*.42,r*.56,r*.58);ctx.beginPath();ctx.moveTo(-r*.38,-r*.42);ctx.lineTo(0,-r*.62);ctx.lineTo(r*.38,-r*.42);ctx.stroke();ctx.beginPath();ctx.arc(0,-r*.08,r*.12,0,Math.PI*2);ctx.fill();}
  else if(index===9){ctx.beginPath();ctx.arc(0,-r*.08,r*.38,-Math.PI/2,Math.PI/2);ctx.arc(r*.19,-r*.08,r*.3,Math.PI/2,-Math.PI/2,true);ctx.closePath();ctx.fill();ctx.beginPath();ctx.arc(-r*.28,r*.32,r*.08,0,Math.PI*2);ctx.fill();}
  else if(index===13){ctx.beginPath();ctx.moveTo(-r*.44,r*.2);ctx.quadraticCurveTo(0,r*.65,r*.44,r*.2);ctx.lineTo(r*.35,r*.5);ctx.lineTo(-r*.35,r*.5);ctx.closePath();ctx.stroke();ctx.beginPath();ctx.arc(0,r*.16,r*.27,Math.PI,Math.PI*2);ctx.stroke();ctx.moveTo(0,r*.08);ctx.lineTo(0,-r*.35);ctx.stroke();}
  else if(index===4){ctx.beginPath();ctx.arc(0,-r*.24,r*.22,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.moveTo(-r*.3,-r*.26);ctx.lineTo(0,-r*.58);ctx.lineTo(r*.3,-r*.26);ctx.closePath();ctx.fill();ctx.fillRect(-r*.19,0,r*.38,r*.44);}
  else if(index===12){ctx.beginPath();ctx.moveTo(-r*.28,-r*.32);ctx.lineTo(0,-r*.55);ctx.lineTo(r*.28,-r*.32);ctx.lineTo(r*.2,r*.12);ctx.lineTo(-r*.2,r*.12);ctx.closePath();ctx.fill();ctx.fillRect(-r*.28,r*.14,r*.56,r*.34);ctx.beginPath();ctx.moveTo(-r*.42,r*.5);ctx.lineTo(r*.42,r*.5);ctx.stroke();}
  else if(index===5){ctx.beginPath();ctx.arc(0,0,r*.39,0,Math.PI*2);ctx.stroke();for(let a=0;a<4;a++){ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(Math.cos(a*Math.PI/2)*r*.4,Math.sin(a*Math.PI/2)*r*.4);ctx.stroke();}}
  else if(index===6){ctx.fillRect(-r*.36,-r*.25,r*.72,r*.62);ctx.strokeRect(-r*.36,-r*.25,r*.72,r*.62);ctx.beginPath();ctx.moveTo(-r*.42,-r*.25);ctx.lineTo(0,-r*.52);ctx.lineTo(r*.42,-r*.25);ctx.stroke();ctx.beginPath();ctx.moveTo(-r*.36,r*.05);ctx.lineTo(r*.36,r*.05);ctx.moveTo(0,-r*.25);ctx.lineTo(0,r*.37);ctx.stroke();}
  else if(index===11){ctx.strokeRect(-r*.28,-r*.43,r*.56,r*.86);ctx.beginPath();ctx.moveTo(0,-r*.26);ctx.lineTo(-r*.14,0);ctx.lineTo(r*.08,0);ctx.lineTo(-r*.06,r*.27);ctx.stroke();ctx.beginPath();ctx.arc(0,-r*.43,r*.12,Math.PI,Math.PI*2);ctx.stroke();}
  else if(index===10){ctx.fillRect(-r*.1,-r*.5,r*.2,r*.98);ctx.beginPath();ctx.arc(0,-r*.48,r*.3,Math.PI,Math.PI*2);ctx.stroke();}
  else{ctx.beginPath();ctx.arc(0,0,r*.35,0,Math.PI*2);ctx.fill();}
  ctx.restore();
}
function drawHealth(ctx,x,y,width,hp,maxHp){if(!(maxHp>0)||!(hp>0))return;const ratio=Math.max(0,Math.min(1,hp/maxHp));ctx.fillStyle='rgba(5,15,12,.88)';ctx.fillRect(x-width/2,y,width,4);ctx.fillStyle=ratio<.32?'#ff6672':'#bfff76';if(ratio>0)ctx.fillRect(x-width/2+1,y+1,(width-2)*ratio,2);}
function drawEnemy(ctx,p,size,enemy){
  const heavy=/Brute|Juggernaut|Abomination|Behemoth|Titan|Colossus|Warden|Overlord/i.test(enemy.name);
  const fast=/Runner|Bat|Hound|Stalker|Howler/i.test(enemy.name);
  const alien=/Alien|Void|Star|Invader|Leech/i.test(enemy.name);
  const toxic=/Acid|Plague|Toxic|Spore/i.test(enemy.name);
  const r=size*(enemy.boss?.7:heavy?.225:fast?.16:.19);
  const bossIndex=enemy.boss?Math.max(0,bossEnemies.findIndex(boss=>boss.name===enemy.name)):0;
  const bossColors=['#ff6482','#ff8b4e','#a8e65e','#8ce8ff','#c28bff','#ffc85c','#ff76c8','#83ffca','#ff6870','#9b9dff','#f28b62','#d3ef70','#72cfff','#d190ff','#fff08a','#ff72ce','#8cb3ff','#df79ff','#70f5df','#ffd0ff'];
  const body=enemy.burningUntil>Date.now()?'#ff8c43':enemy.slowedUntil>Date.now()?'#76dfff':enemy.boss?bossColors[bossIndex%bossColors.length]:toxic?'#9dd84f':alien?'#8b8af4':heavy?'#d96657':'#bd7880';
  const edge=enemy.burningUntil>Date.now()?'#fff2a1':enemy.slowedUntil>Date.now()?'#d6fbff':enemy.boss?'#fff0c0':toxic?'#e0ff92':alien?'#c4baff':heavy?'#ffb180':'#ffd0b4';
  ctx.save();ctx.translate(p.x,p.y);ctx.fillStyle=body;ctx.strokeStyle=edge;ctx.lineWidth=Math.max(1,size*.045);ctx.shadowColor=body;ctx.shadowBlur=(enemy.boss?34:heavy?9:5)*effectScale();
  if(enemy.boss){
    const aura=ctx.createRadialGradient(0,0,r*.18,0,0,r*1.5);aura.addColorStop(0,'rgba(255,220,175,.4)');aura.addColorStop(.38,'rgba(255,94,143,.19)');aura.addColorStop(1,'rgba(127,89,255,0)');ctx.fillStyle=aura;ctx.beginPath();ctx.arc(0,0,r*1.5,0,Math.PI*2);ctx.fill();ctx.globalAlpha=.75;ctx.strokeStyle=edge;ctx.lineWidth=Math.max(1,size*.025);ctx.beginPath();ctx.arc(0,0,r*1.26,performance.now()/1800,performance.now()/1800+Math.PI*1.45);ctx.stroke();ctx.globalAlpha=1;
    const sides=6+(bossIndex%5),rotation=-Math.PI/2;
    ctx.beginPath();for(let i=0;i<sides;i++){const angle=rotation+i*Math.PI*2/sides,radius=r*(i%2===0?1.08:.82);const px=Math.cos(angle)*radius,py=Math.sin(angle)*radius;i?ctx.lineTo(px,py):ctx.moveTo(px,py);}ctx.closePath();ctx.fill();ctx.stroke();
    ctx.globalAlpha=.72;ctx.strokeStyle=edge;ctx.beginPath();ctx.arc(0,0,r*.55,0,Math.PI*2);ctx.stroke();ctx.globalAlpha=1;
  }else if(heavy){ctx.beginPath();for(let i=0;i<10;i++){const angle=i*Math.PI/5,radius=i%2?r*.82:r*1.12;const x=Math.cos(angle)*radius,y=Math.sin(angle)*radius;i?ctx.lineTo(x,y):ctx.moveTo(x,y);}ctx.closePath();ctx.fill();ctx.stroke();}
  else{ctx.beginPath();ctx.arc(0,0,r,0,Math.PI*2);ctx.fill();ctx.stroke();}
  ctx.shadowBlur=0;ctx.fillStyle='#202a27';ctx.fillRect(-r*.45,-r*.12,r*.22,r*.12);ctx.fillRect(r*.23,-r*.12,r*.22,r*.12);ctx.fillStyle='#fff1a4';ctx.fillRect(-r*.4,-r*.13,r*.1,r*.08);ctx.fillRect(r*.26,-r*.13,r*.1,r*.08);ctx.fillStyle='#1b171b';ctx.fillRect(-r*.34,r*.34,r*.68,Math.max(1,r*.12));ctx.restore();drawHealth(ctx,p.x,p.y+(enemy.boss?size*.82:size*.31),size*(enemy.boss?1.15:.57),enemy.hp,enemy.maxHp);
}
function upgradeCost(item){return Math.ceil((item.investedCost||item.cost)*(.6+(item.level||1)*.25));}
function trapDamage(item){return Math.round(item.damage*12*(1+.35*((item.level||1)-1)));}
function updateTurretActions(){
  const panel=$('turretActions'),cell=selectedTurret&&cellAt(selectedTurret.x,selectedTurret.y);
  if(!cell||(!cell.base&&!cell.item)){selectedTurret=null;panel.classList.add('hidden');return;}
  panel.classList.remove('hidden');
  const core=!!cell.base,item=cell.item,level=core?(cell.level||1):(item.level||1),cap=core?50:10,invested=core?(cell.investedCost||5000):(item.investedCost||item.cost),cost=core?Math.ceil(5000*(1+level*.75)):upgradeCost(item),sellValue=core?0:Math.floor(invested*.55);
  $('turretActionName').textContent=core?'Command Core':item.name;
  $('turretActionStats').textContent=core?`Level ${level} / ${cap} · ${Math.ceil(baseHp)} / ${baseMaxHp} HP · Unlocks advanced defenses`:item.category==='defense'?`Level ${level} / ${cap} · ${Math.ceil(cell.hp)} / ${cell.maxHp} HP · ${Math.round(item.damage*4*(weaponTuning[item.name]?.[0]||1)*(1+.12*(level-1)))} DMG / SHOT`:`Level ${level} / ${cap} · ${Math.ceil(cell.hp)} / ${cell.maxHp} HP${item.category==='traps'?` · ${trapDamage(item)} DMG`:''}`;
  $('upgradeTurretButton').textContent=level>=cap?'MAX LEVEL':`UPGRADE · ◈ ${cost.toLocaleString()}`;
  $('upgradeTurretButton').disabled=level>=cap||credits<cost||(!core&&item.category==='decoration');
  if(!core&&item.category==='decoration')$('upgradeTurretButton').textContent='NO UPGRADES';
  $('sellTurretButton').textContent=core?'CORE SECURED':`SELL · ◈ ${sellValue.toLocaleString()}`;
  $('sellTurretButton').disabled=core;
}
function upgradeSelectedTurret(){
  const cell=selectedTurret&&cellAt(selectedTurret.x,selectedTurret.y);if(!cell||(!cell.base&&!cell.item))return;
  const core=!!cell.base,item=cell.item,level=core?(cell.level||1):(item.level||1),cap=core?50:10,cost=core?Math.ceil(5000*(1+level*.75)):upgradeCost(item);
  if(level>=cap){setMessage('This emplacement is already at maximum level.');return;}
  if(credits<cost){setMessage('Not enough credits for this upgrade.');return;}
  playSfx('upgrade');credits-=cost;showCash(-cost,'CASH SPENT');
  if(core){cell.level=level+1;cell.investedCost=(cell.investedCost||5000)+cost;baseMaxHp=Math.round(baseMaxHp*1.12);baseHp=Math.min(baseMaxHp,baseHp+Math.ceil(baseMaxHp*.1));}
  else{
    item.level=level+1;item.investedCost=(item.investedCost||item.cost)+cost;
    const extraHp=Math.max(20,Math.round(cell.maxHp*.12));cell.maxHp+=extraHp;cell.hp=Math.min(cell.maxHp,cell.hp+extraHp);
  }
  setMessage(`${core?'Command Core':item.name} upgraded to Level ${level+1}.`);updateHud();renderShop();renderBoard();
}
function sellSelectedTurret(){
  const cell=selectedTurret&&cellAt(selectedTurret.x,selectedTurret.y);if(!cell?.item||cell.base)return;
  playSfx('sell');const item=cell.item,value=Math.floor((item.investedCost||item.cost)*.55);
  credits+=value;showCash(value,'CASH REFUNDED');cell.item=null;cell.hp=cell.maxHp=0;cell.rebuild=null;cell.rebuildHp=0;selectedTurret=null;
  $('selectedName').textContent='Choose an item';$('selectedDescription').textContent='Your outpost needs you.';$('selectedCard').querySelector('.selected-icon').textContent='＋';
  setMessage(`${item.name} sold for ${value.toLocaleString()} credits.`);updateHud();renderShop();renderBoard();
}
function showCash(amount,label='CASH'){
  const toast=$('cashToast');if(!toast)return;
  playSfx('cash');
  clearTimeout(cashToastTimer);toast.textContent=`${amount<0?'−':'+'} ${Math.abs(amount).toLocaleString()} ${label}`;
  toast.className=`cash-toast ${amount<0?'cash-spent':'cash-earned'} show`;
  cashToastTimer=setTimeout(()=>toast.classList.remove('show'),1900);
}
function shopGlyph(name,categoryName,index){
  const defense=['⌁','▣','♧','╬','❄','ϟ','♨','▤','◈','⬡','☣','▱','✧','♜','✹','◉','♨','☷','✦','⌘','⚙','⊕','⌬','✺','⊗','⬢','◌','⟡','⏣','⌖','✧','◈','❖','⎈','⟁','☼','⦿','✥','⟐','⌑','⊛','⧖','✣','◍','⏣','♢','⊙','✪'];
  const blocks=['▥','▦','⬟','▤','▰','╫','▧','⬢','▣','▩','▦','⬣','◇','◼','✦'];
  const traps=['⌁','⌖','✹','☣','❄','♨','ϟ','✸','▦','♜','ϟ','◉','☼','◇','✹'];
  const decor=['🍄','🌵','🚩','🏮','🧙','🎐','🧰','🪧','💠','🌙','🗼','🔋','🗽','⛲','🌟'];
  return (categoryName==='defense'?defense:categoryName==='blocks'?blocks:categoryName==='traps'?traps:categoryName==='decoration'?decor:abilities.map(a=>a.name==='Airstrike'?'✦':a.name==='Tsunami'?'≋':a.name==='EMP Surge'?'ϟ':a.name==='Meteor Barrage'?'☄':'✚'))[index]||'✦';
}
function defenseUnlockLevel(index){return index<12?1:11+Math.floor((index-12)/3);}
function renderShop(){
  $('shopNote').textContent=category==='defense'?`Core Lv. ${grid[CORE_Y]?.[CORE_X]?.level||1} · First 12 defenses unlocked; advanced weapons require core upgrades.`:descriptions[category];
  $('shopItems').innerHTML=catalog[category].map(([name,_icon,cost,stat,rangeOrHp],index)=>{
    const id=`${category}-${name}`,locked=category==='defense'&&(grid[CORE_Y]?.[CORE_X]?.level||1)<defenseUnlockLevel(index);
    let detail=category==='defense'?(locked?`CORE LV. ${defenseUnlockLevel(index)} REQUIRED`:name==='Acid Mortar'||name==='Acid Spreader'?'SPLASH · ACID':name==='Laser Array'?'90° LASER · PIERCE':name==='Blackhole Projector'?'GRAVITY · AREA':name==='Inferno Tower'||name==='Eventide Flamer'?'90° FLAME CONE':`${Math.round(stat*4*(weaponTuning[name]?.[0]||1))} DMG · ${rangeOrHp+4} RANGE`):category==='blocks'?`${stat} HP · BARRIER`:category==='traps'?`${stat*12} DMG · STATUS EFFECT`:category==='permanent'?(abilities.find(ability=>ability.name===name)?.detail||'ABILITY'):`+${stat} credits / wave`;
    return `<button class="shop-item ${selected?.id===id?'selected':''} ${credits<cost?'unaffordable':''} ${locked?'locked-item':''}" data-item="${name}" aria-label="${name}, ${cost.toLocaleString()} credits${locked?`, core level ${defenseUnlockLevel(index)} required`:''}"><span class="item-icon item-preview preview-${category}">${shopGlyph(name,category,index)}</span><span class="item-name">${name}</span><span class="item-meta">${detail}</span><span class="item-cost">${locked?'🔒 ':''}◈ ${cost.toLocaleString()}</span></button>`;
  }).join('');
  document.querySelectorAll('.shop-tab').forEach(tab=>tab.classList.toggle('active',tab.dataset.category===category));
}
function updateHud(){
  $('creditsValue').textContent=credits.toLocaleString();
  $('baseValue').textContent=`${Math.max(0,baseHp)} / ${baseMaxHp}`;
  $('waveValue').textContent=wave;
  document.querySelectorAll('.shop-item').forEach(button=>{
    const item=catalog[category].find(i=>i[0]===button.dataset.item);button.classList.toggle('unaffordable',credits<item[2]);
  });
}
function selectItem(name){
  const entry=catalog[category].find(row=>row[0]===name);if(!entry)return;
  if(category==='defense'){
    const required=defenseUnlockLevel(catalog.defense.findIndex(row=>row[0]===name)),coreLevel=grid[CORE_Y]?.[CORE_X]?.level||1;
    if(coreLevel<required){setMessage(`${name} is locked · upgrade the Command Core to Level ${required}.`);return;}
  }
  if(category==='permanent'){
    const ability=abilities.find(item=>item.name===name);if(!ability)return;
    if(unlockedAbilities.has(name)){setMessage(`${name} is already unlocked. Activate it below the shop.`);return;}
    if(credits<ability.cost){setMessage(`Not enough credits to unlock ${name}.`);return;}
    credits-=ability.cost;showCash(-ability.cost,'CASH SPENT');unlockedAbilities.add(name);abilityReadyAt[name]=0;
    $('selectedName').textContent=`${name} unlocked`;$('selectedDescription').textContent=`${ability.detail} · ${Math.round(ability.cooldown/1000)}s cooldown.`;
    setMessage(`${name} acquired · activate it from the ability controls.`);updateHud();renderShop();updateAbilityButtons();return;
  }
  selectedTurret=null;
  const [itemName,_icon,cost,stat,range]=entry;
  selected={id:`${category}-${name}`,name:itemName,cost,category,damage:stat,range,hp:stat,bonus:stat};
  $('selectedName').textContent=itemName;$('selectedDescription').textContent=category==='defense'?`${itemName==='Acid Mortar'||itemName==='Acid Spreader'?'Acid splash · ':itemName==='Laser Array'?'90° piercing beam · ':itemName==='Blackhole Projector'?'Gravity well · ':itemName==='Inferno Tower'||itemName==='Eventide Flamer'?'90° flame cone · ':`${weaponStyle[itemName]||'shell'} fire · `}${Math.round(stat*4*(weaponTuning[itemName]?.[0]||1))} damage per shot · ${range+4} tile range · ${cost.toLocaleString()} credits`:category==='blocks'?`${stat} HP · ${cost} credits`:category==='traps'?`${stat*12} damage · strong status effect · ${cost} credits`:`+${stat} credits per wave · ${cost} credits`;
  $('selectedCard').querySelector('.selected-icon').textContent=category==='defense'?'D':category==='blocks'?'B':category==='traps'?'T':'+';
  $('messageText').textContent=`${itemName} selected · choose an open tile.`;
  renderShop();renderBoard();
}
function setMessage(text){$('messageText').textContent=text;}
function activateAbility(name){
  const ability=abilities.find(item=>item.name===name);if(!ability||!unlockedAbilities.has(name))return;
  const remaining=(abilityReadyAt[name]||0)-Date.now();
  if(remaining>0){setMessage(`${name} recharging · ${Math.ceil(remaining/1000)}s.`);return;}
  if(!ability.repair&&!liveEnemies.length){setMessage('No hostiles on the battlefield. Ability remains ready.');return;}
  playSfx('ability');
  const abilityFlash=$('abilityFlash');if(abilityFlash){$('abilityFlashLabel').textContent=`${name.toUpperCase()} · IMPACT CONFIRMED`;abilityFlash.classList.remove('show');void abilityFlash.offsetWidth;abilityFlash.classList.add('show');setTimeout(()=>abilityFlash.classList.remove('show'),1050);}
  if(ability.repair){
    const repairRate=name==='Aegis Protocol'?.6:.35;
    baseHp=Math.min(baseMaxHp,baseHp+Math.ceil(baseMaxHp*repairRate));
    for(const row of grid)for(const cell of row)if(cell.item?.category==='defense'||(name==='Aegis Protocol'&&cell.item?.category==='blocks'))cell.hp=Math.min(cell.maxHp,cell.hp+Math.ceil(cell.maxHp*repairRate));
    setMessage(`${name} restores ${Math.round(repairRate*100)}% health to the core${name==='Aegis Protocol'?', defenses, and blocks': ' and all defenses'}.`);
  }else{
    if(!liveEnemies.length){setMessage('No hostiles on the battlefield. Ability remains ready.');return;}
    const centerX=CORE_X,centerY=4;
    shots.push({x:centerX,y:0,tx:centerX,ty:centerY,time:performance.now(),type:'laser'});
    for(const enemy of [...liveEnemies]){
      if(Math.hypot(enemy.x-centerX,enemy.y-centerY)>ability.radius)continue;
      if(ability.stun)enemy.stunnedUntil=Date.now()+ability.stun;
      if(ability.damage)damageEnemy(enemy,ability.damage);
    }
    setMessage(`${name} deployed · ${ability.detail.toLowerCase()}.`);
  }
  abilityReadyAt[name]=Date.now()+ability.cooldown;updateAbilityButtons();updateHud();renderBoard();
}
function updateAbilityButtons(){
  const holder=$('abilityButtons');if(!holder)return;
  const unlocked=abilities.filter(ability=>unlockedAbilities.has(ability.name));
  holder.classList.toggle('hidden',!unlocked.length);
  const markup=unlocked.map(ability=>{
    const seconds=Math.max(0,Math.ceil(((abilityReadyAt[ability.name]||0)-Date.now())/1000));
    return `<button class="small-button ability-button ${seconds===0?'active':''}" type="button" data-ability="${ability.name}" ${seconds?'disabled':''}>${seconds?`${ability.name.toUpperCase()} · ${seconds}S`:`USE ${ability.name.toUpperCase()}`}</button>`;
  }).join('');
  if(holder.innerHTML!==markup)holder.innerHTML=markup;
}
function setAutoWave(enabled){
  autoWave=enabled;clearTimeout(autoWaveTimer);autoWaveTimer=null;
  const button=$('autoWaveButton');button.textContent=`AUTO WAVE: ${autoWave?'ON':'OFF'}`;button.classList.toggle('active',autoWave);button.setAttribute('aria-pressed',String(autoWave));
  if(autoWave&&!active&&wave>0)autoWaveTimer=setTimeout(()=>{if(autoWave&&!active)makeWave();},1000);
}
function placeSelected(x,y){
  const cell=cellAt(x,y);if(!cell)return;
  if(cell.base||cell.item){
    selected=null;selectedTurret={x,y};const core=!!cell.base,item=cell.item;
    $('selectedName').textContent=core?'Command Core selected':`${item.name} selected`;
    $('selectedDescription').textContent=core?'Upgrade core HP and repair it.':`Upgrade or sell this ${item.category} emplacement.`;
    $('selectedCard').querySelector('.selected-icon').textContent=core?'C':'↑';
    setMessage(`${core?'Command Core':item.name} selected · Level ${core?(cell.level||1):(item.level||1)}.`);renderShop();renderBoard();return;
  }
  if(!selected)return;
  if(cell.base||cell.item){setMessage('That tile is occupied. Choose an open tile.');const tile=boardElement.children[y*GRID_SIZE+x];tile?.classList.add('invalid');return;}
  if(credits<selected.cost){setMessage('Not enough credits for that item.');return;}
  playSfx('place');credits-=selected.cost;showCash(-selected.cost,'CASH SPENT');
  cell.item={...selected};
  if(selected.category==='defense'){cell.item.level=1;cell.item.investedCost=selected.marketValue||selected.cost;cell.item.cost=selected.marketValue||selected.cost;}
  cell.maxHp=selected.category==='defense'?Math.max(120,150+selected.cost):selected.category==='blocks'?Math.max(100,selected.hp):selected.category==='traps'?Math.max(100,Math.round(100+selected.cost*.8)):0;
  cell.hp=cell.maxHp;
  if(['defense','blocks','traps','decoration'].includes(selected.category)){cell.item.level=1;cell.item.investedCost=selected.cost;}
  cell.cooldown=0;cell.trapReady=true;cell.rebuild=null;
  setMessage(`${selected.name} deployed at ${x+1}, ${y+1}.`);
  updateHud();renderShop();renderBoard();
  cell.deployUntil=performance.now()+650;renderBoard();
}
let cutsceneTimer=null;
let victoryTimer=null;
function playBossCutscene(name){
  playSfx('boss');const scene=$('bossCutscene');$('cutsceneBossName').textContent=name.replace('BOSS · ','');
  scene.classList.remove('checkmate','mega-boss','ultimate-boss');
  $('bossCutscene').querySelector('.cutscene-caption').textContent='TARGET ACQUIRED · FIRE!';
  if(name.includes('ULTIMATE LAST'))scene.classList.add('ultimate-boss');
  else if(name.includes('SUPER MEGA'))scene.classList.add('mega-boss');
  scene.classList.remove('show');void scene.offsetWidth;scene.classList.add('show');
  clearTimeout(cutsceneTimer);cutsceneTimer=setTimeout(()=>scene.classList.remove('show'),3600);
}
function playCheckmateCutscene(name){
  const scene=$('bossCutscene');clearTimeout(cutsceneTimer);playSfx('boss');
  $('cutsceneBossName').textContent=name.replace('BOSS · ','');
  $('bossCutscene').querySelector('.cutscene-caption').textContent='CHECKMATE · BOSS ELIMINATED';
  scene.classList.remove('mega-boss','ultimate-boss','show');scene.classList.add('checkmate');void scene.offsetWidth;scene.classList.add('show');
  cutsceneTimer=setTimeout(()=>{scene.classList.remove('show','checkmate');},3600);
}
function chooseDifficulty(level){
  difficulty=level;wave=0;lastWavePayout=0;active=false;gameFinished=false;liveEnemies=[];spawnQueue=[];
  clearTimeout(victoryTimer);$('victoryCutscene').classList.remove('show');$('victoryModal').classList.add('hidden');
  baseMaxHp=level==='Easy'?2200:level==='Hard'?1100:1550;baseHp=baseMaxHp;
  credits=5000;unlockedAbilities=new Set();abilityReadyAt={};$('abilityButtons').classList.add('hidden');$('abilityButtons').innerHTML='';
  setAutoWave(false);speedMultiplier=1;$('speedButton').textContent='1× SPEED';$('speedButton').classList.remove('active');$('speedButton').setAttribute('aria-pressed','false');
  shots=[];
  setupGrid();selected=null;selectedTurret=null;category='defense';
  $('difficultyLabel').textContent=level.toUpperCase();
  $('selectedName').textContent='Choose an item';$('selectedDescription').textContent='Your outpost needs you.';$('selectedCard').querySelector('.selected-icon').textContent='＋';
  $('battleTitle').textContent='The breach is quiet... for now.';$('threatBadge').textContent='PREPARE';$('threatBadge').classList.remove('active');
  $('waveButton').innerHTML='START WAVE <span>→</span>';$('waveButton').disabled=false;setMessage('Select an item, then place it on the grid.');
  clearTimeout(endTimer);clearTimeout(bossTimer);clearTimeout(cutsceneTimer);$('bossCutscene').classList.remove('show');$('bossAnnouncement').classList.remove('show');$('endModal').classList.add('hidden');gameScreen.classList.remove('game-ending');
  menuScreen.classList.add('hidden');gameScreen.classList.remove('hidden');renderShop();renderBoard();updateHud();
  $('introDifficulty').textContent=`${level.toUpperCase()} OPERATION`;
  const intro=$('deploymentIntro');intro.classList.remove('show');void intro.offsetWidth;intro.classList.add('show');setTimeout(()=>intro.classList.remove('show'),2800);
  clearInterval(gameTimer);gameTimer=setInterval(tick,50);
}
function makeWave(){
  if(active||gameFinished)return;
  clearTimeout(autoWaveTimer);autoWaveTimer=null;
  wave++;
  const count=Math.min(4+wave,18);
  const difficultyScale=difficulty==='Easy'?.82:difficulty==='Hard'?1.35:1.05;
  const damageScale=difficulty==='Easy'?.85:difficulty==='Hard'?1.5:1.2;
  const decadeScale=Math.pow(1.25,Math.floor(wave/10));
  const rewardScale=difficulty==='Easy'?2:difficulty==='Hard'?1.3:1.6;
  spawnQueue=[];
  for(let i=0;i<count;i++){
    const tier=Math.min(regularEnemies.length-1,Math.floor((wave-1)*.75)+Math.floor(Math.random()*5));
    const def=regularEnemies[tier];
    const enemyHp=Math.max(18,Math.round(def.hp*(1+wave*.09)*difficultyScale*decadeScale*1.5));
    spawnQueue.push({...def,damage:Math.ceil(def.damage*damageScale*decadeScale),maxHp:enemyHp,hp:enemyHp,reward:Math.max(18,Math.round(def.reward*rewardScale*(1+wave*.04))),speed:.58+Math.min(.25,wave*.004),x:-1,y:-.45,moveClock:0,attackClock:0});
  }
  if(wave%10===0){
    const boss=wave===150?ultimateBoss:wave%50===0?megaBoss:bossEnemies[(Math.floor(wave/10)-1)%bossEnemies.length];
    const specialScale=wave===150?5:wave%50===0?3:1;
    const hp=Math.round(boss.hp*.85*(1+wave*.08)*difficultyScale*decadeScale*1.5*2*specialScale);
    spawnQueue.push({...boss,damage:Math.ceil(boss.damage*damageScale*decadeScale*2*specialScale),hp,maxHp:hp,reward:Math.round(boss.reward*rewardScale*(1+wave*.04)),speed:wave===150?.038:.058+Math.min(.016,wave*.0002),x:-1,y:-.45,moveClock:0,attackClock:0});
  }
  active=true;spawnClock=0;lastTick=Date.now();
  $('battleTitle').textContent=wave%10===0?`Boss incoming · Wave ${wave}`:`Wave ${wave} · ${spawnQueue.length} hostiles detected`;
  $('threatBadge').textContent=wave===150?'ULTIMATE BOSS':wave%50===0?'MEGA BOSS':wave%10===0?'BOSS ALERT':'WAVE ACTIVE';$('threatBadge').classList.add('active');$('waveButton').textContent='WAVE IN PROGRESS';$('waveButton').disabled=true;
  if(wave%10===0){
    const announcement=$('bossAnnouncement'),bossName=spawnQueue[spawnQueue.length-1].name;
    $('bossName').textContent=bossName.replace('BOSS · ','');playBossCutscene(bossName);
    announcement.classList.remove('show');void announcement.offsetWidth;announcement.classList.add('show');
    clearTimeout(bossTimer);bossTimer=setTimeout(()=>announcement.classList.remove('show'),3600);
  }
  updateHud();
}
function spawnEnemy(){
  const lanes=Array.from({length:GRID_SIZE},(_,x)=>x).filter(x=>liveEnemies.every(enemy=>enemy.y>.8||Math.hypot(enemy.x-x,enemy.y)>.65));
  if(!lanes.length)return false;
  const enemy=spawnQueue.shift();enemy.x=lanes[Math.floor(Math.random()*lanes.length)];enemy.y=0;enemy.routeBias=Math.floor(Math.random()*97);liveEnemies.push(enemy);
  return true;
}
function playTone(freq=520,duration=.07,type='sine',volume=.045){
  if(!soundOn)return;
  try{audioContext??=new(window.AudioContext||window.webkitAudioContext)();if(audioContext.state==='suspended')audioContext.resume();const osc=audioContext.createOscillator(),gain=audioContext.createGain();osc.frequency.setValueAtTime(freq,audioContext.currentTime);osc.type=type;gain.gain.setValueAtTime(volume,audioContext.currentTime);gain.gain.exponentialRampToValueAtTime(.001,audioContext.currentTime+duration);osc.connect(gain);gain.connect(audioContext.destination);osc.start();osc.stop(audioContext.currentTime+duration);}catch{}
}
function playSfx(kind='ui'){
  const sounds={ui:[640,.035,'triangle'],place:[430,.09,'square'],sell:[280,.12,'triangle'],upgrade:[760,.13,'sine'],trap:[175,.16,'sawtooth'],laser:[940,.12,'sawtooth'],rapid:[310,.045,'square'],double:[190,.11,'triangle'],spray:[420,.09,'sawtooth'],flame:[105,.2,'sawtooth'],shell:[130,.19,'triangle'],ability:[520,.28,'sawtooth'],cash:[880,.13,'sine'],boss:[82,.5,'sawtooth']};
  const [freq,duration,wave]=sounds[kind]||sounds.ui;playTone(freq,duration,wave,kind==='ui'?.018:.035);
}
function playWeaponSound(style){
  if(style==='laser')playSfx('laser');else if(style==='rapid')playSfx('rapid');else if(style==='double')playSfx('double');else if(style==='spray')playSfx('spray');else if(style==='flame')playSfx('flame');else if(style==='shell')playSfx('shell');else if(style==='acid'||style==='gravity')playSfx('spray');else playSfx('double');
}
function damageEnemy(enemy,amount){
  enemy.hp-=amount;if(enemy.hp>0)return false;
  liveEnemies=liveEnemies.filter(e=>e!==enemy);credits+=enemy.reward;playTone(enemy.boss?180:660,.09);
  if(enemy.boss)playCheckmateCutscene(enemy.name);
  return true;
}
function damageBase(amount){
  baseHp-=amount;playTone(110,.18);if(baseHp<=0){baseHp=0;endGame();}
}
function fireTurrets(delta){
  for(const row of grid)for(const cell of row){
    const item=cell.item;if(!item||item.category!=='defense')continue;
    cell.cooldown=Math.max(0,cell.cooldown-delta);if(cell.cooldown>0)continue;
    const level=item.level||1,range=item.range+4+Math.floor((level-1)/3);
    const targets=liveEnemies.filter(e=>Math.abs(e.x-cell.x)+Math.abs(e.y-cell.y)<=range).sort((a,b)=>(Math.abs(a.x-CORE_X)+Math.abs(a.y-CORE_Y))-(Math.abs(b.x-CORE_X)+Math.abs(b.y-CORE_Y)));
    if(!targets.length)continue;
    const target=targets[0],aim=Math.atan2(target.y-cell.y,target.x-cell.x);
    const style=weaponStyle[item.name]||'shell',laser=style==='laser';
    const acid=item.name==='Acid Mortar'||item.name==='Acid Spreader';
    const inferno=item.name==='Inferno Tower'||item.name==='Eventide Flamer';
    const blackhole=item.name==='Blackhole Projector';
    const cone=style==='spray'||inferno;
    const hitTargets=laser?targets.filter(enemy=>{
      const angle=Math.atan2(enemy.y-cell.y,enemy.x-cell.x);
      const difference=Math.atan2(Math.sin(angle-aim),Math.cos(angle-aim));
      return Math.abs(difference)<=Math.PI/4;
    }):acid?liveEnemies.filter(enemy=>Math.hypot(enemy.x-target.x,enemy.y-target.y)<=1.45):blackhole?liveEnemies.filter(enemy=>Math.hypot(enemy.x-target.x,enemy.y-target.y)<=1.75):cone?targets.filter(enemy=>{
      const angle=Math.atan2(enemy.y-cell.y,enemy.x-cell.x),difference=Math.atan2(Math.sin(angle-aim),Math.cos(angle-aim));
      return Math.abs(difference)<=(inferno?Math.PI/4:.58);
    }):[target];
    const [damageScale,fireDelay]=weaponTuning[item.name]||[1,850];
    cell.aim=aim;cell.flashUntil=performance.now()+260;playWeaponSound(style);
    for(const victim of hitTargets){
      const projectileType=laser?'laser':acid?'acid':inferno?'flame':blackhole?'gravity':'bullet';
      const burst=style==='double'?2:style==='rapid'?1:style==='spray'?3:1;
      for(let shot=0;shot<burst;shot++)shots.push({x:cell.x,y:cell.y,tx:victim.x,ty:victim.y,time:performance.now()+shot*22,type:projectileType});
      if(blackhole)victim.stunnedUntil=Date.now()+500;
      damageEnemy(victim,item.damage*4*damageScale*(1+.12*(level-1)));
    }
    cell.cooldown=Math.max(210,fireDelay*(1-.035*(level-1)));
  }
}
function triggerTrap(enemy,cell){
  if(!cell?.item||cell.item.category!=='traps'||!cell.trapReady)return;
  const name=cell.item.name;cell.trapReady=false;playSfx('trap');damageEnemy(enemy,trapDamage(cell.item));
  const now=Date.now();
  if(/Frost|Ice|Cryo|Freeze/i.test(name)){enemy.slowedUntil=now+4500;enemy.slowFactor=.42;}
  else if(/Acid|Toxic|Poison|Venom/i.test(name)){enemy.burningUntil=now+5000;enemy.burnDamage=Math.max(12,cell.item.damage*.65);}
  else if(/Flame|Solar|Fire/i.test(name)){enemy.burningUntil=now+3500;enemy.burnDamage=Math.max(18,cell.item.damage*.95);}
  else if(/Shock|Arc|Laser|Quantum|Singularity|Void/i.test(name)){enemy.stunnedUntil=now+850;}
}
function advanceEnemies(delta){
  const now=Date.now();
  for(const enemy of [...liveEnemies]){
    if(enemy.burningUntil>now){enemy.burnClock=(enemy.burnClock||0)+delta;if(enemy.burnClock>=500){enemy.burnClock=0;if(damageEnemy(enemy,enemy.burnDamage||10))continue;}}
    if(enemy.stunnedUntil>now)continue;
    enemy.attackClock+=delta;
    const entryBlock=enemy.y<.05&&cellAt(Math.round(enemy.x),0)?.item?.category==='blocks'?cellAt(Math.round(enemy.x),0):null;
    const step=entryBlock?null:nextStep(enemy.x,enemy.y,enemy);const [nx,ny]=step||[Math.round(enemy.x),0],target=entryBlock||cellAt(nx,ny);
    if(target?.base){
      const slow=enemy.slowedUntil>now?(enemy.slowFactor||.5):1,attackX=CORE_X,attackY=CORE_Y-.35;
      const dx=attackX-enemy.x,dy=attackY-enemy.y,distance=Math.hypot(dx,dy),travel=enemy.speed*slow*delta/1000;
      if(distance>travel){enemy.x+=dx/distance*travel;enemy.y+=dy/distance*travel;}else{enemy.x=attackX;enemy.y=attackY;}
      if(Math.hypot(enemy.x-CORE_X,enemy.y-CORE_Y)<=.55&&enemy.attackClock>=750){enemy.attackClock=0;damageBase(enemy.damage);}
      continue;
    }
    if(target?.item&&['blocks','defense'].includes(target.item.category)){
      const isBlock=target.item.category==='blocks',attackDelay=isBlock?430:700;
      if(enemy.attackClock>=attackDelay){
        enemy.attackClock=0;
        target.hp-=enemy.damage*(enemy.structureDamage||1)*(isBlock?2.5:1);
        if(target.hp<=0){
          const destroyed=target.item;setMessage(`${destroyed.name} was destroyed; it will be restored after this wave.`);
          if(['defense','blocks','traps'].includes(destroyed.category)){target.rebuild={...destroyed};target.rebuildHp=target.maxHp;target.trapReady=true;}
          target.item=null;target.hp=target.maxHp=0;playTone(130,.12);
        }
      }
      continue;
    }
    if(!step)continue;
    const dx=nx-enemy.x,dy=ny-enemy.y,distance=Math.hypot(dx,dy),slow=enemy.slowedUntil>now?(enemy.slowFactor||.5):1,travel=enemy.speed*slow*delta/1000;
    if(distance<=travel+.015){enemy.x=nx;enemy.y=ny;}else if(distance>0){enemy.x+=dx/distance*travel;enemy.y+=dy/distance*travel;}
    if(Math.hypot(enemy.x-nx,enemy.y-ny)<.22)triggerTrap(enemy,target);
    if(enemy.y>=CORE_Y-.45&&Math.abs(enemy.x-CORE_X)<=.45&&enemy.attackClock>=750){enemy.attackClock=0;damageBase(enemy.damage);}
  }
}
function finishWave(){
  active=false;
  const decor=grid.flat().reduce((sum,cell)=>sum+(cell.item?.category==='decoration'?cell.item.bonus:0),0);
  const baseReward=(difficulty==='Easy'?650:difficulty==='Hard'?430:540)+wave*(difficulty==='Easy'?120:95)+decor;
  const prepBonus=wave%10===9?Math.round((3000+bossEnemies[(Math.floor((wave+1)/10)-1)%bossEnemies.length].hp*.7)*(difficulty==='Hard'?1.4:difficulty==='Medium'?1.2:1)):0;
  const totalPayout=Math.max(Math.round((baseReward+wave*100)*Math.pow(1.38,wave-1))+prepBonus,Math.ceil(lastWavePayout*1.22)+1);
  const reward=totalPayout-prepBonus;lastWavePayout=totalPayout;
  credits+=totalPayout;showCash(totalPayout,'WAVE PAYOUT');
  for(const row of grid)for(const cell of row){
    if(cell.item?.category==='traps')cell.trapReady=true;
  }
  baseHp=Math.min(baseMaxHp,baseHp+Math.ceil(baseMaxHp*.08));
  $('battleTitle').textContent=`Wave ${wave} cleared · +${(reward+prepBonus).toLocaleString()} credits`;$('threatBadge').textContent='SECTOR CLEAR';$('threatBadge').classList.remove('active');
  $('waveButton').innerHTML='START NEXT WAVE <span>→</span>';$('waveButton').disabled=false;
  setMessage(prepBonus?`Boss support package received: +${prepBonus.toLocaleString()} credits. Your structures are restored.`:'Wave cleared. Destroyed defenses, blocks, and traps have been restored.');
  // Destroyed structure sites retain their item and return at full health between waves.
  for(const row of grid)for(const cell of row)if(cell.rebuild){cell.item=cell.rebuild;cell.maxHp=cell.rebuildHp||150;cell.hp=cell.maxHp;cell.rebuild=null;cell.rebuildHp=0;}
  updateHud();renderShop();renderBoard();
  if(wave>=150){
    gameFinished=true;setAutoWave(false);$('waveButton').disabled=true;$('waveButton').textContent='CAMPAIGN COMPLETE';
    $('battleTitle').textContent='The Ultimate Last Boss has fallen.';$('threatBadge').textContent='WORLD SAVED';
    const finale=$('victoryCutscene');finale.classList.remove('show');void finale.offsetWidth;finale.classList.add('show');
    victoryTimer=setTimeout(()=>{$('victoryModal').classList.remove('hidden');},5500);
    return;
  }
  if(autoWave)autoWaveTimer=setTimeout(()=>{if(autoWave&&!active)makeWave();},1000);
}
function endGame(){
  if(!active)return;
  active=false;setAutoWave(false);gameScreen.classList.add('game-ending');$('endSummary').textContent=`You reached wave ${wave} on ${difficulty}. The outpost defended against ${liveEnemies.length} remaining hostiles.`;
  $('waveButton').disabled=false;clearTimeout(endTimer);clearTimeout(bossTimer);clearTimeout(cutsceneTimer);$('bossCutscene').classList.remove('show');$('bossAnnouncement').classList.remove('show');
  endTimer=setTimeout(()=>{$('endModal').classList.remove('hidden');},1150);
}
function tick(){
  const now=Date.now(),elapsed=Math.min(500,now-lastTick||200);lastTick=now;
  if(active){
    const delta=elapsed*speedMultiplier;
    spawnClock+=delta;if(spawnQueue.length&&spawnClock>=950&&spawnEnemy())spawnClock=0;
    fireTurrets(delta);advanceEnemies(delta);
    if(active&&!spawnQueue.length&&!liveEnemies.length)finishWave();
    renderBoard();updateHud();
  }
  updateAbilityButtons();
}
function animateBattlefield(){
  if(grid.length&&gameScreen&&!gameScreen.classList.contains('hidden'))drawBattlefield();
  requestAnimationFrame(animateBattlefield);
}
requestAnimationFrame(animateBattlefield);

document.addEventListener('click',event=>{
  if(event.target.closest('button,.tile')&&!event.target.closest('#soundButton'))playSfx('ui');
});

const speedSteps=[1,2,4,6,8,10,12,16,20];
$('speedButton').addEventListener('click',event=>{
  event.stopImmediatePropagation();
  speedMultiplier=speedSteps[(speedSteps.indexOf(speedMultiplier)+1)%speedSteps.length];
  event.currentTarget.textContent=`${speedMultiplier}× SPEED`;
  event.currentTarget.classList.toggle('active',speedMultiplier!==1);
  event.currentTarget.setAttribute('aria-pressed',String(speedMultiplier!==1));
},{capture:true});
$('worldTwoRestart').addEventListener('click',()=>chooseDifficulty(difficulty));
$('playButton').addEventListener('click',()=>$('difficultyPanel').classList.remove('hidden'));
$('closeDifficulty').addEventListener('click',()=>$('difficultyPanel').classList.add('hidden'));
document.querySelectorAll('.difficulty-card').forEach(button=>button.addEventListener('click',()=>chooseDifficulty(button.dataset.difficulty)));
$('helpButton').addEventListener('click',()=>$('helpModal').classList.remove('hidden'));
$('closeHelp').addEventListener('click',()=>$('helpModal').classList.add('hidden'));
$('helpPlayButton').addEventListener('click',()=>$('helpModal').classList.add('hidden'));
$('retryButton').addEventListener('click',()=>chooseDifficulty(difficulty));
$('homeButton').addEventListener('click',event=>{event.preventDefault();if(active&&!confirm('Leave this defense? Your current run will be lost.'))return;active=false;setAutoWave(false);clearInterval(gameTimer);clearTimeout(cutsceneTimer);$('bossCutscene').classList.remove('show');$('bossAnnouncement').classList.remove('show');gameScreen.classList.add('hidden');menuScreen.classList.remove('hidden');$('endModal').classList.add('hidden');});
$('soundButton').addEventListener('click',event=>{soundOn=!soundOn;event.currentTarget.textContent=soundOn?'♫':'♪';event.currentTarget.title=soundOn?'Sound effects on':'Sound effects off';if(soundOn)playTone(520);});
document.querySelectorAll('.shop-tab').forEach(button=>button.addEventListener('click',()=>{category=button.dataset.category;selected=null;selectedTurret=null;$('selectedName').textContent='Choose an item';$('selectedDescription').textContent='Your outpost needs you.';$('selectedCard').querySelector('.selected-icon').textContent='＋';renderShop();renderBoard();}));
$('shopItems').addEventListener('click',event=>{const button=event.target.closest('.shop-item');if(button)selectItem(button.dataset.item);});
boardElement.addEventListener('click',event=>{const tile=event.target.closest('.tile');if(tile)placeSelected(Number(tile.dataset.x),Number(tile.dataset.y));});
$('clearSelection').addEventListener('click',()=>{selected=null;selectedTurret=null;$('selectedName').textContent='Choose an item';$('selectedDescription').textContent='Your outpost needs you.';$('selectedCard').querySelector('.selected-icon').textContent='＋';renderShop();renderBoard();setMessage('Selection cleared.');});
$('upgradeTurretButton').addEventListener('click',upgradeSelectedTurret);
$('sellTurretButton').addEventListener('click',sellSelectedTurret);
$('abilityButtons').addEventListener('click',event=>{const button=event.target.closest('[data-ability]');if(button)activateAbility(button.dataset.ability);});
$('autoWaveButton').addEventListener('click',()=>setAutoWave(!autoWave));
$('speedButton').addEventListener('click',event=>{speedMultiplier=speedMultiplier===1?2:speedMultiplier===2?4:speedMultiplier===4?8:speedMultiplier===8?10:1;event.currentTarget.textContent=`${speedMultiplier}× SPEED`;event.currentTarget.classList.toggle('active',speedMultiplier>1);event.currentTarget.setAttribute('aria-pressed',String(speedMultiplier>1));});
$('waveButton').addEventListener('click',()=>{if(!active)makeWave();});
