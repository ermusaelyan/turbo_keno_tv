import React from 'react';
import s from './Loader.module.scss';

const Loader = ({ percent }) => {
  return (
    <div className={s.loader}>
      <div style={{ width: `${percent}%` }} className={s.loading} />
    </div>
  );
};

export default Loader;
