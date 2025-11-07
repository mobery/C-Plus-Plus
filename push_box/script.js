// 推箱子游戏逻辑

// 地图数据定义（10张地图）
const maps = [
    // 地图1
    {
        width: 8,
        height: 8,
        data: [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 2, 0, 0, 0, 0, 1],
            [1, 0, 3, 0, 4, 0, 0, 1],
            [1, 0, 0, 0, 3, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1]
        ]
    },
    // 地图2
    {
        width: 10,
        height: 8,
        data: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
            [1, 0, 2, 0, 0, 0, 0, 3, 0, 1],
            [1, 0, 0, 0, 3, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 3, 0, 4, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 4, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ]
    },
    // 地图3
    {
        width: 9,
        height: 9,
        data: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 1],
            [1, 0, 2, 0, 0, 0, 0, 3, 1],
            [1, 0, 0, 0, 3, 0, 3, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 4, 0, 4, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1]
        ]
    },
    // 地图4
    {
        width: 8,
        height: 10,
        data: [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 2, 0, 3, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 3, 1],
            [1, 0, 0, 0, 3, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 4, 0, 4, 0, 4, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1]
        ]
    },
    // 地图5
    {
        width: 10,
        height: 10,
        data: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 2, 0, 3, 0, 3, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 3, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 4, 0, 4, 0, 4, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ]
    },
    // 地图6
    {
        width: 9,
        height: 8,
        data: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 2, 0, 3, 0, 3, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 3, 0, 0, 0, 1],
            [1, 0, 4, 0, 4, 0, 4, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1]
        ]
    },
    // 地图7
    {
        width: 8,
        height: 8,
        data: [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 2, 0, 3, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 3, 1],
            [1, 0, 0, 0, 3, 0, 0, 1],
            [1, 0, 4, 0, 4, 0, 4, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1]
        ]
    },
    // 地图8
    {
        width: 10,
        height: 9,
        data: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 2, 0, 3, 0, 3, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 3, 1],
            [1, 0, 0, 0, 3, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 4, 0, 4, 0, 4, 0, 4, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ]
    },
    // 地图9
    {
        width: 9,
        height: 10,
        data: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 2, 0, 3, 0, 3, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 3, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 3, 0, 1],
            [1, 0, 4, 0, 4, 0, 4, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1]
        ]
    },
    // 地图10
    {
        width: 10,
        height: 10,
        data: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 2, 0, 3, 0, 3, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 3, 1],
            [1, 0, 0, 0, 3, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 3, 0, 3, 1],
            [1, 0, 4, 0, 4, 0, 4, 0, 4, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ]
    }
];

// 游戏状态
let currentMapIndex = 0;
let currentMap = null;
let playerPos = {x: 0, y: 0};
let boxes = [];
let targets = [];
let moveCount = 0;
let isGameActive = false;

// DOM元素
const menuScreen = document.getElementById('menu-screen');
const gameScreen = document.getElementById('game-screen');
const mapTitle = document.getElementById('map-title');
const gameCanvas = document.getElementById('game-canvas');
const moveCountElement = document.getElementById('move-count');
const winMessage = document.getElementById('win-message');
const finalMoveCountElement = document.getElementById('final-move-count');
const backBtn = document.getElementById('back-btn');
const nextMapBtn = document.getElementById('next-map-btn');
const returnMenuBtn = document.getElementById('return-menu-btn');
const mapBtns = document.querySelectorAll('.map-btn');

// 格子类型定义
const CELL_TYPES = {
    WALL: 1,
    EMPTY: 0,
    PLAYER: 2,
    BOX: 3,
    TARGET: 4,
    BOX_ON_TARGET: 5,
    PLAYER_ON_TARGET: 6
};

// 初始化游戏
function init() {
    // 绑定地图选择事件
    mapBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const mapIndex = parseInt(btn.dataset.map);
            startGame(mapIndex);
        });
    });
    
    // 绑定返回菜单事件
    backBtn.addEventListener('click', returnToMenu);
    
    // 绑定下一关事件
    nextMapBtn.addEventListener('click', nextMap);
    
    // 绑定返回菜单事件
    returnMenuBtn.addEventListener('click', returnToMenu);
    
    // 绑定键盘事件
    document.addEventListener('keydown', handleKeyPress);
}

// 开始游戏
function startGame(mapIndex) {
    currentMapIndex = mapIndex;
    currentMap = maps[mapIndex];
    
    // 初始化游戏状态
    boxes = [];
    targets = [];
    moveCount = 0;
    
    // 解析地图数据
    for (let y = 0; y < currentMap.height; y++) {
        for (let x = 0; x < currentMap.width; x++) {
            const cell = currentMap.data[y][x];
            
            if (cell === CELL_TYPES.PLAYER || cell === CELL_TYPES.PLAYER_ON_TARGET) {
                playerPos = {x, y};
            }
            
            if (cell === CELL_TYPES.BOX || cell === CELL_TYPES.BOX_ON_TARGET) {
                boxes.push({x, y});
            }
            
            if (cell === CELL_TYPES.TARGET || cell === CELL_TYPES.BOX_ON_TARGET || cell === CELL_TYPES.PLAYER_ON_TARGET) {
                targets.push({x, y});
            }
        }
    }
    
    // 更新UI
    mapTitle.textContent = `地图 ${mapIndex + 1}`;
    moveCountElement.textContent = moveCount;
    
    // 渲染游戏
    renderGame();
    
    // 切换屏幕
    menuScreen.classList.remove('active');
    gameScreen.classList.add('active');
    
    isGameActive = true;
}

