import MiniBoard from './MiniBoard';
import DataCatd from './DataCard';
import { FormattedMessage } from 'react-intl';

const GameOver = ({
  gameState,
  formData,
  p1FinalBoard,
  p2FinalBoard,
  p1Attack,
  p2Attack,
}) => {
  const winner = gameState.includes('p1') ? formData.p1Name : formData.p2Name;
  return (
    <div className='over area'>
      <h1 className='over-title'>
        <FormattedMessage
          id='over.title'
          defaultMessage="Game Over"
        />
      </h1>
      <h2 className='over-winner'>
        <FormattedMessage
          id='over.winner'
          values={{ winner: <b>{winner}</b> }}
          defaultMessage={`The winner is: ${winner}`}
        />
      </h2>
      <main className='over-show'>
        <div className='show-data'>
          <DataCatd name={formData.p1Name} attack={p1Attack} />
          <DataCatd name={formData.p2Name} attack={p2Attack} />
        </div>
        <div className='show-board'>
          <MiniBoard finalBoard={p1FinalBoard} name={formData.p1Name} />
          <MiniBoard finalBoard={p2FinalBoard} name={formData.p2Name} />
        </div>
      </main>
    </div>
  );
};

export default GameOver;
