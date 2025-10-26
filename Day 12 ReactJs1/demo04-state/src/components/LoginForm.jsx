import { useState } from "react";

function LoginForm(){
    const[email,setEmail]=useState('')
    const[passwd,setPasswd]=useState('')

    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }
    const handleSubmitClick = () =>{
        const msg=`Email: ${email}, Passwd: ${passwd}`
        alert(msg)
    }
    return <div style={{border:'1px solid black',padding:'5px'}}>
        <h4>Login Form</h4>
        <div>
            Email: <input type="email" id="email" onChange={handleEmailChange} />
        </div>
        <div>
            Password: <input type='text' id="passwd" onChange={(e) =>setPasswd(e.target.value)} />
        </div>
        <div>
            <button id="submitBtn" onClick={handleSubmitClick}>Sign In</button>
        </div>

    </div>

}
export default LoginForm;