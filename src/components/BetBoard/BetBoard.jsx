import React from 'react';
import s from './BetBoard.module.scss';
import BetNum from '../BetNum/BetNum';

const BetBoard = () => {
  return (
    <div className={s.betBoard}>
      <ul className={s.betBoard__list}>
        {Array.from(Array(80), (_, i) => (
          <BetNum active={i === 7} cold={i === 25} hot={i === 9} key={i}>
            {i + 1}
          </BetNum>
        ))}
      </ul>
    </div>
  );
};

export default BetBoard;
