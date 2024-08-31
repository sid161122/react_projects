import React, { createContext } from 'react';
import ChildA from './ChildA' 
import ChildB from './ChildB' 

//crete,provider,consumer
const data=createContext();
const data1=createContext();
function App() {
    const name="sid"
    const age=19
  return (
      <div>
          <data.Provider value={name}>
              <data1.Provider value={age}>
                  <ChildB/>
           <ChildA />
              </data1.Provider>
              </data.Provider>
      </div>
  );
}

export default App;
export {data,data1}
