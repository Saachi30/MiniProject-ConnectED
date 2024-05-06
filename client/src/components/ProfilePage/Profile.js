import React from "react";
import "./MentorsMyProfile.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { removeCurrentUser } from "../../store/slices/UserSlice";
import { getConnectedMentors } from "../../services/api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const MentorsMyProfile = (props) => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const type = useSelector((state) => state.currentUser.type);
  const data=useSelector((state)=>{
    return state.currentUser.user;
  })
 console.log(data);
  const handleLogout=async()=>{
      dispatch(removeCurrentUser());
      navigate('/');  
  }
  const handleCountClick = async() => {
    // Navigate to the mentors page
    const studentEmail=data.email;
    const connectedMentors= await getConnectedMentors(studentEmail);
    console.log(connectedMentors)
    props.setConnectedUsers(connectedMentors)
    navigate("/count");
  };
  const handlePredictJob=async()=>{
    const flaskAppUrl = 'http://localhost:5000';

    // Open a new window or tab with the URL of your Flask app
    window.open(flaskAppUrl, '_blank');
  }
  return (
    <>
    <div className="HeadSec" style={{marginRight:"3rem"}}>
        <p className="LogOut" onClick={handleLogout}>LogOut</p>
      </div>
    <div className="mentorsmyprofile">
    
        <div className="top-left-box"></div>
        
      <div className="mentorcards">
        <div className="mentorCardSec1">
          <div className="mentorprofilecard">
            <AccountCircleIcon style={{ height: "200px", width: "200px" }} />
            <h3 className="username">{data.name}</h3>
            <h2 className="About">{data.preferredDomain}</h2>
            <h2 className="About"></h2>
            <div className="count-outer">
            <div className="studentCount" onClick={handleCountClick}>
              <AccountCircleIcon style={{ height: "40px", width: "50px" }} />
              <h3>My mentors</h3>
            </div>
            <div className="studentCount" onClick={handleCountClick}>
              <AccountCircleIcon style={{ height: "40px", width: "50px" }} />
              <h3>My alumni</h3>
            </div>
            </div>
          </div>

          <div className="mentorsocialcard">
            <table>
              <tbody>
                <tr>
                  <td>
                    <div className="Social">
                      <LanguageIcon style={{ height: "35px", width: "50px" }} />
                      <h3> Website</h3>
                    </div>
                  </td>
                  <td>
                    <div className="SocialId">Website</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="Social">
                      <TwitterIcon style={{ height: "35px", width: "50px" }} />
                      <h3> Twitter</h3>
                    </div>
                  </td>
                  <td>
                    <div className="SocialId">Website</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="Social">
                      <FacebookIcon style={{ height: "35px", width: "50px" }} />
                      <h3> facebook</h3>
                    </div>
                  </td>
                  <td>
                    <div className="SocialId">Website</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="Social">
                      <InstagramIcon
                        style={{ height: "35px", width: "50px" }}
                      />
                      <h3> Instagram</h3>
                    </div>
                  </td>
                  <td>
                    <div className="SocialId">Website</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bottom-right-box"></div>
        <div className="mentorCardSec2">
          <div className="mentordetailscard">
            <table>
              <tbody>
                <tr>
                  <td>
                    <h3>Full Name</h3>
                  </td>
                  <td>
                    <h3>{data.name}</h3>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Email</h3>
                  </td>
                  <td>
                    <h3>{data.email}</h3>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Phone</h3>
                  </td>
                  <td>
                    <h3>{data.phoneNumber}</h3>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Year of study</h3>
                  </td>
                  <td>
                    <h3>{data.yearOfStudy}</h3>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Date of Birth</h3>
                  </td>
                  <td>
                    <h3>02 Feb, 2004</h3>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mentorTalentCard">
         
            <div className="mentorskillcard">
                <h3>Skills</h3>
                {type==="student" ? (<button className="jobbtn" onClick={handlePredictJob}>Predict my job</button>) : (<div></div>)}
                
            </div>
            <div className="mentorstatscard">
                <h3>Company</h3>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default MentorsMyProfile;
