import React, { useState } from 'react';
import s from './History.module.scss';
import { useEffect } from 'react';
import axios from 'axios';

const History = () => {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    axios
      .get(`http://oliver.energaming.systems:20034/api/v1/get-draw-results`, {
        params: {
          token: 'test-frontend-token',
          duration: 1,
          page: 0,
        },
      })
      .then(res => setHistory(res.data.data.lastRaces.slice(1, 4)));
  }, []);
  return (
    <div className={s.history}>
      <div className={s.history__title}>Draw History</div>
      <div className={s.history__inner}>
        <ul className={s.history__list}>
          {history.map(item => {
            return (
              <li key={item.id} className={s.history__item}>
                <div className={s.history__id}>{item.id}</div>
                <div className={s.historyDraw}>
                  <ul className={s.historyDraw__list}>
                    {item.r.split(',').map(num => {
                      return (
                        <li key={num} className={s.historyDraw__item}>
                          {num}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default History;
