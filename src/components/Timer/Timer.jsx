import React from 'react';
import { useTimer } from 'react-timer-hook';

const Timer = ({ expiryTimestamp }) => {
  if (!expiryTimestamp) {
    return null;
  }

  const time = new Date();
  const timeOnSeconds = time.setSeconds(time.getSeconds() + expiryTimestamp);

  const { seconds, minutes } = useTimer({
    expiryTimestamp: timeOnSeconds,
    onExpire: () => {
      console.log('asa');
    },
  });
  return (
    <span>
      <span>{minutes}</span>:<span>{seconds}</span>
    </span>
  );
};

export default Timer;
