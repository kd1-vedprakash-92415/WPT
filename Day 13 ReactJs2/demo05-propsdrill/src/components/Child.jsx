import GrandChild from "./GrandChild"

// function Child({count,setCount}){
//     return <div style={{border:'2px solid purple',padding:'5px',display:'inline-block'}}>
//         <h3>Child</h3>
//         <GrandChild count={count} setCount={setCount}/>
//     </div>
// }
function Child(props){
    return <div style={{border:'2px solid purple',padding:'5px',display:'inline-block'}}>
        <h3>Child</h3>
        {props.children}
    </div>
}
export default Child