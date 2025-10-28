import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../App";
import { toast } from "react-toastify";
import { changePassword } from "../services/users";

function ChangePassword() {
  const [formData, setFormData] = useState({
    passwd: "",
    confirmPasswd: "",
  });

  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmitClick = async () => {
    try {
      if (formData.passwd !== formData.confirmPasswd) {
        toast.error("Password not match");
        return;
      }
      const msg = await changePassword(formData.passwd);
      toast.success(msg);
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div className="col-6 m-3 p-3 box border border-2">
      <h3>Chnage Password</h3>
      <div className=" form-group mb-3">
        <label htmlFor="passwd">Password:</label>
        <input
          type="password"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="confirmPassswd">Confirm Password:</label>
        <input
          type="password"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-3">
        <button className="btn btn-primary mx-3" onClick={handleSubmitClick}>
          Change Password
        </button>
      </div>
    </div>
  );
}
export default ChangePassword;
