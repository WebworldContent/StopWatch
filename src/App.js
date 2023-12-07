import { useCallback, useEffect, useState } from 'react';
import './App.css';

function App() {
  const defaultTime = {
    hr:0,
    min:0,
    sec:0
  };
  const currentTime = new Date().toLocaleTimeString();
  const [resetTime, setResetTime] = useState(false);
  const [startTime, setStartTime] = useState(false);
  const [time, setTime] = useState(defaultTime);

  const updateTime = useCallback(() => {
    let {hr, min, sec} = time;
    if (sec < 60) {
      sec += 1;
    } else if (min < 60) {
      sec = 0;
      min += 1;
    } else if (hr < 24) {
      min = 0;
      hr += 1;
    }
    return {hr, min, sec}
  }, [time]);

  useEffect(() => {
    let time;
    if (startTime) {
      time = setTimeout(() => {
        setTime(updateTime())
      }, 1000);
    }

    return () => {
      if (resetTime) {
        clearTimeout(time);
        setResetTime(false);
      }
    }

  }, [updateTime, resetTime, startTime]);

  const handleStart = () => {
    if (!startTime) {
      setStartTime(true);
    } else {
      setStartTime(false);
    }
    
  };

  const handleRest = () => {
    setResetTime(true);
    setTime(defaultTime);
  };

  return (
    <div className="App">
      <h1>Stop Watch</h1>
      <div className='stop-watch'>
        <div className='time'>Time: {currentTime}</div>
        <div className='counter'>{time.hr}:{time.min}:{time.sec}</div>

        <div className='buttons'>
          <button className='start' onClick={handleStart}>{!startTime ? `START` : `PAUSE`}</button>
          <button className='reset' onClick={handleRest} disabled={startTime} >RESET</button>
        </div>
      </div>
    </div>
  );
}

export default App;
