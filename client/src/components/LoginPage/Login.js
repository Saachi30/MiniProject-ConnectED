import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const toggleLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const toggleRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleLogin = () => {
    // Handle login logic here (frontend only)
    console.log("Logging in:", formData);
    // After login, you might want to redirect the user
    // navigate('/dashboard');
  };

  const handleRegister = () => {
    // Handle registration logic here (frontend only)
    console.log("Registering:", formData);
    // After registration, you might want to redirect the user
    // navigate('/login');
  };

  return (
    <>
      <div className="outerlogin">
        <div className="loginn">
        {showLogin && (
          <div className="loginpg">
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
              <Link
                to="/student"
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                Login
              </Link>
            </button>
            <p id="alttext">
              Don't have an account?{" "}
              <button className="btn2" onClick={toggleRegister}>
                Register now
              </button>
            </p>
          </div>
        )}

        <div className="loginPgImg">
          <img
            src="https://media.licdn.com/dms/image/C4D12AQFNaYRBLgASQw/article-cover_image-shrink_600_2000/0/1641446336880?e=2147483647&v=beta&t=DdQXmCWIRogrN7cigGvjc_TcQlNqcLxFhCZPevYu0nc"
            alt="loginPgImg"
          />
        </div>
        </div>
        {showRegister && (
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
              <Link
                to="/student"
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                Register
              </Link>
            </button>
            <p id="alttext">
              Already have an account?{" "}
              <button className="btn2" onClick={toggleLogin}>
                Log in now
              </button>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
