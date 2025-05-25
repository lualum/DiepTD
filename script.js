let localSaving = true;

// Random Function
function getRandomInt(max) {
  return Math.floor(Math.random() * max + 1);
}
// Wave Lists
// Square, Triangle, Pentagon, Crasher, AlphaPentagon, MinTime, MaxTime, # of Enemies

const waves = [
  [1, 0, 0, 0, 0, 0, 0, 0, 100, 200, 20],
  [1, 0, 0, 0, 0, 0, 0, 0, 100, 150, 20],
  [1, 0, 0, 0, 0, 0, 0, 0, 50, 100, 30],
  [4, 1, 0, 0, 0, 0, 0, 0, 100, 200, 30],
  [3, 1, 0, 0, 0, 0, 0, 0, 100, 150, 30],
  [2, 1, 0, 0, 0, 0, 0, 0, 50, 75, 50],
  [2, 3, 0, 0, 0, 0, 0, 0, 10, 20, 40],
  [1, 1, 0, 0, 0, 0, 0, 0, 50, 100, 50],
  [1, 0, 0, 0, 0, 0, 0, 0, 20, 30, 20],
  [1, 1, 0, 0, 0, 0, 0, 0, 40, 70, 10],
  [0, 1, 0, 0, 0, 0, 0, 0, 20, 30, 20],
  [6, 5, 2, 1, 0, 0, 0, 0, 100, 200, 10],
  [6, 5, 2, 1, 0, 0, 0, 0, 100, 150, 50],
  [6, 5, 2, 1, 0, 0, 0, 0, 50, 100, 50],
  [0, 0, 0, 1, 0, 0, 0, 0, 10, 20, 10],
  [1, 1, 1, 0, 0, 0, 0, 0, 40, 70, 40],
  [0, 0, 1, 0, 0, 0, 0, 0, 10, 20, 15],
  [1, 1, 1, 0, 0, 0, 0, 0, 10, 20, 10],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 20],
  [0, 0, 0, 0, 1, 0, 0, 0, 10, 20, 1],
  [0, 0, 0, 3, 1, 0, 0, 0, 200, 300, 5],
  [0, 0, 0, 5, 1, 0, 0, 0, 100, 150, 10],
  [0, 0, 0, 1, 0, 0, 0, 0, 10, 15, 20],
  [0, 1, 0, 0, 0, 0, 0, 0, 20, 50, 50],
  [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 100],
  [0, 0, 0, 1, 0, 0, 0, 0, 50, 100, 20],
  [0, 0, 1, 0, 0, 0, 0, 0, 20, 30, 10],
  [0, 0, 0, 0, 1, 0, 0, 0, 2, 3, 15],
  [0, 0, 9, 0, 1, 0, 0, 0, 10, 20, 20],
  [0, 0, 0, 1, 0, 0, 0, 0, 20, 30, 30],
  [0, 1, 0, 0, 0, 0, 0, 0, 2, 3, 40],
  [0, 0, 1, 0, 0, 0, 0, 0, 2, 3, 20],
  [0, 0, 0, 1, 0, 0, 0, 0, 2, 3, 20],
  [0, 0, 0, 0, 1, 0, 0, 0, 2, 3, 10],
  [5, 4, 3, 2, 1, 0, 0, 0, 40, 70, 100],
  [0, 0, 0, 0, 0, 1, 0, 0, 200, 200, 1],
  [0, 1, 0, 0, 0, 0, 0, 0, 10, 10, 10],
  [0, 1, 0, 0, 0, 0, 0, 0, 8, 8, 80],
  [0, 1, 0, 0, 0, 0, 0, 0, 6, 6, 60],
  [0, 1, 0, 0, 0, 0, 0, 0, 4, 4, 40],
  [0, 1, 0, 0, 0, 0, 0, 0, 2, 2, 20],
  [0, 0, 0, 0, 0, 1, 0, 0, 200, 200, 3],
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 30],
  [0, 0, 1, 1, 0, 0, 0, 0, 50, 50, 30],
  [0, 0, 1, 0, 1, 1, 0, 0, 200, 200, 30],
  [0, 0, 0, 0, 0, 0, 1, 0, 200, 200, 1],
  [0, 0, 0, 0, 0, 1, 1, 0, 200, 200, 20],
  [0, 0, 0, 0, 0, 0, 1, 0, 200, 200, 1],
  [0, 0, 0, 0, 1, 0, 0, 0, 20, 20, 15],
  [0, 0, 0, 0, 1, 0, 0, 0, 20, 20, 15],
  [0, 0, 0, 0, 0, 0, 1, 0, 10, 10, 5],
  [0, 0, 0, 0, 1, 1, 1, 0, 2, 2, 20],
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 100],
  [0, 0, 0, 0, 1, 1, 0, 0, 40, 70, 50],
  [0, 0, 0, 0, 0, 0, 1, 0, 10, 10, 5],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 3, 0, 1, 100, 100, 15],
  [0, 0, 0, 0, 1, 0, 0, 1, 10, 10, 10],
  [0, 0, 0, 0, 0, 0, 1, 0, 100, 100, 100],
  [0, 0, 0, 0, 0, 1, 0, 0, 10, 10, 10],
  [0, 0, 0, 0, 0, 0, 1, 0, 200, 200, 3],
  [0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 20],
  [0, 0, 3, 0, 3, 0, 0, 1, 40, 70, 50],
  [0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 30],
  [0, 0, 9, 0, 0, 0, 0, 1, 40, 70, 50],
  [0, 0, 5, 0, 4, 0, 0, 1, 40, 70, 20],
  [0, 0, 5, 1, 2, 1, 1, 1, 40, 70, 10],
  [0, 0, 0, 0, 0, 0, 0, 1, 40, 70, 50],
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 50],
  [0, 0, 0, 0, 1, 0, 0, 1, 100, 100, 50],
  [0, 0, 0, 0, 0, 0, 1, 1, 10, 10, 10],
  [0, 0, 0, 0, 0, 0, 1, 1, 10, 10, 20],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 100],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 100],
  [0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 50],
  [0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 50],
  [0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 50],
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 500],
  [0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 50],
  [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 50],
  [0, 0, 0, 0, 0, 0, 0, 1, 10, 10, 50],
  [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 100],
]

// Setup Variables/Lists/Matrices
const p = -1;

let game;
let temp;
let music = false;
let displayQuality = 'normal';

let enemyPosX = [];
let enemyPosY = [];
let enemyMove = [];
let enemyType = [];
let enemyHealth = [];
let enemyOrin = [];

let trapPosX = [];
let trapPosY = [];
let trapOrin = [];
let trapDirect = [];
let trapHealth = [];
let trapRadii = [];
let trapGlide = [];

let dronePosX = [];
let dronePosY = [];
let droneOrin = [];
let droneHealth = [];

let debugShowTurretOutput = false;
let debugShowEnemyRadii = false;
let lagControlSpin = true;
let optionShowTurretRange = true;
let debugShowTraps = 'low';
let debugShowDrones = true;
let debugShowHealth = true;
let debugTileLines = true;

let waveNum = 0;
let waveDelay = 0;
let waveDelayCounter = 0;
let enemiesSpawned = 0;
let hp = 1000;
let time = 0;

let xp = 1000;
let cheatCheck = 1000;
let randTrapValue;
let paused = false;

