
import React from "react"; 
import styles from "./Profile.css";
import profileImage from "../../imgs/profile.png";
import skillsImage from "../../imgs/Skills.png";
import hobbiesImage from "../../imgs/Hobbies.png";

const Profile = () => {
  return (
    <div className={styles.ProfilePage}>
      <div className={styles.HeadSec}>
        <h3 className={styles.LogOut}>LogOut</h3>
      </div>
      <div className={styles.ContentSec}>
        <div className={styles.ContentSec1}>
          <div className={styles.ProfileName}>
            <img src={profileImage} alt="" />
            <div className={styles.Name}>
              <h2>Saachi Peswani</h2>
              <h4>UI/UX Designer</h4>
            </div>
          </div>
          <div className={styles.ConnectionsCount}>
            <div className={styles.AlumniCount}>
              <img src={profileImage} alt="" />
              <h2>Alumni</h2>
            </div>
            <div className={styles.MentorCount}>
              <img src={profileImage} alt="" />
              <h2>Mentors</h2>
            </div>
          </div>
        </div>
        <div className={styles.ContentSec2}>
          <div className={styles.PersonalDetails}>
            <div className={`${styles.phone} ${styles.Details}`}>
              <i className="fas fa-phone"></i>
              <h3>1234567890</h3>
            </div>
            <div className={`${styles.mail} ${styles.Details}`}>
              <i className="fas fa-envelope-square"></i>
              <h3>abc123@gmail.com</h3>
            </div>
            <div className={`${styles.birth} ${styles.Details}`}>
              <i className="fas fa-birthday-cake"></i>
              <h3>02 Feb 2002</h3>
            </div>
            <div className={`${styles.location} ${styles.Details}`}>
              <i className="fas fa-map-marker-alt"></i>
              <h3>Mumbai</h3>
            </div>
          </div>
          <div className={styles.CurrentSkills}>
            <img src={skillsImage} alt="" />
          </div>
          <div className={styles.Education}>
            <h1>Education</h1>
            <div className={styles.EduDetails}>
              <div className={`${styles.Graduation} ${styles.Details}`}>
                <i className="fas fa-graduation-cap"></i>
                <h3>
                  Bharatiya Vidya Bhavans Sardar Patel Institute of Technology
                </h3>
              </div>
              <div className={`${styles.Diploma} ${styles.Details}`}>
                <i className="fas fa-graduation-cap"></i>
                <h3>Shri Bhagubhai Maftlal Polytechnic</h3>
              </div>
              <div className={`${styles.SSC} ${styles.Details}`}>
                <i className="fas fa-graduation-cap"></i>
                <h3>Jankidevi Public School</h3>
              </div>
            </div>
          </div>
          <div className={styles.Hobbies}>
            <img src={hobbiesImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
