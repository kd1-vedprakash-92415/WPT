import React from 'react'
import { Link } from 'react-router'

function Login() {
  return (
    <div className='col-6 m-3 p-3 box border border-2'>
        <h3>Login</h3>
        <div className='form-group mb-3'>
            <label htmlFor="email">Email</label>
            <input type="email" className='form-control' onChange={handleSubmit} />
        </div>
        <div className='form-group mb-3'>
            <label htmlFor="password">Password</label>
            <input type="password" className='form-control' onChange={handleSubmit} />
        </div>
        <div>
            <button className='btn btn-primary mx-3' onClick={handleSubmitClick}>SignIn</button>
            <Link className='btn btn-primary mx-3'></Link>
        </div>
      
    </div>
  )
}

export default Login
