import React, { useState, useEffect } from 'react';

function Exp11() {
  const [mytime, setTime] = useState('');

  const tick = () => {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let ampm = 'AM';

    if (hours > 12) {
      hours -= 12;
      ampm = 'PM';
    }

    const time = `${hours}:${currentTime.getMinutes()}:${currentTime.getSeconds()} ${ampm}`;
    setTime(time);
  };

  useEffect(() => {
    const intervalId = setInterval(tick, 1000);
    
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>Digital Clock</h1>
      <h2>{mytime}</h2>
    </div>
  );
}

export default Exp11;
