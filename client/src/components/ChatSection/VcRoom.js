import React from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
const VcRoom = ({name}) => {
    const {roomId}=useParams();
    const myMeeting=async(element)=>{
        const appID=1693860184;
        const serverSecret="f5eb589c38bb9197d707ae87c9a4d24a"
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, name, name)
        const zc=ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            scenario:{
                mode: ZegoUIKitPrebuilt.OneONoneCall
            }
        })
    }
  return (
    <div style={{width:"100vw", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <div ref={myMeeting} />
    </div>
  )
}

export default VcRoom;