if (localStorage.getItem('game1') == null || localSaving == false) {
  game = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [p, p, p, p, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, p, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, p, 0, 0, 0, p, p, p],
    [0, 0, 0, p, 0, 0, 0, p, 0, 0],
    [0, 0, 0, p, 0, 0, 0, p, 0, 0],
    [0, p, p, p, 0, 0, 0, p, 0, 0],
    [0, p, 0, 0, 0, 0, 0, p, 0, 0],
    [0, p, p, p, p, p, p, p, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  /*
  game = [
    [20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [p, p, p, p, 20, 20, 20, 20, 20, 20],
    [20, 20, 20, p, 20, 20, 20, 20, 20, 20],
    [20, 20, 20, p, 20, 20, 20, p, p, p],
    [20, 20, 20, p, 20, 20, 20, p, 20, 20],
    [20, 20, 20, p, 20, 20, 20, p, 20, 20],
    [20, p, p, p, 20, 20, 20, p, 20, 20],
    [20, p, 20, 20, 20, 20, 20, p, 20, 20],
    [20, p, p, p, p, p, p, p, 20, 20],
    [20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
  ];
*/
  enemyPosX = [];
  enemyPosY = [];
  enemyMove = [];
  enemyType = [];
  enemyHealth = [];
  enemyOrin = [];

  trapPosX = [];
  trapPosY = [];
  trapOrin = [];
  trapDirect = [];
  trapHealth = [];
  trapRadii = [];
  trapGlide = [];

  debugShowTurretOutput = false;
  debugShowEnemyRadii = false;
  debugShowTraps = true;
  lagControlSpin = true;
  optionShowTurretRange = true;

  waveNum = 0;
  waveDelay = 0;
  waveDelayCounter = 0;
  enemiesSpawned = 0;
  hp = 1000;
  time = 0;
  xp = 1000;
}
else if (localSaving == true) {
  game = [
    JSON.parse(localStorage.getItem('game0')),
    JSON.parse(localStorage.getItem('game1')),
    JSON.parse(localStorage.getItem('game2')),
    JSON.parse(localStorage.getItem('game3')),
    JSON.parse(localStorage.getItem('game4')),
    JSON.parse(localStorage.getItem('game5')),
    JSON.parse(localStorage.getItem('game6')),
    JSON.parse(localStorage.getItem('game7')),
    JSON.parse(localStorage.getItem('game8')),
    JSON.parse(localStorage.getItem('game9')),
  ];

  enemyPosX = JSON.parse(localStorage.getItem('enemyPosX'));
  enemyPosY = JSON.parse(localStorage.getItem('enemyPosY'));
  enemyMove = JSON.parse(localStorage.getItem('enemyMove'));
  enemyType = JSON.parse(localStorage.getItem('enemyType'));
  enemyHealth = JSON.parse(localStorage.getItem('enemyHealth'));
  enemyOrin = JSON.parse(localStorage.getItem('enemyOrin'));

  trapPosX = JSON.parse(localStorage.getItem('trapPosX'));
  trapPosY = JSON.parse(localStorage.getItem('trapPosY'));
  trapOrin = JSON.parse(localStorage.getItem('trapOrin'));
  trapDirect = JSON.parse(localStorage.getItem('trapDirect'));
  trapHealth = JSON.parse(localStorage.getItem('trapHealth'));
  trapRadii = JSON.parse(localStorage.getItem('trapRadii'));
  trapGlide = JSON.parse(localStorage.getItem('trapGlide'));

  debugShowTurretOutput = Boolean(localStorage.getItem('debugShowTurretOutput'));
  debugShowEnemyRadii = Boolean(localStorage.getItem('debugShowEnemyRadii'));
  lagControlSpin = Boolean(localStorage.getItem('lagControlSpin'));
  optionShowTurretRange = Boolean(localStorage.getItem('optionShowTurretRange'));

  waveNum = parseInt(localStorage.getItem('waveNum'));
  waveDelay = parseInt(localStorage.getItem('waveDelay'));
  waveDelayCounter = parseInt(localStorage.getItem('waveDelayCounter'));
  enemiesSpawned = parseInt(localStorage.getItem('enemiesSpawned'));
  hp = parseInt(localStorage.getItem('hp'));
  time = parseInt(localStorage.getItem('time'));
  xp = parseInt(localStorage.getItem('xp'));
  cheatCheck = parseInt(localStorage.getItem('xp'));
}

const blankGrid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let tankOrin = blankGrid;
let tankShoot = blankGrid;

const enemyRadii = [15, 15, 20, 12, 30, 36, 36, 36];
// Sq: 30 Tr: 30 Pe: 40 Cr: 15 Al: 100

let turretPosX = [];
let turretPosY = [];
let turretGameX = [];
let turretGameY = [];
let turretOrin = [];
let turretType = [];
let turretRange = [125, 150, 225, 150, 115, 175, 300, 175, 175, 175, 175, -1, -1, -2, -2, 200, 200, 200, 500, 2000];

let trapperPosX = [];
let trapperPosY = [];
let trapperGameX = [];
let trapperGameY = [];
let trapperOrin = [];
let trapperType = [];

let spawnerPosX = [];
let spawnerPosY = [];
let spawnerGameX = [];
let spawnerGameY = [];
let spawnerOrin = [];
let spawnerType = [];

let turretAngle;
let turretCenterX;
let turretCenterY;
let turretOutX;
let turretOutY;

let trapperAngle;
let trapperCenterX;
let trapperCenterY;
let trapperOutX;
let trapperOutY;

let spawnerAngle;
let spawnerCenterX;
let spawnerCenterY;
let spawnerOutX;
let spawnerOutY;

let bulletPosX = [];
let bulletPosY = [];
let bulletOrin = [];
let bulletHealth = [];
let bulletRadii = [];
let bulletSpeed = [];

let randomList = [];

let enemyTypeHealth = [15, 45, 450, 20, 200, 5000, 10000, 10000];
let enemyTypeXp = [15, 45, 450, 20, 1500, 1750, 2000, 2000];

let chosenTank = 0;
let spawnBulletLoop = 0;
let spawnEnemyLoop = 0;

let screenOrin = 0;

let endingCycle = 0;

// Updating Functions
let updateInterval = setInterval(update, 12.5);
let pausedInterval;

// Setup Canvas
let c = document.getElementById('canvas');
let m = document.getElementById('menu');
var ctx = c.getContext('2d');

let enemyMoveSpeed;

let mouseX;
let mouseY;
let tileX = 1;
let tileY = 1;

let tankToEnemyDistance;
let tankToEnemyX;
let tankToEnemyY;

//let music = document.querySelector("video");
let mainDiv = document.getElementById("mainDiv");

//debug code
// Debug STARTUP
console.log('On STARTUP:');
console.log('Number of Bullets Being Drawn: ' + bulletPosX.length);
console.log('Number of Enemies Being Drawn: ' + enemyPosX.length);
console.log('');
console.log('Use D to Print Debug INFO');
console.log('Use F1 to Show Turret Output [Debug]');
console.log('Use F2 to Show Radii of Enemies [Debug]');
console.log('Use F3 to Toggle Idle Spin [Lag]');
console.log('Use F4 to Toggle show turret range [option]');

// Setup KeyPresses (0-9) & Debug (D)
document.addEventListener('beforeunload', updateLocalStorage);
document.addEventListener('keyup', function (event) {
  if (event.keyCode == 68) {
    console.log('--------------------------------------');
    console.log('Debug Info:');
    console.log('Number of Bullets Being Drawn: ' + bulletPosX.length);
    console.log('Number of Traps Being Drawn: ' + trapPosX.length);
    console.log('Number of Drones Being Drawn: ' + dronePosX.length);
    console.log('Number of Enemies Being Drawn: ' + enemyMove.length);
    console.log('Show Turret Output: ' + debugShowTurretOutput);
    console.log('Show Enemy Radii: ' + debugShowEnemyRadii);
  }
  else if (event.keyCode == 112) {
    console.log('--------------------------------------');
    debugShowTurretOutput = !debugShowTurretOutput;
    console.log('Show Turret Output is set to ' + debugShowTurretOutput);
  }
  else if (event.keyCode == 113) {
    console.log('--------------------------------------');
    debugShowEnemyRadii = !debugShowEnemyRadii;
    console.log('Show Enemy Radii: ' + debugShowEnemyRadii);
  }
  else if (event.keyCode == 114) {
    console.log('--------------------------------------');
    lagControlSpin = !lagControlSpin;
    console.log('Idle Tank Spin: ' + lagControlSpin);
  }
  else if (event.keyCode == 115) {
    console.log('--------------------------------------');
    optionShowTurretRange = !optionShowTurretRange;
    console.log('Show turret range: ' + optionShowTurretRange);
  }
  else if (event.keyCode == 82) {
    console.log('--------------------------------------');
    debugShowDrones = !debugShowDrones;
    console.log('Showing Drones: ' + debugShowDrones);
  }
  else if (event.keyCode == 84) {
    console.log('--------------------------------------');
    if(debugShowTraps == 'low'){
      debugShowTraps = false;
    }
    else {
    debugShowTraps = !debugShowTraps;
    }
    console.log('Showing Traps: ' + debugShowTraps);
  }
  else if (event.keyCode == 89) {
    console.log('--------------------------------------');
    debugShowHealth = !debugShowHealth;
    console.log('Showing Health Bars: ' + debugShowHealth);
  }
  else if (event.keyCode == 81) {
    console.log('--------------------------------------');
    debugTileLines = !debugTileLines;
    console.log('Showing Tile Lines: ' + debugTileLines);
  }
  else if (event.keyCode == 80) {
    console.log('--------------------------------------');
    paused = !paused;
    if (paused) {
      clearInterval(updateInterval);
      pause();
      pausedInterval = setInterval(drawMenu, 10);
    }
    else {
      updateInterval = setInterval(update, 12.5);
      clearInterval(pausedInterval);
    }
    console.log('Paused?: ' + paused);
  }
  else if (event.keyCode == 27) {
    mainDiv.requestFullscreen();
  }
  else if (event.keyCode == 13 && hp == 0) {
    location.reload();
  }
  else if (event.keyCode == 77) {
    music = !music;
    if (music) { document.getElementById('music').play(); }
    else { document.getElementById('music').pause(); }
    console.log("Play Music Has Been Set To: " + music);
  }
  else if (event.keyCode == 192) {
    clearLocalStorage();
    location.reload();
  }
});

// Setup Cursor
function buildTank(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const gX = (x - x % 75) / 75;
  const gY = (y - y % 75) / 75;
  const gPos = game[gY][gX];
  if (gPos >= 0 && gPos != chosenTank) {
    if (chosenTank == 1 && xp >= 250 && gPos == 0) {
      xp -= 250; game[gY][gX] = chosenTank;
    }
    else if (chosenTank > 1 && chosenTank < 6) {
      if (gPos == 1 && xp >= 250) {
        xp -= 250; game[gY][gX] = chosenTank;
      }
      else if (gPos == 0 && xp >= 500) {
        xp -= 500; game[gY][gX] = chosenTank;
      }

    }
    else if (chosenTank > 5 && chosenTank < 12) {
      if (game[gY][gX] > 1 && game[gY][gX] < 6 && xp >= 1500) {
        xp -= 1500; game[gY][gX] = chosenTank;
      }
      else if (gPos == 0 && xp >= 2000) {
        xp -= 2000; game[gY][gX] = chosenTank;
      }
    }
    else if (chosenTank == 12 || chosenTank == 14) {
      if (game[gY][gX] > 1 && game[gY][gX] < 6 && xp >= 2000) {
        xp -= 2000; game[gY][gX] = chosenTank;
      }
      else if (gPos == 0 && xp >= 2500) {
        xp -= 2500; game[gY][gX] = chosenTank;
      }
    }
    else if (chosenTank == 13) {
      if (gPos == 12 && xp >= 2000) {
        xp -= 2000; game[gY][gX] = chosenTank;
      }
      else if (gPos == 0 && xp >= 4500) {
        xp -= 4500; game[gY][gX] = chosenTank;
      }
    }
    else if (chosenTank == 15) {
      if (gPos == 14 && xp >= 2500) {
        xp -= 2500; game[gY][gX] = chosenTank;
      }
      else if (gPos == 0 && xp >= 4500) {
        xp -= 5000; game[gY][gX] = chosenTank;
      }
    }
    else if (chosenTank > 15 && chosenTank < 20 && waveNum > 39) {
      if (game[gY][gX] > 5 && game[gY][gX] < 12 && xp >= 3000) {
        xp -= 3000; game[gY][gX] = chosenTank;
      }
      else if (gPos == 0 && xp >= 5000) {
        xp -= 5000; game[gY][gX] = chosenTank;
      }
    }
    else if (chosenTank == 20 && xp >= 100000 && gPos == 0 && waveNum > 49) {
      xp -= 100000; game[gY][gX] = chosenTank;
    }
  }
  if (tileX == (x - x % 75) / 75 && tileY == (y - y % 75) / 75) {
    tileX = -1;
    tileY = -1;
  }
  else {
    tileX = (x - x % 75) / 75;
    tileY = (y - y % 75) / 75;
  }
}
m.addEventListener('mousedown', function (e) { menuClick() })
c.addEventListener('mousedown', function (e) { buildTank(canvas, e) })

window.oncontextmenu = function () {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const gX = (x - x % 75) / 75;
  const gY = (y - y % 75) / 75;
  const gPos = game[gY][gX];
  if (gPos > 0) {
    if (gPos == 1) { xp += 150; }
    else if (gPos > 1 && gPos < 6) { xp += 400; }
    else if (gPos > 5 && gPos < 12) { xp += 1900; }
    else if (gPos == 12) { xp += 2200; cheatCheck+=2200;}
    else if (gPos == 13) { xp += 4000; cheatCheck+=4000;}
    else if (gPos == 14) { xp += 2200; cheatCheck+=2200;}
    else if (gPos == 15) { xp += 4000; cheatCheck+=4000;}
    else if (gPos > 15 && gPos < 20) { xp += 4000; cheatCheck+=4000;}
    else if (gPos == 20) { xp += 40000; cheatCheck+=40000; }
    game[gY][gX] = 0;
  }
}
document.oncontextmenu = new Function('return false;');

document.addEventListener('mousemove', (event) => {
  const rect = canvas.getBoundingClientRect();
  mouseX = event.clientX - rect.left - 753;
  mouseY = event.clientY - rect.top;
});

// Update local storage
function updateLocalStorage() {
  localStorage.setItem('game0', JSON.stringify(game[0]));
  localStorage.setItem('game1', JSON.stringify(game[1]));
  localStorage.setItem('game2', JSON.stringify(game[2]));
  localStorage.setItem('game3', JSON.stringify(game[3]));
  localStorage.setItem('game4', JSON.stringify(game[4]));
  localStorage.setItem('game5', JSON.stringify(game[5]));
  localStorage.setItem('game6', JSON.stringify(game[6]));
  localStorage.setItem('game7', JSON.stringify(game[7]));
  localStorage.setItem('game8', JSON.stringify(game[8]));
  localStorage.setItem('game9', JSON.stringify(game[9]));

  localStorage.setItem('enemyPosX', JSON.stringify(enemyPosX));
  localStorage.setItem('enemyPosY', JSON.stringify(enemyPosY));
  localStorage.setItem('enemyMove', JSON.stringify(enemyMove));
  localStorage.setItem('enemyType', JSON.stringify(enemyType));
  localStorage.setItem('enemyHealth', JSON.stringify(enemyHealth));
  localStorage.setItem('enemyOrin', JSON.stringify(enemyOrin));

  localStorage.setItem('trapPosX', JSON.stringify(trapPosX));
  localStorage.setItem('trapPosY', JSON.stringify(trapPosY));
  localStorage.setItem('trapOrin', JSON.stringify(trapOrin));
  localStorage.setItem('trapDirect', JSON.stringify(trapDirect));
  localStorage.setItem('trapHealth', JSON.stringify(trapHealth));
  localStorage.setItem('trapRadii', JSON.stringify(trapRadii));
  localStorage.setItem('trapGlide', JSON.stringify(trapGlide));

  localStorage.setItem('spawnBulletLoop', spawnBulletLoop);
  localStorage.setItem('spawnEnemyLoop', spawnEnemyLoop);
  localStorage.setItem('lagControlSpin', lagControlSpin);
  localStorage.setItem('optionShowTurretRange', optionShowTurretRange);
  localStorage.setItem('waveNum', waveNum);
  localStorage.setItem('waveDelay', waveDelay);
  localStorage.setItem('waveDelayCounter', waveDelayCounter);
  localStorage.setItem('enemiesSpawned', enemiesSpawned);
  localStorage.setItem('hp', hp);
  localStorage.setItem('xp', xp);
  localStorage.setItem('time', time);
}

document.getElementById('music').addEventListener('ended', function () {
  this.currentTime = 0;
  this.play();
}, false);

// Update Function
function update() {
  resetUpdate();
  spawnWaves();
  despawnUpdate();
  handleCollisions();
  displayUpdate();

  time++;
  if (time % 60 == 0) {
    updateLocalStorage();
  }

  spawnBulletLoop++;
  spawnBullets(spawnBulletLoop);
  if (spawnBulletLoop == 25200) { spawnBulletLoop = 0; }
  debugFeatures();

  drawMenu();

  //xp async
  if ((xp-cheatCheck)>2000){
    xp = cheatCheck;
  }
  else {
    cheatCheck = xp;
  }
  
}

function pause() {
  ctx.clear;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  displayUpdate();
  drawMenu();

  ctx.fillStyle = 'rgba(43,43,43,0.5)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#FFFFFF';
  ctx.strokeStyle = '#4A4A4A';
  text('Paused', 375, 400, 70);
}

function resetUpdate() {
  for (let i = 0; i < enemyPosX.length; i++){
    if (enemyType[i] == 8){
      enemyTypeHealth = [15, 45, 10000, 20, 30000, 4500, 10000, 10000];
      break;
    }
    else {
      enemyTypeHealth = [15, 45, 300, 20, 1500, 4500, 10000, 10000];
    }
  }

  // Clear and Reset Variables
  ctx.clear;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  turretPosX = [];
  turretPosY = [];
  turretOrin = [];
  turretType = [];
  turretGameX = [];
  turretGameY = [];

  trapperPosX = [];
  trapperPosY = [];
  trapperGameX = [];
  trapperGameY = [];
  trapperOrin = [];
  trapperType = [];

  spawnerPosX = [];
  spawnerPosY = [];
  spawnerGameX = [];
  spawnerGameY = [];
  spawnerOrin = [];
  spawnerType = [];

  tankShoot = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
}

function displayUpdate() {
  // Draw Tanks
  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 10; i++) {
      drawBack(75 * i, 75 * j);
    }
  }
  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 10; i++) {
      tankToEnemyDistance = 2147483647;
      tankToEnemyX = 0;
      tankToEnemyY = 0;
      for (let x = 0; x < enemyMove.length; x++) {
        if (distance(i * 75 + 37.5, j * 75 + 37.5, enemyPosX[x], enemyPosY[x]) < tankToEnemyDistance) {
          tankToEnemyDistance = distance(i * 75 + 37.5, j * 75 + 37.5, enemyPosX[x], enemyPosY[x]);
          tankToEnemyX = enemyPosX[x];
          tankToEnemyY = enemyPosY[x];
        }
      }
      if (enemyMove.length > 0 && tankToEnemyDistance <= pow(turretRange[game[j][i] - 1])) {
        tankOrin[j][i] = Math.atan2(tankToEnemyY - j * 75 - 37.5, tankToEnemyX - i * 75 - 37.5) * 180 / Math.PI;
        tankShoot[j][i] = 1;
        if (game[j][i] == 2) {
          tankOrin[j][i] += 0.2
        }
      }
      else {
        tankShoot[j][i] = 0;
        randomList = [];
        if (turretRange[game[j][i] - 1] == -1) {
          if (i > 0) {
            if (j > 0 && game[j - 1][i - 1] == -1) { randomList.push(0); }
            if (game[j][i - 1] == -1) { randomList.push(1); }
            if (j < 9 && game[j + 1][i - 1] == -1) { randomList.push(2); }
          }
          if (j > 0 && game[j - 1][i] == -1) { randomList.push(3); }
          if (j < 9 && game[j + 1][i] == -1) { randomList.push(5); }
          if (i < 9) {
            if (j > 0 && game[j - 1][i + 1] == -1) { randomList.push(6); }
            if (game[j][i + 1] == -1) { randomList.push(7); }
            if (j < 9 && game[j + 1][i + 1] == -1) { randomList.push(8); }
          }
          randTrapValue = randomList[getRandomInt(randomList.length) - 1];
          if (spawnBulletLoop % 300 == 0) {
            tankOrin[j][i] = Math.atan2(randTrapValue % 3 - 1, Math.floor(randTrapValue / 3) - 1) * 180 / Math.PI;
          }
        }
        else {
          if (lagControlSpin == true) { tankOrin[j][i]--; }
        }

      }
      if (game[j][i] == -1) { drawPathBorder(i, j); }
      else if (game[j][i] == 1) { drawTank1(i, j, tankOrin[j][i], 'yes'); }
      else if (game[j][i] == 2) { drawTank2(i, j, tankOrin[j][i], 'yes'); }
      else if (game[j][i] == 3) { drawTank3(i, j, tankOrin[j][i], 'yes'); }
      else if (game[j][i] == 4) { drawTank4(i, j, tankOrin[j][i], 'yes'); }
      else if (game[j][i] == 5) { drawTank5(i, j, tankOrin[j][i], 'yes'); }
      else if (game[j][i] == 6) { drawTank6(i, j, tankOrin[j][i], 'yes'); }
      else if (game[j][i] == 7) { drawTank7(i, j, tankOrin[j][i], 'yes'); }
      else if (game[j][i] == 8) { drawTank8(i, j, tankOrin[j][i], 'yes'); }
      else if (game[j][i] == 9) { drawTank9(i, j, tankOrin[j][i], 'yes'); }
      else if (game[j][i] == 10) { drawTank10(i, j, tankOrin[j][i], 'yes'); }
      else if (game[j][i] == 11) { drawTank11(i, j, tankOrin[j][i], 'yes'); }
      else if (game[j][i] == 12) { drawTank12(i, j, tankOrin[j][i], 'yes'); }
      else if (game[j][i] == 13) { drawTank13(i, j, tankOrin[j][i], 'yes'); }
      else if (game[j][i] == 14) { drawTank14(i, j, tankOrin[j][i], 'yes'); }
      else if (game[j][i] == 15) { drawTank15(i, j, tankOrin[j][i], 'yes'); }
      else if (game[j][i] == 16) { drawTank16(i, j, tankOrin[j][i], 'yes'); }
      else if (game[j][i] == 17) { drawTank17(i, j, tankOrin[j][i], 'yes'); }
      else if (game[j][i] == 18) { drawTank18(i, j, tankOrin[j][i], 'yes'); }
      else if (game[j][i] == 19) { drawTank19(i, j, tankOrin[j][i], 'yes'); }
    }
  }
  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 10; i++) {
      if (game[j][i] == 20) { drawTank20(i, j, tankOrin[j][i], 'yes'); }
    }
  }

  // Display and Move Enemy
  for (let i = 0; i < enemyMove.length; i++) {
    if (enemyType[i] < 4) { enemyMoveSpeed = 1; }
    else if (enemyType[i] == 4) { enemyMoveSpeed = 4; }
    else if (enemyType[i] == 5) {
      enemyMoveSpeed = 0.5;
      if (enemyMove[i] % 50 == 0) {
        spawnEnemy(enemyPosX[i], enemyPosY[i], enemyMove[i], 4);
      }
    }
    else if (enemyType[i] == 6) {
      enemyMoveSpeed = 0.5;
      if (enemyMove[i] % 25 == 0) {
        spawnEnemy(enemyPosX[i], enemyPosY[i], enemyMove[i], 2);
      }
    }
    else if (enemyType[i] == 7) {
      enemyMoveSpeed = 0.5;
    }
    else if (enemyType[i] == 8) {
      enemyMoveSpeed = 0.5;
      if (enemyMove[i] % 5 == 0) {
        spawnEnemy(enemyPosX[i], enemyPosY[i], enemyMove[i], 4);
      }
    }

    if (enemyType[i] == 8) {
      if (enemyMove[i] < 300) { enemyPosX[i] += enemyMoveSpeed; enemyOrin[i] = Math.PI; }
      else if (enemyMove[i] < 675) { enemyPosY[i] += enemyMoveSpeed; enemyOrin[i] = Math.PI*3/2; }
      else if (enemyMove[i] < 825) { enemyPosX[i] -= enemyMoveSpeed; enemyOrin[i] = 0; }
      else if (enemyMove[i] < 975) { enemyPosY[i] += enemyMoveSpeed; enemyOrin[i] = Math.PI*3/2;}
      else if (enemyMove[i] < 1425) { enemyPosX[i] += enemyMoveSpeed; enemyOrin[i] = Math.PI; }
      else if (enemyMove[i] < 1800) { enemyPosY[i] -= enemyMoveSpeed; enemyOrin[i] = Math.PI/2;}
      else if (enemyMove[i] < 2100) { enemyPosX[i] += enemyMoveSpeed; enemyOrin[i] = Math.PI;}
    }
    else {
      if (enemyMove[i] < 300) { enemyPosX[i] += enemyMoveSpeed; }
      else if (enemyMove[i] < 675) { enemyPosY[i] += enemyMoveSpeed; }
      else if (enemyMove[i] < 825) { enemyPosX[i] -= enemyMoveSpeed; }
      else if (enemyMove[i] < 975) { enemyPosY[i] += enemyMoveSpeed; }
      else if (enemyMove[i] < 1425) { enemyPosX[i] += enemyMoveSpeed; }
      else if (enemyMove[i] < 1800) { enemyPosY[i] -= enemyMoveSpeed; }
      else if (enemyMove[i] < 2100) { enemyPosX[i] += enemyMoveSpeed; }
    }
    enemyMove[i] += enemyMoveSpeed;

    // Enemy Drawing
    if (enemyType[i] == 1) { drawPoly(enemyPosX[i], enemyPosY[i], 4, enemyRadii[enemyType[i] - 1], enemyOrin[i], '#ffe46b'); }
    else if (enemyType[i] == 2) { drawPoly(enemyPosX[i], enemyPosY[i], 3, enemyRadii[enemyType[i] - 1], enemyOrin[i], '#fc7676'); }
    else if (enemyType[i] == 3) { drawPoly(enemyPosX[i], enemyPosY[i], 5, enemyRadii[enemyType[i] - 1], enemyOrin[i], '#768cfc'); }
    else if (enemyType[i] == 4) { drawPoly(enemyPosX[i], enemyPosY[i], 3, enemyRadii[enemyType[i] - 1], enemyOrin[i], '#f177dd'); }
    else if (enemyType[i] == 5) { drawPoly(enemyPosX[i], enemyPosY[i], 5, enemyRadii[enemyType[i] - 1], enemyOrin[i], '#768cfc'); }
    else if (enemyType[i] == 6) { drawPoly(enemyPosX[i], enemyPosY[i], 6, enemyRadii[enemyType[i] - 1], enemyOrin[i], '#fcc276'); }
    else if (enemyType[i] == 7) { drawPoly(enemyPosX[i], enemyPosY[i], 8, enemyRadii[enemyType[i] - 1], enemyOrin[i], '#8EFFFB'); }
    else if (enemyType[i] == 8) { 
      ctx.fillStyle = '#9F9F9F';
      if (enemyOrin[i] == Math.PI/2) {
        ctx.beginPath();
        ctx.moveTo(enemyPosX[i], enemyPosY[i] + 7);
        ctx.lineTo(enemyPosX[i] - 25, enemyPosY[i] - 28);
        ctx.lineTo(enemyPosX[i] + 25, enemyPosY[i] - 28);
        ctx.lineTo(enemyPosX[i], enemyPosY[i] + 7);
        ctx.fill();
        outline(2);
      }
      else if (enemyOrin[i] == Math.PI) {
        ctx.beginPath();
        ctx.moveTo(enemyPosX[i] - 7, enemyPosY[i]);
        ctx.lineTo(enemyPosX[i] + 28, enemyPosY[i] - 25);
        ctx.lineTo(enemyPosX[i] + 28, enemyPosY[i] + 25);
        ctx.lineTo(enemyPosX[i] - 7, enemyPosY[i]);
        ctx.fill();
        outline(2);
      }
      else if (enemyOrin[i] == Math.PI*3/2) {
        ctx.beginPath();
        ctx.moveTo(enemyPosX[i], enemyPosY[i] - 7);
        ctx.lineTo(enemyPosX[i] - 25, enemyPosY[i] + 28);
        ctx.lineTo(enemyPosX[i] + 25, enemyPosY[i] + 28);
        ctx.lineTo(enemyPosX[i], enemyPosY[i] - 7);
        ctx.fill();
        outline(2);
      }
      else if (enemyOrin[i] == 0) {
        ctx.beginPath();
        ctx.moveTo(enemyPosX[i] + 7, enemyPosY[i]);
        ctx.lineTo(enemyPosX[i] - 28, enemyPosY[i] - 25);
        ctx.lineTo(enemyPosX[i] - 28, enemyPosY[i] + 25);
        ctx.lineTo(enemyPosX[i] + 7, enemyPosY[i]);
        ctx.fill();
        outline(2);
      }
      drawPoly(enemyPosX[i], enemyPosY[i], 3, enemyRadii[enemyType[i] - 1], enemyOrin[i], '#f177dd');
    }

    // Draw Health Bar
    if (debugShowHealth) {
      if (enemyType[i] == 4) {
        drawHealthBar(enemyTypeHealth[enemyType[i] - 1], enemyHealth[i], enemyPosX[i], enemyPosY[i] + enemyRadii[enemyType[i] - 1] + 2, 1.25);
      }
      else {
        drawHealthBar(enemyTypeHealth[enemyType[i] - 1], enemyHealth[i], enemyPosX[i], enemyPosY[i] + enemyRadii[enemyType[i] - 1] + 2, 2);
      }
    }
  }

  // Display and Move Bullets 
  for (let i = 0; i < bulletPosX.length; i++) {
      bulletPosX[i] += Math.cos(bulletOrin[i] * Math.PI / 180) * bulletSpeed[i];
      bulletPosY[i] += Math.sin(bulletOrin[i] * Math.PI / 180) * bulletSpeed[i];
    drawBullet(bulletPosX[i], bulletPosY[i], bulletRadii[i]);
  }

  // Display and Move Traps
  for (let i = 0; i < trapPosX.length; i++) {
    if (trapGlide[i] > 0) {
      trapGlide[i] -= 1;
      trapPosX[i] += Math.cos(trapDirect[i] * Math.PI / 180) * 1;
      trapPosY[i] += Math.sin(trapDirect[i] * Math.PI / 180) * 1;
    }
    else if (trapGlide[i] < -1200) {
      trapPosX.splice(i, 1);
      trapPosY.splice(i, 1);
      trapOrin.splice(i, 1);
      trapHealth.splice(i, 1);
      trapRadii.splice(i, 1);
      trapDirect.splice(i, 1);
      trapGlide.splice(i, 1);
    }
    else {
      trapGlide[i] -= 0.2;
    }
    if (debugShowTraps == true) { drawTrap(trapPosX[i], trapPosY[i], trapRadii[i], trapOrin[i]); }
    else if (debugShowTraps == 'low') {
      drawPoly(trapPosX[i],trapPosY[i], 3, trapRadii[i]*2,trapOrin[i], '#00b0e1');
    }
  }

  // Display and Move Drones 
  for (let i = 0; i < dronePosX.length; i++) {
    if (enemyPosX.length > 0) {
      droneOrin[i] = Math.atan2(enemyPosY[0] - dronePosY[i], enemyPosX[0] - dronePosX[i]);
      dronePosX[i] += Math.cos(droneOrin[i]) * 2.5;
      dronePosY[i] += Math.sin(droneOrin[i]) * 2.5;
      if (debugShowDrones) { drawPoly(dronePosX[i], dronePosY[i], 3, 10, droneOrin[i], '#00b0e1'); }
    }
    else {
      dronePosX.splice(i, 1);
      dronePosY.splice(i, 1);
      droneOrin.splice(i, 1);
      droneHealth.splice(i, 1);
    }
  }

  // Display Tank Range 
  if (tileX > -1 && game[tileY][tileX] > 0 && optionShowTurretRange == true) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(159, 159, 159, 0.25)';
    if (turretRange[game[tileY][tileX] - 1] == -1) {
      ctx.arc(tileX * 75 + 37.5, tileY * 75 + 37.5, 112.5, 0, 2 * Math.PI);
    }
    else if (turretRange[game[tileY][tileX] - 1] == -2) {
    }
    else {
      ctx.arc(tileX * 75 + 37.5, tileY * 75 + 37.5, turretRange[game[tileY][tileX] - 1], 0, 2 * Math.PI);
    }
    ctx.fill();
    outline(2);
    ctx.closePath();
  }
}

