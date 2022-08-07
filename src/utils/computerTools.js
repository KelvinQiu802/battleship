import { canBePlaced, createEmptyBoard, placeShipOnBoard } from './boardTools';

export const getRandInt = (min, max) => {
  return Math.floor((max - min + 1) * Math.random() + min);
};

// 随机坐标
export const getRandCoordinate = () => {
  return {
    row: getRandInt(0, 7),
    col: getRandInt(0, 7),
  };
};

// 随机方向
export const getRandDirection = () => {
  return getRandInt(0, 1) ? 'HORIZONTAL' : 'VERTICAL';
};

// 电脑自动放船
export const computerPlacingShip = (avaliableShips) => {
  let board = createEmptyBoard();
  const shipsCopy = [...avaliableShips];
  shipsCopy.forEach((ship) => {
    while (true) {
      const position = getRandCoordinate();
      const direction = getRandDirection();
      const length = ship.length;
      if (
        canBePlaced(board, length, direction, position.row, position.col) ===
        'OK'
      ) {
        // 放船
        board = placeShipOnBoard(board, {
          ...ship,
          direction: direction,
          position: position,
        });
        break;
      }
    }
  });
  return board;
};

// 检查是否可以攻击
export const canAttack = (attack, row, col) => {
  const attackCopy = [...attack];
  attackCopy.shift();
  // 是否已经被攻击过
  const isAttacked = attackCopy.find(
    (item) => item.position.row === row && item.position.col === col
  );
  // 已经攻击过的不能重复被攻击
  return isAttacked ? false : true;
};

// 随机攻击
export const randomAttack = (attack) => {
  while (true) {
    const row = getRandInt(0, 7);
    const col = getRandInt(0, 7);
    if (canAttack(attack, row, col)) {
      return { row: row, col: col };
    }
  }
};
