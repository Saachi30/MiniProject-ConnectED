import React, { useState } from 'react';
import './singleitem.css';
import {useDispatch, useSelector} from 'react-redux';
import { changeReqStatus, fetchMentorRequestsWithStudentData, removeConnectionRequestToMentor } from '../../services/api';
import { useNavigate } from 'react-router-dom';
const SingleItem = (props) => {
  console.log(props)
  const { name, yearOfStudy, preferredDomain } = props.data.student;
  const mentorEmail= useSelector((state)=>state.currentUser.user.email)
  const mentorName= useSelector((state)=>state.currentUser.user.name)
  const navigate=useNavigate();
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
  const initiateChat=async()=>{
    const studentEmail=props.data.student.email;
    const roomkey=studentEmail+mentorEmail;
    props.setRoomKey(roomkey);
    props.setName(mentorName)
    console.log(roomkey+"from si")
    navigate('/chatsect')
    
  }
   return (
    <div className="container">
        <table>
          <tbody>
            <tr>
              <td colSpan='6'>{name}</td>
              <td>{yearOfStudy}</td>
              <td>{preferredDomain}</td>
              <td className="action-buttons"><button  className="accept" onClick={handleAccept}>Accept</button></td>
              <td className="action-buttons"><button className="reject" onClick={handleReject}>Reject</button></td>
              <td className="action-buttons"><button onClick={handleViewProfile}>View Profile</button></td>
            </tr>
          </tbody>
        </table>
        {/* <button onClick={initiateChat}>Chat</button> */}
   
    </div>
  );
};

export default SingleItem;