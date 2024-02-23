// Register.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { authenticateSignup } from "../../services/api.js";

const Register = ({ onToggleLogin, onRegister }) => {
    const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleRegister = async () => {
    try {
      const response = await authenticateSignup(formData);
      if (response.status === 200) {
        // Registration successful, navigate to the student page or login page
        console.log("Registration successful");
        // Navigate user to the student page or login page using React Router
        navigate("/student");
      } else {
        // Handle other responses like existing email, server errors, etc.
        console.error("Registration failed:", response.data.message);
      }
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };
  return (
    <div className="loginpg">
      <h1>Create an account</h1>
      <h4>Let's get started!</h4>
      <div className="formreg">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="form-control transparent-input"
          name="name"
          onChange={handleChange}
        />
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
      <button className="btn1" id="registerbtn" onClick={handleRegister}>
        <Link to="/student" style={{ textDecoration: "none", color: "#ffffff" }}>
          Register
        </Link>
      </button>
      <p id="alttext">
        Already have an account?{" "}
        <Link to='/login'>
        <button className="btn2" onClick={onToggleLogin}>
          Log in now
          
        </button>
        </Link>
      </p>
    </div>
  );
};

export default Register;
