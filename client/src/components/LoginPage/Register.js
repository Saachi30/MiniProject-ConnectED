import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { authenticateSignup} from "../../services/api.js";
import { useDispatch } from "react-redux";
import { addCurrentUser } from "../../store/slices/UserSlice.js";
const Register = (props) => {
  const type = props.type; // Access the type parameter
  const navigate = useNavigate();
  console.log(type);
  const dispatch=useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    preferredDomain: "",
    password: "",
    confirmPassword: "",
    // Additional fields for alumni and mentors
    ...(type === "alumni" && { currentJobTitle: "", company: "" }),
    ...(type === "mentor" && { yearOfStudy: ""}),
    ...(type === "student" && { yearOfStudy: ""}),
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleRegister = async () => {

    try {
      
      const response = await authenticateSignup(type, formData); // Pass type parameter
        //Add formdata to store
        dispatch(addCurrentUser(formData))

        navigate(`/student`);
        console.log("Registration successful");
      } 
     catch (error) {
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
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          className="form-control transparent-input"
          name="phoneNumber"
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
        <label htmlFor="preferredDomain">Preferred Domain</label>
        <select
          id="preferredDomain"
          className="form-control transparent-input"
          name="preferredDomain"
          onChange={handleChange}
        >
          <option value="">Select Preferred Domain</option>
          <option value="web dev">Web Development</option>
          <option value="dsa">DSA</option>
          <option value="ml">Machine Learning</option>
          <option value="cloud computing">Cloud Computing</option>
          <option value="blockchain">Blockchain</option>
          <option value="finance">Finance</option>
          <option value="ui/ux">UI/UX</option>
        </select>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="form-control transparent-input"
          name="password"
          onChange={handleChange}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          className="form-control transparent-input"
          name="confirmPassword"
          onChange={handleChange}
        />

        {/* Additional fields for alumni */}
        {type === "alumni" && (
          <>
            <label htmlFor="currentJobTitle">Current Job Title</label>
            <input
              type="text"
              id="currentJobTitle"
              className="form-control transparent-input"
              name="currentJobTitle"
              onChange={handleChange}
            />
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              className="form-control transparent-input"
              name="company"
              onChange={handleChange}
            />
          </>
        )}

        {/* Additional fields for mentors */}
        {type === "mentor" && (
          <>
            <label htmlFor="yearOfStudy">Year of Study</label>
            <select
              id="yearOfStudy"
              className="form-control transparent-input"
              name="yearOfStudy"
              onChange={handleChange}
            >
              <option value="">Select Year of Study</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
            
          </>
        )}

        {/* Additional fields for students */}
        {type === "student" && (
          <>
            <label htmlFor="yearOfStudy">Year of Study</label>
            <select
              id="yearOfStudy"
              className="form-control transparent-input"
              name="yearOfStudy"
              onChange={handleChange}
            >
              <option value="">Select Year of Study</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
          </>
        )}
      </div>
      <button className="btn1" id="registerbtn" onClick={handleRegister}>
        Register
      </button>
      <p id="alttext">
        Already have an account?{" "}
        <Link to="/login">
          <button className="btn2">Log in now</button>
        </Link>
      </p>
    </div>
  );
};

export default Register;
