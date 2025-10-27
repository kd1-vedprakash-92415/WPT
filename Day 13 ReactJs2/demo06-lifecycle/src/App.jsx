import { useState } from "react"
import ClassCounter from "./components/ClassCounter"
import FunctionCounter from "./components/FunctionCounter"
import AdvancedCounter from "./components/AdvancedCounter"
import DangerCounter from "./components/DangerCounter"


function App() {
    const [visible,setVisible]=useState(true)

  return (
    <div>
        <button onClick={()=>setVisible(!visible)}>Toggle</button> 
        <br /><br />
        {/* {visible && <ClassCounter/>} */}
        {/* {visible && <FunctionCounter/>} */}
        {/* {visible && <AdvancedCounter/>} */}
        {/* {visible && <DangerCounter/>} */}
        

    </div>
  )
}

export default App
