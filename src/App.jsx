import React, { useEffect } from 'react';
import s from './App.module.scss';
import Header from './components/Header/Header';
import Game from './components/Game/Game';
import { useDispatch } from 'react-redux';
import { getHistory } from './Redux/reducers/historySlice';
import axios from 'axios';
import { getMarkets } from './Redux/reducers/marketSlice';
import { getLimits } from './Redux/reducers/limitsSlice';
import { getFrequency } from './Redux/reducers/frequencySlice';

const App = () => {
  const dispatch = useDispatch();
  dispatch(getHistory());
  dispatch(getMarkets());
  dispatch(getLimits());
  dispatch(getFrequency());

  const loop = () => {
    setInterval(() => {
      dispatch(getHistory());
    }, 60000);
  };

  useEffect(() => {
    loop();
  }, []);

  useEffect(() => {
    axios
      .get(`http://oliver.energaming.systems:20035/api/v1/get-draw-results`, {
        params: {
          token: 'test-frontend-token',
          duration: 3,
          page: 0,
        },
      })
      .then(res => {
        console.log('Draw Results:', res);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://oliver.energaming.systems:20035/api/v1/get-game-versions`, {
        params: {
          token: 'test-frontend-token',
          duration: 3,
          page: 0,
        },
      })
      .then(res => {
        console.log('Game Versions:', res);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://oliver.energaming.systems:20035/api/v1/get-draw-history`, {
        params: {
          token: 'test-frontend-token',
          duration: 3,
          page: 0,
        },
      })
      .then(res => {
        console.log('Draw History:', res);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://oliver.energaming.systems:20035/api/v1/get-generic-info`, {
        params: {
          token: 'test-frontend-token',
          duration: 3,
          page: 0,
        },
      })
      .then(res => {
        console.log('Generic Info:', res);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://oliver.energaming.systems:20035/api/v1/markets/get`, {
        params: {
          token: 'test-frontend-token',
          duration: 3,
          page: 0,
        },
      })
      .then(res => {
        console.log('Other Types:', res);
      });
  }, []);

  return (
    <div className={s.app}>
      <Header />
      <Game />
    </div>
  );
};

export default App;
