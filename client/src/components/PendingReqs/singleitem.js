import React, { useState } from 'react';
import './singleitem.css';
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
    <div className="container">
      <h1>View Request List</h1>
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <select>
          <option value="name">Name</option>
          <option value="year">Year of Study</option>
          <option value="domain">Domain</option>
        </select>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Year of Study</th>
              <th>Domain</th>
              <th>Accept</th>
              <th>Reject</th>
              <th>Profile</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td>{props.data.student.name}</td>
              <td>{props.data.student.yearOfStudy}</td>
              <td>{props.data.student.preferredDomain}</td>
              <td className="action-buttons"><button  className="accept" onClick={handleAccept}>Accept</button></td>
              <td className="action-buttons"><button className="reject" onClick={handleReject}>Reject</button></td>
              <td className="action-buttons"><button onClick={handleViewProfile}>View Profile</button></td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleItem;
