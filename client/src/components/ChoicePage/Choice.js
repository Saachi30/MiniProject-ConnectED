import React from "react";
import "./page.css";

function choice() {
  return (
    <div className="PageChoice">
      <div className="navbar">
        <div className="logo">
          <div className="loggo"></div>
          <h2 className="logoName">ConnectED</h2>
        </div>
        <div className="middle">
          <h2>Mentors</h2>
          <h2>Alumni</h2>
          <h2>About</h2>
        </div>
        <div className="right">Profile</div>
      </div>

      <div className="main">
        <div className="Stu-Sec">
          <img
            src={require("./client/components/img/student.jpg")}
            alt="student"
          />
          <h4 className="Student">STUDENT</h4>
        </div>
        <div className="Alumni-Sec">
          <img
            src={require("./client/components/img/alumni.jpg")}
            alt="alumni"
          />
          <h4 className="Student">ALUMNI</h4>
        </div>
        <div className="Mentor-Sec">
          <img
            src={require("./client/components/img/mentor.jpg")}
            alt="mentor"
          />
          <h4 className="Student">MENTOR</h4>
        </div>
      </div>
    </div>
  );
}

export default choice;
