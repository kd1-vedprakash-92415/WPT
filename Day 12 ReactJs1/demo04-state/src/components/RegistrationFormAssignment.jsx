import { useState } from "react";

function RegistrationForm() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    passwd: "",
    confirmPasswd: "",
    mobile: "",
    address: "",
    birth: "",
  });
  const handleChange = (e) =>
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });

  const handleSubmitClick = () => {
    let message = "";
    if (!userInfo.firstName)
        message += "FirstName cannot be empty\n";
    if (!userInfo.lastName) 
        message += "LastName cannot be empty\n";
    if (!userInfo.email) 
        message += "Email cannot be empty\n";
    if (!userInfo.passwd) 
        message += "Password cannot be empty\n";
    if (!userInfo.confirmPasswd) 
        message += "Confirm password cannot be empty\n";
    if (!userInfo.mobile) 
        message += "Mobile cannot be empty\n";
    if (!userInfo.address) 
        message += "Address cannot be empty\n";
    if (!userInfo.birth) 
        message += "Birth Date cannot be empty\n";
    if (userInfo.passwd !== userInfo.confirmPasswd)
        message += "Password and Confirm Password Must be same\n";
    if (message) 
        alert(message);
    else {
      alert("Registration data is Valid\n");
      setUserInfo({
        firstName: "",
        lastName: "",
        email: "",
        passwd: "",
        confirmPasswd: "",
        mobile: "",
        address: "",
        birth: "",
      });
    }
  };

  return (
    <div>
      <h4>Registration Form</h4>
      <div>
        First Name: <input type="text" id="firstName" onChange={handleChange} />
        {userInfo.firstName ? " " : <div style={{display:'inline',color:'red'}}>*</div>}
      </div>
      <div>
        Last Name: <input type="text" id="lastName" onChange={handleChange} />
        {userInfo.lastName ? " " : <div style={{display:'inline',color:'red'}}>*</div>}
      </div>
      <div>
        Email: <input type="email" id="email" onChange={handleChange} />
        {userInfo.email ? " " : <div style={{display:'inline',color:'red'}}>*</div>}
      </div>
      <div>
        Password: <input type="password" id="passwd" onChange={handleChange} />
        {userInfo.passwd ? " " : <div style={{display:'inline',color:'red'}}>*</div>}
      </div>
      <div>
        Confirm Password: <input type="password" id="confirmPasswd" onChange={handleChange} />
        {userInfo.confirmPasswd ? " " : <div style={{display:'inline',color:'red'}}>*</div>}
      </div>
      <div>
        Mobile: <input type="text" id="mobile" onChange={handleChange} />
        {userInfo.mobile ? " " : <div style={{display:'inline',color:'red'}}>*</div>}
      </div>
      <div>
        Address: <input type="text" id="Address" onChange={handleChange} />
        {userInfo.address ? " " : <div style={{display:'inline',color:'red'}}>*</div>}
      </div>
      <div>
        Birth: <input type="date" id="birth" onChange={handleChange} />
        {userInfo.birth ? " " : <div style={{display:'inline',color:'red'}}>*</div>}
      </div>
      <div>
        <button id="submitBtn" onClick={handleSubmitClick}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
export default RegistrationForm;
