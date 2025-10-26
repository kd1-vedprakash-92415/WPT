import { useState } from "react";

function RegistrationForm(){
    const[userInfo,setUserInfo]=useState({
        firstName:'',
        lastName:'',
        email:'',
        passwd:'',
        confirmPasswd:'',
        mobile:'',
        address:'',
        birth:''
    })
    const handleChange = (e) => setUserInfo({...userInfo,[e.target.id]:e.target.value})

    return(<div>
        <h4>Registration Form</h4>
        <div>
            First Name: <input type="text" id="firstName" onChange={handleChange} />
        </div>
        <div>
            Last Name: <input type="text" id="lastName" onChange={handleChange} />
        </div>
        <div>
            Email: <input type="email" id="email" onChange={handleChange} />
        </div>
        <div>
            Password: <input type="password" id="passwd" onChange={handleChange} />
        </div>
        <div>
            Confirm Password: <input type="password" id="confirmPasswd" onChange={handleChange} />  
        </div>
        <div>
            Mobile: <input type="text" id="mobile" onChange={handleChange} />
        </div>
        <div>
            Address: <input type="text" id="Address" onChange={handleChange} />
        </div>
        <div>
            Birth: <input type="date" id="birth" onChange={handleChange} />
        </div>
    </div>
        

    )
}
export default RegistrationForm;