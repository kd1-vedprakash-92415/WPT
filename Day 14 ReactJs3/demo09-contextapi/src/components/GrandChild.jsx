import { useContext } from "react";
import { CounterContext } from "./Parent";

function GrandChild(){
    const {count,setCount}=useContext(CounterContext)
    return <div>
        <h3>GrandChild: {count}</h3>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
}
export default GrandChild;