import {useState,useReducer} from 'react';

    const initialstate=0
    const reducer=(state,action)=>{
        switch(action){
            case "++":
                return state+1
            case "--":
                return state-1
            default:
                return state
        }
    }
function App(){
   const [count,dispatch]=useReducer(reducer,initialstate)
        return (  
            <div>
              <h2>useReducer - used for state management</h2>
                <p>syntax - const[state,dispatch]=useReducer(reducer,initialstate)</p>
                <p>newState = reducer(currentState,action)</p>
                {/*dispatch calls the reducer() and gives the action n reducer accepts this action and uske 
                according state changes and return the newState*/}

                <p>{count}</p>
                <button onClick={()=>dispatch("++")}>++</button>
                <button onClick={()=>dispatch("--")}>--</button>
</div>
        )
}

export default App;
