import React from 'react';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.headerJackpot}>
        <div className={s.headerJackpot__name}>Jackpot</div>
        <div className={s.headerJackpot__sum}>
          <div className={s.headerJackpot__coin}>520.000.000</div>
          <div className={s.headerJackpot__currency}>tzs</div>
        </div>
      </div>
      <div className={s.headerWinner}>
        Last Winner:<span>540 000 TZS</span>Arusha Marusha
      </div>
      <div className={s.headerLimits}>
        <div className={s.headerLimits__details}>
          <div className={s.headerLimitsInfo}>
            Bet Limits <span>Min-100 Max-150.000</span>
          </div>
          <div className={s.headerLimitsInfo}>
            Max Win: <span>1.000.000</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
