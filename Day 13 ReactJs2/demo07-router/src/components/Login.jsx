import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

function Login() {
    const [formData,setFormData]=useState({
        email:'',
        passwd:''
    })
    const navigate=useNavigate()

    const handleChange=(e)=>setFormData({...formData,[e.target.id]:e.target.value})
    const handleSubmitClick=()=>{
        if(formData.email==='vedprakash@gmail.com' && formData.passwd==='vedprakash'){
            navigate("/welcome",{
                state:{
                    email:formData.email
                }
            })
        }
        else{
            toast.error("Invalid email or Password.")
        }
    }
  return <div className='col-6 m-3 p-3 box border border-2'>
    <h3>Login</h3>
    <div className='form-group mb-3'>
      <label htmlFor='email'>Email: </label>
      <input type='text' id='email' className='form-control' onChange={handleChange}/>
    </div>
    <div className='form-group mb-3'>
      <label htmlFor='passwd'>Password: </label>
      <input type='password' id='passwd' className='form-control' onChange={handleChange}/>
    </div>
    <div className='form-group mb-3'>
      <button className='btn btn-primary' onClick={handleSubmitClick}>Sign In</button>
    </div>
  </div>
}

export default Login