function despawnUpdate() {
  // Delete Offscreen/Excess Bullets
  for (let i = bulletPosX.length - 1; i > -1; i--) {
    if (i > 3000 || bulletPosX[i] > 750 || bulletPosY[i] > 750) {
      bulletPosX.splice(i, 1);
      bulletPosY.splice(i, 1);
      bulletOrin.splice(i, 1);
      bulletHealth.splice(i, 1);
      bulletRadii.splice(i, 1);
      bulletSpeed.splice(i, 1);
    }
  }

  // Delete Enemies Offscreen
  for (let i = enemyMove.length - 1; i > -1; i--) {
    if (enemyMove[i] >= 2100) {
      hp -= enemyHealth[i];
      if (hp < 0) hp = 0;
      deleteEnemy(i);
      if (hp <= 0) {
        end();
        clearInterval(updateInterval);
      }
    }
  }
}

function handleCollisions() {
  // Collisons: Enemies && Bullets
  for (let i = enemyPosX.length - 1; i > -1; i--) {
    for (let j = bulletPosX.length - 1; j > -1; j--) {
      if (distance(bulletPosX[j], bulletPosY[j], enemyPosX[i], enemyPosY[i]) <= pow(enemyRadii[enemyType[i] - 1])) {
        // Remove Health
        enemyHealth[i] -= bulletHealth[j];
        // Delete Entities with ≤0 Health
        if (enemyHealth[i] <= 0) {
          xp += enemyTypeXp[enemyType[i] - 1];
          deleteEnemy(i);
        }
        bulletPosX.splice(j, 1);
        bulletPosY.splice(j, 1);
        bulletOrin.splice(j, 1);
        bulletHealth.splice(j, 1);
        bulletSpeed.splice(j ,1);
        bulletRadii.splice(j, 1);
      }
    }
    for (let j = trapPosX.length - 1; j > -1; j--) {
      if (distance(trapPosX[j], trapPosY[j], enemyPosX[i], enemyPosY[i]) <= pow(enemyRadii[enemyType[i] - 1] + trapRadii[j])) {
        // Remove Health
        enemyHealth[i] -= trapHealth[j];
        trapPosX.splice(j, 1);
        trapPosY.splice(j, 1);
        trapOrin.splice(j, 1);
        trapHealth.splice(j, 1);
        trapRadii.splice(j, 1);
        trapDirect.splice(j, 1);
        trapGlide.splice(j, 1);
        if (enemyHealth[i] <= 0) {
          xp += enemyTypeXp[enemyType[i] - 1];
          deleteEnemy(i);
        }
      }
    }
    for (let j = dronePosX.length - 1; j > -1; j--) {
      if (distance(dronePosX[j], dronePosY[j], enemyPosX[i], enemyPosY[i]) <= pow(enemyRadii[enemyType[i] - 1] + 10)) {
        // Remove Health
        enemyHealth[i] -= droneHealth[j];
        dronePosX.splice(j, 1);
        dronePosY.splice(j, 1);
        droneOrin.splice(j, 1);
        droneHealth.splice(j, 1);
        if (enemyHealth[i] <= 0) {
          xp += enemyTypeXp[enemyType[i] - 1];
          deleteEnemy(i);
        }
      }
    }
  }
}

