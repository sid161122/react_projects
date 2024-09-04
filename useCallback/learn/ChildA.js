import {React,memo} from 'react'

function ChildA({Learning,count}){ //renders even if it is wrap in memo reason- referential equality
    console.log("child")
    return (
        <>
            
        </>
    )
}

export default memo(ChildA)
