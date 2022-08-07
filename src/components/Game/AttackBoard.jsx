import {
  createEmptyBoard,
  indexToCoordinate,
  coordinateToIndex,
  showSelectiongBlock,
  canAttack,
  checkAttack,
  showAttack,
  checkSunk,
} from '../../utils/boardTools.js';
import { randomAttack } from '../../utils/computerTools';
import React from 'react';
import * as BLOCK_STATE from '../../utils/blockStates';
import * as GAME_STATE from '../../utils/gameState';

const AttackBoard = ({
  player,
  name,
  formData,
  gameState,
  setGameState,
  attack,
  setAttack,
  finalBoard,
}) => {
  const isMyTurn = gameState.includes(player);
  const isSingleMode = formData.playMode === 'singlePlayer';
  const isComputer = gameState === GAME_STATE.P2ATTACK;
  const potentialTargets = React.useRef([]); // 记录潜在的打击目标

  // 创建空棋盘
  let board = createEmptyBoard();

  // 渲染正在选择方块
  board = showSelectiongBlock(board, attack[0].position);

  // 渲染已经进行的攻击
  board = showAttack(board, attack);

  if (isSingleMode && isComputer) {
    console.log(1);
    // 电脑攻击
    let attackPosition;
    if (!potentialTargets.current.length) {
      // 没有潜在打击目标，随机进攻
      attackPosition = randomAttack(attack);
    } else {
      // 随机攻击潜在目标
    }
    const isHit = checkAttack(finalBoard.current, attackPosition);
    const { row, col } = attackPosition;
    setAttack((prev) => [
      ...prev,
      {
        position: {
          row: row,
          col: col,
        },
        state: isHit ? BLOCK_STATE.HIT : BLOCK_STATE.MISS,
        // miss时，ship的值为empty
        ship: finalBoard.current[coordinateToIndex(row, col)],
      },
    ]);
    // 判断是否沉船
    setAttack((prev) => checkSunk(prev, finalBoard.current, row, col));
    // 交换攻击
    setGameState(GAME_STATE.P1ATTACK);
  }

  // 判断输赢
  if (attack.filter((item) => item.state === BLOCK_STATE.SANK).length === 17) {
    setGameState(player === 'p1' ? GAME_STATE.P2WIN : GAME_STATE.P1WIN);
  }

  // 正在选择要攻击的坐标
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
    if (!canAttack(attack)) return;
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
        // miss时，ship的值为empty
        ship: finalBoard.current[coordinateToIndex(row, col)],
      },
    ]);
    // 判断是否沉船, 并更新状态
    setAttack((prev) => checkSunk(prev, finalBoard.current, row, col));
    // 交换进攻
    setGameState(
      gameState.includes('p1') ? GAME_STATE.P2ATTACK : GAME_STATE.P1ATTACK
    );
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