function debugFeatures() {
  // Debug: Show Turret Output
  if (debugShowTurretOutput) {
    for (let i = 0; i < turretPosX.length; i++) {
      ctx.beginPath();
      ctx.clear;
      ctx.fillStyle = '#12B4DC';
      ctx.arc(turretPosX[i], turretPosY[i], 2.5, 0, 2 * Math.PI)
      ctx.fill();
      outline(2);
    }
  }

  // Debug: Show Enemy Radii
  if (debugShowEnemyRadii) {
    for (let i = 0; i < enemyPosX.length; i++) {
      ctx.beginPath();
      ctx.clear;
      ctx.fillStyle = '#12B4DC';
      ctx.arc(enemyPosX[i], enemyPosY[i], enemyRadii[enemyType[i] - 1], 0, 2 * Math.PI)
      ctx.fill();
      outline(2);
    }
  }
}

function spawnWaves() {
  // Spawn Waves
  if (spawnEnemyLoop == 400) {
    if (enemiesSpawned < waves[waveNum][10]) {
      waveDelayCounter++;
      if (waveDelayCounter == waveDelay) {
        spawnWaveEnemy();
        waveDelay = getRandomInt(waves[waveNum][9] - waves[waveNum][8]) + waves[waveNum][8];
        waveDelayCounter = 0;
        enemiesSpawned++;
      }
    }
    else {
      spawnEnemyLoop = 0;
      if (waveNum < waves.length - 1) { waveNum++; }
    }
  }
  else {
    spawnEnemyLoop++;
    waveDelayCounter = 0;
    enemiesSpawned = 0;
    waveDelay = getRandomInt(waves[waveNum][9] - waves[waveNum][8]) + waves[waveNum][8];
  }
}

// Tank Parts
function outline(l) {
  ctx.lineWidth = l;
  ctx.strokeStyle = '#616161';
  ctx.stroke();
  ctx.closePath();
}

function rotateTank(x, y, orin) {
  ctx.translate(75 * x + 37.5, 75 * y + 37.5);
  ctx.rotate(orin * Math.PI / 180);
  ctx.translate(-(75 * x + 37.5), -(75 * y + 37.5));
  screenOrin += orin;
}

function drawBullet(x, y, size) {
  ctx.beginPath();
  ctx.clear;
  ctx.fillStyle = '#12B4DC';
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
  outline(2);
}
function drawTrap(x, y, size, orin) {
  ctx.beginPath();
  ctx.strokeStyle = '#616161'
  ctx.fillStyle = '#00b0e1';
  ctx.lineWidth = 3;
  let angle = 2 * Math.PI / 3;
  for (let i = 0; i < 4; i++) {
    ctx.lineTo(x + size * 0.75 * Math.cos(i * angle + orin + 2 / 3 * Math.PI), y + size * 0.75 * Math.sin(i * angle + orin + 2 / 3 * Math.PI));
    ctx.lineTo(x + size * 1.5 * Math.cos(i * angle + orin), y + size * 1.5 * Math.sin(i * angle + orin));
    ctx.stroke();
  }
  ctx.fill();
  ctx.closePath()
}

function tankBody(x, y, size) {
  ctx.beginPath();
  ctx.clear;
  ctx.fillStyle = '#00b0e1';
  ctx.arc(75 * x + 37.5, 75 * y + 37.5, size, 0, 2 * Math.PI)
  ctx.fill();
  outline(2);
}

function tankTurret(x, y, offsetx, offsety, length, width, orin, type, active) {
  ctx.beginPath();
  ctx.clear;
  ctx.fillStyle = '#9F9F9F';
  ctx.fillRect(75 * x + 37.5 + offsetx - length / 2, 75 * y + 37.5 + offsety - width / 2, length, width);
  ctx.rect(75 * x + 37.5 + offsetx - length / 2, 75 * y + 37.5 + offsety - width / 2, length, width);
  outline(2);
  if (active == 'yes') {
    turretAngle = (360 - orin) * Math.PI / 180;
    turretCenterX = 75 * x + 37.5;
    turretCenterY = 75 * y + 37.5;
    addTurret(x, y, orin, type, 75 * x + 37.5 + offsetx + length / 2, 75 * y + 37.5 + offsety);
  }
}

function tankTrap(x, y, offsetx, offsety, length, width, orin, type, active) {
  ctx.beginPath();
  ctx.clear;
  ctx.fillStyle = '#9F9F9F';
  ctx.fillRect(75 * x + 37.5 + offsetx - length / 2, 75 * y + 37.5 + offsety - width / 2, length, width);
  ctx.rect(75 * x + 37.5 + offsetx - length / 2, 75 * y + 37.5 + offsety - width / 2, length, width);
  ctx.fillStyle = '#9F9F9F';
  ctx.moveTo(75 * x + 37.5 + offsetx + length / 2, 75 * y + 37.5 + offsety - width / 2);
  ctx.lineTo(75 * x + 42.5 + offsetx + length / 2, 75 * y + 32.5 + offsety - width / 2);
  ctx.lineTo(75 * x + 42.5 + offsetx + length / 2, 75 * y + 42.5 + offsety + width / 2);
  ctx.lineTo(75 * x + 37.5 + offsetx + length / 2, 75 * y + 37.5 + offsety + width / 2);
  ctx.fill();
  outline(2);

  if (active == 'yes') {
    trapAngle = (360 - orin) * Math.PI / 180;
    trapCenterX = 75 * x + 37.5;
    trapCenterY = 75 * y + 37.5;
    addTrapper(x, y, orin, type, 75 * x + 37.5 + offsetx + length / 2, 75 * y + 37.5 + offsety);
  }
}

function tankSpawner(x, y, offsetx, offsety, length, width, orin, type, active) {
  ctx.beginPath();
  ctx.fillStyle = '#9F9F9F';
  ctx.moveTo(75 * x + 20.5 + offsetx, 75 * y + 37.5 + offsety);
  ctx.lineTo(75 * x + 53.5 + offsetx, 75 * y + 50 + offsety);
  ctx.lineTo(75 * x + 53.5 + offsetx, 75 * y + 25 + offsety);
  ctx.lineTo(75 * x + 20.5 + offsetx, 75 * y + 37.5 + offsety);
  ctx.fill();
  outline(2);
  if (active == 'yes') {
    spawnerAngle = (360 - orin) * Math.PI / 180;
    spawnerCenterX = 75 * x + 37.5;
    spawnerCenterY = 75 * y + 37.5;
    addSpawner(x, y, orin, type, 75 * x + 37.5 + offsetx + length / 2, 75 * y + 37.5 + offsety);
  }
}

// Draw Tanks 
function drawBack(x, y) {
  ctx.beginPath();
  ctx.lineWidth = 2;
  if (debugTileLines) {
    ctx.strokeStyle = '#e6e6e6';
    ctx.strokeRect(x + 15, y, 15, 75);
    ctx.strokeRect(x + 45, y, 15, 75);
    ctx.strokeRect(x, y + 15, 75, 15);
    ctx.strokeRect(x, y + 45, 75, 15);
    ctx.closePath();
  }

  ctx.beginPath();
  ctx.clear;
  ctx.strokeStyle = '#9F9F9F';
  ctx.strokeRect(x, y, 75, 75);
  ctx.stroke();
  ctx.closePath();
}

