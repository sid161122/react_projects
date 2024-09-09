import { useState,useEffect } from "react";

function App() {
  const [typeOfColor,setTypeOfColor]=useState('hex')
    const [color,setColor]=useState('#000000')

    function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
    
    function handleRandomHex() {
        const hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexColor="#"
        for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
    }

    function handleRandomRgb() {
        const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g}, ${b})`);
    }


    useEffect(()=>{
        if(typeOfColor==='rgb') handleRandomRgb()
        else handleRandomHex()
    },[typeOfColor]) 
  return (
    <div style={{
        width:'100vw',
        height:'100vh',
        background:color,
    }}>
      <h1>Random color</h1>
        <button onClick={()=>setTypeOfColor('hex')}>hex</button>
        <button onClick={()=>setTypeOfColor('rgb')}>rgb</button>
        <button onClick={typeOfColor==='hex' ? handleRandomHex : handleRandomRgb}>random</button>

         <h2>{typeOfColor==="rgb"?'rgb':"hex"}</h2>  
        <h1>{color}</h1> 
    </div>

      
  );
}

export default App;
