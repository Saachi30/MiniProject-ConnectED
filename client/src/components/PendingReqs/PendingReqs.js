import React, { useState, useEffect } from 'react';
import SingleItem from './singleitem';
import { fetchMentorRequestsWithStudentData } from '../../services/api';
import { useDispatch, useSelector } from "react-redux";

const PendingReqs = (props) => {
  const [mentorRequestsWithStudentData, setMentorRequestsWithStudentData] = useState([]);
  
  const mentorEmail = useSelector((state) => state.currentUser.user.email);
   
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMentorRequestsWithStudentData(mentorEmail);
        if (response) {
          console.log('Fetched data:', response.data); // Log fetched data
          setMentorRequestsWithStudentData(response.data);
        }
      } catch (error) {
        console.error('Error fetching mentor requests with student data:', error);
      }
    };

    fetchData();
  }, [mentorEmail]);

  return (
    <div className="pending-reqs-container">
      <div className="pending-reqs">
        {mentorRequestsWithStudentData.map((request) => (
          <SingleItem key={request.request._id} data={request} mentorRequestsWithStudentData={mentorRequestsWithStudentData} setMentorRequestsWithStudentData={setMentorRequestsWithStudentData} roomKey={props.roomKey} setRoomKey={props.setRoomKey} setName={props.setName}/>
        ))}
      </div>
    </div>
  );
};

export default PendingReqs;
