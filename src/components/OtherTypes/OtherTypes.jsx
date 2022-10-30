import React from 'react';
import s from './OtherTypes.module.scss';

const OtherTypes = () => {
  return (
    <div className={s.otherTypes}>
      <div className={s.otherTypes__title}>other Types</div>
      {Array.from(Array(4), (_, i) => (
        <div key={i} className={s.otherType}>
          <div className={s.otherType__name}>
            First drawn ball will be odd or even
          </div>
          <div className={s.otherType__markets}>
            <div className={s.otherType__market}>
              <span>odd</span>
              <span>1.85</span>
            </div>
            <div className={s.otherType__market}>
              <span>odd</span>
              <span>1.85</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OtherTypes;
