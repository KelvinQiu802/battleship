import * as GAME_STATE from '../../utils/gameState';
import { FormattedMessage } from 'react-intl';

const Tip = ({ gameState }) => {
  let message;
  switch (gameState) {
    case GAME_STATE.P1PLACING:
    case GAME_STATE.P2PLACING:
      message =
        <FormattedMessage
          id='tip.placing'
          defaultMessage='After selecting the ship, place it on the board and right click to rotate the direction.'
        />
      break;
    case GAME_STATE.P1ATTACK:
      message =
        <FormattedMessage
          id='tip.p1Attack'
          defaultMessage='Player1: Select coordinates on the right board to attack.⬆'
        />
      break;
    case GAME_STATE.P2ATTACK:
      message =
        <FormattedMessage
          id='tip.p2Attack'
          defaultMessage='⬆Player2: Select coordinates on the left board to attack.'
        />
  }
  return <p className='tip'>{message}</p>;
};

export default Tip;
