import React, { useEffect } from 'react';
import s from './Draw.module.scss';
import Loader from '../Loader/Loader';
import BetTemp from '../BetTemp/BetTemp';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentDrawId,
  selectNextDrawId,
} from '../../Redux/reducers/historySlice';
import {
  selectColdNums,
  selectHotNums,
} from '../../Redux/reducers/frequencySlice';
import DrawList from '../DrawList/DrawList';
import Timer from '../Timer/Timer';
import { getTimer, selectTimer } from '../../Redux/reducers/timerSlice';

const Draw = () => {
  const currentDrawId = useSelector(selectCurrentDrawId);
  const nextDrawId = useSelector(selectNextDrawId);
  const hotNums = useSelector(selectHotNums);
  const coldNums = useSelector(selectColdNums);
  const dispatch = useDispatch();
  const expiryTimestamp = useSelector(selectTimer);

  useEffect(() => {
    dispatch(getTimer());
  }, []);

  return (
    <div className={s.draw}>
      <div className={s.draw__header}>
        <div className={s.draw__next}>
          NEXT DRAW: {nextDrawId} in <Timer expiryTimestamp={expiryTimestamp} />
        </div>
        <div className={s.draw__current}>
          <div className={s.draw__currentName}>CURRENT DRAW PROCESS</div>
          <div className={s.draw__currentID}>{currentDrawId}</div>
          <div className={s.draw__load}>
            <Loader
              expiryTimestamp={expiryTimestamp}
              initPercentage={(expiryTimestamp / 180) * 100}
            />
          </div>
        </div>
      </div>
      <div className={s.draw__body}>
        <DrawList />
      </div>
      <div className={s.draw__footer}>
        <div className={s.draw__temp}>
          <BetTemp nums={hotNums} hot />
        </div>
        <div className={s.draw__temp}>
          <BetTemp nums={coldNums} />
        </div>
        <></>
      </div>
    </div>
  );
};

export default Draw;
