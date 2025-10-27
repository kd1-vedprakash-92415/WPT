import { useEffect, useState } from "react";

function AdvancedCounter(){
    const [count,setCount]=useState(0);
    const [color,setColor]=useState(0);

    useEffect(()=>{
        console.log("Like componentDidMount().")
    },[])
    useEffect(()=>{
        console.log("Like componentDidUpdate(). for 'count")
        if(count %2==0)
            setColor('lightgreen')
        else
            setColor('lightblue')
    },[count])
    useEffect(()=>{
        console.log("like componentDidUpdate() for 'color.")
    },[color])
    return <div style={{backgroundColor:color,padding:'5px',display:'inline-block'}}>
        <h3>Advanced Counter</h3>
        <h4>Count={count}</h4>
        <button onClick={()=>setCount(count+1)}>Incr</button>
    </div>

}
export default AdvancedCounter