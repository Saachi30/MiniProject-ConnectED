import React from "react";
import "./StudentPage.css";

function StudentPage() {
  return (
    <div className="studentPage">
      <div className="navbar">
        <div className="logo">
          <div className="loggo"></div>
          <h2 className="logoName">ConnectED</h2>
        </div>
        <div className="middle">
          <h2>Mentors</h2>
          <h2>Alumni</h2>
        </div>
        <div className="right">My Profile</div>
      </div>

      <div className="main">
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
      </div>
      <div className="main-test">
        <h2>Tests Attempted</h2>
      </div>
    </div>
  );
}

export default StudentPage;
