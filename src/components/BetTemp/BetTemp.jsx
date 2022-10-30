import React from 'react';
import s from './BetTemp.module.scss';
import classNames from 'classnames';

const BetTemp = ({ hot }) => {
  return (
    <div className={s.betTemp}>
      <div className={classNames(s.betTemp__name, { [s.hot]: hot })}>
        {hot ? 'hot' : 'cold'}
      </div>
      <div className={s.betTemp__numbers}>
        <ul className={s.betTemp__list}>
          <li className={s.betTemp__item}>1</li>
          <li className={s.betTemp__item}>1</li>
          <li className={s.betTemp__item}>1</li>
          <li className={s.betTemp__item}>1</li>
          <li className={s.betTemp__item}>1</li>
          <li className={s.betTemp__item}>1</li>
        </ul>
      </div>
    </div>
  );
};

export default BetTemp;
