import React from 'react'
import './ListElement.css'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const ListElement = (props) => {
    const printDomain = () => {
        if (props.domain === "Web Development") {
            return <span style={{color:"green"}}>{props.domain}</span>;
        }
        else if (props.domain === "Data Structures and Algorithms") {
            return <span style={{color:"blue"}}>{props.domain}</span>;
        }
        else if (props.domain === "Machine Learning") {
            return <span style={{color:"orange"}}>{props.domain}</span>;
        }
        else if (props.domain === "Blockchain") {
            return <span style={{color:"red"}}>{props.domain}</span>;
        }
        else if (props.domain === "Data Analysis") {
            return <span style={{color:"purple"}}>{props.domain}</span>;
        }
        else {
            return <span>{props.domain}</span>; 
        }
    };

    return (
        <div className='elementouter'>
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
                        <p>Company: {props.company}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListElement;
