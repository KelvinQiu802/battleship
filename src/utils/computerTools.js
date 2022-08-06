export const getRandInt = (min, max) => {
  return Math.floor((max - min + 1) * Math.random() + min);
};

export const getRandCoordinate = () => {
  return {
    row: getRandInt(0, 7),
    col: getRandInt(0, 7),
  };
};

export const getRandDirection = () => {
  return getRandInt(0, 1) ? 'HORIZONTAL' : 'VERTICAL';
};