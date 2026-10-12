(() => {
  const $ = id => document.getElementById(id);
  const originalChooseDifficulty = window.chooseDifficulty;
  const originalMakeWave = window.makeWave;
  const originalDamageEnemy = window.damageEnemy;
  const originalTick = window.tick;
  const worldOneCatalog = Object.fromEntries(Object.entries(catalog).map(([key, value]) => [key, value.map(row => [...row])]));
  const worldTwoCatalog = {
    defense: [
      ['Cryo-Javelin','',90,8,5,110],['Borealis Coil','',260,24,7,180],['Comet Harpoon','',740,70,9,260],['Glacier Mortar','',2100,190,11,390],['Aurora Foundry','',6200,520,13,560],['Polar Singularity','',18000,1400,16,810],['Whiteout Array','',52000,3800,19,1150],['Froststar Engine','',150000,10500,22,1580]
    ],
    blocks: [['Iceglass Wall','❄',45,260],['Cryo Bastion','⬡',130,740],['Glacier Gate','▰',380,2100],['Polar Shield','✧',1100,6200],['World-Two Aegis','✦',3200,18500]],
    traps: [['Rime Mine','❄',75,150],['Permafrost Snare','✧',180,390],['Whiteout Vent','❅',460,1050],['Frostfire Charge','✹',1250,3100],['Absolute Zero Well','◉',3600,9200]],
    decoration: [['Aurora Spire','✦',40,4],['Ice Crystal','❄',75,7],['Polar Beacon','◉',125,12]],
    permanent: worldOneCatalog.permanent
  };
  const worldTwoEnemies = [
    {name:'Rime Skitter',hp:220,reward:180,damage:25,structureDamage:1.2,speed:.76},
    {name:'Glacier Hound',hp:360,reward:270,damage:38,structureDamage:1.5,speed:.85},
    {name:'Frostbound Brute',hp:740,reward:460,damage:55,structureDamage:2.3,speed:.52},
    {name:'Aurora Wraith',hp:1100,reward:720,damage:70,structureDamage:1.8,speed:.72},
    {name:'Icebreaker Colossus',hp:2100,reward:1250,damage:110,structureDamage:3.4,speed:.42}
  ];
  const worldTwoBosses = [
    {name:'BOSS · The Glacial Regent',hp:14500,reward:5200,damage:720,structureDamage:4,boss:true},
    {name:'BOSS · Aurora Devourer',hp:23000,reward:7600,damage:980,structureDamage:5,boss:true},
    {name:'BOSS · The Cryo Leviathan',hp:38000,reward:11200,damage:1450,structureDamage:6,boss:true},
    {name:'BOSS · The Eternal Winter',hp:62000,reward:18000,damage:2200,structureDamage:8,boss:true}
  ];
  let campaignWorld = 1;
  let chosenWorld = 1;
  let currentProfile = null;
  let profile = null;
  let multiSelection = [];
  let dragStart = null;
  let dragMoved = false;
  let suppressClick = false;
  let dragBox = null;
  const profileKey = name => `lastLightProfile:${name.trim().toLowerCase()}`;

  function loadProfile(name) {
    if (!name) return null;
    try { return JSON.parse(localStorage.getItem(profileKey(name)) || 'null'); } catch { return null; }
  }
  function saveProfile() {
    if (!profile || !currentProfile) return;
    try {
      localStorage.setItem(profileKey(currentProfile), JSON.stringify(profile));
      localStorage.setItem('lastLightActiveProfile', currentProfile);
    } catch {}
    refreshProfileUI();
  }
  function refreshProfileUI() {
    const name = currentProfile || 'No profile';
    const wins = profile?.victories || 0;
    const hasWorld2 = !!profile?.world2Unlocked;
    $('profileSummary').textContent = currentProfile ? `${name} · ${wins} campaign ${wins === 1 ? 'victory' : 'victories'} · ${hasWorld2 ? 'World 2 unlocked' : 'World 2 locked'}` : 'Offline progress is saved on this device.';
    $('profileStats').textContent = `Victories: ${wins} · ${hasWorld2 ? 'World 2 unlocked' : 'World 2 locked'}`;
    document.querySelector('[data-world="2"]').disabled = !hasWorld2;
    document.querySelector('[data-world="2"]').textContent = hasWorld2 ? 'WORLD 2 · WAVES 151–300' : 'WORLD 2 · LOCKED';
    document.querySelectorAll('.world-choice-button').forEach(button => button.classList.toggle('active', Number(button.dataset.world) === chosenWorld));
  }
  function recordVictory(world) {
    if (!profile) {
      currentProfile = 'Commander';
      profile = loadProfile(currentProfile) || {name:currentProfile,victories:0,world2Unlocked:false,worldWins:{}};
    }
    profile.victories = (profile.victories || 0) + 1;
    profile.worldWins ||= {};
    profile.worldWins[world] = (profile.worldWins[world] || 0) + 1;
    if (world === 1) {
      profile.world2Unlocked = true;
      $('victoryModal').querySelector('.eyebrow').textContent = 'CAMPAIGN COMPLETE · WORLD 1 · WAVE 150';
      $('victoryModal').querySelector('.modal-card > p:not(.eyebrow)').textContent = 'World 2 is unlocked. Your victory has been saved to this local profile.';
    }
    saveProfile();
    refreshProfileUI();
  }
  function finishWorldTwo() {
    if (campaignWorld !== 2 || wave < 300 || gameFinished || spawnQueue.length || liveEnemies.length) return;
    gameFinished = true;active = false;recordVictory(2);
    $('victoryModal').querySelector('.eyebrow').textContent = 'CAMPAIGN COMPLETE · WORLD 2 · WAVE 300';
    $('victoryModal').querySelector('.modal-card > p:not(.eyebrow)').textContent = 'The frost frontier is secure. Your World 2 victory has been saved to your local profile.';
    $('worldTwoRestart').innerHTML = 'REPLAY WORLD 2 <span>↻</span>';
    $('victoryModal').classList.remove('hidden');
  }
  function setCampaignCatalog(world) {
    const source = world === 2 ? worldTwoCatalog : worldOneCatalog;
    Object.keys(catalog).forEach(key => { catalog[key] = (source[key] || worldOneCatalog[key]).map(row => [...row]); });
    if (world === 2) {
      worldTwoCatalog.defense.forEach((entry, i) => {
        weaponStyle[entry[0]] = ['rapid','laser','shell','acid','flame','gravity','spray','laser'][i];
        weaponTuning[entry[0]] = [.8 + i * .08, 660 - Math.min(i * 35, 250)];
      });
    }
    $('app').dataset.world = String(world);
    $('battleTitle').textContent = world === 2 ? 'World 2 · The frost frontier awaits.' : 'The breach is quiet... for now.';
    document.querySelector('.north-label').innerHTML = world === 2 ? '<span>❄</span> POLAR RIFT · ENEMY ENTRY' : '<span>▲</span> ENEMY ENTRY ZONE';
    document.querySelector('.south-label').innerHTML = world === 2 ? '<span>✦</span> AURORA COMMAND' : '<span>◆</span> LAST LIGHT COMMAND';
    document.querySelector('.shop-header h2').textContent = world === 2 ? 'Frost frontier shop' : 'Field shop';
    document.querySelector('.shop-count').textContent = world === 2 ? '29 ITEMS' : '186 ITEMS';
    const categoryCounts = world === 2 ? {defense:8,blocks:5,traps:5,decoration:3,permanent:8} : {defense:78,blocks:65,traps:20,decoration:15,permanent:8};
    document.querySelectorAll('.shop-tab').forEach(tab => { tab.querySelector('span').textContent = categoryCounts[tab.dataset.category]; });
    $('difficultyLabel').textContent = `${difficulty.toUpperCase()} · WORLD ${world}`;
    renderShop();
  }
  function startWorld(level, world) {
    campaignWorld = world;
    chosenWorld = world;
    setCampaignCatalog(world);
    originalChooseDifficulty(level);
    campaignWorld = world;
    setCampaignCatalog(world);
    if (world === 2) {
      wave = 150;
      credits = 5000;
      baseMaxHp = level === 'Easy' ? 2600 : level === 'Hard' ? 1300 : 1900;
      baseHp = baseMaxHp;
      $('battleTitle').textContent = 'World 2 · The frost frontier awaits.';
      $('threatBadge').textContent = 'WORLD 2 · PREPARE';
    }
    $('difficultyLabel').textContent = `${level.toUpperCase()} · WORLD ${world}`;
    updateHud();renderShop();renderBoard();
    refreshProfileUI();
  }

  // Capture menu choices so world selection and profile unlocks apply before deployment.
  $('accountButton').addEventListener('click', () => {
    $('accountPanel').classList.remove('hidden');
    $('profileName').value = currentProfile || '';
    refreshProfileUI();
  });
  $('closeAccount').addEventListener('click', () => $('accountPanel').classList.add('hidden'));
  $('saveProfile').addEventListener('click', () => {
    const name = $('profileName').value.trim().replace(/\s+/g, ' ');
    if (!name) { $('profileStats').textContent = 'Enter a callsign to create or load a profile.'; return; }
    if (name.length > 24) return;
    currentProfile = name;
    profile = loadProfile(name) || {name,victories:0,world2Unlocked:false,worldWins:{}};
    saveProfile();
    setMessage?.(`Profile loaded: ${name}.`);
  });
  document.querySelectorAll('.world-choice-button').forEach(button => button.addEventListener('click', () => {
    const world = Number(button.dataset.world);
    if (world === 2 && !profile?.world2Unlocked) return;
    chosenWorld = world;
    refreshProfileUI();
  }));
  $('difficultyPanel').addEventListener('click', event => {
    const card = event.target.closest('.difficulty-card');
    if (!card) return;
    event.preventDefault();event.stopImmediatePropagation();
    if (chosenWorld === 2 && !profile?.world2Unlocked) { setMessage('Complete World 1 with a local profile to unlock World 2.'); return; }
    startWorld(card.dataset.difficulty, chosenWorld);
  }, true);
  $('worldTwoRestart').addEventListener('click', event => {
    event.preventDefault();event.stopImmediatePropagation();
    if (!profile?.world2Unlocked) recordVictory(1);
    $('victoryModal').classList.add('hidden');
    startWorld(difficulty || 'Medium', 2);
  }, true);
  $('retryButton').addEventListener('click', event => {
    event.preventDefault();event.stopImmediatePropagation();
    $('endModal').classList.add('hidden');
    startWorld(difficulty || 'Medium', campaignWorld);
  }, true);

  // World 2 reuses the established combat loop, but supplies its own enemy roster and rewards.
  window.makeWave = function version8MakeWave() {
    originalMakeWave();
    if (campaignWorld === 1) {
      for (const enemy of spawnQueue) if (enemy.boss) {
        enemy.hp = Math.ceil(enemy.hp * 1.15);enemy.maxHp = enemy.hp;enemy.damage = Math.ceil(enemy.damage * 1.15);
      }
      return;
    }
    const localWave = wave - 150;
    const scale = Math.pow(1.115, Math.floor(localWave / 10)) * (1 + localWave * .018);
    const amount = Math.min(7 + Math.ceil(localWave / 3), 24);
    spawnQueue = Array.from({length:amount},(_,i) => {
      const base = worldTwoEnemies[(Math.floor(localWave / 3) + i + Math.floor(Math.random()*3)) % worldTwoEnemies.length];
      const hp = Math.round(base.hp * scale);
      return {...base,hp,maxHp:hp,reward:Math.round(base.reward * (1 + localWave*.035)),damage:Math.ceil(base.damage*scale),x:-1,y:-.45,moveClock:0,attackClock:0,routeBias:Math.random()*100};
    });
    if (localWave % 10 === 0) {
      const bossBase = worldTwoBosses[(Math.floor(localWave/10)-1) % worldTwoBosses.length];
      const hp = Math.round(bossBase.hp * scale);
      spawnQueue.push({...bossBase,hp,maxHp:hp,damage:Math.ceil(bossBase.damage*scale),reward:Math.round(bossBase.reward*(1+localWave*.04)),speed:.038,x:-1,y:-.45,moveClock:0,attackClock:0});
      $('threatBadge').textContent = localWave === 150 ? 'FINAL FROST BOSS' : 'WORLD 2 BOSS';
      $('battleTitle').textContent = `${bossBase.name.replace('BOSS · ','')} · Wave ${wave}`;
      $('bossName').textContent = bossBase.name.replace('BOSS · ','');
      playBossCutscene(bossBase.name);
    } else {
      $('battleTitle').textContent = `World 2 · Wave ${wave} · ${spawnQueue.length} hostiles`;
      $('threatBadge').textContent = 'FROST FRONTIER';
    }
    updateHud();
  };
  window.damageEnemy = function version8DamageEnemy(enemy, amount) {
    const defeated = originalDamageEnemy(enemy, amount);
    if (defeated && enemy.boss && campaignWorld === 1 && wave >= 150 && /ULTIMATE LAST BOSS/i.test(enemy.name)) recordVictory(1);
    if (defeated) finishWorldTwo();
    return defeated;
  };
  window.tick = function version8Tick(...args) {
    originalTick(...args);
    if (campaignWorld === 2 && wave >= 300 && !active && !spawnQueue.length && !liveEnemies.length && !gameFinished) {
      gameFinished = true;
      recordVictory(2);
      $('victoryModal').querySelector('.eyebrow').textContent = 'CAMPAIGN COMPLETE · WORLD 2 · WAVE 300';
      $('victoryModal').querySelector('.modal-card > p:not(.eyebrow)').textContent = 'The frost frontier is secure. Your World 2 victory has been saved to your local profile.';
      $('victoryModal').classList.remove('hidden');
    }
  };
  $('waveButton').addEventListener('click', event => {
    event.preventDefault();event.stopImmediatePropagation();
    if (!active && !gameFinished) window.makeWave();
  }, true);
  const autoWaveButton = $('autoWaveButton');
  autoWaveButton.addEventListener('click', () => {
    if (campaignWorld === 2) setTimeout(() => { if (autoWave && !active && !gameFinished) window.makeWave(); }, 1100);
  }, true);

  function makeSelectionUI() {
    const controls = document.createElement('div');
    controls.id = 'multiSelectActions';controls.className = 'multi-select-actions hidden';
    controls.innerHTML = '<div><b id="multiSelectCount">0 STRUCTURES SELECTED</b><span id="multiSelectSummary">Drag across the board to select multiple structures.</span></div><div><button id="bulkUpgrade" class="small-button upgrade-button" type="button">UPGRADE ALL · ◈ 0</button><button id="bulkSell" class="small-button sell-button" type="button">SELL ALL · ◈ 0</button><button id="bulkClear" class="small-button" type="button">CLEAR GROUP</button></div>';
    $('turretActions').before(controls);
    dragBox = document.createElement('div');dragBox.className='selection-marquee';dragBox.hidden=true;$('board').appendChild(dragBox);
    $('bulkUpgrade').addEventListener('click', bulkUpgrade);
    $('bulkSell').addEventListener('click', bulkSell);
    $('bulkClear').addEventListener('click', clearMultiSelection);
  }
  function validSelectedCells() {
    return multiSelection.map(({x,y}) => cellAt(x,y)).filter(cell => cell?.item && !cell.base);
  }
  function refreshMultiSelection() {
    const holder = $('multiSelectActions'),cells = validSelectedCells();
    holder.classList.toggle('hidden',cells.length < 2);
    $('turretActions').classList.toggle('hidden',cells.length > 1);
    document.querySelectorAll('.tile').forEach(tile => {
      const x=Number(tile.dataset.x),y=Number(tile.dataset.y);
      tile.classList.toggle('multi-selected',multiSelection.some(point=>point.x===x&&point.y===y));
    });
    if (cells.length < 2) return;
    const upgradeTotal = cells.reduce((sum,cell) => sum + (cell.item.category === 'decoration' || (cell.item.level||1)>=10 ? 0 : upgradeCost(cell.item)),0);
    const sellTotal = cells.reduce((sum,cell) => sum + Math.floor((cell.item.investedCost||cell.item.cost||0)*.55),0);
    $('multiSelectCount').textContent = `${cells.length} STRUCTURES SELECTED`;
    $('multiSelectSummary').textContent = `${upgradeTotal.toLocaleString()} upgrade credits · ${sellTotal.toLocaleString()} sell refund`;
    $('bulkUpgrade').textContent = `UPGRADE ALL · ◈ ${upgradeTotal.toLocaleString()}`;
    $('bulkUpgrade').disabled = !upgradeTotal || credits < upgradeTotal;
    $('bulkSell').textContent = `SELL ALL · ◈ ${sellTotal.toLocaleString()}`;
  }
  function clearMultiSelection() { multiSelection=[];refreshMultiSelection();renderBoard(); }
  function bulkUpgrade() {
    const cells=validSelectedCells().filter(cell=>cell.item.category!=='decoration'&&(cell.item.level||1)<10);
    const cost=cells.reduce((sum,cell)=>sum+upgradeCost(cell.item),0);
    if (!cells.length || credits < cost) { setMessage('Not enough credits to upgrade the selected structures.');return; }
    credits-=cost;
    for (const cell of cells) {
      const item=cell.item,price=upgradeCost(item);item.level=(item.level||1)+1;item.investedCost=(item.investedCost||item.cost||0)+price;
      const extra=Math.max(20,Math.round(cell.maxHp*.12));cell.maxHp+=extra;cell.hp=Math.min(cell.maxHp,cell.hp+extra);
    }
    playSfx('upgrade');showCash(-cost,'BULK UPGRADES');setMessage(`${cells.length} structures upgraded for ${cost.toLocaleString()} credits.`);
    updateHud();renderShop();renderBoard();refreshMultiSelection();
  }
  function bulkSell() {
    const cells=validSelectedCells();if(!cells.length)return;
    const refund=cells.reduce((sum,cell)=>sum+Math.floor((cell.item.investedCost||cell.item.cost||0)*.55),0);
    for(const cell of cells){cell.item=null;cell.hp=cell.maxHp=0;cell.rebuild=null;cell.rebuildHp=0;}
    credits+=refund;playSfx('sell');showCash(refund,'BULK REFUND');setMessage(`${cells.length} structures sold for ${refund.toLocaleString()} credits.`);
    multiSelection=[];selectedTurret=null;updateHud();renderShop();renderBoard();refreshMultiSelection();
  }
  makeSelectionUI();
  const originalRenderBoard = window.renderBoard;
  window.renderBoard = function version8RenderBoard() {
    originalRenderBoard();
    if (dragBox && dragBox.parentElement !== $('board')) $('board').appendChild(dragBox);
  };
  const board=$('board');
  board.addEventListener('pointerdown', event => {
    if(event.button!==0 || !event.target.closest('.tile'))return;
    dragStart={x:event.clientX,y:event.clientY,pointerId:event.pointerId};dragMoved=false;
    const bounds=board.getBoundingClientRect();dragBox.hidden=true;dragBox.style.left=`${event.clientX-bounds.left}px`;dragBox.style.top=`${event.clientY-bounds.top}px`;
  }, true);
  document.addEventListener('pointermove', event => {
    if(!dragStart)return;
    if(Math.hypot(event.clientX-dragStart.x,event.clientY-dragStart.y)>7)dragMoved=true;
    if(!dragMoved)return;
    const bounds=board.getBoundingClientRect(),x1=Math.max(0,Math.min(dragStart.x,event.clientX)-bounds.left),x2=Math.min(bounds.width,Math.max(dragStart.x,event.clientX)-bounds.left),y1=Math.max(0,Math.min(dragStart.y,event.clientY)-bounds.top),y2=Math.min(bounds.height,Math.max(dragStart.y,event.clientY)-bounds.top);
    dragBox.hidden=false;dragBox.style.left=`${x1}px`;dragBox.style.top=`${y1}px`;dragBox.style.width=`${Math.max(0,x2-x1)}px`;dragBox.style.height=`${Math.max(0,y2-y1)}px`;
  }, true);
  document.addEventListener('pointerup', event => {
    if(!dragStart)return;
    if(dragMoved){
      const bounds=board.getBoundingClientRect(),xA=Math.min(dragStart.x,event.clientX),xB=Math.max(dragStart.x,event.clientX),yA=Math.min(dragStart.y,event.clientY),yB=Math.max(dragStart.y,event.clientY),tileWidth=bounds.width/11,tileHeight=bounds.height/11,selected=[];
      for(let y=0;y<11;y++)for(let x=0;x<11;x++){
        const cx=bounds.left+(x+.5)*tileWidth,cy=bounds.top+(y+.5)*tileHeight,cell=cellAt(x,y);
        if(cx>=xA&&cx<=xB&&cy>=yA&&cy<=yB&&cell?.item)selected.push({x,y});
      }
      multiSelection=selected;suppressClick=true;refreshMultiSelection();renderBoard();refreshMultiSelection();
      if(selected.length)setMessage(`${selected.length} structures selected · bulk upgrade or sell from the shop panel.`);
      else setMessage('No structures in that selection. Drag across placed turrets, blocks, or traps.');
    }
    dragStart=null;dragBox.hidden=true;
  }, true);
  board.addEventListener('click', event => {
    const tile=event.target.closest('.tile');if(!tile)return;
    if(suppressClick){suppressClick=false;event.preventDefault();event.stopImmediatePropagation();return;}
    if(event.ctrlKey||event.metaKey||event.shiftKey){
      event.preventDefault();event.stopImmediatePropagation();
      const point={x:Number(tile.dataset.x),y:Number(tile.dataset.y)},cell=cellAt(point.x,point.y);if(!cell?.item)return;
      const exists=multiSelection.some(item=>item.x===point.x&&item.y===point.y);
      multiSelection=exists?multiSelection.filter(item=>item.x!==point.x||item.y!==point.y):[...multiSelection,point];
      refreshMultiSelection();renderBoard();refreshMultiSelection();
    } else if(multiSelection.length){ clearMultiSelection(); }
  }, true);
  document.addEventListener('click', event => {
    if(event.target.closest('#upgradeTurretButton')&&multiSelection.length>1){event.preventDefault();event.stopImmediatePropagation();bulkUpgrade();}
    if(event.target.closest('#sellTurretButton')&&multiSelection.length>1){event.preventDefault();event.stopImmediatePropagation();bulkSell();}
    if(event.target.closest('#clearSelection')&&multiSelection.length){event.preventDefault();event.stopImmediatePropagation();clearMultiSelection();setMessage('Multi-selection cleared.');}
  }, true);

  // Existing saved profiles are restored automatically on this device.
  try {
    const savedName=localStorage.getItem('lastLightActiveProfile');
    if(savedName){currentProfile=savedName;profile=loadProfile(savedName);}
  } catch {}
  refreshProfileUI();
  const completionWatcher=setInterval(() => {
    if(campaignWorld===2 && wave>=300 && !active && !spawnQueue.length && !liveEnemies.length && !gameFinished){
      gameFinished=true;recordVictory(2);
      $('victoryModal').querySelector('.eyebrow').textContent='CAMPAIGN COMPLETE · WORLD 2 · WAVE 300';
      $('victoryModal').querySelector('.modal-card > p:not(.eyebrow)').textContent='The frost frontier is secure. Your World 2 victory has been saved to your local profile.';
      $('victoryModal').classList.remove('hidden');
    }
  },500);
  void completionWatcher;
})();
