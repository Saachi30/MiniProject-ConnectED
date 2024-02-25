import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import RoomIcon from '@mui/icons-material/Room';
import './Profile.css'
const PersonalDetails = () => {
  return (
    <div>
      <div className="ContentSec2">
          <div className="PersonalDetails">
            <div className="phone Details">
              <LocalPhoneIcon/>
              <h3>1234567890</h3>
            </div>
            <div className="mail Details">
              <EmailIcon/>
              <h3>abc123@gmail.com</h3>
            </div>
            <div className="birth Details">
              <CakeIcon/>
              <h3>02 Feb 2002</h3>
            </div>
            <div className="location Details">
              <RoomIcon/>
              <h3>Mumbai</h3>
            </div>
          </div>
          </div>
    </div>
  )
}

export default PersonalDetails
