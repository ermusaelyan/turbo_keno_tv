import React, { useEffect } from 'react';
import s from './App.module.scss';
import Header from './components/Header/Header';
import Game from './components/Game/Game';
import { useDispatch } from 'react-redux';
import { getHistory } from './Redux/reducers/historySlice';
import axios from 'axios';

const App = () => {
  const dispatch = useDispatch();

  const loop = () => {
    setInterval(() => {
      dispatch(getHistory());
    }, 40000);
  };

  useEffect(() => {
    loop();
  }, []);

  useEffect(() => {
    axios
      .get(`http://oliver.energaming.systems:20034/api/v1/get-draw-results`, {
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
      .get(
        `http://oliver.energaming.systems:20034/api/v1/get-seconds-till-draw`,
        {
          params: {
            token: 'test-frontend-token',
            duration: 3,
            page: 0,
          },
        },
      )
      .then(res => {
        console.log('Seconds Till Draw:', res);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://oliver.energaming.systems:20034/api/v1/get-game-versions`, {
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
      .get(`http://oliver.energaming.systems:20034/api/v1/get-draw-history`, {
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

  return (
    <div className={s.app}>
      <Header />
      <Game />
    </div>
  );
};

export default App;
