import { toast } from "react-toastify"
import { Link,Routes,Route } from "react-router";
import Login from "./components/Login"
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import NotFound from "./components/NotFound";
import Welcome from "./components/Welcome";



function App() {


  return (
    <div>
      <h1>React Router Demo</h1>
      <button onClick={()=>toast.info("HelloWorld!")}>Toast</button>
      <hr />
      <Link className='btn btn-link' to="/home">Home</Link>
      <Link className='btn btn-link' to="/login">Login</Link>
      <Link className='btn btn-link' to="/about">About Us</Link>
      <hr />
      <Routes> 
        <Route index element=<Home/> />
        <Route path="/home" element=<Home/> />
        <Route path="/login" element=<Login/> />
        <Route path="/welcome" element=<Welcome/> />
        <Route path="/about" element=<AboutUs/>  />
        <Route path="*" element=<NotFound/> />


      </Routes>
      
      
    </div>
  )
}

export default App
