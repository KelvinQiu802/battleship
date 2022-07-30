import './App.css';
import React from 'react';
import * as GAME_STATE from './utils/gameState';

const App = () => {
  // 游戏状态，游戏阶段
  const [gameState, setGameState] = React.useState(GAME_STATE.WELCOME);

  return (
    <div className='App'>
      <h1 className='title'>Battleship Project</h1>
    </div>
  );
};

export default App;
