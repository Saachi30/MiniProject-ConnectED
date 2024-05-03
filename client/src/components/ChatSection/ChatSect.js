import "./ChatSect.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import ChatBox from "./ChatBox";

const socket = io.connect("http://localhost:8001");

function ChatSect(props) {
  //const [username, setUsername] = useState("");
  //const [room, setRoom] = useState("");
  
  const [showChat, setShowChat] = useState(false);
  const room=props.roomKey;
  const username=props.name;
  useEffect(()=>{
    if (username !== "" && room !== "") {
      socket.emit("join_room", props.roomKey);
      setShowChat(true);
    }
  },[])
  const joinRoom = () => {
    
  };

  return (
    // <div className="App">
    //   {!showChat ? (
    //     <div className="joinChatContainer">
    //       <h3>Join A Chat</h3>
    //       <input
    //         type="text"
    //         placeholder="John..."
    //         onChange={(event) => {
    //           setUsername(event.target.value);
    //         }}
    //       />
    //       <input
    //         type="text"
    //         placeholder="Room ID..."
    //         onChange={(event) => {
    //           setRoom(event.target.value);
    //         }}
    //       />
    //       <button onClick={joinRoom}>Join A Room</button>
    //     </div>
    //   ) : (
    //     <ChatBox socket={socket} username={username} room={room} />
    //   )}
    // </div>
    <div className="App">
        <ChatBox socket={socket} username={username} room={room} setConnectedUsers={props.setConnectedUsers} connectedUsers={props.connectedUsers} setName={props.setName} setRoomKey={props.setRoomKey} recipientName={props.recipientName} setRecipientName={props.setRecipientName}/>
    </div>
  );
}

export default ChatSect;