function drawPathBorder(x, y) {
  ctx.fillStyle = 'rgb(159,159,159,0.75)';
  ctx.fillRect(75 * x, 75 * y, 75, 75);
}

function drawTank1(x, y, orin, active) {
  ctx.save();
  rotateTank(x, y, orin);
  tankTurret(x, y, 15, 0, 12.5, 12.5, orin, 1, active);
  tankBody(x, y, 12.5);
  ctx.restore();
}
function drawTank2(x, y, orin, active) {
  ctx.save();
  rotateTank(x, y, orin);
  tankTurret(x, y, 16.5, 7.5, 18.5, 12.5, orin, 2, active);
  tankTurret(x, y, 16.5, -7.5, 18.5, 12.5, orin, 2.5, active);
  tankBody(x, y, 15);
  ctx.restore();
}
function drawTank3(x, y, orin, active) {
  ctx.save();
  rotateTank(x, y, orin);
  tankTurret(x, y, 18.5, 0, 22.5, 12.5, orin, 3, active);
  tankBody(x, y, 14);
  ctx.restore();
}
function drawTank4(x, y, orin, active) {
  ctx.save();
  rotateTank(x, y, orin);
  tankTurret(x, y, 18.75, 0, 20, 12.5, orin, 4, active);
  tankTurret(x, y, -10, 0, 20, 12.5, orin + 180, 4.5, active);
  tankBody(x, y, 14);
  ctx.restore();
}
function drawTank5(x, y, orin, active) {
  ctx.save();
  rotateTank(x, y, orin);
  ctx.beginPath();
  ctx.fillStyle = '#9F9F9F';
  ctx.moveTo(75 * x + 22.5, 75 * y + 37.5);
  ctx.lineTo(75 * x + 62.5, 75 * y + 47.5);
  ctx.lineTo(75 * x + 62.5, 75 * y + 27.5);
  ctx.lineTo(75 * x + 22.5, 75 * y + 37.5);
  ctx.fill();
  outline(2);
  tankBody(x, y, 15);
  addTurret(x, y, orin, 5, 75 * x + 62.5, 75 * y + 37.5);
  ctx.restore();
}
function drawTank6(x, y, orin, active) {
  ctx.save();
  rotateTank(x, y, orin);
  tankTurret(x, y, 16.5, 0, 20.5, 20, orin, 6, active);
  tankBody(x, y, 15);
  ctx.restore();
}
function drawTank7(x, y, orin, active) {
  ctx.save();
  rotateTank(x, y, orin);
  tankTurret(x, y, 18.5, 0, 35, 13, orin, 7, active);
  tankBody(x, y, 15);
  ctx.restore();
}
function drawTank8(x, y, orin, active) {
  ctx.save();
  rotateTank(x, y, orin);
  tankTurret(x, y, 18.5, 0, 24, 16, orin, 8, active);
  tankTurret(x, y, 18.5, 0, 16, 20, orin, 8.5, active);
  tankBody(x, y, 15);
  ctx.restore();
}
function drawTank9(x, y, orin, active) {
  ctx.save();
  rotateTank(x, y, orin);
  tankTurret(x, y, 12.5, 7, 20, 14, orin, 9, active);
  tankTurret(x, y, 12.5, -7, 20, 14, orin, 9, active);
  tankTurret(x, y, 16.5, 0, 20, 14, orin, 9, active);
  tankBody(x, y, 15);
  ctx.restore();
}
function drawTank10(x, y, orin, active) {
  ctx.save();
  rotateTank(x, y, orin);
  tankTurret(x, y, 16.5, 5, 15, 8, orin, 10.2, active);
  tankTurret(x, y, 16.5, -5, 15, 8, orin, 10.1, active);
  tankTurret(x, y, 13, 12, 12, 4, orin, 10.1, active);
  tankTurret(x, y, 13, -12, 12, 4, orin, 10.2, active);
  tankBody(x, y, 15);
  ctx.restore();
}
function drawTank11(x, y, orin, active) {
  ctx.save();
  rotateTank(x, y, orin);
  tankTurret(x, y, 18.5, 0, 18.5, 12.5, orin, 11, active);
  rotateTank(x, y, 90);
  tankTurret(x, y, 18.5, 0, 18.5, 12.5, 90 + orin, 11, active);
  rotateTank(x, y, 90);
  tankTurret(x, y, 18.5, 0, 18.5, 12.5, 180 + orin, 11, active);
  rotateTank(x, y, 90)
  tankTurret(x, y, 18.5, 0, 18.5, 12.5, 270 + orin, 11, active);
  tankBody(x, y, 15);
  ctx.restore();
}
function drawTank12(x, y, orin, active) {
  ctx.save();
  rotateTank(x, y, orin);
  tankTrap(x, y, 5, 0, 30, 15, orin, 12, active);
  tankBody(x, y, 15);
  ctx.restore();
}
function drawTank13(x, y, orin, active) {
  ctx.save();
  rotateTank(x, y, orin);
  tankTrap(x, y, 5, 0, 30, 20, orin, 13, active);
  tankBody(x, y, 15);
  ctx.restore();
}
function drawTank14(x, y, orin, active) {
  ctx.save();
  rotateTank(x, y, orin);
  tankSpawner(x, y, 5, 0, 30, 20, orin, 14, active);
  rotateTank(x, y, 180);
  tankSpawner(x, y, 5, 0, 30, 20, orin + 180, 14, active);
  tankBody(x, y, 15);
  ctx.restore();
}
function drawTank15(x, y, orin, active) {
  ctx.save();
  rotateTank(x, y, orin);
  tankSpawner(x, y, 5, 0, 30, 20, orin, 15, active);
  rotateTank(x, y, 90);
  tankSpawner(x, y, 5, 0, 30, 20, orin + 90, 15, active);
  rotateTank(x, y, 90);
  tankSpawner(x, y, 5, 0, 30, 20, orin + 180, 15, active);
  rotateTank(x, y, 90)
  tankSpawner(x, y, 5, 0, 30, 20, orin + 270, 15, active);
  tankBody(x, y, 15);
  ctx.restore();
}
function drawTank16(x, y, orin, active) {
  ctx.save();
  rotateTank(x, y, orin);
  tankTurret(x, y, 12, 0, 30, 32, orin, 16, active);
  tankBody(x, y, 17);
  ctx.restore();
}
function drawTank17(x, y, orin, active) {
  ctx.save();
  rotateTank(x, y, orin - 80);
  tankTurret(x, y, 12, 0, 10, 15, orin - 50, 17.5, active);
  rotateTank(x, y, 16);
  tankTurret(x, y, 12, 0, 15, 15, orin - 40, 17.4, active);
  rotateTank(x, y, 16);
  tankTurret(x, y, 12, 0, 20, 15, orin - 30, 17.3, active);
  rotateTank(x, y, 16);
  tankTurret(x, y, 12, 0, 25, 15, orin - 20, 17.2, active);
  rotateTank(x, y, 16);
  tankTurret(x, y, 12, 0, 30, 15, orin - 10, 17.1, active);

  rotateTank(x, y, 96);
  tankTurret(x, y, 12, 0, 10, 15, orin + 50, 17.5, active);
  rotateTank(x, y, -16);
  tankTurret(x, y, 12, 0, 15, 15, orin + 40, 17.4, active);
  rotateTank(x, y, -16);
  tankTurret(x, y, 12, 0, 20, 15, orin + 30, 17.3, active);
  rotateTank(x, y, -16);
  tankTurret(x, y, 12, 0, 25, 15, orin + 20, 17.2, active);
  rotateTank(x, y, -16);
  tankTurret(x, y, 12, 0, 30, 15, orin + 10, 17.1, active);

  rotateTank(x, y, -16);
  tankTurret(x, y, 12, 0, 40, 15, orin, 17, active);

  tankBody(x, y, 16);
  ctx.restore();
}
function drawTank18(x, y, orin, active) {
  ctx.save();
  rotateTank(x, y, orin);
  tankTurret(x, y, 12, 0, 45, 14, orin, 18.1, active);
  tankTurret(x, y, 12, 0, 40, 14, orin, 18.2, active);
  tankTurret(x, y, 12, 0, 35, 14, orin, 18.3, active);
  tankTurret(x, y, 12, 0, 30, 14, orin, 18.4, active);
  tankTurret(x, y, 12, 0, 25, 14, orin, 18.5, active);
  tankBody(x, y, 16);
  ctx.restore();
}
function drawTank19(x, y, orin, active) {
  ctx.save();
  rotateTank(x, y, orin);
  tankTurret(x, y, 22, 0, 37.5, 15, orin, 19, active);
  ctx.beginPath();
  ctx.fillStyle = '#9F9F9F';
  ctx.moveTo(75 * x + 42.5, 75 * y + 50);
  ctx.lineTo(75 * x + 60, 75 * y + 45);
  ctx.lineTo(75 * x + 60, 75 * y + 30);
  ctx.lineTo(75 * x + 42.5, 75 * y + 25);
  ctx.lineTo(75 * x + 42.5, 75 * y + 50);
  ctx.fill();
  outline(2);
  tankBody(x, y, 16);
  ctx.restore();
}
function drawTank20(x, y, orin, active) {
  ctx.save();
  rotateTank(x, y, orin);
  for (let i = 0; i < 16; i++) {
    if (i % 2 == 1) { tankSpawner(x, y, 50, 0, 30, 20, orin + i * 22.5, 20, active); }
    else { tankTurret(x, y, 50, 0, 34, 22, orin + i * 22.5, 20, active); }
    rotateTank(x, y, 22.5);
  }
  tankBody(x, y, 50);
  ctx.restore();
}

// Add to Turret List
function addTurret(x, y, orin, type, turretOutX, turretOutY) {
  turretAngle = (360 - orin) * Math.PI / 180;
  turretCenterX = 75 * x + 37.5;
  turretCenterY = 75 * y + 37.5;
  turretPosX.push((Math.cos(turretAngle) * (turretOutX - turretCenterX)) + (Math.sin(turretAngle) * (turretOutY - turretCenterY)) + turretCenterX);
  turretPosY.push((Math.cos(turretAngle) * (turretOutY - turretCenterY)) - (Math.sin(turretAngle) * (turretOutX - turretCenterX)) + turretCenterY);
  turretOrin.push(orin);
  turretType.push(type);
  turretGameX.push(x);
  turretGameY.push(y);
}

function addTrapper(x, y, orin, type, trapperOutX, trapperOutY) {
  trapperAngle = (360 - orin) * Math.PI / 180;
  trapperCenterX = 75 * x + 37.5;
  trapperCenterY = 75 * y + 37.5;
  trapperPosX.push((Math.cos(trapperAngle) * (trapperOutX - trapperCenterX)) + (Math.sin(trapperAngle) * (trapperOutY - trapperCenterY)) + trapperCenterX);
  trapperPosY.push((Math.cos(trapperAngle) * (trapperOutY - trapperCenterY)) - (Math.sin(trapperAngle) * (trapperOutX - trapperCenterX)) + trapperCenterY);
  trapperOrin.push(orin);
  trapperType.push(type);
  trapperGameX.push(x);
  trapperGameY.push(y);
}

function addSpawner(x, y, orin, type, spawnerOutX, spawnerOutY) {
  spawnerAngle = (360 - orin) * Math.PI / 180;
  spawnerCenterX = 75 * x + 37.5;
  spawnerCenterY = 75 * y + 37.5;
  spawnerPosX.push((Math.cos(spawnerAngle) * (spawnerOutX - spawnerCenterX)) + (Math.sin(spawnerAngle) * (spawnerOutY - spawnerCenterY)) + spawnerCenterX);
  spawnerPosY.push((Math.cos(spawnerAngle) * (spawnerOutY - spawnerCenterY)) - (Math.sin(spawnerAngle) * (spawnerOutX - spawnerCenterX)) + spawnerCenterY);
  spawnerOrin.push(orin);
  spawnerType.push(type);
  spawnerGameX.push(x);
  spawnerGameY.push(y);
}

// Draw Enemies
function drawPoly(x, y, sides, radius, rotation, color) {
  ctx.beginPath();
  ctx.strokeStyle = '#949494'
  ctx.fillStyle = color;
  let angle = 2 * Math.PI / sides;
  for (let i = 0; i <= sides + 1; i++) {
    ctx.lineTo(x + radius * Math.cos(i * angle + rotation), y + radius * Math.sin(i * angle + rotation));
  }
  ctx.fill();
  if (radius >= 15) { outline(2); }
  else { outline(1.5); }
}

