// PendingReqs.js

import React, { useState, useEffect } from 'react';
import SingleItem from './singleitem';
import { fetchMentorRequestsWithStudentData } from '../../services/api';
import { useDispatch, useSelector } from "react-redux";

const PendingReqs = () => {
  const [mentorRequestsWithStudentData, setMentorRequestsWithStudentData] = useState([]);

  const mentorEmail=useSelector((state)=>{
    return state.currentUser.email;
  })

  useEffect(() => {
    const response=fetchMentorRequestsWithStudentData(mentorEmail);
    setMentorRequestsWithStudentData(response);
  }, []);

  

  return (
    <div className="pending-reqs-container">
      <div className="pending-reqs">
        {mentorRequestsWithStudentData.map((request) => (
          <SingleItem key={request.id} data={request} />
        ))}
      </div>
    </div>
  );
};

export default PendingReqs;
