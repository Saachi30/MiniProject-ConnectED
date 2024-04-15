import React from 'react';
<<<<<<< HEAD:client/src/components/ProfilePage/MentorsProfile.js
import './MentorsProfile.css';
=======
import './SearchedMentorProfile.css'; // assuming you have your CSS styles in a file named test.css
import { useSelector,useDispatch } from 'react-redux';
import { useContext } from 'react';
import { MentorsContext } from '../ListPage/ListPage';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
>>>>>>> 43e54e970242222509813a11f9b52e1ba033f72a:client/src/components/ProfilePage/SearchedMentorProfile.js


const SearchedMentorProfile=(props)=>{
 const mentorData=props.searchedMentorData
  // console.log(mentorData+' from mentorprofile')
  // useEffect(()=>{
  //   console.log(props.searchedMentorData.name+' from mentorprofile')
  // },[])
  // const sendConnectRequest=async()=>{
  //   const studentEmail= useSelector((state)=>{
  //     return state.currentUser.email;
  //   })

  // }
  return (
    <section>
      <div className="card1">
      <button className="connect-button">Connect</button>
        <div className="card">
          <div className="left-container">
            <img src={mentorData.image} />
            <h2 className="gradienttext">{mentorData.name}</h2>
            <p>Web Developer</p>
          </div>
          <div className="right-container">
            <h3 className="gradienttext">Profile Details</h3>
            <table>
              <tbody>
                <tr>
                  <td>Name :</td>
                  <td>{mentorData.name}</td>
                </tr>
                <tr>
                  <td>Age :</td>
                  <td>19</td>
                </tr>
                <tr>
                  <td>Mobile :</td>
                  <td>{mentorData.phoneNumber}</td>
                </tr>
                <tr>
                  <td>Email :</td>
                  <td>{mentorData.email}</td>
                </tr>
                <tr>
                  <td>Company :</td>
                  <td>JP Morgan & Chase</td>
                </tr>
              </tbody>
            </table>
            <div className="social-icons">
              <a href="#"><i className="fa fa-facebook-f"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
              <a href="#"><i className="fa fa-github"></i></a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default SearchedMentorProfile;
