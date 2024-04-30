import React, { useEffect } from "react";
import "./ListCount.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getConnectedMentors , getConnectedStudents} from "../../services/api";
const ListCount = (props) => {
  // Dummy data
  // const data = [
  //   { name: "John Doe", domain: "Technology", company: "ABC Corp" },
  //   { name: "Jane Smith", domain: "Finance", company: "XYZ Inc" },
  //   { name: "Michael Johnson", domain: "Marketing", company: "123 Industries" },
  //   { name: "Emily Davis", domain: "Engineering", company: "Tech Solutions" }
  // ];
  const navigate=useNavigate();
  const data= props.connectedUsers;
  let dataArray=['']
  console.log(data)
  if(data){
  dataArray = Object.values(data);
  }
  
  const currentUserName = useSelector((state) => state.currentUser.user.name);
  const currentUserEmail = useSelector((state) => state.currentUser.user.email);
  const currentUserType = useSelector((state) => state.currentUser.type);
  let mentorEmail, studentEmail, roomkey;
  const initiateChat=async(email)=>{
    if(currentUserType==='student'){
    mentorEmail=email;
    roomkey=currentUserEmail+mentorEmail;
    props.setRoomKey(roomkey);
    props.setName(currentUserName)
    console.log(roomkey+"from smp");
    navigate('/chatsect')
    }
    
    else{
      studentEmail=email
      roomkey= studentEmail+currentUserEmail;
      props.setRoomKey(roomkey);
    props.setName(currentUserName)
    console.log(roomkey+"from smp");
    navigate('/chatsect')

    }
  }
  const handleCountClick = async() => {
    // Navigate to the mentors page
    if(currentUserType==="student"){
    const studentEmail=currentUserEmail;
    const connectedMentors= await getConnectedMentors(studentEmail);
    console.log(connectedMentors)
    props.setConnectedUsers(connectedMentors)
    // navigate("/count");
    }
    else{
      // Navigate to the mentors page
    const mentorEmail=currentUserEmail;
    const connectedStudents= await getConnectedStudents(mentorEmail);
    console.log(connectedStudents)
    props.setConnectedUsers(connectedStudents)
    // navigate("/count");
    }
  };
 
  return (
    <div className="listCount">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Domain</th>
            <th>Year of Study</th>
            <th>Message</th>
        
       
          </tr>
        </thead>
        <tbody>
          {dataArray.map((item, index) => (
            
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.preferredDomain}</td>
              <td>{item.yearOfStudy}</td>
              <td>
                <button className="chat-button" onClick={()=>{
                  handleCountClick();
                  initiateChat(item.email)
                  }}>Chat</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListCount;
