import { useState } from "react";

function Counter(){
    const [count,setCount]=useState(0)

    const handleIncrClick=()=>{
        setCount(count+1)
        console.log("Incr Clicked:"+count)
    }
    const handleDecrClick=()=>{
        setCount(count-1)
        console.log("Decr Count:"+count)
    }

    return <div style={{border:'2px solid black', padding:'5px',display:"inline-block"}}>
        <h3>Counter:{count}</h3>
        <button id="incr" onClick={handleIncrClick}>INC</button>
        <button id="decr" onClick={handleDecrClick}>DEC</button>

    </div>
}
export default Counter