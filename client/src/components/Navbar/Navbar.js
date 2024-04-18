// Navbar.js

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import finalLogo from '../../imgs/finallogo.png'
import './Navbar.css'

export const Navbar = ({ setListType }) => {
    const [lists, setLists] = useState("student");
    const navigate = useNavigate();

    const handleViewRequests = () => {
        navigate('/pending-requests');
    };

    const handleProfile = async () => {
        try {
            navigate('/profile');
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const handleListChange = (type) => {
        setListType(type);
        setLists(type);
    };

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={finalLogo} alt='' />
                <p>ConnectED</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => handleListChange("student")}>
                    <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>
                    {lists === "student" ? <hr /> : <></>}
                </li>
                <li onClick={() => handleListChange("mentor")}>
                    <Link style={{ textDecoration: 'none' }} to='/lists'>Mentor</Link>
                    {lists === "mentor" ? <hr /> : <></>}
                </li>
                <li onClick={() => handleListChange("alumni")}>
                    <Link style={{ textDecoration: 'none' }} to='/lists'>Alumni</Link>
                    {lists === "alumni" ? <hr /> : <></>}
                </li>
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
