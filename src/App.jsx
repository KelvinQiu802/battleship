import './App.css';
import React from 'react';
import * as GAME_STATE from './utils/gameState';
import * as SHIPS from './utils/ships.js';
import Game from './components/Game/Game';
import Welcome from './components/Welcome/Welcome';

const App = () => {
  // 游戏状态，游戏阶段
  const [gameState, setGameState] = React.useState(GAME_STATE.P1PLACING);
  // 表单数据
  const [formData, setFormData] = React.useState({
    p1Name: 'Kelvin',
    p2Name: 'Lydia',
    playMode: 'multiPlayer',
    language: 'chinese',
  });
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
    <div className='App'>
      {gameState === GAME_STATE.WELCOME ? (
        <Welcome
          setGameState={setGameState}
          formData={formData}
          setFormData={setFormData}
        />
      ) : (
        <Game />
      )}
    </div>
  );
};

export default App;
