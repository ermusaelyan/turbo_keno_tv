import React from 'react';
import s from './App.module.scss';
import Header from './components/Header/Header';
import Game from './components/Game/Game';

const App = () => {
  return (
    <div className={s.app}>
      <Header />
      <Game />
    </div>
  );
};

export default App;
