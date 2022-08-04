import * as GAME_STATE from '../../utils/gameState';
import React, { Component } from 'react';
import Header from '../Header';

const Welcome = ({ setGameState }) => {
  const handleStart = () => {
    setGameState(GAME_STATE.P1PLACING);
  };

  const handleSubmit = () => {};

  return (
    <div className='welcome'>
      <Header />
      <main className='area welcome-body'>
        <h1 className='welcome-title'>欢迎游玩</h1>
        <p className='welcome-intro'>
          海战棋(Battleship)是一款双人游玩的猜谜游戏
        </p>
        <form onSubmit={handleSubmit} className='welcome-form'>
          <label htmlFor='p1Name'>玩家1名称:</label>
          <input type='text' name='p1Name' id='p1Name' />
          <br />
          <label htmlFor='p2Name'>玩家2名称:</label>
          <input type='text' name='p2Name' id='p2Name' />
          <br />
          <input
            type='radio'
            name='playMode'
            id='multiPlayer'
            value='multiPlayer'
          />
          <label htmlFor='multiPlayer'>双人</label>
          <input
            type='radio'
            name='playMode'
            id='singlePlayer'
            value='singlePlayer'
          />
          <label htmlFor='singlePlayer'>单人</label>
          <br />
          <label htmlFor='language'>语言: </label>
          <select name='language' id='language'>
            <option value='chinese'>中文</option>
            <option value='english'>英文</option>
          </select>
          <br />
          <button type='submit' className='button-start'>
            开始游戏
          </button>
        </form>
      </main>
    </div>
  );
};

export default Welcome;
