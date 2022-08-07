import * as BLOCK_STATE from './blockStates';
import * as SHIPS from './ships';

const ROWS = 8;
const COLS = 8;

export const createEmptyBoard = () => {
  return [...new Array(64)].fill(BLOCK_STATE.EMTPY);
};

// Index转坐标
export const coordinateToIndex = (row, col) => row * COLS + col;

// 坐标转Index
export const indexToCoordinate = (index) => {
  return {
    row: Math.floor(index / COLS),
    col: index % COLS,
  };
};

// 放置船
export const placeShipOnBoard = (board, ship, placing = false) => {
  let boardCopy = [...board];
  if (ship?.position.row != null) {
    const {
      name,
      length,
      direction,
      position: { row, col },
    } = ship;

    switch (direction) {
      case 'HORIZONTAL':
        switch (canBePlaced(boardCopy, length, direction, row, col)) {
          case 'OK':
            for (let i = 0; i < length; i++) {
              boardCopy[coordinateToIndex(row, col + i)] = placing
                ? BLOCK_STATE.PLACING
                : name;
            }
            break;
          case 'OVERFLOW':
            for (let i = 0; i < COLS - col; i++) {
              boardCopy[coordinateToIndex(row, col + i)] =
                BLOCK_STATE.FORBIDDEN;
            }
            break;
          case 'OCCUPIED':
            for (let i = 0; i < length; i++) {
              boardCopy[coordinateToIndex(row, col + i)] =
                BLOCK_STATE.FORBIDDEN;
            }
        }
        break;
      case 'VERTICAL':
        switch (canBePlaced(boardCopy, length, direction, row, col)) {
          case 'OK':
            for (let i = 0; i < length; i++) {
              boardCopy[coordinateToIndex(row + i, col)] = placing
                ? BLOCK_STATE.PLACING
                : name;
            }
            break;
          case 'OVERFLOW':
            for (let i = 0; i < ROWS - row; i++) {
              boardCopy[coordinateToIndex(row + i, col)] =
                BLOCK_STATE.FORBIDDEN;
            }
            break;
          case 'OCCUPIED':
            for (let i = 0; i < length; i++) {
              boardCopy[coordinateToIndex(row + i, col)] =
                BLOCK_STATE.FORBIDDEN;
            }
        }
    }
  }
  return boardCopy;
};

// 检查是否可以在此放置船只
export const canBePlaced = (board, length, direction, row, col) => {
  switch (direction) {
    case 'HORIZONTAL':
      // 没出界
      if (col + length <= COLS) {
        // 没其他船
        for (let i = 0; i < length; i++) {
          if (board[coordinateToIndex(row, +col + i)] !== BLOCK_STATE.EMTPY)
            // 有其他船
            return 'OCCUPIED';
        }
        return 'OK';
      }
      // 出界
      return 'OVERFLOW';
    case 'VERTICAL':
      if (row + length <= ROWS) {
        for (let i = 0; i < length; i++) {
          if (board[coordinateToIndex(row + i, col)] !== BLOCK_STATE.EMTPY)
            return 'OCCUPIED';
        }
        return 'OK';
      }
      return 'OVERFLOW';
  }
};

// 渲染正在选择的攻击位置
// selecting是attack数组的第一个元素
export const showSelectiongBlock = (board, position) => {
  if (position.row === null) return board;
  const boardCopy = [...board];
  const index = coordinateToIndex(position.row, position.col);
  if (boardCopy[index] === BLOCK_STATE.EMTPY) {
    boardCopy[index] = BLOCK_STATE.SELECTING;
  }
  return boardCopy;
};

// 检查是否可以攻击
export const canAttack = (attack) => {
  const { row, col } = attack[0].position;
  const attackCopy = [...attack];
  attackCopy.shift();
  // 是否已经被攻击过
  const isAttacked = attackCopy.find(
    (item) => item.position.row === row && item.position.col === col
  );
  // 已经攻击过的不能重复被攻击
  return isAttacked ? false : true;
};

// 检查是否击中
export const checkAttack = (finalBoard, position) => {
  const index = coordinateToIndex(position.row, position.col);
  return finalBoard[index] !== BLOCK_STATE.EMTPY;
};

// 渲染攻击结果
export const showAttack = (board, attack) => {
  const boardCopy = [...board];
  attack.forEach((item) => {
    const index = coordinateToIndex(item.position.row, item.position.col);
    if (item.state != BLOCK_STATE.SELECTING) {
      boardCopy[index] = item.state;
    }
  });
  return boardCopy;
};

// 判断是否沉船
export const checkSunk = (
  attack,
  finalBoard,
  row,
  col,
  potentialTarget = null
) => {
  const ship = finalBoard[coordinateToIndex(row, col)];
  if (ship === 'empty') return attack; // 没打中
  const attackCopy = [...attack];
  const length = SHIPS[ship.toUpperCase()].length;
  const amount = attack.filter((item) => item.ship === ship).length;
  if (amount === length) {
    // 沉了
    attackCopy.forEach((item) => {
      if (item.ship === ship) {
        item.state = BLOCK_STATE.SANK;
      }
    });

    // 如果是电脑攻击，则删除所有潜在目标
    if (potentialTarget) {
      potentialTarget.current = [];
    }
    return attackCopy;
  }
  return attack;
};
