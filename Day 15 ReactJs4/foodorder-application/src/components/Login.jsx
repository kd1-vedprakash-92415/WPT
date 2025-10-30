import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../providers/AuthProvider";
import { findUserByCredentials } from "../services/users";
import { toast } from "react-toastify";

function Login(){
    const [formData,setFormData]=useState({
        email:'',
        password:''
    })

    const navigate=useNavigate()

    const {setUser}=useAuth()

    const handleChange=(e)=>{ setFormData({...formData,[e.target.name]:e.target.value})}

    const handleLogin= async (e)=>{
        e.preventDefault();
        try{
            const cred={email: formData.email,passwd:formData.password}
            const user=await findUserByCredentials(cred)
            sessionStorage.setItem("token", user.token)
            sessionStorage.setItem("user",JSON.stringify(user))
            setUser(user);
            toast.success("Welcome,"+user.name)
            navigate("/user/dashboard")

        }
        catch(err){
            toast.error(err.message)
        }
    }


    return <div className=" container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input 
                type="text"
                id="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                 />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input 
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange} />
            </div>
            <button type='submit' className="btn btn-primary"> Sign In</button>
            <Link to="/register" className="btn btn-secondary" >Sign Up</Link>
        </form>

    </div>
}
export default Login