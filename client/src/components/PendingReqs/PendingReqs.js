import React, { useState, useEffect } from 'react';
import SingleItem from './singleitem';
import { fetchMentorRequestsWithStudentData } from '../../services/api';
import { useDispatch, useSelector } from "react-redux";

const PendingReqs = () => {
  const [mentorRequestsWithStudentData, setMentorRequestsWithStudentData] = useState([]);
  
  const mentorEmail = useSelector((state) => state.currentUser.user.email);
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await fetchMentorRequestsWithStudentData(mentorEmail);
        console.log('Fetched data:', response); // Log fetched data
        // Convert the object of objects to an array of objects
        const dataArray = Object.values(response);
        setMentorRequestsWithStudentData(dataArray[0]);
      } catch (error) {
        console.error('Error fetching mentor requests with student data:', error);
      }
    };
  
    fetchData();
  }, [mentorEmail]);


  console.log('mentorRequestsWithStudentData:', mentorRequestsWithStudentData); // Log state

  return (
    <div className="pending-reqs-container">
      <div className="pending-reqs">
        {mentorRequestsWithStudentData[0] ? mentorRequestsWithStudentData.map((request) => (
          <SingleItem key={request.id} data={request} mentorRequestsWithStudentData={mentorRequestsWithStudentData} setMentorRequestsWithStudentData={setMentorRequestsWithStudentData}/>
        )) : console.log("no pending")}
      </div>
    </div>
  );
};

export default PendingReqs;
