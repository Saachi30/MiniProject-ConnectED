import React from "react";
import "./Student.css";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Student = () => {

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
    <div className="studentPage">
      <div className="navbar">
        <div className="logo">
          <div className="loggo"></div>
          {/* <h2 className="logoName">ConnectED</h2> */}
        </div>
        <div className="middle">
          <Link to='/list'><h3>Mentors</h3></Link>
          <Link to='/list'><h3>Alumni</h3></Link>
        </div>

       
        <div className="right">
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

      <div className="mainStudent">
        <div className="main-news">
          <div className="main-news-left">
            <h2>Events</h2>
          </div>
          <div className="main-news-right">
            <h2>Top Placements</h2>
            <div className="main-right-content">
              <div className="main-right-content1">
                <img
                  src={require("../../imgs/placements.jpeg")}
                  alt="placements"
                />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur consequatur placeat aut totam ex tempore, modi
                  odio, veniam qui reprehenderit obcaecati minima, explicabo rem
                  cumque assumenda? Qui nesciunt non vitae!
                </p>
              </div>
              <div className="main-right-content2">
                <img
                  src={require("../../imgs/placements.jpeg")}
                  alt="placements"
                />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur consequatur placeat aut totam ex tempore, modi
                  odio, veniam qui reprehenderit obcaecati minima, explicabo rem
                  cumque assumenda? Qui nesciunt non vitae!
                </p>
              </div>
            </div>
            <h4>Read More&gt;</h4>
          </div>
        </div>
        <div className="main-test">
          <h2>Tests Attempted</h2>
        </div>
      </div>
    </div>
  );
};

export default Student;
