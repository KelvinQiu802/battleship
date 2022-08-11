import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Wrapper from './components/Wrapper';
import './index.css';
import './components/Welcome/welcome.css';
import './components/Game/game.css';
import './components/GameOver/over.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Wrapper>
      <App />
    </Wrapper>
  </React.StrictMode>
);
