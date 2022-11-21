import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectDrawNums } from '../../Redux/reducers/historySlice';
import { delayForOneNumber } from '../../helpers/constant';
import s from './DrawList.module.scss';
import DrawNum from '../DrawNum/DrawNum';

const DrawList = () => {
  const [drawNums, setDrawNums] = useState([]);
  const nums = useSelector(selectDrawNums);

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
    <ul className={s.draw__list}>
      {drawNums.map(num => {
        return (
          <li key={num} className={s.draw__item}>
            <DrawNum show={true}>{num}</DrawNum>
          </li>
        );
      })}
    </ul>
  );
};

export default DrawList;
