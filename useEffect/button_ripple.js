import { useEffect, useState } from "react";
import './styles.css'

function App() {
    const [isRipple,setisRipple]=useState(false)
    const [cord,setCord]=useState({x:-1,y:-1})

    function handleRipple(e){
        const rect =e.target.getBoundingClientRect()
        setCord({x: e.clientX  - rect.left  ,  y: e.clientY - rect.top})
    }

    useEffect(()=>{
        if(cord.x!==-1 && cord.y!==-1){
            setisRipple(true)
            setTimeout(()=>setisRipple(false),500)
        }else{
            setisRipple(false)
        }
    },[cord])

    useEffect(()=>{
        if(!isRipple){ //true
            setCord({x:-1,y:-1})
        }
    },[isRipple])
  return (
    <div className="ripple-effect-container">
      <h1>button ripple effect</h1>
    <button onClick={handleRipple} className="ripple-btn">
        {
            isRipple ? (
                <span className="ripple-inner-span" style={{left:cord.x , top: cord.y}}>
                </span>) : null
        }
        Click button</button> 
    </div>
  );
}

export default App;
