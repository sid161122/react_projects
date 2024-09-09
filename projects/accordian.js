import { useState } from "react";
import data from "./data";

function App() {
  const [click, setClick] = useState(null);
  const [enable, setEnable] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingle(getCurrentId) {
    setClick(getCurrentId === click ? null : getCurrentId);
    console.log(getCurrentId);
    console.log(click);
    console.log(getCurrentId === click);
  }

  function handleMultiple(getCurrentId) {
    let copy = [...multiple];
    console.log(copy); //[]
    const findIndexOfCurrentId = copy.indexOf(getCurrentId);
    console.log(findIndexOfCurrentId); //-1
    if (findIndexOfCurrentId === -1) copy.push(getCurrentId);
    else copy.splice(findIndexOfCurrentId, 1);

    setMultiple(copy);
  }
  console.log(enable);
  // console.log(multiple);

  return (
    <div>
      <h1>Accordian</h1>
      <button onClick={() => setEnable(!enable)}>enable</button>
      {data && data.length > 0
        ? data.map((d) => (
            <div>
              <div
                onClick={
                  enable ? () => handleMultiple(d.id) : () => handleSingle(d.id)
                }
              >
                <h2>{d.question}</h2>
                <span>+</span>
              </div>

              {enable
                ? multiple.indexOf(d.id) !== -1 && <div>{d.answer}</div>
                : click === d.id && <div>{d.answer}</div>}
        {/*multiple.indexOf(d.id) !== -1: This checks if d.id is present in the multiple array.
                
If d.id is found in the multiple array (i.e., indexOf returns something other than -1),
the expression will evaluate to true and the <div>{d.answer}</div> will be rendered.  */}

              {/* {d.id === click || multiple.indexOf(d.id) !== -1 ? (
                <div>{d.answer}</div>
              ) : null} */}
            </div>
          ))
        : null}
    </div>
  );
}

export default App;
