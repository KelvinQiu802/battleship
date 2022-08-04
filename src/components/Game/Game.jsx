import Header from '../Header';
import Board from './Board';
import Harbour from './Harbour';

const Game = () => {
  return (
    <div className='game'>
      <Header />
      <main className='area game-area'>
        <Board />
        <Harbour />
        <Board />
      </main>
    </div>
  );
};

export default Game;
