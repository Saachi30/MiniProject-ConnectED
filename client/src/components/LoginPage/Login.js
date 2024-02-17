import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


const Login = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
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
    console.log('Logging in:', formData);
    // After login, you might want to redirect the user
    // navigate('/dashboard');
  };

  const handleRegister = () => {
    // Handle registration logic here (frontend only)
    console.log('Registering:', formData);
    // After registration, you might want to redirect the user
    // navigate('/login');
  };

  return (
    <> 
 
        <div className="outerlogin">
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
              <button className="btn1" onClick={handleLogin}>
               <Link to="/student" style={{textDecoration:"none",color:"#ffffff"}}>Login</Link> 
              </button>
              <p>
                Don't have an account?{' '}
                <button className="btn2" onClick={toggleRegister}>
                  Register now
                </button>
              </p>
            </div>
          )}
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
              <button className="btn1" onClick={handleRegister}>
              <Link to="/student" style={{textDecoration:"none",color:"#ffffff"}}>Register</Link>
              </button>
              <p>
                Already have an account?{' '}
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
