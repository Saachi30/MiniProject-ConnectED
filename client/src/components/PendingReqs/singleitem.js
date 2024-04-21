import React, { useState } from 'react';
//import './SingleItem.css';
import {useDispatch, useSelector} from 'react-redux';
import { changeReqStatus, fetchMentorRequestsWithStudentData, removeConnectionRequestToMentor } from '../../services/api';
const SingleItem = (props) => {
  const { fullName, yearOfStudy, profilePic } = props.data.student;
  const mentorEmail= useSelector((state)=>state.currentUser.user.email)

  const handleAccept = async () => {
    const studentEmail = props.data.student.email;
    const response = await changeReqStatus({ studentEmail, mentorEmail, reqstatus: "accepted" });
    if (response && response.status === 200) { // Add a check for response
      const response = await fetchMentorRequestsWithStudentData(mentorEmail);
      const dataArray = Object.values(response);
      props.setMentorRequestsWithStudentData(dataArray[0]);
    }
    alert("Request accepted successfully!")
  };
  

  const handleReject =  async () => {
    // Handle reject action
    const studentEmail=props.data.student.email;
    console.log(studentEmail+mentorEmail)
    const response=await removeConnectionRequestToMentor(studentEmail, mentorEmail);
    if (response && response.status === 200) { // Add a check for response
      console.log(studentEmail+mentorEmail)
      const response = await fetchMentorRequestsWithStudentData(mentorEmail);
      console.log(response)
      const dataArray = Object.values(response);
      props.setMentorRequestsWithStudentData(dataArray[0]);
    }
    alert("Request deleted successfully!")




  };

  const handleViewProfile = () => {
    // Handle view profile action
  };

  return (
    <div className="single-item">
      <div className="profile-pic">
        <img src={profilePic} alt={fullName} />
      </div>
      <div className="details">
        <h2>{props.data.student.name}</h2>
        <p>Year of study: {props.data.student.yearOfStudy}</p>
        <p>Preferred Domain: {props.data.student.preferredDomain}</p>
        <div className="buttons">
          <button onClick={handleAccept}>Accept</button>
          <button onClick={handleReject}>Reject</button>
          <button onClick={handleViewProfile}>View Profile</button>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
