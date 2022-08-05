import {
  createEmptyBoard,
  indexToCoordinate,
  coordinateToIndex,
  showSelectiongBlock,
  canAttack,
  checkAttack,
  showAttack,
} from '../../utils/boardTools.js';
import React from 'react';
import * as BLOCK_STATE from '../../utils/blockStates';
import * as GAME_STATE from '../../utils/gameState';

const AttackBoard = ({
  player,
  name,
  gameState,
  setGameState,
  attack,
  setAttack,
  finalBoard,
}) => {
  const isMyTurn = gameState.includes(player);

  // 创建空棋盘
  let board = createEmptyBoard();

  // 渲染正在选择方块
  board = showSelectiongBlock(board, attack[0].position);

  // 渲染已经进行的攻击
  board = showAttack(board, attack);

  const handleMove = (index) => {
    const { row, col } = indexToCoordinate(index);
    setAttack((prev) => {
      const copy = [...prev];
      copy[0].position = { row: row, col: col };
      return copy;
    });
  };

  const hanldeAttack = () => {
    const { row, col } = attack[0].position;
    if (!canAttack(board, attack)) return;
    // 可以攻击
    const isHit = checkAttack(finalBoard.current, attack[0].position);
    // 添加一次进攻数据
    setAttack((prev) => [
      ...prev,
      {
        position: {
          row: row,
          col: col,
        },
        state: isHit ? BLOCK_STATE.HIT : BLOCK_STATE.MISS,
      },
    ]);
  };

  return (
    <div className='board-container'>
      <h2 className='board-title'>{`${name}'s Board`}</h2>
      <div
        className={`board ${isMyTurn ? 'disabled' : ''}`}
        onContextMenu={(e) => e.preventDefault()}
      >
        {board.map((state, index) => (
          <div
            key={index}
            className={`block ${state}`}
            data-index={index}
            onMouseMove={isMyTurn ? () => {} : () => handleMove(index)}
            onClick={isMyTurn ? () => {} : hanldeAttack}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AttackBoard;
