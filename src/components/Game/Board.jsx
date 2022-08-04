import { createEmptyBoard } from '../../utils/boardTools.js';

const Board = ({ player, name }) => {
  let board = createEmptyBoard();

  return (
    <div className='board-container'>
      <h2 className='board-title'>{`${name}'s Board`}</h2>
      <div className='board'>
        {board.map((state, index) => (
          <div key={index} className='block' data-index={index}></div>
        ))}
      </div>
    </div>
  );
};

export default Board;
