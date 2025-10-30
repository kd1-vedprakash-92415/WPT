import React, { useState } from 'react'
import {useNavigate} from "react-router"
import { toast } from "react-toastify"
import { registerUser } from '../services/users'

function Register() {
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        mobile:'',
    })
    const navigate= useNavigate()
    const handleChange=(e)=>{setFormData({...formData,[e.target.id]:e.target.value})}

    const handleRegister= async (e)=>{
        e.preventDefault();
        try{
            const user=await registerUser(formData)
            TransformStream.success(`User registered: ${user.uid}`)
            navigate("/login")
            
        }
        catch(err){
            toast.error(err.message)
        }
    }
  return (
    <div className='container'>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
            <div className='mb-3'>
                <label htmlFor="name" className='form-label'>
                    Name
                </label>
                <input type="text"
                className='form-control'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                 />
            </div>
            <div className='mb-3'>
                <label htmlFor="email" className='form-label'>
                    Email
                </label>
                <input type="email" 
                name="email" 
                id="email"
                className='form-control'
                value={formData.password}
                onChange={handleChange}  />

            </div>
            <div className='mb-3'>
                <label htmlFor="password" className='form-label'>
                    Password
                </label>
                <input 
                type="text"
                className='form-control'
                id='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                 />
            </div>
            <div className='mb-3'>
                <label htmlFor="confirmPassword" className='form-label'>
                    Confirm Password
                </label>
                <input 
                type="password"
                className='form-control'
                id='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange} />

            </div>
            <div className='mb-3'>
                <input 
                type="text"
                className='form-control'
                id='mobile'
                name='mobile'
                value={formData.mobile}
                onChange={handleChange} />

            </div>
            <button type='submit' className='btn btn-primary'>
                Register
            </button>

        </form>

      
    </div>
  )
}

export default Register
