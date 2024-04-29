import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import finalLogo from '../../imgs/finallogo.png'
import './Navbar.css'
import { useDispatch, useSelector } from "react-redux"; // Import useSelector

const Navbar = ({ setListType }) => {
    const [lists, setLists] = useState("student");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.currentUser); // Get currentUser.user from Redux store

    const handleViewRequests = () => {
        navigate('/pending-requests');
    };

    const handleProfile = async () => {
        try {
            if (currentUser.type === "mentor" || currentUser.type === "alumni") {
                navigate('/mentors-my-profile');
            } else {
                navigate('/profile');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const handleListChange = (type) => {
        setListType(type);
        setLists(type);
    };

    if (!currentUser.user) { // If currentUser.user is not set, display only Home
        return (
            <div className="navbar">
                <div className="nav-logo">
                    <img src={finalLogo} alt='' />
                    <p>ConnectED</p>
                </div>
                <ul className="nav-menu">
                    {/* <li>
                        <Link style={{ textDecoration: 'none'}} to='/'>Home</Link>
                    </li> */}
                </ul>
            </div>
        );
    }

    const userType = currentUser.type;

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={finalLogo} alt='' />
                <p>ConnectED</p>
            </div>
            <ul className="nav-menu">
                <li>
                    <Link style={{ textDecoration: 'none' }} to='/student'>Home</Link>
                </li>
                {userType === "student" && (
                    <>
                        <li onClick={() => handleListChange("mentor")}>
                            <Link style={{ textDecoration: 'none' }} to='/lists'>Mentor</Link>
                            {lists === "mentor" ? <hr /> : <></>}
                        </li>
                        <li onClick={() => handleListChange("alumni")}>
                            <Link style={{ textDecoration: 'none' }} to='/lists'>Alumni</Link>
                            {lists === "alumni" ? <hr /> : <></>}
                        </li>
                    </>
                )}
            </ul>
            <div className="nav-login-cart">
                {(userType === "mentor" || userType==="alumni") && currentUser.user && ( // Display only if user type is not student and currentUser.user is set
                    <button className="view-requests" onClick={handleViewRequests}>
                        View Requests
                    </button>
                )}
                {currentUser.user && ( // Display only if currentUser.user is set
                    <div className="profile" onClick={handleProfile}>
                        <AccountCircleIcon
                            style={{ width: "30px", height: "30px", marginRight: "10px" }}
                        />
                        My Profile
                    </div>
                )}
            </div>
        </div>
    )
}
export default Navbar;