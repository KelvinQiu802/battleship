import {
  canBePlaced,
  coordinateToIndex,
  createEmptyBoard,
  indexToCoordinate,
  placeShipOnBoard,
} from './boardTools';

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

// 添加潜在目标
export const addPotentialTarget = (position, attack, potentialTarget) => {
  const { row, col } = position;
  if (row + 1 <= 7 && canAttack(attack, row + 1, col)) {
    potentialTarget.current.push(coordinateToIndex(row + 1, col));
  }
  if (row - 1 >= 0 && canAttack(attack, row - 1, col)) {
    potentialTarget.current.push(coordinateToIndex(row - 1, col));
  }
  if (col + 1 <= 7 && canAttack(attack, row, col + 1)) {
    potentialTarget.current.push(coordinateToIndex(row, col + 1));
  }
  if (col - 1 >= 0 && canAttack(attack, row, col - 1)) {
    potentialTarget.current.push(coordinateToIndex(row, col - 1));
  }
  return potentialTarget.current;
};

// 攻击潜在目标
export const attackPotentialTarget = (potentialTarget, attack) => {
  while (true) {
    const randIndex = getRandInt(0, potentialTarget.current.length - 1);
    const { row, col } = indexToCoordinate(potentialTarget.current[randIndex]);
    if (canAttack(attack, row, col)) {
      // 删除这个要被攻击的潜在目标
      potentialTarget.current.splice(randIndex, 1);
      return {
        row: row,
        col: col,
      };
    } else {
      // 删除无法攻击的目标
      potentialTarget.current.splice(randIndex, 1);
    }
  }
};
