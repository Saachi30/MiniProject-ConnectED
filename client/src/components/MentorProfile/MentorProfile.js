import React from 'react';
import { useParams } from 'react-router-dom';
import mentors from '../../mentors'; // Assuming you're importing mentor data
import { sendConnectionRequestToMentor } from '../../services/api'; // Import the API function
import './MentorProfile.css';

const MentorProfile = () => {
  const { id } = useParams();
  const mentor = mentors.find((m) => m.id === parseInt(id));

  const handleConnect = async () => {
    try {
      // Assuming mentor.email contains the email address of the mentor
      await sendConnectionRequestToMentor('123@g');
      // Handle successful connection request (e.g., show a success message)
      console.log('Connection request sent successfully');
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error('Error sending connection request:', error);
    }
  };

  return (
    <div className="mentor-profile">
      <button className="connect-button" onClick={handleConnect}>Connect</button>
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
