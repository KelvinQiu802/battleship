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
  const [p2PlacingShip, setP2PlacingSHip] = React.useState(null);
  const [p2PlacedShips, setP2PlacedShips] = React.useState([]);

  return (
    <div className='game'>
      <Header />
      <main className='area game-area'>
        <Board
          player='p1'
          gameState={gameState}
          name={formData.p1Name}
          setPlacingShip={setP1PlacingShip}
          placingShip={p1PlacingShip}
          placedShips={p1PlacedShips}
          setPlacedShips={setP1PlacedShips}
          setAvaliableShips={setP1AvaliableShips}
        />
        <Harbour
          gameState={gameState}
          p1PlacingShip={p1PlacingShip}
          p1AvaliableShips={p1AvaliableShips}
          setP1PlacingShip={setP1PlacingShip}
          p2PlacingShip={p2PlacingShip}
          p2AvaliableShips={p2AvaliableShips}
          setP2PlacingShips={setP2PlacingSHip}
        />
        <Board
          player='p2'
          gameState={gameState}
          name={formData.p2Name}
          setPlacingShip={setP2PlacingSHip}
          placingShip={p2PlacingShip}
          placedShips={p2PlacedShips}
          setPlacedShips={setP2PlacedShips}
          setAvaliableShips={setP2AvaliableShips}
        />
      </main>
    </div>
  );
};

export default Game;
