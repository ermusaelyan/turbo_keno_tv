import React, { useEffect, useState } from 'react';
import s from './Draw.module.scss';
import Loader from '../Loader/Loader';
import DrawNum from '../DrawNum/DrawNum';
import BetTemp from '../BetTemp/BetTemp';
import { useSelector } from 'react-redux';
import { delayForOneNumber } from '../../helpers/constant';

const Draw = () => {
  const [drawNums, setDrawNums] = useState([]);
  const nums = useSelector(state => state.history.drawNums);

  const wait = async t => {
    return new Promise(res => {
      setTimeout(() => {
        res(true);
      }, t);
    });
  };

  const main = async () => {
    for (let i = 0; i < nums.length; i++) {
      await wait(delayForOneNumber);
      setDrawNums(prevState => [...prevState, nums[i]]);
    }
  };

  useEffect(() => {
    setDrawNums([]);
    main();
  }, [nums]);

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
                <DrawNum show={true}>{num}</DrawNum>
              </li>
            );
          })}
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
