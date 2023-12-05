import { useCallback, useEffect, useState } from 'react';
import './App.css';

function App() {
  const currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState({
    hr:0,
    min:0,
    sec:0
  });

  const updateTime = useCallback(() => {
    let {hr, min, sec} = time;
    if (sec < 60) {
      sec += 1;
    } else if (min < 60) {
      min += 1;
    } else {
      hr += 1;
    }
    return {hr, min, sec}
  }, [time]);

  useEffect(() => {
    let time = setTimeout(() => {
      setTime(updateTime())
    }, 1000)

  }, [updateTime]);

  return (
    <div className="App">
      <h1>Stop Watch</h1>
      <div className='stop-watch'>
        <div className='time'>Time: {currentTime}</div>
        <div className='counter'>{time.hr}:{time.min}:{time.sec}</div>

        <div className='buttons'>
          <button className='start'>START</button>
          <button className='reset'>RESET</button>
        </div>
      </div>
    </div>
  );
}

export default App;
