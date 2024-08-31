import React, { useState, useEffect } from 'react';


function App() {
    const [seconds, setSeconds] = useState(0);
     const [isActive, setIsActive] = useState(false);
    const [laps, setLaps] = useState([]);

    useEffect(() => {

    if (savedSeconds) setSeconds(Number(savedSeconds));
    if (savedIsActive) setIsActive(JSON.parse(savedIsActive));
  }, []);


    
    useEffect(()=>{
        let interval=null;

        if(isActive){
            interval =setInterval(()=>{
                setSeconds((sec)=>sec+1)
            },1000)
        }else if(!isActive && seconds!==0){
            clearInterval(interval)
        }
        return () => clearInterval(interval); ///cleanup
    },[seconds,isActive])


    const toggle=()=>{
        setIsActive(!isActive)
    }
    const reset=()=>{
        setSeconds(0)
        setIsActive(false);
        setLaps([]);
    }
    const addLap = () => {
    setLaps([...laps, seconds]);
  };
  return (
      <div>
      <h1>Stopwatch</h1>
          <h2>{seconds}s</h2>
           <button onClick={toggle}>{isActive ? 'stop'  : 'start'}</button>
           <button onClick={reset} disabled={!isActive && seconds === 0}>
        Reset
      </button>
           <button onClick={addLap} disabled={!isActive}>Lap</button>
                <div>
        <h3>Laps</h3>
        <ul>
          {laps.map((lap, index) => (
            <li key={index}>Lap {index + 1}: {lap}s</li>
          ))}
        </ul>
      </div>

      </div>
  );
}

export default App;