// Spawn Bullets / Spawn Traps / SpawnEnemy
function spawnBullets(frame) {
  for (let i = 0; i < turretPosX.length; i++) {
    if (tankShoot[turretGameY[i]][turretGameX[i]] == 1) {
      spawnBulletType(1, 150, 0, 10, 5, 10, frame, i);
      spawnBulletType(2, 150, 0, 10, 5, 10, frame, i);
      spawnBulletType(2.5, 150, 75, 10, 5, 10, frame, i);
      spawnBulletType(3, 150, 0, 30, 5, 15, frame, i);
      spawnBulletType(4, 150, 0, 15, 5, 10, frame, i);
      spawnBulletType(4.5, 150, 0, 60, 5, 8, frame, i);
      spawnBulletType(5, 20, 0, 2, 5, 8, frame, i);
      spawnBulletType(6, 200, 0, 250, 10, 5, frame, i);
      spawnBulletType(7, 75, 0, 50, 5, 20, frame, i);
      spawnBulletType(8, 50, 0, 18, 6, 12, frame, i);
      spawnBulletType(8.5, 50, 25, 18, 5, 12, frame, i);
      spawnBulletType(9, 80, 0, 25, 5, 10, frame, i);
      spawnBulletType(10.1, 100, 0, 10, 5, 12, frame, i);
      spawnBulletType(10.2, 100, 50, 10, 5, 12, frame, i);
      spawnBulletType(11, 100, 0, 20, 5, 12, frame, i);
      spawnBulletType(16, 75, 0, 300, 17, 4, frame, i);
      spawnBulletType(17, 100, 0, 20, 5, 15, frame, i);
      spawnBulletType(17.1, 100, 5, 20, 5, 15, frame, i);
      spawnBulletType(17.2, 100, 10, 20, 5, 15, frame, i);
      spawnBulletType(17.3, 100, 15, 20, 5, 15, frame, i);
      spawnBulletType(17.4, 100, 20, 20, 5, 15, frame, i);
      spawnBulletType(17.5, 100, 25, 20, 5, 15, frame, i);
      spawnBulletType(18.1, 25, 0, 10, 5, 13, frame, i);
      spawnBulletType(18.2, 25, 5, 10, 5, 13, frame, i);
      spawnBulletType(18.3, 25, 10, 10, 5, 13, frame, i);
      spawnBulletType(18.4, 25, 15, 10, 5, 13, frame, i);
      spawnBulletType(18.5, 25, 20, 10, 5, 13, frame, i);
      spawnBulletType(19, 75, 0, 100, 5, 25, frame, i);
      spawnBulletType(20, 40, 0, 150, 10, 15, frame, i);
    }
  }
  for (let i = 0; i < trapperPosX.length; i++) {
    spawnTrapType(12, 200, 0, 30, 7.5, frame, i);
    spawnTrapType(13, 100, 0, 60, 10, frame, i);
  }

  for (let i = 0; i < spawnerPosX.length; i++) {
    spawnDroneType(14, 200, 0, 30, 7.5, frame, i);
    spawnDroneType(15, 200, 0, 30, 7.5, frame, i);
    spawnDroneType(20, 20, 0, 75, 9, frame, i);
  }
}

function spawnBulletType(type, reload, offset, health, radii, speed, frame, i) {
  if (turretType[i] == type && (frame - offset) % reload == 0) {
    bulletPosX.push(turretPosX[i]);
    bulletPosY.push(turretPosY[i]);
    bulletOrin.push(turretOrin[i]);
    bulletHealth.push(health);
    bulletRadii.push(radii);
    bulletSpeed.push(speed);
  }
}

function spawnTrapType(type, reload, offset, health, radii, frame, i) {
  if (trapperType[i] == type && (frame - offset) % reload == 0) {
    trapPosX.push(trapperPosX[i]);
    trapPosY.push(trapperPosY[i]);
    temp = trapperOrin[i] + getRandomInt(44) - 22;
    trapDirect.push(temp);
    trapOrin.push(getRandomInt(11) - 6);
    trapHealth.push(health);
    trapRadii.push(radii);
    if (trapperOrin[i] % 90 == 0) {
      trapGlide.push(60 + getRandomInt(5) - 3);
    }
    else {
      trapGlide.push(87 + getRandomInt(5) - 3);
    }
  }
}

function spawnDroneType(type, reload, offset, health, radii, frame, i) {
  if (spawnerType[i] == type && (frame - offset) % reload == 0 && enemyPosX.length > 0) {
    dronePosX.push(spawnerPosX[i]);
    dronePosY.push(spawnerPosY[i]);
    droneOrin.push(spawnerOrin[i]);
    droneHealth.push(health);
  }
}

// Delete Enemy
function deleteEnemy(index) {
  enemyPosX.splice(index, 1);
  enemyPosY.splice(index, 1);
  enemyMove.splice(index, 1);
  enemyType.splice(index, 1);
  enemyHealth.splice(index, 1);
  enemyOrin.splice(index, 1);
}

// Square Function
function pow(num) { return num * num; }

// Find Square of Distance 
function distance(ax, ay, bx, by) {
  return pow(ax - bx) + pow(ay - by);
}

// Wave Code
function spawnWaveEnemy() {
  let type = spawnChances(waves[waveNum][0], waves[waveNum][1], waves[waveNum][2], waves[waveNum][3], waves[waveNum][4], waves[waveNum][5], waves[waveNum][6], waves[waveNum][7]);
  spawnEnemy(-37.5, 112.5, 0, type);
}

function spawnEnemy(x, y, move, type) {
  enemyPosX.push(x);
  enemyPosY.push(y);
  enemyMove.push(move);
  enemyType.push(type);
  enemyOrin.push(getRandomInt(10) - 55);
  enemyHealth.push(enemyTypeHealth[type - 1]);
}

function spawnChances(a, b, c, d, e, f, g, h) {
  randomNum = getRandomInt(a + b + c + d + e + f + g + h);
  if (randomNum <= a) { return 1; }
  else if (randomNum <= a + b) { return 2; }
  else if (randomNum <= a + b + c) { return 3; }
  else if (randomNum <= a + b + c + d) { return 4; }
  else if (randomNum <= a + b + c + d + e) { return 5; }
  else if (randomNum <= a + b + c + d + e + f) { return 6; }
  else if (randomNum <= a + b + c + d + e + f + g) { return 7; }
  else if (randomNum <= a + b + c + d + e + f + g + h) { return 8; }
}

// Draw Health Bar 
function drawHealthBar(totalHealth, health, x, y, size) {
  ctx.beginPath();
  ctx.strokeStyle = '#545454';
  ctx.fillStyle = '#545454';
  ctx.lineWidth = size * 2;
  ctx.moveTo(x - 7 * size, y + size / 2);
  ctx.lineTo(x + 7 * size, y + size / 2);
  ctx.stroke();
  ctx.closePath();

  ctx.arc(x - 7 * size, y + size / 2, size, 0, 2 * Math.PI)
  ctx.fill();

  ctx.arc(x + 7 * size, y + size / 2, size, 0, 2 * Math.PI)
  ctx.fill();

  ctx.lineWidth = size * 1.2;
  ctx.strokeStyle = '#86c280';
  ctx.fillStyle = '#86c280';
  ctx.beginPath();
  ctx.moveTo(x - 6.9 * size, y + size / 2);
  ctx.lineTo(x + (13.8 * size * health / totalHealth) - 6.9 * size, y + size / 2);
  ctx.stroke();
  ctx.closePath();
  ctx.lineWidth = 4;

  ctx.arc(x - 6.9 * size, y + size / 2, size * 0.6, 0, 2 * Math.PI)
  ctx.fill();

  ctx.arc(x + (13.8 * size * health / totalHealth) - 6.9 * size, y + size / 2, size * 0.6, 0, 2 * Math.PI)
  ctx.fill();
}

// Game Over Animation
function end() {
  setInterval(endingAnimations, 30);
  clearLocalStorage();
}

function clearLocalStorage() {
  localStorage.removeItem('game0');
  localStorage.removeItem('game1');
  localStorage.removeItem('game2');
  localStorage.removeItem('game3');
  localStorage.removeItem('game4');
  localStorage.removeItem('game5');
  localStorage.removeItem('game6');
  localStorage.removeItem('game7');
  localStorage.removeItem('game8');
  localStorage.removeItem('game9');

  localStorage.removeItem('enemyPosX');
  localStorage.removeItem('enemyPosY');
  localStorage.removeItem('enemyMove');
  localStorage.removeItem('enemyType');
  localStorage.removeItem('enemyHealth');
  localStorage.removeItem('enemyOrin');

  localStorage.removeItem('trapPosX');
  localStorage.removeItem('trapPosY');
  localStorage.removeItem('trapOrin');
  localStorage.removeItem('trapDirect');
  localStorage.removeItem('trapHealth');
  localStorage.removeItem('trapRadii');
  localStorage.removeItem('trapGlide');

  localStorage.removeItem('spawnBulletLoop');
  localStorage.removeItem('spawnEnemyLoop');
  localStorage.removeItem('lagControlSpin');
  localStorage.removeItem('optionShowTurretRange');

  localStorage.removeItem('waveNum');
  localStorage.removeItem('waveDelay');
  localStorage.removeItem('waveDelayCounter');
  localStorage.removeItem('enemiesSpawned');
  localStorage.removeItem('hp');
  localStorage.removeItem('xp');
  localStorage.removeItem('time');
}

function endingAnimations() {
  if (endingCycle < 25) {
    ctx.clear;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    displayUpdate();

    ctx.fillStyle = 'rgba(43,43,43,' + endingCycle * 0.02 + ')';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    overlayText('Game Over!', 375, 240, 70);
    overlayText('Score: ' + xp, 375, 300, 50);
    overlayText('Wave:  ' + (waveNum + 1), 360, 360, 50);
    overlayText('Time Alive: ' + secToTime(time), 375, 420, 50);
    overlayText('(press enter to continue)', 375, 500, 30);
    endingCycle++;
  }
}

//text and misc
function overlayText(text, x, y, width) {
  ctx.textAlign = "center";
  ctx.font = width + 'px ubuntu';
  ctx.lineWidth = width / 8;
  ctx.strokeStyle = 'rgba(74,74,74,' + endingCycle * 0.04 + ')';
  ctx.strokeText(text, x, y);

  ctx.fillStyle = 'rgba(255,255,255,' + endingCycle * 0.04 + ')';
  ctx.fillText(text, x, y);
}

function text(str, x, y, width, fill, outline) {
  ctx.textAlign = "center";
  ctx.font = width + 'px ubuntu';
  ctx.lineWidth = width / 8;
  ctx.strokeStyle = outline;
  ctx.strokeText(str, x, y);

  ctx.fillStyle = fill;
  ctx.fillText(str, x, y);
}


function secToTime(frames) {
  let returnTimeString = '';
  let sec = Math.floor(frames / 80);
  let counterTime = 0;
  // Days
  if (sec >= 86400) {
    counterTime = (sec - (sec % 86400)) / 86400;
    returnTimeString += counterTime + 'd ';
    sec -= counterTime * 86400;
  }
  // Hours
  if (sec >= 3600) {
    counterTime = (sec - (sec % 3600)) / 3600;
    returnTimeString += counterTime + 'h ';
    sec -= counterTime * 3600;
  }
  // Minutes
  if (sec >= 60) {
    counterTime = (sec - (sec % 60)) / 60;
    returnTimeString += counterTime + 'm ';
    sec -= counterTime * 60;
  }
  // Seconds
  returnTimeString += sec + 's';
  return returnTimeString;
}

// Menu Code
function createButton(upperHalf, lowerHalf, x, y, str, big) {
  ctx.fillStyle = upperHalf;
  ctx.fillRect(x, y, 75, 75);

  ctx.fillStyle = lowerHalf;
  ctx.fillRect(x, y + 37.5, 75, 37.5);
  //ctx.fillRect(x, y + 50, 75, 25);

  ctx.lineWidth = 3;
  ctx.strokeStyle = '#545454';
  ctx.strokeRect(x, y, 75, 75);
  if (big != 'no') {
    text(str, x + 37.5, y + 65.5, big, '#FFFFFF', '#616161');
  }
  else {
    text(str, x + 37.5, y + 67.5, 16.5, '#FFFFFF', '#616161');
  }

}

