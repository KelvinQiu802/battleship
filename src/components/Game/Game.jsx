import React from 'react';
import Header from '../Header';
import Board from './Board';
import Harbour from './Harbour';
import AttackBoard from './AttackBoard';
import GameOver from '../GameOver/GameOver';
import Tip from './Tip';
import * as SHIPS from '../../utils/ships';
import * as BLOCK_STATE from '../../utils/blockStates';

const Game = ({ gameState, setGameState, formData }) => {
  // 玩家数据
  const [p1AvaliableShips, setP1AvaliableShips] = React.useState([
    SHIPS.CARRIER,
    SHIPS.BATTLESHIP,
    SHIPS.DESTROYER,
    SHIPS.SUBMARINE,
    SHIPS.PATROL,
  ]);
  const [p1PlacingShip, setP1PlacingShip] = React.useState(null);
  const [p1PlacedShips, setP1PlacedShips] = React.useState([]);
  const [p2AvaliableShips, setP2AvaliableShips] = React.useState([
    SHIPS.CARRIER,
    SHIPS.BATTLESHIP,
    SHIPS.DESTROYER,
    SHIPS.SUBMARINE,
    SHIPS.PATROL,
  ]);
  const [p2PlacingShip, setP2PlacingShip] = React.useState(null);
  const [p2PlacedShips, setP2PlacedShips] = React.useState([]);
  const [p1Attack, setP1Attack] = React.useState([
    { position: { row: null, col: null }, state: BLOCK_STATE.SELECTING },
  ]);
  const [p2Attack, setP2Attack] = React.useState([
    { position: { row: null, col: null }, state: BLOCK_STATE.SELECTING },
  ]);
  const p1FinalBoard = React.useRef(null);
  const p2FinalBoard = React.useRef(null);

  // 判断游戏阶段
  const isPlacing = gameState.includes('placing');
  const gameOver = gameState.includes('win');

  return (
    <div className='game'>
      <Header />
      {gameOver ? (
        <div className='gameover-wrapper'>
          <GameOver
            gameState={gameState}
            formData={formData}
            p1FinalBoard={p1FinalBoard}
            p2FinalBoard={p2FinalBoard}
            p1Attack={p1Attack}
            p2Attack={p2Attack}
          />
        </div>
      ) : (
        <div className='game-wrapper'>
          <main className='area game-area'>
            {isPlacing ? (
              <Board
                player='p1'
                formData={formData}
                gameState={gameState}
                setGameState={setGameState}
                name={formData.p1Name}
                setPlacingShip={setP1PlacingShip}
                placingShip={p1PlacingShip}
                placedShips={p1PlacedShips}
                setPlacedShips={setP1PlacedShips}
                avaliableShips={p1AvaliableShips}
                setAvaliableShips={setP1AvaliableShips}
                finalBoard={p1FinalBoard}
                comBoard={p2FinalBoard}
              />
            ) : (
              <AttackBoard
                player='p1'
                name={formData.p1Name}
                formData={formData}
                gameState={gameState}
                setGameState={setGameState}
                attack={p2Attack}
                comAttack={p2Attack}
                setComAttack={setP2Attack}
                setAttack={setP2Attack}
                finalBoard={p1FinalBoard}
                p1FinalBoard={p1FinalBoard}
              />
            )}
            {isPlacing && (
              <Harbour
                gameState={gameState}
                p1PlacingShip={p1PlacingShip}
                p1AvaliableShips={p1AvaliableShips}
                setP1PlacingShip={setP1PlacingShip}
                p2PlacingShip={p2PlacingShip}
                p2AvaliableShips={p2AvaliableShips}
                setP2PlacingShip={setP2PlacingShip}
              />
            )}
            {isPlacing ? (
              <Board
                player='p2'
                formData={formData}
                gameState={gameState}
                setGameState={setGameState}
                name={formData.p2Name}
                setPlacingShip={setP2PlacingShip}
                placingShip={p2PlacingShip}
                placedShips={p2PlacedShips}
                setPlacedShips={setP2PlacedShips}
                avaliableShips={p2AvaliableShips}
                setAvaliableShips={setP2AvaliableShips}
                finalBoard={p2FinalBoard}
                comBoard={p2FinalBoard}
              />
            ) : (
              <AttackBoard
                player='p2'
                name={formData.p2Name}
                formData={formData}
                gameState={gameState}
                setGameState={setGameState}
                attack={p1Attack}
                comAttack={p2Attack}
                setComAttack={setP2Attack}
                setAttack={setP1Attack}
                finalBoard={p2FinalBoard}
                p1FinalBoard={p1FinalBoard}
              />
            )}
          </main>
          <Tip gameState={gameState} />
        </div>
      )}
    </div>
  );
};

export default Game;
