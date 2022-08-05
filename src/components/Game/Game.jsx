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
        <GameOver gameState={gameState} formData={formData} />
      ) : (
        <>
          <main className='area game-area'>
            {isPlacing ? (
              <Board
                player='p1'
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
              />
            ) : (
              <AttackBoard
                player='p1'
                name={formData.p1Name}
                gameState={gameState}
                setGameState={setGameState}
                attack={p2Attack}
                setAttack={setP2Attack}
                finalBoard={p1FinalBoard}
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
              />
            ) : (
              <AttackBoard
                player='p2'
                name={formData.p2Name}
                gameState={gameState}
                setGameState={setGameState}
                attack={p1Attack}
                setAttack={setP1Attack}
                finalBoard={p2FinalBoard}
              />
            )}
          </main>
          <Tip gameState={gameState} />
        </>
      )}
    </div>
  );
};

export default Game;
