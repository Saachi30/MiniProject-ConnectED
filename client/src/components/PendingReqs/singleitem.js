import React from 'react';
//import './SingleItem.css';

const SingleItem = ({ data }) => {
  const { fullName, yearOfStudy, profilePic } = data;

  const handleAccept = () => {
    // Handle accept action
  };

  const handleReject = () => {
    // Handle reject action
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
        <h2>{fullName}</h2>
        <p>{yearOfStudy}</p>
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
