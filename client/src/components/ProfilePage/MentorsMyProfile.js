import React from "react";
import "./MentorsMyProfile.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const MentorsMyProfile = () => {
  return (
    <div className="mentorsmyprofile">
        <div className="top-left-box"></div>
      <div className="mentorcards">
        <div className="mentorCardSec1">
          <div className="mentorprofilecard">
            <AccountCircleIcon style={{ height: "200px", width: "200px" }} />
            <h3 className="username">User Name</h3>
            <h2 className="About">Placeholder</h2>
            <h2 className="About">Bio</h2>
            <div className="studentCount">
              <AccountCircleIcon style={{ height: "40px", width: "50px" }} />
              <h3>Student</h3>
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
                    <h3>Abhishek S Sharma</h3>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Email</h3>
                  </td>
                  <td>
                    <h3>abhishek.sharma@gmail.com</h3>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Phone</h3>
                  </td>
                  <td>
                    <h3>1234567890</h3>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>D.O.B.</h3>
                  </td>
                  <td>
                    <h3>02 Feb, 2004</h3>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>D.O.B.</h3>
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
            </div>
            <div className="mentorstatscard">
                <h3>Company</h3>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default MentorsMyProfile;
