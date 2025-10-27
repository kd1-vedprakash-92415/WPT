import { useEffect, useState } from "react"

function FunctionCounter(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("like compnentDidMount().")
        return ()=>{
            console.log("Like ComponentWillUpdate().")
        }
    },[])

    useEffect(()=>{
        console.log("like ComponentDidUpdate().")
    },[count])

    useEffect(()=>{
        console.log("post render().")
    })

    return <div>
        <h3>Function Counter</h3>
         <h4>Count={count}</h4>
         <button onClick={()=> setCount(count+1)}>Incr</button>
    </div>
}
export default FunctionCounter