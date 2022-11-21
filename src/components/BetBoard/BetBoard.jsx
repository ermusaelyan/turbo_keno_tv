import React from 'react';
import s from './BetBoard.module.scss';
import BetNum from '../BetNum/BetNum';
import { useSelector } from 'react-redux';
import {
  selectColdNums,
  selectHotNums,
} from '../../Redux/reducers/frequencySlice';

const BetBoard = () => {
  const hotNums = useSelector(selectHotNums);
  const coldNums = useSelector(selectColdNums);
  return (
    <div className={s.betBoard}>
      <ul className={s.betBoard__list}>
        {Array.from(Array(80), (_, i) => {
          const number = i + 1;
          return (
            <BetNum
              active={false}
              cold={coldNums.includes(String(number))}
              hot={hotNums.includes(String(number))}
              key={i}>
              {number}
            </BetNum>
          );
        })}
      </ul>
    </div>
  );
};

export default BetBoard;
