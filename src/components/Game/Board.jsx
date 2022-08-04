import { createEmptyBoard } from '../../utils/boardTools.js';

const Board = () => {
  let board = createEmptyBoard();

  return (
    <div className='board'>
      {board.map((state, index) => (
        <div key={index} className='block' data-index={index}></div>
      ))}
    </div>
  );
};

export default Board;
