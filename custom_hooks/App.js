import useCounter from './useCounter';
function App(){

  const [count,inc,dec]=useCounter();
        return (  
            <div>
              <h2>custom hooks</h2>
                <p>{count}</p>
                <button onClick={inc}>++</button>
                <button onClick={dec}>--</button>
</div>
        )
}
export default App;
