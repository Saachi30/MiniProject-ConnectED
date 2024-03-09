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
    <div className="loginpg">
     {/* <div className="loginPgImg">
          <img
            src="https://media.licdn.com/dms/image/C4D12AQFNaYRBLgASQw/article-cover_image-shrink_600_2000/0/1641446336880?e=2147483647&v=beta&t=DdQXmCWIRogrN7cigGvjc_TcQlNqcLxFhCZPevYu0nc"
            alt="loginPgImg"
          />
        </div> */}
      <h1>Login to your account</h1>
      <div className="formreg">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="form-control transparent-input"
          name="email"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="form-control transparent-input"
          name="password"
          onChange={handleChange}
        />
      </div>
      <button className="btn1" id="registerbtn" onClick={handleLogin}>
          Login 
      </button>
      <p id="alttext">
        Don't have an account?{" "}
        <Link to='/choice'>
        <button className="btn2" >
          Register now
        </button>
        </Link>
      </p>
    </div>
  );
};

export default Login;
