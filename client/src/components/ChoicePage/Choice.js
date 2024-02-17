import React from "react";
import "./Choice.css";

const Choice=()=> {
  return (
    <>
    <div className="PageChoice">
      {/* <div className="navbar">
        <div className="logo">
          <div className="loggo"></div>
          <h2 className="logoName">ConnectED</h2>
        </div> */}
        
      </div>

      <div className="mainChoice">
        <div className="Stu-Sec">
          <img
            src="https://img.pikbest.com/png-images/20191103/cartoon-student-study-college-graduation-png-element_2525410.png!sw800"
            alt="student"
          />
          <h4 className="boxtext">STUDENT</h4>
        </div>
        <div className="Alumni-Sec">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Education%2C_Studying%2C_University%2C_Alumni_-_icon.png"
            alt="alumni"
          />
          <h4 className="boxtext">ALUMNI</h4>
        </div>
        <div className="Mentor-Sec">
          <img
            src={require("../../imgs/mentor.png")}
            alt="mentor"
          />
          <h4 className="boxtext">MENTOR</h4>
        </div>
      </div>
    {/* </div> */}
    </>
  );
}

export default Choice;
