import React,{useContext} from 'react'
import {data,data1} from './App'


//useContext
function ChildB(){
    const name=useContext(data)
    const age=useContext(data1)
    return (
        <>
            <h1>{name} - {age}</h1>
        </>
    )
}

export default ChildB
