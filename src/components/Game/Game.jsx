import React from 'react';
import s from './Game.module.scss';
import BetBoard from '../BetBoard/BetBoard';
import OtherTypes from '../OtherTypes/OtherTypes';
import Draw from '../Draw/Draw';
import Coefficient from '../Coefficient/Coefficient';
import History from '../History/History';

const Game = () => {
  return (
    <div className={s.game}>
      <div className={s.game__bet}>
        <BetBoard />
        <OtherTypes />
      </div>
      <div className={s.game__process}>
        <Draw />
        <Coefficient />
        <History />
      </div>
    </div>
  );
};

export default Game;
