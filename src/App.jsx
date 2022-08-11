import './App.css';
import React from 'react';
import * as GAME_STATE from './utils/gameState';
import Game from './components/Game/Game';
import Welcome from './components/Welcome/Welcome';

const App = () => {
  // 游戏状态，游戏阶段
  const [gameState, setGameState] = React.useState(GAME_STATE.WELCOME);
  // 表单数据
  const [formData, setFormData] = React.useState({
    p1Name: 'Kelvin',
    p2Name: 'Lydia',
    // playMode: 'multiPlayer',
    playMode: 'singlePlayer',
    // language: 'chinese',
    difficulty: 'normal',
  });

  return (
    <div className='App'>
      {gameState === GAME_STATE.WELCOME ? (
        <Welcome
          setGameState={setGameState}
          formData={formData}
          setFormData={setFormData}
        />
      ) : (
        <Game
          gameState={gameState}
          setGameState={setGameState}
          formData={formData}
        />
      )}
    </div>
  );
};

export default App;