function drawMenu() {
  ctx = m.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, 337.5, 750);

  createButton('#FF8E8E', 'hsla(0, 48%, 63%, 0.7)', 7.5, 82.5, 'Tank', 'no');
  drawTank1(0.055, 1.05, 0, 'no');

  createButton('#8EB2FF', 'hsla(221, 48%, 63%, 0.7)', 90, 82.5, 'Twin', 'no');
  drawTank2(1.13, 1.05, 0, 'no');

  createButton('#8EB2FF', 'hsla(221, 48%, 63%, 0.7)', 172.5, 82.5, 'Sniper', 'no');
  drawTank3(2.2, 1.05, 0, 'no');

  createButton('#8EB2FF', 'hsla(221, 48%, 63%, 0.7)', 255, 82.5, 'Flank', 'no');
  drawTank4(3.34, 1.05, 0, 'no');

  createButton('#8EB2FF', 'hsla(221, 48%, 63%, 0.7)', 7.5, 165, 'Machine Gun', 11);
  drawTank5(0.035, 2.15, 0, 'no');

  createButton('#B4FF8E', 'hsla(100, 48%, 63%, 0.7)', 90, 165, 'Destroyer', 13);
  drawTank6(1.12, 2.15, 0, 'no');

  createButton('#B4FF8E', 'hsla(100, 48%, 63%, 0.7)', 172.5, 165, 'Assassin', 'no');
  drawTank7(2.15, 2.15, 0, 'no');

  createButton('#B4FF8E', 'hsla(100, 48%, 63%, 0.7)', 255, 165, 'Hunter', 'no');
  drawTank8(3.3, 2.15, 0, 'no');

  createButton('#B4FF8E', 'hsla(100, 48%, 63%, 0.7)', 7.5, 247.5, 'Triplet', 'no');
  drawTank9(0.03, 3.24, 0, 'no');

  createButton('#B4FF8E', 'hsla(100, 48%, 63%, 0.7)', 90, 247.5, 'Gunner', 'no');
  drawTank10(1.15, 3.25, 0, 'no');

  createButton('#B4FF8E', 'hsla(100, 48%, 63%, 0.7)', 172.5, 247.5, 'Quad Tank', 13);
  drawTank11(2.3, 3.2, 45, 'no');

  createButton('#FFEB8E', 'hsla(49, 48%, 63%, 0.7)', 255, 247.5, 'Trapper', 'no');
  drawTank12(3.34, 3.25, 0, 'no');

  createButton('#FFEB8E', 'hsla(49, 48%, 63%, 0.7)', 7.5, 330, 'Mega-Trapper', 10.5);
  drawTank13(0.02, 4.35, 0, 'no');

  createButton('#FFEB8E', 'hsla(49, 48%, 63%, 0.7)', 90, 330, 'Overseer', 15);
  drawTank14(1.2, 4.35, 0, 'no');

  createButton('#FFEB8E', 'hsla(49, 48%, 63%, 0.7)', 172.5, 330, 'Overlord', 15);
  drawTank15(2.3, 4.3, 0, 'no');

  createButton('#8EFFFB', 'hsla(178, 48%, 63%, 0.7)', 255, 330, 'Annihilator', 12);
  drawTank16(3.33, 4.35, 0, 'no');

  createButton('#8EFFFB', 'hsla(178, 48%, 63%, 0.7)', 7.5, 412.5, 'Spread Shot', 12);
  drawTank17(-0.01, 5.4, 0, 'no');

  createButton('#8EFFFB', 'hsla(178, 48%, 63%, 0.7)', 90, 412.5, 'Streamliner', 12);
  drawTank18(1.08, 5.47, 0, 'no');

  createButton('#8EFFFB', 'hsla(178, 48%, 63%, 0.7)', 172.5, 412.5, 'Ranger', 'no');
  drawTank19(2.13, 5.45, 0, 'no');

  createButton('#B58EFF', 'hsla(261, 48%, 63%, 0.7)', 255, 412.5, 'Mothership', 12);
  ctx.save();
  for (let i = 0; i < 16; i++) {
    if (i % 2 == 1) {
      ctx.beginPath();
      ctx.fillStyle = '#9F9F9F';
      ctx.moveTo(75 * 3.4 + 20.5 + 25, 75 * 5.42 + 37.5);
      ctx.lineTo(75 * 3.4 + 37 + 25, 75 * 5.42 + 41.5);
      ctx.lineTo(75 * 3.4 + 37 + 25, 75 * 5.42 + 33.5);
      ctx.lineTo(75 * 3.4 + 20.5 + 25, 75 * 5.42 + 37.5);
      ctx.fill();
      outline(2);
    }
    else { tankTurret(3.4, 5.42, 20, 0, 9, 8.8, i * 22.5, 20, 'no'); }
    rotateTank(3.4, 5.42, 22.5);
  }
  tankBody(3.4, 5.42, 18);
  ctx.restore();

  //createButton('#B58EFF', 'hsla(261, 48%, 63%, 0.7)', 255, 412.5, 'Info', 'no');

  // Gray Overlay
  if (xp < 100000 || waveNum < 50) {
    ctx.fillStyle = 'rgba(159, 159, 159, 0.5)';
    ctx.fillRect(255, 412.5, 75, 75);
  }
  if (xp < 5000 || waveNum < 50) {
    ctx.fillStyle = 'rgba(159, 159, 159, 0.5)';
    ctx.fillRect(255, 330, 75, 75);
    ctx.fillRect(7.5, 412.5, 75, 75);
    ctx.fillRect(90, 412.5, 75, 75);
    ctx.fillRect(172.5, 412.5, 75, 75);
  }
  if (xp < 5000) {
    ctx.fillStyle = 'rgba(159, 159, 159, 0.5)';
    ctx.fillRect(172.5, 330, 75, 75);
  }
  if (xp < 4500) {
    ctx.fillStyle = 'rgba(159, 159, 159, 0.5)';
    ctx.fillRect(7.5, 330, 75, 75);
  }
  if (xp < 2500) {
    ctx.fillStyle = 'rgba(159, 159, 159, 0.5)';
    ctx.fillRect(255, 247.5, 75, 75);
    ctx.fillRect(90, 330, 75, 75);
  }
  if (xp < 2000) {
    ctx.fillStyle = 'rgba(159, 159, 159, 0.5)';
    ctx.fillRect(172.5, 247.5, 75, 75);
    ctx.fillRect(90, 247.5, 75, 75);
    ctx.fillRect(7.5, 247.5, 75, 75);
    ctx.fillRect(255, 165, 75, 75);
    ctx.fillRect(172.5, 165, 75, 75);
    ctx.fillRect(90, 165, 75, 75);
  }
  if (xp < 500) {
    ctx.fillStyle = 'rgba(159, 159, 159, 0.5)';
    ctx.fillRect(7.5, 165, 75, 75);
    ctx.fillRect(255, 82.5, 75, 75);
    ctx.fillRect(172.5, 82.5, 75, 75);
    ctx.fillRect(90, 82.5, 75, 75);
  }
  if (xp < 250) {
    ctx.fillStyle = 'rgba(159, 159, 159, 0.5)';
    ctx.fillRect(7.5, 82.5, 75, 75);
  }

  //selected tank
  ctx.font = 64 + 'px ubuntu';
  ctx.strokeStyle = '#616161';
  ctx.fillStyle = '#616161';
  ctx.lineWidth = 4;
  ctx.strokeRect(2, 600, 333.5, 85);
  if (chosenTank == 1) {
    createButton('#FF8E8E', 'hsla(0, 48%, 63%, 0.7)', 7, 605, 'Tank', 'no');
    drawTank1(0.03, 8, 0, 'no');

    ctx.fillStyle = '#545454';
    ctx.fillText('Cost: 250', 192, 619);
    ctx.fillText('Damage: 10', 192, 639);
    ctx.fillText('Reload: 75', 192, 659);
    ctx.fillText('Range: 125', 192, 679);
  }
  else if (chosenTank == 2) {
    createButton('#8EB2FF', 'hsla(221, 48%, 63%, 0.7)', 7, 605, 'Twin', 'no');
    drawTank2(0.03, 7.95, 0, 'no');

    ctx.fillStyle = '#545454';
    ctx.fillText('Cost: 500', 192, 619);
    ctx.fillText('Damage: 10 - Per Turret', 192, 639);
    ctx.fillText('Reload: 150 - Per Turret', 192, 659);
    ctx.fillText('Range: 150', 192, 679);
  }
  else if (chosenTank == 3) {
    createButton('#8EB2FF', 'hsla(221, 48%, 63%, 0.7)', 7, 605, 'Sniper', 'no');
    drawTank3(0.01, 8.03, 0, 'no');

    ctx.fillStyle = '#545454';
    ctx.fillText('Cost: 500', 192, 619);
    ctx.fillText('Damage: 30', 192, 639);
    ctx.fillText('Reload: 150', 192, 659);
    ctx.fillText('Range: 225', 192, 679);
  }
  else if (chosenTank == 4) {
    createButton('#8EB2FF', 'hsla(221, 48%, 63%, 0.7)', 7, 605, 'Flank', 'no');
    drawTank4(0.04, 7.95, 0, 'no');

    ctx.fillStyle = '#545454';
    ctx.fillText('Cost: 500', 192, 619);
    ctx.fillText('Damage:  front-15  back-50', 192, 639);
    ctx.fillText('Reload: 150 - Per Turret', 192, 659);
    ctx.fillText('Range: 150', 192, 679);
  }
  else if (chosenTank == 5) {
    createButton('#8EB2FF', 'hsla(221, 48%, 63%, 0.7)', 7, 605, 'Machine Gun', 11);
    drawTank5(0.03, 8.02, 0, 'no');

    ctx.fillStyle = '#545454';
    ctx.font = 16.5 + 'px ubuntu';
    ctx.fillText('Cost: 500', 192, 619);
    ctx.fillText('Damage: 2', 192, 639);
    ctx.fillText('Reload: 20', 192, 659);
    ctx.fillText('Range: 115', 192, 679);
  }
  else if (chosenTank == 6) {
    createButton('#B4FF8E', 'hsla(100, 48%, 63%, 0.7)', 7, 605, 'Destroyer', 13);
    drawTank6(0.02, 8.02, 0, 'no');

    ctx.fillStyle = '#545454';
    ctx.font = 16.5 + 'px ubuntu';
    ctx.fillText('Cost: 2000', 192, 619);
    ctx.fillText('Damage: 250', 192, 639);
    ctx.fillText('Reload: 200', 192, 659);
    ctx.fillText('Range: 175', 192, 679);
  }
  else if (chosenTank == 7) {
    createButton('#B4FF8E', 'hsla(100, 48%, 63%, 0.7)', 7, 605, 'Assassin', 'no');
    drawTank7(-0.04, 8.02, 0, 'no');

    ctx.fillStyle = '#545454';
    ctx.fillText('Cost: 2000', 192, 619);
    ctx.fillText('Damage: 50', 192, 639);
    ctx.fillText('Reload: 100', 192, 659);
    ctx.fillText('Range: 300', 192, 679);
  }
  else if (chosenTank == 8) {
    createButton('#B4FF8E', 'hsla(100, 48%, 63%, 0.7)', 7, 605, 'Hunter', 'no');
    drawTank8(0, 8.02, 0, 'no');

    ctx.fillStyle = '#545454';
    ctx.fillText('Cost: 2000', 192, 619);
    ctx.fillText('Damage: 18 - Per Turret', 192, 639);
    ctx.fillText('Reload: 50 - Per Turret', 192, 659);
    ctx.fillText('Range: 175', 192, 679);
  }
  else if (chosenTank == 9) {
    createButton('#B4FF8E', 'hsla(100, 48%, 63%, 0.7)', 7, 605, 'Triplet', 'no');
    drawTank9(0.055, 8.02, 0, 'no');

    ctx.fillStyle = '#545454';
    ctx.font = 16.5 + 'px ubuntu';
    ctx.fillText('Cost: 2000', 192, 619);
    ctx.fillText('Damage: 25 - Per Turret', 192, 639);
    ctx.fillText('Reload: 80 - Per Turret', 192, 659);
    ctx.fillText('Range: 175', 192, 679);
  }
  else if (chosenTank == 10) {
    createButton('#B4FF8E', 'hsla(100, 48%, 63%, 0.7)', 7, 605, 'Gunner', 'no');
    drawTank10(0.05, 8.02, 0, 'no');

    ctx.fillStyle = '#545454';
    ctx.font = 16.5 + 'px ubuntu';
    ctx.fillText('Cost: 2000', 192, 619);
    ctx.fillText('Damage: 10 - Per Turret', 192, 639);
    ctx.fillText('Reload: 100 - Per Turret', 192, 659);
    ctx.fillText('Range: 175', 192, 679);
  }
  else if (chosenTank == 11) {
    createButton('#B4FF8E', 'hsla(100, 48%, 63%, 0.7)', 7, 605, 'Quad Tank', 13);
    drawTank11(0.1, 7.95, 45, 'no');

    ctx.fillStyle = '#545454';
    ctx.font = 16.5 + 'px ubuntu';
    ctx.fillText('Cost: 2000', 192, 619);
    ctx.fillText('Damage: 50 - Per Turret', 192, 639);
    ctx.fillText('Reload: 100 - Per Turret', 192, 659);
    ctx.fillText('Range: 175', 192, 679);
  }
  else if (chosenTank == 12) {
    createButton('#FFEB8E', 'hsla(49, 48%, 63%, 0.7)', 7, 605, 'Trapper', 'no');
    drawTank12(0.03, 8.02, 0, 'no');

    ctx.fillStyle = '#545454';
    ctx.fillText('Cost: 2500', 192, 619);
    ctx.fillText('Trap Damage: 30', 192, 639);
    ctx.fillText('Reload: 200', 192, 659);
    ctx.fillText('Range: 75', 192, 679);
  }
  else if (chosenTank == 13) {
    createButton('#FFEB8E', 'hsla(49, 48%, 63%, 0.7)', 7, 605, 'Mega-Trapper', 10.5);
    drawTank13(0.02, 8.02, 0, 'no');

    ctx.font = 16.5 + 'px ubuntu';
    ctx.fillStyle = '#545454';
    ctx.fillText('Cost: 4500', 192, 619);
    ctx.fillText('Trap Damage: 60', 192, 639);
    ctx.fillText('Reload: 100', 192, 659);
    ctx.fillText('Range: 75', 192, 679);
  }
  else if (chosenTank == 14) {
    createButton('#FFEB8E', 'hsla(49, 48%, 63%, 0.7)', 7, 605, 'Overseer', 15);
    drawTank14(0.1, 8.02, 0, 'no');

    ctx.font = 16.5 + 'px ubuntu';
    ctx.fillStyle = '#545454';
    ctx.fillText('Cost: 2500', 192, 619);
    ctx.fillText('Drone Damage: 30', 192, 639);
    ctx.fillText('Reload: 200', 192, 659);
    ctx.fillText('Range: -', 192, 679);
  }
  else if (chosenTank == 15) {
    createButton('#FFEB8E', 'hsla(49, 48%, 63%, 0.7)', 7, 605, 'Overlord', 15);
    drawTank15(0.1, 7.95, 0, 'no');
    ctx.font = 16.5 + 'px ubuntu';
    ctx.fillStyle = '#545454';
    ctx.fillText('Cost: 5000', 192, 619);
    ctx.fillText('Drone Damage: 30', 192, 639);
    ctx.fillText('Reload: 200', 192, 659);
    ctx.fillText('Range: -', 192, 679);
  }
  else if (chosenTank == 16) {
    if (waveNum > 39) {
    createButton('#8EFFFB', 'hsla(178, 48%, 63%, 0.7)', 7, 605, 'Annihilator', 12);
    drawTank16(0.01, 8.02, 0, 'no');
    ctx.font = 16.5 + 'px ubuntu';
    ctx.fillStyle = '#545454';
    ctx.fillText('Cost: 5000', 192, 619);
    ctx.fillText('Damage: 300', 192, 639);
    ctx.fillText('Reload: 75', 192, 659);
    ctx.fillText('Range: 200', 192, 679);
    }
    else {
    ctx.font = 16.5 + 'px ubuntu';
    ctx.fillStyle = '#545454';
    ctx.fillText('Unlocked at wave 40', 168.75, 649);
    }
  }
  else if (chosenTank == 17) {
    if (waveNum > 39) {
    createButton('#8EFFFB', 'hsla(178, 48%, 63%, 0.7)', 7, 605, 'Spread Shot', 12);
    drawTank17(-0.01, 7.96, 0, 'no');
    ctx.font = 16.5 + 'px ubuntu';
    ctx.fillStyle = '#545454';
    ctx.fillText('Cost: 5000', 192, 619);
    ctx.fillText('Damage: 20 - Per Turret', 192, 639);
    ctx.fillText('Reload: 100 - Per Turret', 192, 659);
    ctx.fillText('Range: 200', 192, 679);
    }
    else {
    ctx.font = 16.5 + 'px ubuntu';
    ctx.fillStyle = '#545454';
    ctx.fillText('Unlocked at wave 40', 168.75, 649);
    }
  }
  else if (chosenTank == 18) {
    if (waveNum > 39) {
    createButton('#8EFFFB', 'hsla(178, 48%, 63%, 0.7)', 7, 605, 'Streamliner', 12);
    drawTank18(-0.02, 8.04, 0, 'no');
    ctx.font = 16.5 + 'px ubuntu';
    ctx.fillStyle = '#545454';
    ctx.fillText('Cost: 5000', 192, 619);
    ctx.fillText('Damage: 10 - Per Turret', 192, 639);
    ctx.fillText('Reload: 25 - Per Turret', 192, 659);
    ctx.fillText('Range: 200', 192, 679);
    }
    else {
    ctx.font = 16.5 + 'px ubuntu';
    ctx.fillStyle = '#545454';
    ctx.fillText('Unlocked at wave 40', 168.75, 649);
    }
  }
  else if (chosenTank == 19) {
    if (waveNum > 39) {
    createButton('#8EFFFB', 'hsla(178, 48%, 63%, 0.7)', 7, 605, 'Ranger', 'no');
    drawTank19(-0.08, 8.02, 0, 'no');
    ctx.font = 16.5 + 'px ubuntu';
    ctx.fillStyle = '#545454';
    ctx.fillText('Cost: 5000', 192, 619);
    ctx.fillText('Damage: 100', 192, 639);
    ctx.fillText('Reload: 50', 192, 659);
    ctx.fillText('Range: 500', 192, 679);
    }
    else {
    ctx.font = 16.5 + 'px ubuntu';
    ctx.fillStyle = '#545454';
    ctx.fillText('Unlocked at wave 40', 168.75, 649);
    }
  }
  else if (chosenTank == 20) {
    if (waveNum > 49) {
    createButton('#B58EFF', 'hsla(261, 48%, 63%, 0.7)', 7, 605, 'Mothership', 12);
    ctx.save();
    for (let i = 0; i < 16; i++) {
      if (i % 2 == 1) {
        ctx.beginPath();
        ctx.fillStyle = '#9F9F9F';
        ctx.moveTo(75 * 0.1 + 20.5 + 25, 75 * 8 + 37.5);
        ctx.lineTo(75 * 0.1 + 37 + 25, 75 * 8 + 41.5);
        ctx.lineTo(75 * 0.1 + 37 + 25, 75 * 8 + 33.5);
        ctx.lineTo(75 * 0.1 + 20.5 + 25, 75 * 8 + 37.5);
        ctx.fill();
        outline(2);
      }
      else { tankTurret(0.1, 8, 20, 0, 9, 8.8, i * 22.5, 20, 'no'); }
      rotateTank(0.1, 8, 22.5);
    }
    tankBody(0.1, 8, 18);
    ctx.restore();

    ctx.font = 16.5 + 'px ubuntu';
    ctx.fillStyle = '#545454';
    ctx.fillText('Cost: 100000', 192, 619);
    ctx.fillText('Damage (B, D): 100, 75', 192, 639);
    ctx.fillText('Reload (B, D): 40, 50', 192, 659);
    ctx.fillText('Range: -', 192, 679);
    }
    else {
    ctx.font = 16.5 + 'px ubuntu';
    ctx.fillStyle = '#545454';
    ctx.fillText('Unlocked at wave 50', 168.75, 649);  
    }
  }
  else if (chosenTank > 20 || chosenTank == 0) {
    ctx.fillStyle = '#545454';
    ctx.font = 15 + 'px ubuntu';
    ctx.textAlign = 'left';
    ctx.fillText('[M] - Music', 5, 615);
    ctx.fillText('[RC] - Sell Tanks', 5, 630);
    ctx.fillText('[esc] To Enter/Exit Fullscreen', 5, 645);
    ctx.fillText('Upgrade by Higher Tier Tank on Another Tank', 5, 660);
    ctx.fillText('[~] To Reset All Progress', 5, 675);
  }
  //health bar
  ctx.textAlign = 'left';
  ctx.font = 30 + 'px ubuntu';
  ctx.strokeStyle = '#616161';
  ctx.fillStyle = '#616161';
  ctx.fillText(hp, 265, 39.75);

  ctx.font = 27.75 + 'px ubuntu';
  ctx.fillText('Wave: ' + (waveNum + 1), 100, 72.75);

  ctx.beginPath();
  let size = 20;
  let x = 166.75;
  let y = 20.25;

  ctx.strokeStyle = '#545454';
  ctx.fillStyle = '#545454';
  ctx.lineWidth = size * 1.8;
  ctx.moveTo(x - 7 * size, y + size / 2);
  ctx.lineTo(x + 4 * size, y + size / 2);
  ctx.stroke();
  ctx.closePath();

  ctx.arc(x - 6.9 * size, y + size / 2, size * 0.9, 0, 2 * Math.PI)
  ctx.fill();

  ctx.arc(x + 3.9 * size, y + size / 2, size * 0.9, 0, 2 * Math.PI)
  ctx.fill();

  ctx.lineWidth = size * 1.2;
  ctx.strokeStyle = '#86c280';
  ctx.fillStyle = '#86c280';
  ctx.beginPath();
  ctx.moveTo(x - 6.9 * size, y + size / 2);
  ctx.lineTo(x + (10.8 * size * hp / 1000) - 6.9 * size, y + size / 2);
  ctx.stroke();
  ctx.closePath();
  ctx.lineWidth = 4;

  ctx.arc(x - 6.9 * size, y + size / 2, size * 0.6, 0, 2 * Math.PI)
  ctx.fill();

  ctx.arc(x + (10.8 * size * hp / 1000) - 6.9 * size, y + size / 2, size * 0.6, 0, 2 * Math.PI)
  ctx.fill();
  
  //displayQuality
  ctx.strokeStyle = '#616161';
  ctx.textAlign = 'center';
  ctx.lineWidth = 3
  ctx.fillStyle = '	#FB8EFF';
  ctx.fillRect(7.5,495,322,17.5);
  ctx.fillStyle = '#CA72CD';
  ctx.fillRect(7.5,512.5,322,17.5);
  ctx.strokeRect(7.5,495,322,35);
  ctx.fillStyle = '#616161';
  text('Display quality: ' + displayQuality, 168.75, 520,20, '#FFFFFF', '#616161');

  //XP display
  ctx.fillStyle = '#616161';
  ctx.font = 48 + 'px ubuntu';
  ctx.fillText('XP: ' + numToString(xp), 168.75, 735);
  ctx.lineWidth = 4;
  ctx.strokeRect(2, 685, 333.5, 63);

  ctx.font = 30 + 'px ubuntu';
  ctx.fillText("Time: " + secToTime(time), 168.75, 580);
  ctx = c.getContext('2d');
}

