import {useState} from 'react';
function useCounter(){
    const [count,setCount]=useState(0)
    function inc(){
      setCount(count+1)        
    }
     function dec(){
      setCount(count-1)        
    }
    return [count,inc,dec]
}

export default useCounter;
