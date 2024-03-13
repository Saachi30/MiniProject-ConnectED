import React from 'react';
import { useParams } from 'react-router-dom';
import mentors from '../../mentors';
import './MentorProfile.css';

const MentorProfile = () => {
  const { id } = useParams();
  const mentor = mentors.find((m) => m.id === parseInt(id));

  return (
    <div className="mentor-profile">
        <div className="mentor-image">
      <img src={mentor.image} alt={mentor.fullName} className="mentor-image" />
      </div>
      <div className="mentor-info">
        <h2 className="mentor-name">{mentor.fullName}</h2>
        <p className="mentor-domain">Domain: {mentor.domain}</p>
        <p className="mentor-company">Company: {mentor.company}</p>
      </div>
    </div>
  );
};

export default MentorProfile;