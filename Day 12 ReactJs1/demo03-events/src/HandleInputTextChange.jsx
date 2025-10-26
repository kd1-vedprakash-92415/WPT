const HandleInputTextChange=(e)=>{
    const inputText=e.target
    console.log("Child Clicked")
    return(
        <div>
            {/* <button onClick={()=>alert("CLick m33--Clicked")}>Click ME--3</button> */}
            <input type="text" id="input" onChange={HandleInputTextChange} />
        </div>
    )
}
export default HandleInputTextChange;