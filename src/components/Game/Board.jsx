import {
  createEmptyBoard,
  indexToCoordinate,
  placeShipOnBoard,
  coordinateToIndex,
} from '../../utils/boardTools.js';
import * as BLOCK_STATE from '../../utils/blockStates';
import * as GAME_STATE from '../../utils/gameState';

const Board = ({
  gameState,
  setGameState,
  player,
  name,
  placingShip,
  setPlacingShip,
  placedShips,
  setPlacedShips,
  avaliableShips,
  setAvaliableShips,
}) => {
  // 空棋盘
  let board = createEmptyBoard();

  // 渲染已经放置的船
  if (placedShips.length) {
    placedShips.forEach((ship) => {
      board = placeShipOnBoard(board, ship);
    });
  }

  // 渲染正在放置的船
  board = placeShipOnBoard(board, placingShip, true);

  // 更新游戏状态
  if (player === 'p1' && avaliableShips.length === 0) {
    setGameState(GAME_STATE.P2PLACING);
  }

  // 移动时更新坐标
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
  const handleClick = () => {
    if (placingShip) {
      const {
        name,
        length,
        direction,
        position: { row, col },
      } = placingShip;
      if (board[coordinateToIndex(row, col)] !== BLOCK_STATE.FORBIDDEN) {
        // 放船
        setPlacedShips((prev) => [...prev, placingShip]);
        // 移出可用船
        setAvaliableShips((prev) =>
          prev.filter((ship) => ship.name !== placingShip.name)
        );
        // 重制正在放置的船
        setPlacingShip(null);
      }
    }
  };

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
