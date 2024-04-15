import React from 'react'
import './ListElement.css'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Navigate, useNavigate } from 'react-router-dom';
const ListElement = (props) => {
    const navigate=useNavigate();
    const printDomain = () => {
        if (props.domain === "web dev") {
            return <span style={{color:"green"}}>Web Development</span>;
        }
        else if (props.domain === "dsa") {
            return <span style={{color:"blue"}}>Data Structures and Algorithms</span>;
        }
        else if (props.domain === "ml") {
            return <span style={{color:"orange"}}>Machine Learning</span>;
        }
        else if (props.domain === "blockchain") {
            return <span style={{color:"red"}}>Blockchain</span>;
        }
        else if (props.domain === "cloud computing") {
            return <span style={{color:"purple", textDecoration:"none"}}>Cloud Computing</span>;
        }
        else if (props.domain === "ui/ux") {
            return <span style={{color:"pink", textDecoration:"none"}}>UI/UX</span>;
        }
        else if (props.domain === "finance") {
            return <span style={{color:"brown", textDecoration:"none"}}>Finance</span>;
        }
        else {
            return <span>{props.domain}</span>; 
        }
    };
    const viewProfile=async(mentorData)=>{
        console.log(mentorData)
        props.setSearchedMentorData(mentorData);
        navigate(`/mentorprofile`);
    }
    return (
        <div className='elementouter'   onClick={() => viewProfile(props)}>
            <div className='profilepic'>
                <img src={props.image}
                    style={{ width: "100px", height: "100px"}}
                />
            </div>
            <div className='details'>
                <h3>{props.name}</h3>
                <div className='moredetails'>
                    <div className='moredetails1'>
                        <p>Domain: {printDomain()}</p>
                        <p>Year of Study: {props.yearOfStudy}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListElement;
