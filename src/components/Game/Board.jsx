import {
  createEmptyBoard,
  indexToCoordinate,
  placeShipOnBoard,
} from '../../utils/boardTools.js';

const Board = ({ gameState, player, name, placingShip, setPlacingShip }) => {
  let board = createEmptyBoard();

  // 渲染正在放置的船
  board = placeShipOnBoard(board, placingShip);

  console.log(board);

  const handleMove = (index) => {
    const { row, col } = indexToCoordinate(index);
    setPlacingShip((prev) => {
      return {
        ...prev,
        position: {
          row: row,
          col: col,
        },
      };
    });
  };

  // 放置船
  const handleClick = () => {};

  // 右键旋转
  const handleTurn = (e) => {
    // 右键
    if (e.button === 2) {
      setPlacingShip((prev) => {
        return {
          ...prev,
          direction:
            prev.direction === 'HORIZONTAL' ? 'VERTICAL' : 'HORITZONTAL',
        };
      });
    }
  };

  return (
    <div className='board-container'>
      <h2 className='board-title'>{`${name}'s Board`}</h2>
      {!gameState.includes(player) ? (
        <h1 className='waiting-title'>
          等待玩家{gameState.includes('p1') ? '一' : '二'}放置
        </h1>
      ) : (
        <div className='board' onContextMenu={(e) => e.preventDefault()}>
          {board.map((state, index) => (
            <div
              key={index}
              className={`block ${state}`}
              data-index={index}
              onMouseMove={() => handleMove(index)}
              onMouseDown={handleTurn}
              onClick={handleClick}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Board;
