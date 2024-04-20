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
        dispatch(addCurrentUser({user: formData, type}))

        navigate(`/student`);
        console.log("Registration successful");
      } 
     catch (error) {
      console.error("Registration failed:", error.message);
    }
  };
  

  return (
    <div className="box-form">
      <div className="left register-left-section">
        <div className="overlay">
        <h1>Hello Peeps</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur et est sed felis aliquet sollicitudin</p>
          <span>
            <p>Register with social media</p>
            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i> Login with Twitter</a>
          </span>
        </div>
      </div>

      <div className="right-section register-right-section">
        <h5>Register</h5>
        <p>Already have an account?<a href="#"><Link to='/login'>Login now</Link></a></p>
        <div className="inputs">
		<input
          type="text"
          id="name"
          className="form-control transparent-input"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
          
          <input
          type="tel"
          id="phoneNumber"
          className="form-control transparent-input"
          name="phoneNumber"
          placeholder="Contact"
          onChange={handleChange}
        />

<input
          type="email"
          id="email"
          className="form-control transparent-input"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

{/* Additional fields for alumni */}
{type === "alumni" && (
          <>
            <input
              type="text"
              id="currentJobTitle"
              className="form-control transparent-input"
              name="currentJobTitle"
              placeholder="Current Job Title"
              onChange={handleChange}
            />
            
            <input
              type="text"
              id="company"
              className="form-control transparent-input"
              name="company"
              placeholder="Your Company"
              onChange={handleChange}
            />
          </>
        )}
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

        {/* Additional fields for mentors */}
        {type === "mentor" && (
          <>
          <br/>
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
<br/>
        {type === "student" && (
          <>
           
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
        <input
          type="password"
          id="password"
          className="form-control transparent-input"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <input
          type="password"
          id="confirmPassword"
          className="form-control transparent-input"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />  
        </div>
        <div className="remember-me--forget-password">
          <label>
            <input type="checkbox" name="item" defaultChecked />
            <span className="text-checkbox">Remember me</span>
          </label>
          <p>forget password?</p>
        </div>

       <button onClick={handleRegister}>
          Register
      </button>
      </div>
    </div>
  );
};


export default Register;
