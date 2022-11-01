import React, { useEffect, useState } from 'react';
import s from './Draw.module.scss';
import Loader from '../Loader/Loader';
import DrawNum from '../DrawNum/DrawNum';
import BetTemp from '../BetTemp/BetTemp';
import axios from 'axios';

const Draw = () => {
  const [drawNums, setDrawNums] = useState([]);
  useEffect(() => {
    axios
      .get(`http://oliver.energaming.systems:20034/api/v1/get-draw-results`, {
        params: {
          token: 'test-frontend-token',
          duration: 1,
          page: 0,
        },
      })
      .then(res => setDrawNums(res.data.data.lastRaces[0].r.split(',')));
  }, []);
  return (
    <div className={s.draw}>
      <div className={s.draw__header}>
        <div className={s.draw__next}>NEXT DRAW: 54790 in 00:00</div>
        <div className={s.draw__current}>
          <div className={s.draw__currentName}>CURRENT DRAW PROCESS</div>
          <div className={s.draw__currentID}>54789</div>
          <div className={s.draw__load}>
            <Loader percent={45} />
          </div>
        </div>
      </div>
      <div className={s.draw__body}>
        <ul className={s.draw__list}>
          {drawNums.map(num => {
            return (
              <li key={num} className={s.draw__item}>
                <DrawNum show={false}>{num}</DrawNum>
              </li>
            );
          })}
          {/*{Array.from(Array(20), (_, i) => (*/}
          {/*  <li key={i} className={s.draw__item}>*/}
          {/*    <DrawNum show={true}>{i + 1}</DrawNum>*/}
          {/*  </li>*/}
          {/*))}*/}
        </ul>
      </div>
      <div className={s.draw__footer}>
        <div className={s.draw__temp}>
          <BetTemp hot />
        </div>
        <div className={s.draw__temp}>
          <BetTemp />
        </div>
        <></>
      </div>
    </div>
  );
};

export default Draw;
