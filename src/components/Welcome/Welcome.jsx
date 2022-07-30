import './welcome.css';
import * as GAME_STATE from '../../utils/gameState';

const Welcome = ({ setGameState }) => {
  const handleStart = () => {
    setGameState(GAME_STATE.P1PLACING);
  };

  return (
    <div className='welcome'>
      <h1 className='title'>Welcome</h1>
      <button className='start-button' onClick={handleStart}>
        Start
      </button>
    </div>
  );
};

export default Welcome;
