import React from 'react';
import './MentorsProfile.css'; // assuming you have your CSS styles in a file named test.css


function MentorsProfile() {
  return (
    <section>
      <div className="card1">
        <div className="card">
          <div className="left-container">
            <img src="https://cdn.pixabay.com/photo/2020/10/19/09/44/woman-5667299__480.jpg" alt="Profile Image" />
            <h2 className="gradienttext">Saachi Peswani</h2>
            <p>Web Developer</p>
          </div>
          <div className="right-container">
            <h3 className="gradienttext">Profile Details</h3>
            <table>
              <tbody>
                <tr>
                  <td>Name :</td>
                  <td>Saachi Peswani</td>
                </tr>
                <tr>
                  <td>Age :</td>
                  <td>19</td>
                </tr>
                <tr>
                  <td>Mobile :</td>
                  <td>+91 XXXXXXXXXX</td>
                </tr>
                <tr>
                  <td>Email :</td>
                  <td>saachi12@gmail.com</td>
                </tr>
                <tr>
                  <td>Company :</td>
                  <td>JP Morgan & Chase</td>
                </tr>
              </tbody>
            </table>
            <div className="social-icons">
              <a href="#"><i className="fa fa-facebook-f"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
              <a href="#"><i className="fa fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MentorsProfile;
