import React, {useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import './Navbar.css'
export const Navbar = () => {
    const[lists, setlists] = useState("student");

    const navigate=useNavigate();
  const handleViewRequests = () => {
    navigate('/pending-requests');
  };

  const handleProfile = async () => {
    try {
      // const data = await getData(email);
      // console.log('Data from API:', data);
      // props.setUserData(data);
      navigate('/profile');
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };


  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src='.././src/imgs/finallogo.png' alt=''></img>
        <p>ConnectED</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setlists("student")}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link>{lists==="student"?<hr/>:<></>}</li>
        <li onClick={()=>{setlists("mentor")}}><Link style={{textDecoration: 'none'}} to='/lists'>Mentor</Link>{lists==="mentor"?<hr/>:<></>}</li>
        <li onClick={()=>{setlists("alumni")}}><Link style={{textDecoration: 'none'}} to='/lists'>Alumni</Link>{lists==="alumni"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
          <button className="view-requests" onClick={handleViewRequests}>
            View Requests
          </button>
          <div className="profile" onClick={handleProfile}>
            <AccountCircleIcon
              style={{ width: "30px", height: "30px", marginRight: "10px" }}
            />
            My Profile
          </div>
        </div>
    </div>
  )
}
export default Navbar;