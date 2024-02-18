import React from "react";
import "./Student.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Student=()=> {
  return (
    <div className="studentPage">
      <div className="navbar">
        <div className="logo">
          <div className="loggo"></div>
          {/* <h2 className="logoName">ConnectED</h2> */}
        </div>
        <div className="middle">
          <h3>Mentors</h3>
          <h3>Alumni</h3>
        </div>
        <div className="right"><AccountCircleIcon style={{width:"30px",height:"30px",marginRight:"10px"}}/>My Profile</div>
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
                <img src="img/placements.jpeg" alt="placement" />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur consequatur placeat aut totam ex tempore, modi
                  odio, veniam qui reprehenderit obcaecati minima, explicabo rem
                  cumque assumenda? Qui nesciunt non vitae!
                </p>
              </div>
              <div className="main-right-content2">
                <img src="img/placements.jpeg" alt="placement" />
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
}

export default Student;
