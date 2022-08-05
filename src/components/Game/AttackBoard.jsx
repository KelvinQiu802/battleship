import {
  createEmptyBoard,
  indexToCoordinate,
  coordinateToIndex,
  showSelectiongBlock,
} from '../../utils/boardTools.js';
import * as BLOCK_STATE from '../../utils/blockStates';
import * as GAME_STATE from '../../utils/gameState';

const AttackBoard = ({ player, name, gameState, attack, setAttack }) => {
  // 创建空棋盘
  let board = createEmptyBoard();

  // 渲染正在选择方块
  board = showSelectiongBlock(board, attack[0]);

  const handleMove = (index) => {
    const { row, col } = indexToCoordinate(index);
    setAttack((prev) =>
      prev.map((item) => {
        if (item.state === BLOCK_STATE.SELECTING) {
          return {
            ...item,
            position: {
              row: row,
              col: col,
            },
          };
        }
      })
    );
  };

  const hanldeAttack = () => {};

  return (
    <div className='board-container'>
      <h2 className='board-title'>{`${name}'s Board`}</h2>
      {gameState.includes(player) ? (
        <h1 className='waiting-title'>
          等待玩家{player === 'p1' ? '一' : '二'}攻击
        </h1>
      ) : (
        <div className='board' onContextMenu={(e) => e.preventDefault()}>
          {board.map((state, index) => (
            <div
              key={index}
              className={`block ${state}`}
              data-index={index}
              onMouseMove={() => handleMove(index)}
              onClick={hanldeAttack}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AttackBoard;
