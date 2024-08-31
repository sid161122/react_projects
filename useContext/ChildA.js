import React from 'react'
import {data} from './App'

//context api
function ChildA(){
    return (
        <>
            <data.Consumer>
                {
                    (name)=>{
                        return (
                            <h1>{name}</h1>
                        )
                    }
                }
            </data.Consumer>
        </>
    )
}
export default ChildA
