import React, {useState,useEffect  } from 'react';

function App(){
    const [time,setTime]=useState(new Date())

    useEffect(()=>{
        const interval=setInterval(()=>{
            setTime(new Date())
        },1000)

        return()=>{
            clearInterval(interval)
        }
    },[]) //runs only once—after the initial render
  return (
      <div>
        <h1>Clock</h1>
        <h1>{time.getHours().toString().padStart(2,'0')}</h1>
        <h1>{time.getMinutes().toString().padStart(2,'0')}</h1>
        <h1>{time.getSeconds().toString().padStart(2,'0')}</h1>

          {time.toLocaleDateString(undefined,{
          weekday:"long",
          year:"numeric",
          month:"long",
          day:"numeric",
          })}
          
      </div>
  );
}

export default App;
