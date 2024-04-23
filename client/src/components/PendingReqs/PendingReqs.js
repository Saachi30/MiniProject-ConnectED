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
          <div className="">
        {mentorRequestsWithStudentData.map((request) => (
          <SingleItem key={request.request._id} data={request} mentorRequestsWithStudentData={mentorRequestsWithStudentData} setMentorRequestsWithStudentData={setMentorRequestsWithStudentData} roomKey={props.roomKey} setRoomKey={props.setRoomKey} setName={props.setName}/>
        ))}
      </div>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingReqs;