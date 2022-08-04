import * as BLOCK_STATE from './blockStates';

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
                : BLOCK_STATE.SHIP;
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
                : BLOCK_STATE.SHIP;
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
          if (board[coordinateToIndex(row, +col + i)] == BLOCK_STATE.SHIP)
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
          if (board[coordinateToIndex(row + i, col)] == BLOCK_STATE.SHIP)
            return 'OCCUPIED';
        }
        return 'OK';
      }
      return 'OVERFLOW';
  }
};
