import * as GAME_STATE from '../../utils/gameState';
import React, { Component } from 'react';

const Welcome = ({ setGameState }) => {
  const handleStart = () => {
    setGameState(GAME_STATE.P1PLACING);
  };

  return (
    <React.Fragment>
      <div class='container'>
        <header class='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
          <a
            href='/'
            class='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'
          >
            <svg class='bi me-2' width='40' height='32'></svg>
            <span class='fs-4'>Battleship</span>
          </a>
        </header>

        <div class='px-4 pt-5 my-5 text-center'>
          <h1 class='display-1 fw-bold'>欢迎游玩</h1>
          <div class='col-lg-6 mx-auto'>
            <p class='lead mb-4'>
              海战（英语：Battleship，又名海战棋）是一款双人玩的猜谜游戏。
              {/* Battleship (also known as Battleships or Sea Battle) is a
              strategytype guessing game for two players. */}
            </p>
          </div>
        </div>

        <form>
          <h1 class='h3 mb-3 fw-normal text-center'>请输入对战信息</h1>

          <div class='input-group input-group-lg w-50 mx-auto'>
            <span class='input-group-text' id='inputGroup-sizing-lg'>
              玩家1的昵称
            </span>
            <input
              type='text'
              class='form-control'
              aria-label='Sizing example input'
              aria-describedby='inputGroup-sizing-lg'
            />
          </div>

          <div class='input-group input-group-lg w-50 mx-auto'>
            <span class='input-group-text' id='inputGroup-sizing-lg'>
              玩家2的昵称
            </span>
            <input
              type='text'
              class='form-control'
              aria-label='Sizing example input'
              aria-describedby='inputGroup-sizing-lg'
            />
          </div>

          <div class='text-center my-5'>
            <div class='form-check form-check-inline '>
              <input
                class='form-check-input align-middle'
                type='radio'
                name='inlineRadioOptions'
                id='inlineRadio1'
                value='option1'
              />
              <label class='form-check-label fs-3' for='inlineRadio1'>
                单人模式
              </label>
            </div>
            <div class='form-check form-check-inline'>
              <input
                class='form-check-input'
                type='radio'
                name='inlineRadioOptions'
                id='inlineRadio2'
                value='option2'
              />
              <label className='form-check-label fs-3' for='inlineRadio2'>
                双人对战模式
              </label>
            </div>
          </div>

          <div class='d-flex mb-5 mx-auto w-25'>
            <span class='input-group-text ' id='inputGroup-sizing-lg'>
              选择语言
            </span>
            <select
              class='form-select form-select-lg '
              aria-label='.form-select-lg example'
            >
              <option selected>简体中文</option>
              <option value='1'>English</option>
            </select>
          </div>

          <div className='text-center'>
            <button class='w-50 btn btn-lg btn-primary' type='submit'>
              开始游戏
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Welcome;
