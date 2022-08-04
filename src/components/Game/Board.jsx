import { createEmptyBoard } from '../../utils/boardTools.js';

const Board = ({ gameState, player, name }) => {
  let board = createEmptyBoard();

  return (
    <div className='board-container'>
      <h2 className='board-title'>{`${name}'s Board`}</h2>
      {!gameState.includes(player) ? (
        <h1 className='waiting-title'>
          等待玩家{gameState.includes('p1') ? '一' : '二'}放置
        </h1>
      ) : (
        <div className='board'>
          {board.map((state, index) => (
            <div key={index} className='block' data-index={index}></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Board;