function menuClick() {
  if (mouseX > 0 && mouseX < 337.5) {
    if (mouseX % 82.5 > 7.5 && (mouseY - 75) % 82.5 > 7.5) {
      chosenTank = 4 * ((mouseY - 75) - ((mouseY - 75) % 82.5)) / 82.5 + ((mouseX - (mouseX % 82.5)) / 82.5) + 1;
    }
  }
  if (mouseX > 7.5 && mouseX < 329.5 && mouseY > 495 && mouseY < 530){
    if (displayQuality == 'high'){
      displayQuality = 'normal';
    }
    else if (displayQuality == 'normal'){
      displayQuality = 'medium';
    }
    else if (displayQuality == 'medium'){
      displayQuality = 'low';
    }
    else if (displayQuality == 'low'){
      displayQuality = 'high';
    }
  }
  if (displayQuality == 'high'){
    lagControlSpin = true;
    debugShowDrones = true;
    debugShowTraps = true;
    debugShowHealth = true;
    debugTileLines = true;
  }
  else if (displayQuality == 'normal'){
    lagControlSpin = true;
    debugShowDrones = true;
    debugShowTraps = 'low';
    debugShowHealth = true;
    debugTileLines = true;
  }
  else if (displayQuality == 'medium'){
    lagControlSpin = false;
    debugShowDrones = true;
    debugShowTraps = false;
    debugShowHealth = true;
    debugTileLines = false;
  }
  else if (displayQuality == 'low'){
    lagControlSpin = false;
    debugShowDrones = false;
    debugShowTraps = false;
    debugShowHealth = false;
    debugTileLines = false;
  }
}

function numToString(num) {
  if (num < 10000) { return num; }
  else if (num < 10 ** 6) { return (num - num % 10) / 1000 + "K"; }
  else if (num < 10 ** 9) { return (num - num % 10 ** 4) / 10 ** 6 + "M"; }
  else if (num < 10 ** 12) { return (num - num % 10 ** 7) / 10 ** 9 + "B"; }
  else { return (num - num % 10 ** 10) / 10 ** 12 + "T"; }
}

function log(str) { console.log(str); }

function killEnemies() {
  enemyPosX = [];
  enemyPosY = [];
  enemyMove = [];
  enemyType = [];
  enemyHealth = [];
  enemyOrin = [];
}