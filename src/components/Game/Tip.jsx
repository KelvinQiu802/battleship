import * as GAME_STATE from '../../utils/gameState';

const Tip = ({ gameState }) => {
  let message;
  switch (gameState) {
    case GAME_STATE.P1PLACING:
    case GAME_STATE.P2PLACING:
      message = '选择船之后在棋盘上放置，右键旋转方向';
      break;
    case GAME_STATE.P1ATTACK:
      message = '玩家一: 在右侧棋盘上选择坐标进行攻击⬆';
      break;
    case GAME_STATE.P2ATTACK:
      message = '⬆玩家二: 在左侧棋盘上选择坐标进行攻击';
  }
  return <p className='tip'>{message}</p>;
};

export default Tip;
