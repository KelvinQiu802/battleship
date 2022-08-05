import React from 'react';
import Header from '../Header';
import Board from './Board';
import Harbour from './Harbour';
import * as SHIPS from '../../utils/ships';

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
  const p1FinalBoard = React.useRef(null);
  const p2FinalBoard = React.useRef(null);

  return (
    <div className='game'>
      <Header />
      <main className='area game-area'>
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
        <Harbour
          gameState={gameState}
          p1PlacingShip={p1PlacingShip}
          p1AvaliableShips={p1AvaliableShips}
          setP1PlacingShip={setP1PlacingShip}
          p2PlacingShip={p2PlacingShip}
          p2AvaliableShips={p2AvaliableShips}
          setP2PlacingShip={setP2PlacingShip}
        />
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
      </main>
    </div>
  );
};

export default Game;
