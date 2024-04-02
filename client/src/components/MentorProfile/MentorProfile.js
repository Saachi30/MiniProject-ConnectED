import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import mentors from '../../mentors'; // Assuming you're importing mentor data
import { sendConnectionRequestToMentor } from '../../services/api'; // Import the API function
import './MentorProfile.css';
import { useDispatch,  useSelector } from 'react-redux';

const MentorProfile = () => {
  const { id } = useParams();
  const mentor = mentors.find((m) => m.id === parseInt(id));
  const navigate=useNavigate();
  const data=useSelector((state)=>{
    return state.currentUser.new.email;
  })
  const handleConnect = async () => {
 
    try {

      // Assuming mentor.email contains the email address of the mentor
      // console.log(data)
      const res=await sendConnectionRequestToMentor(data,'123@g');
      if(res.status==201){
        alert("Request already exists");
    }
    else{
      alert("Connect request sent successfully");
      navigate('/list')
    }
      
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
