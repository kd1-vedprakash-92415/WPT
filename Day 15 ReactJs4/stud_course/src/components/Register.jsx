import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { registerUser } from '../services/user'

function Register() {
    const [formData,setFormData]= useState({
        name:'',
        email:'',
        password:'',
        mobile:''
    })
    const navigate=useNavigate()

    const handleChange=(e)=> setFormData({...formData,[e.target.id]:e.target.value})

    const handleSubmitClick = async (e) => {
        e.preventDefault();
        try {
            // register logic here
            const user = await registerUser(formData)
            toast.success(`User registered: ${user.uid}`)
            navigate("/login");
        }
        catch(err) {
            toast.error(err.message)
        }
    };

  return (
    <div className='col-6 m-3 p-3 box border border-2'>
        <h3>Register</h3>
        <div className='form-group mb-3'>
            <label htmlFor="name"></label>
            <input type="text" id='name' className='form-control' onChange={handleChange} />
        </div>
        <div className='form-group mb-3'>
            <label htmlFor="email"></label>
            <input type="email" id='email' className='form-control' onChange={handleChange} />
        </div>
        <div className='form-group mb-3'>
            <label htmlFor="password"></label>
            <input type="password" id='password' className='form-control' onChange={handleChange} />
        </div>
        <div className='form-group mb-3'>
            <label htmlFor="mobile"></label>
            <input type="mobile" id='mobile' className='form-control' onChange={handleChange} />
        </div>
        <div className='form-group mb-3'>
            <button className='btn btn-primary' onClick={handleSubmitClick}>Register</button>
        </div>
        
      
    </div>
  )
}

export default Register
