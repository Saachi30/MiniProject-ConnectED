import React, { useEffect } from "react";
import "./ListCount.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  
  const studentName = useSelector((state) => state.currentUser.user.name);
  const studentEmail = useSelector((state) => state.currentUser.user.email);

  const initiateChat=async(email)=>{
    const mentorEmail=email;
    const roomkey=studentEmail+mentorEmail;
    props.setRoomKey(roomkey);
    props.setName(studentName)
    console.log(roomkey+"from smp");
    navigate('/chatsect')
  }
 
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
                <button className="chat-button" onClick={()=>{initiateChat(item.email)}}>Chat</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListCount;
