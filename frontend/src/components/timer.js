
import React, { useState, useEffect } from 'react';
import './timer.css';

function Timer({ initialSec }) {
  const [seconds, setSec] = useState(initialSec);
  console.log("Initial seconds passed to Timer:", initialSec);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSec((prevSec) => prevSec - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [seconds]); 

  useEffect(() => {
    setSec(initialSec); 
  }, [initialSec]);
  return (
    <div className="timer">
      {seconds > 0 ? (
        <h2>Time Remaining: {seconds} seconds</h2>
      ) : (
        <h2>Time's up!</h2>
      )}
    </div>
  );
}

export default Timer;
