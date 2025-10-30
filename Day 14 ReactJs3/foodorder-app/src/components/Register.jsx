// import { useState } from "react";
// import { useNavigate } from "react-router";
// import { registerUser } from "../services/users";
// import { toast } from "react-toastify";

// function Register() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     mobile: "",
//   });
//   const navigate = useNavigate();
//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.id]: e.target.value });

//   const handleSubmitClick = async () => {
//     try {
//       const user = await registerUser(formData);
//       toast("User Registered Successfully");
//       navigate("/login");
//     } catch (err) {
//       toast.error("Error:" + err.message);
//     }
//   };
// }
