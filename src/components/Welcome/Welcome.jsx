import './welcome.css';
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
          <h1 class='display-1 fw-bold'>Welcome</h1>
          <div class='col-lg-6 mx-auto'>
            <p class='lead mb-4'>
              Battleship (also known as Battleships or Sea Battle) is a strategy
              type guessing game for two players. It is played on ruled grids
              (paper or board) on which each player's fleet of warships are
              marked. The locations of the fleets are concealed from the other
              player. Players alternate turns calling "shots" at the other
              player's ships, and the objective of the game is to destroy the
              opposing player's fleet. Battleship is known worldwide as a pencil
              and paper game which dates from World War I. It was published by
              various companies as a pad-and-pencil game in the 1930s and was
              released as a plastic board game by Milton Bradley in 1967. The
              game has spawned electronic versions, video games, smart device
              apps and a film.
            </p>
            <div class='d-grid gap-2 d-sm-flex justify-content-sm-center mb-5'>
              <button type='button' class='btn btn-primary btn-lg px-4 me-sm-3'>
                Start
              </button>
              <button
                type='button'
                class='btn btn-outline-secondary btn-lg px-4'
              >
                help
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Welcome;
