import {useState,useCallback} from 'react';
import ChildA from './ChildA'

function App(){
    const  [add,setAdd]=useState(0)
    const [count,setCount]=useState(0);


    // const Learning=()=>{
        
    // }

    const Learning=useCallback(()=>{
        
    },[count]) //if count changes => re-render

        return (  
            <div>
                <ChildA Learning={Learning} count={count}/>  {/*re-render when click add */}
                <p>{add}</p>
            <button onClick={()=>setAdd(add+1)}>add</button>
                <p>{count}</p>
                <button onClick={()=>setCount(count+2)}>Count</button>
            </div>
        )
}

export default App;
