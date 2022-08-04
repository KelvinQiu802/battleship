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
  const [p1PlacingShip, setP1PlacingSHip] = React.useState(null);
  const [p1PlacedShip, setP1PlacedShip] = React.useState([]);
  const [p2AvaliableShips, setP2AvaliableShips] = React.useState([
    SHIPS.CARRIER,
    SHIPS.BATTLESHIP,
    SHIPS.DESTROYER,
    SHIPS.SUBMARINE,
    SHIPS.PATROL,
  ]);
  const [p2PlacingShip, setP2PlacingSHip] = React.useState(null);
  const [p2PlacedShip, setP2PlacedShip] = React.useState([]);

  return (
    <div className='game'>
      <Header />
      <main className='area game-area'>
        <Board player='p1' gameState={gameState} name={formData.p1Name} />
        <Harbour
          gameState={gameState}
          p1PlacingShip={p1PlacingShip}
          p1AvaliableShips={p1AvaliableShips}
          setP1PlacingShip={setP1PlacingSHip}
          p2PlacingShip={p2PlacingShip}
          p2AvaliableShips={p2AvaliableShips}
          setP2PlacingShip={setP2PlacingSHip}
        />
        <Board player='p2' gameState={gameState} name={formData.p2Name} />
      </main>
    </div>
  );
};

export default Game;
