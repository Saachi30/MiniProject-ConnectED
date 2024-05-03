import React, { useEffect, useState, useCallback } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import SearchIcon from "@mui/icons-material/Search";
import mentors from "../../mentors";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


function ChatBox({ socket, username, room, connectedUsers, setName, roomkey, setRoomKey, recipientName, setRecipientName, roomKey}) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  

  const currentUserName = useSelector((state) => state.currentUser.user.name);
  const currentUserEmail = useSelector((state) => state.currentUser.user.email);
  const currentUserType = useSelector((state) => state.currentUser.type);
  const navigate=useNavigate()
  const users=connectedUsers;
  console.log(users)
  // const filteredMentors = mentors.filter((mentor) =>
  //   mentor.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };
 
  useEffect(() => {
    const receiveMessage = (data) => {
      setMessageList((list) => [...list, data]);
    };
    socket.on("receive_message", receiveMessage);
    return () => {
      socket.off("receive_message", receiveMessage);
    };
  }, [socket]);
  let recipientEmail;
  var roomkey;
  const initiateChat=async(email,name)=>{
    if(currentUserType==='student'){
    recipientEmail=email;
    setRecipientName(name);
    roomkey=currentUserEmail+recipientEmail;
    setRoomKey(roomkey);
    setName(currentUserName)
    console.log(roomkey+"from smp");
    navigate('/chatsect')
    }
    
    else{
      recipientEmail=email
      setRecipientName(name)
      roomkey= recipientEmail+currentUserEmail;
      setRoomKey(roomkey);
      
    setName(currentUserName)
    console.log(roomkey+"from smp");
    navigate('/chatsect')

    }
  }
  const handleJoinVc=()=>{
      console.log(roomKey)
      navigate(`/room/${roomKey}`)
  }
  return (
    <div className="ConnectMsg">
      <div className="message">
        <div className="inbox">
          <div className="search">
            <input
              className="search-connection"
              placeholder="Search"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon className="search-icon" />
          </div>
          <div className="connections">
            {users.length > 0 ? (
              users.map((user) => (
                <div key={user._id} className="profile" onClick={()=>{
                  initiateChat(user.email, user.name)
                }}>
                  <img src={mentors[0].image} className="profile-image" />
                  <p className="profile-name">{user.name}</p>
                </div>
              ))
            ) : (
              <p>No such connections</p>
            )}
          </div>
        </div>

        <div className="messenger">
          <div className="chat-header">
            <p>{recipientName}</p> 
           <i class="fa-solid fa-video" style={{color: "#ffffff" }} onClick={handleJoinVc}></i>
          </div>
          <div className="chat-body">
            <ScrollToBottom className="message-container">
              {messageList.map((messageContent, index) => {
                return (
                  <div
                    key={index}
                    className="message"
                    id={username === messageContent.author ? "you" : "other"}
                  >
                    <div>
                      <div className="message-content">
                        <p>{messageContent.message}</p>
                      </div>
                      <div className="message-meta">
                        <p id="time">{messageContent.time}</p>
                        <p id="author">{messageContent.author}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ScrollToBottom>
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={currentMessage}
              placeholder="Hey..."
              onChange={(event) => {
                setCurrentMessage(event.target.value);
              }}
              onKeyPress={(event) => {
                event.key === "Enter" && sendMessage();
              }}
            />
            <button onClick={sendMessage}>&#9658;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
