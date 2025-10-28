import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../App';
import { findUserByCredentials } from '../services/users';
import { toast } from 'react-toastify';

function Login() {
    const [formData,setFormData] = useState({
        email:'',
        passwd:''
    })
    const navigate= useNavigate()
    const {setUser}=useContext(AuthContext)
    const handleChange=(e)=> setFormData({...formData,[e.target.id]:e.target.value})
    const handleSubmitClick=async()=>{
        try{
            const user=await findUserByCredentials(formData)
            sessionStorage.setItem('token',user.token)
            setUser(user)
            navigate("/user/foods")
        }
        catch(err){
            toast.error("Invalid email or Password")
        }
    }

  return (
    <div className='col-6 m-3 p-3 box border border-2'>
        <h3>Login</h3>
        <div className='form-group mb-3'>
            <label htmlFor="email">Email:</label>
            <input type="text" id='email' className='form-control' onChange={handleChange} />
        </div>
        <div className='form-group mb-3'>
            <label htmlFor="email">Password:</label>
            <input type="password" id='passwd' className='form-control' onChange={handleChange} />
        </div>
        <div className=' form-control mb-3'>
            <button className=' btn btn-primary mx-3' onClick={handleSubmitClick}>Sign In</button>
                <Link className='btn btn-secondary mx-3' to='/register'>Sign Up</Link>

        </div>
      
    </div>
  )
}

export default Login
