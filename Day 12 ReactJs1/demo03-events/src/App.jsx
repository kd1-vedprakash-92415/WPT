import HandleClickMe1Btn from "./components/handleClickMe1Btn"
import HandleClickMe2Btn from "./HandleClickMe2Btn"
import HandleInputTextChange from "./HandleInputTextChange"
function App() {
    const handleChildClick=(e)=>{
        console.log("Child Clicked")
    
    }
    const handleParentClick=(e)=>{
        console.log("Parent Clicked")
    }

  return (
    <div>
       {/* <HandleClickMe1Btn/> */}
       {/* <HandleClickMe2Btn/> */}
       {/* <HandleInputTextChange/> */}

       <div id="parent" onClick={handleParentClick}>Event Bubbling Demo <br/>
        <button id="child" onClick={handleChildClick}>Child Button</button>
       </div>

    </div>
  )
}

export default App
