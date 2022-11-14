import React, { useEffect } from 'react';
import s from './App.module.scss';
import Header from './components/Header/Header';
import Game from './components/Game/Game';
import { useDispatch } from 'react-redux';
import { getHistory } from './Redux/reducers/historySlice';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHistory());
  }, []);
  return (
    <div className={s.app}>
      <Header />
      <Game />
    </div>
  );
};

export default App;
