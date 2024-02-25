// Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { authenticateLogin } from "../../services/api.js";

const Login = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleLogin = async () => {
    try {
      props.setEmail(formData.email)
      const response = await authenticateLogin(formData);
      if (response.status === 200) {
        // Login successful, navigate to the student page
        console.log("Login successful");
        // Navigate user to the student page using React Router
        navigate("/student")
      } else if (response.status === 400) {
        // Handle other responses like incorrect credentials, etc.
        console.error("Login failed:", response.data.message);
      }
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
