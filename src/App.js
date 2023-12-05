import './App.css';

function App() {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="App">
      <h1>Stop Watch</h1>
      <div className='stop-watch'>
        <div className='time'>Time: {currentTime}</div>
        <div className='counter'></div>
      </div>
    </div>
  );
}

export default App;
