import React, {useState,useEffect  } from 'react';

function App(){
    const [amount,setAmount] =useState(1)
    const [fromCurrency,setFromCurrency]=useState('USD')
    const [exchange,setExchange]=useState()
    const [convert,setConvert]=useState()
    const [toCurrency,setToCurrency]=useState('INR')

    async function fetchEchangeRate() {
        const res = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`)
        const result = await res.json()
        const calculate = result?.rates[toCurrency]
        setExchange(calculate)
        setConvert((amount*calculate).toFixed(2))
    }
    useEffect(()=>{
        fetchEchangeRate()
    },[fromCurrency,toCurrency,amount]) 
//Runs:
After the initial render.
Every time the value of fromCurrency,toCurrency,amount changes.


    function handleAmount(e){
        setAmount(e.target.value)
    }
    function handleFromCurrency(e){
        setFromCurrency(e.target.value)
    }
    function handleToCurrency(e){
        setToCurrency(e.target.value)
    }
        return (
      <div>
        <h1>currency converter</h1>
    <input value={amount} type="number" onChange={handleAmount} name="amount" placeholder="enter"/>
        <select  value={fromCurrency} onChange={handleFromCurrency}>
          <option value={'USD'}>USD</option>
          <option value={'INR'}>INR</option>
          <option value={'EUR'}>EUR</option>
      </select>
          <p>To</p>
          <input value={convert} type="text" readOnly/>
        <select  value={toCurrency} onChange={handleToCurrency}>
          <option value={'USD'}>USD</option>
          <option value={'INR'}>INR</option>
          <option value={'EUR'}>EUR</option>
      </select>
          <p>Exchange rate: 1 {fromCurrency} = {exchange} {toCurrency}</p>
      </div>
            
  );
}

export default App;
