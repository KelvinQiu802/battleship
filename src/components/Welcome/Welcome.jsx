import * as GAME_STATE from '../../utils/gameState';
import React, { Component } from 'react';
import Header from '../Header';

const Welcome = ({ setGameState }) => {
  const handleStart = () => {
    setGameState(GAME_STATE.P1PLACING);
  };

  return (
    <div className='welcome'>
      <Header />
      <div className='container'>
        <div className='px-4 pt-5 my-5 text-center'>
          <h1 className='display-1 fw-bold'>欢迎游玩</h1>
          <div className='col-lg-6 mx-auto'>
            <p className='lead mb-4'>
              海战（英语：Battleship，又名海战棋）是一款双人玩的猜谜游戏。
              {/* Battleship (also known as Battleships or Sea Battle) is a
              strategytype guessing game htmlFor two players. */}
            </p>
          </div>
        </div>

        <form>
          <h1 className='h3 mb-3 fw-normal text-center'>请输入对战信息</h1>

          <div className='input-group input-group-lg w-50 mx-auto'>
            <span className='input-group-text' id='inputGroup-sizing-lg'>
              玩家1的昵称
            </span>
            <input
              type='text'
              className='htmlForm-control'
              aria-label='Sizing example input'
              aria-describedby='inputGroup-sizing-lg'
            />
          </div>

          <div className='input-group input-group-lg w-50 mx-auto'>
            <span className='input-group-text' id='inputGroup-sizing-lg'>
              玩家2的昵称
            </span>
            <input
              type='text'
              className='htmlForm-control'
              aria-label='Sizing example input'
              aria-describedby='inputGroup-sizing-lg'
            />
          </div>

          <div className='text-center my-5'>
            <div className='htmlForm-check htmlForm-check-inline '>
              <input
                className='htmlForm-check-input align-middle'
                type='radio'
                name='inlineRadioOptions'
                id='inlineRadio1'
                value='option1'
              />
              <label
                className='htmlForm-check-label fs-3'
                htmlFor='inlineRadio1'
              >
                单人模式
              </label>
            </div>
            <div className='htmlForm-check htmlForm-check-inline'>
              <input
                className='htmlForm-check-input'
                type='radio'
                name='inlineRadioOptions'
                id='inlineRadio2'
                value='option2'
              />
              <label
                className='htmlForm-check-label fs-3'
                htmlFor='inlineRadio2'
              >
                双人对战模式
              </label>
            </div>
          </div>

          <div className='d-flex mb-5 mx-auto w-25'>
            <span className='input-group-text ' id='inputGroup-sizing-lg'>
              选择语言
            </span>
            <select
              className='htmlForm-select htmlForm-select-lg '
              aria-label='.htmlForm-select-lg example'
            >
              <option selected>简体中文</option>
              <option value='1'>English</option>
            </select>
          </div>

          <div className='text-center'>
            <button className='w-50 btn btn-lg btn-primary' type='submit'>
              开始游戏
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Welcome;
