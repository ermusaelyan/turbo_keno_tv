import React from 'react';
import s from './History.module.scss';

const History = () => {
  return (
    <div className={s.history}>
      <div className={s.history__title}>Draw History</div>
      <div className={s.history__inner}>
        <ul className={s.history__list}>
          {Array.from(Array(3), (_, i) => (
            <li key={i} className={s.history__item}>
              <div className={s.history__id}>125478</div>
              <div className={s.historyDraw}>
                <ul className={s.historyDraw__list}>
                  {Array.from(Array(20), (_, i) => (
                    <li key={i} className={s.historyDraw__item}>
                      {i + 1}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default History;
