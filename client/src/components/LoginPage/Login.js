// Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { authenticateLogin, getDataLogin } from "../../services/api.js";
import { useDispatch } from "react-redux";
import { addCurrentUser } from "../../store/slices/UserSlice.js";

const Login = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch=useDispatch();
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleLogin = async () => {
    try {
      const response = await authenticateLogin(formData);
      const responseData = await getDataLogin({ email: formData.email });
      console.log(responseData)
      const user = responseData.data;
      const type = responseData.type;
      // Dispatch action to update Redux store with user data and type
      if (responseData) {
        console.log(user + "type: "+type)
        dispatch(addCurrentUser({ user, type }));
        navigate("/student");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="box-form">
      <div className="left">
        <div className="overlay">
          <h1>Hello Friend</h1>
          <p></p>
          <span>
            
            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i> Login with Twitter</a>
          </span>
        </div>
      </div>

      <div className="right-section">
        <h5>Login</h5>
        <p>Don't have an account? <a href="#"><Link to='/choice'>Register now</Link></a> it takes less than a minute</p>
        <div className="inputs">
		<input
          type="text"
          id="email"
          className="form-control transparent-input"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
          <br />
          <input
          type="password"
          id="password"
          className="form-control transparent-input"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        </div>

        <br /><br />

        <div className="remember-me--forget-password">
          <label>
            <input type="checkbox" name="item" defaultChecked />
            <span className="text-checkbox">Remember me</span>
          </label>
          <p>Forgot password?</p>
        </div>

        <br />
       <button onClick={handleLogin}>
          Login 
      </button>
      </div>
    </div>
  );
};

export default Login;
