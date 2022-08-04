import * as BLOCK from './blockStates';

const ROWS = 8;
const COLS = 8;

export const createEmptyBoard = () => {
  return [...new Array(64)].fill(BLOCK.EMTPY);
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
