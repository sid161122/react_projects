  import {useState,useMemo} from 'react';

function App(){

    // function multiply(){
    //     return add*10
    // }//problem - calls for both add() & sub()

    const multiply1=useMemo(function multiply() {
      return add*10
    },[add])
        return (
            //we call () repeatly which r not in used ->low performance            
            <div>
                <h1>dgffd</h1>
                <p>{multiply()}</p>
                <p>{add}</p>
            <button onClick={()=>setAdd(add+1)}>add</button>
                <p>{sub}</p>
            <button onClick={()=>setSub(sub-1)}>sub</button> 
            </div>
        )
}

export default App;
