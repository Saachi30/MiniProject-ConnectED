import React, { useEffect } from 'react';
import './SearchedMentorProfile.css';
import { useSelector } from 'react-redux';
import { sendConnectionRequestToMentor } from '../../services/api';

const SearchedMentorProfile = (props) => {
  const mentorData = props.searchedMentorData;
  const studentEmail = useSelector((state) => state.currentUser.new.email);
  
  const sendConnectionRequest = async () => {
    const mentorEmail = mentorData.email;
    
    console.log(mentorEmail+studentEmail)
    const response = await sendConnectionRequestToMentor(studentEmail, mentorEmail);
    if (response) {
      console.log("Request sent successfully");
      alert("Request sent successfully!")
      // You can perform further actions based on the response here
    }
  };

  return (
    <section>
      <div className="card1">
        <button className="connect-button" onClick={sendConnectionRequest}>
          Connect
        </button>
        <div className="card">
          <div className="left-container">
            <img src={mentorData.image} alt={mentorData.name} />
            <h2 className="gradienttext">{mentorData.name}</h2>
            <p>Web Developer</p>
          </div>
          <div className="right-container">
            <h3 className="gradienttext">Profile Details</h3>
            <table>
              <tbody>
                <tr>
                  <td>Name :</td>
                  <td>{mentorData.name}</td>
                </tr>
                <tr>
                  <td>Age :</td>
                  <td>19</td>
                </tr>
                <tr>
                  <td>Mobile :</td>
                  <td>{mentorData.phoneNumber}</td>
                </tr>
                <tr>
                  <td>Email :</td>
                  <td>{mentorData.email}</td>
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
};

export default SearchedMentorProfile;
