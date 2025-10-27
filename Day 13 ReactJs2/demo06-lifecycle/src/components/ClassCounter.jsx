import { Component } from "react";

class ClassCounter extends Component{
    state={count:0}
    constructor(){
        super()
        console.log("ClassCounter.constructor() called.")
    }
    componentDidMount(){
        console.log("ClassCounter.componentDidMount() called.")
    }
    componentWillUnmount(){
        console.log("ClassCounter.componentWillUnmount() called")
    }
    componentDidUpdate(){
        console.log("ClassCounter.componentDidUpdate() called")
    }
    render(){
        console.log("ClassCounter.render() called.")
        return <div>
            <h3>Class Counter</h3>
            <h4>Count={this.state.count}</h4>
            <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
        </div>
    }
}
export default ClassCounter