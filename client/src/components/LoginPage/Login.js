// Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { authenticateLogin, getDataLogin } from "../../services/api.js";
import { useDispatch } from "react-redux";
import { addCurrentUser } from "../../store/slices/UserSlice.js";

const Login = () => {
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
      const responseData = await getDataLogin();
      console.log(responseData);
        //Add responseData to redux store
        const data=responseData.data;
        dispatch(addCurrentUser(data));
        console.log("Login successful");
        // Navigate user to the student page using React Router
        navigate("/student")
       
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };
  

  return (
    <div className="box-form">
      <div className="left">
        <div className="overlay">
          <h1>Hello Peeps</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur et est sed felis aliquet sollicitudin</p>
          <span>
            <p>login with social media</p>
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
          placeholder="email"
          onChange={handleChange}
        />
          <br />
          <input
          type="password"
          id="password"
          className="form-control transparent-input"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        </div>

        <br /><br />

        <div className="remember-me--forget-password">
          <label>
            <input type="checkbox" name="item" defaultChecked />
            <span className="text-checkbox">Remember me</span>
          </label>
          <p>forget password?</p>
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
