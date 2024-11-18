import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import Timer from './components/timer';
function App() {
  const [inputSec, setInputSec] = useState('');
  const [timerSec, setTimerSec] = useState(null);
  const startTimer = async () => {
    if (!inputSec) return;
    try {
      const response = await axios.post('http://localhost:5000/start', {
        seconds: inputSec,
    });
    setTimerSec(Number(inputSec));


    }
    catch (error){
      console.error('Error starting timer:', error);
    }

  };
  return (
    <div className='App'>
      <h1> Timer </h1>
      <input
  type="number"
  placeholder="Enter seconds"
  value={inputSec}
  onChange={(e) => setInputSec(e.target.value)}
/>

      <button onClick={startTimer}> Start Timer </button>
      {timerSec && <Timer initialSec={timerSec} />}

    </div>
  )



}

export default App;
