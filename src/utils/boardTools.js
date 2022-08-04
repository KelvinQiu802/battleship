import * as BLOCK from './blockStates';

export const createEmptyBoard = () => {
  return [...new Array(64)].fill(BLOCK.EMTPY);
};
