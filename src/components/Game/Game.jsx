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

  return (
    <div className='game'>
      <Header />
      <main className='area game-area'>
        <Board player='player1' name={formData.p1Name} />
        <Harbour p1AvaliableShips={p1AvaliableShips} />
        <Board player='player2' name={formData.p2Name} />
      </main>
    </div>
  );
};

export default Game;
