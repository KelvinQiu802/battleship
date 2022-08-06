import {
  createEmptyBoard,
  indexToCoordinate,
  placeShipOnBoard,
  coordinateToIndex,
} from '../../utils/boardTools.js';
import { computerPlacingShip } from '../../utils/computerTools';
import * as BLOCK_STATE from '../../utils/blockStates';
import * as GAME_STATE from '../../utils/gameState';

const Board = ({
  gameState,
  setGameState,
  formData,
  player,
  name,
  placingShip,
  setPlacingShip,
  placedShips,
  setPlacedShips,
  avaliableShips,
  setAvaliableShips,
  finalBoard,
}) => {
  // 是否是单人模式
  const isSingleMode = formData.playMode === 'singlePlayer';

  let board;

  if (isSingleMode && player == 'p2') {
    // 电脑自动放船
    // 只要赋值finalboard，然后切换游戏状态即可
    board = computerPlacingShip(avaliableShips);
    console.log(board);
  } else {
    // 空棋盘
    board = createEmptyBoard();

    // 渲染已经放置的船
    if (placedShips.length) {
      placedShips.forEach((ship) => {
        board = placeShipOnBoard(board, ship);
      });
    }

    // 渲染正在放置的船
    board = placeShipOnBoard(board, placingShip, true);

    // 更新游戏状态
    if (!avaliableShips.length) {
      finalBoard.current = board;
      player === 'p1'
        ? setGameState(GAME_STATE.P2PLACING)
        : setGameState(GAME_STATE.P1ATTACK);
    }
  }

  // 移动时更新坐标
  const handleMove = (index) => {
    if (!placingShip) return;
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
    if (e.button === 2 && placingShip) {
      setPlacingShip((prev) => {
        return {
          ...prev,
          direction:
            prev.direction === 'HORIZONTAL' ? 'VERTICAL' : 'HORIZONTAL',
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
              onMouseMove={isSingleMode ? () => handleMove(index) : () => {}}
              onMouseDown={isSingleMode ? handleTurn : () => {}}
              onClick={isSingleMode ? handleClick : () => {}}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Board;
