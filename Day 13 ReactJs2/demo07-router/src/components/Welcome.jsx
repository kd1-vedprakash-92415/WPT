import React from 'react'
import { useLocation } from 'react-router';

function Welcome() {
    const Location=useLocation()

  return (
    <div>
    <h3>Welcome</h3>    
    <div>Hello,{location.this.state?.email || "Unknown"}</div>  
    </div>
  )
}

export default Welcome