// 返回菜单
function returnToMenu() {
    gameScreen.classList.remove('active');
    menuScreen.classList.add('active');
    isGameActive = false;
}

// 下一关
function nextMap() {
    const nextIndex = currentMapIndex + 1;
    if (nextIndex < maps.length) {
        startGame(nextIndex);
        winMessage.classList.add('hidden');
    } else {
        // 所有地图完成
        alert('恭喜你完成了所有地图！');
        returnToMenu();
    }
}

// 渲染游戏
function renderGame() {
    // 清空画布
    gameCanvas.innerHTML = '';
    
    // 设置画布大小
    gameCanvas.style.width = `${currentMap.width * 50}px`;
    gameCanvas.style.height = `${currentMap.height * 50}px`;
    
    // 渲染每个格子
    for (let y = 0; y < currentMap.height; y++) {
        for (let x = 0; x < currentMap.width; x++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.style.width = '50px';
            cell.style.height = '50px';
            cell.style.float = 'left';
            
            // 检查格子类型
            let cellType = currentMap.data[y][x];
            
            // 检查是否有箱子
            const hasBox = boxes.some(box => box.x === x && box.y === y);
            
            // 检查是否是目标点
            const isTarget = targets.some(target => target.x === x && target.y === y);
            
            // 检查是否是玩家
            const isPlayer = playerPos.x === x && playerPos.y === y;
            
            // 确定最终格子类型
            if (isPlayer) {
                cellType = isTarget ? CELL_TYPES.PLAYER_ON_TARGET : CELL_TYPES.PLAYER;
            } else if (hasBox) {
                cellType = isTarget ? CELL_TYPES.BOX_ON_TARGET : CELL_TYPES.BOX;
            } else if (isTarget) {
                cellType = CELL_TYPES.TARGET;
            } else {
                cellType = currentMap.data[y][x];
            }
            
            // 设置格子样式
            switch (cellType) {
                case CELL_TYPES.WALL:
                    cell.classList.add('wall');
                    break;
                case CELL_TYPES.EMPTY:
                    cell.classList.add('empty');
                    break;
                case CELL_TYPES.PLAYER:
                    cell.classList.add('player');
                    break;
                case CELL_TYPES.BOX:
                    cell.classList.add('box');
                    break;
                case CELL_TYPES.TARGET:
                    cell.classList.add('target');
                    break;
                case CELL_TYPES.BOX_ON_TARGET:
                    cell.classList.add('box-on-target');
                    break;
                case CELL_TYPES.PLAYER_ON_TARGET:
                    cell.classList.add('player-on-target');
                    break;
            }
            
            gameCanvas.appendChild(cell);
        }
    }
}

// 处理键盘事件
function handleKeyPress(e) {
    if (!isGameActive) return;
    
    let dx = 0, dy = 0;
    
    switch (e.key) {
        case 'ArrowUp':
            dy = -1;
            break;
        case 'ArrowDown':
            dy = 1;
            break;
        case 'ArrowLeft':
            dx = -1;
            break;
        case 'ArrowRight':
            dx = 1;
            break;
        default:
            return;
    }
    
    movePlayer(dx, dy);
}

// 移动玩家
function movePlayer(dx, dy) {
    const newX = playerPos.x + dx;
    const newY = playerPos.y + dy;
    
    // 检查新位置是否是墙壁
    if (currentMap.data[newY][newX] === CELL_TYPES.WALL) {
        return;
    }
    
    // 检查新位置是否有箱子
    const boxIndex = boxes.findIndex(box => box.x === newX && box.y === newY);
    
    if (boxIndex !== -1) {
        // 有箱子，尝试推动箱子
        const newBoxX = newX + dx;
        const newBoxY = newY + dy;
        
        // 检查箱子新位置是否是墙壁
        if (currentMap.data[newBoxY][newBoxX] === CELL_TYPES.WALL) {
            return;
        }
        
        // 检查箱子新位置是否有其他箱子
        const hasAnotherBox = boxes.some(box => box.x === newBoxX && box.y === newBoxY);
        if (hasAnotherBox) {
            return;
        }
        
        // 推动箱子
        boxes[boxIndex].x = newBoxX;
        boxes[boxIndex].y = newBoxY;
    }
    
    // 移动玩家
    playerPos.x = newX;
    playerPos.y = newY;
    
    // 增加移动次数
    moveCount++;
    moveCountElement.textContent = moveCount;
    
    // 渲染游戏
    renderGame();
    
    // 检查是否获胜
    checkWin();
}

// 检查是否获胜
function checkWin() {
    // 检查所有箱子是否都在目标点上
    const allBoxesOnTarget = boxes.every(box => {
        return targets.some(target => target.x === box.x && target.y === box.y);
    });
    
    if (allBoxesOnTarget) {
        // 显示胜利消息
        finalMoveCountElement.textContent = moveCount;
        winMessage.classList.remove('hidden');
        isGameActive = false;
    }
}

// 页面加载完成后初始化游戏
document.addEventListener('DOMContentLoaded', init);