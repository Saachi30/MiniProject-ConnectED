import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./LandingPage.css";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Link } from "react-router-dom";
const LandingPage = () => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const options = {
      stringsElement: "#typed-strings",
      typeSpeed: 150,
      loop: true,
    };

    const typed = new Typed(typedTextRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="mainLanding">
      <button className="Loginbtn">
        <Link to="/login" style={{ textDecoration: "none", color: "#11113a" }}>
          Login/Sign up
        </Link>
      </button>
      <div className="outerdiv">
        <div className="leftLanding">
          <h1 ref={typedTextRef}></h1>
          <div id="typed-strings" style={{ display: "none" }}>
            <span>Flexible Connections</span>
            <span>Student Guidance</span>
            <span>Learning community</span>
          </div>

          <p>
          Connect with mentors and alumni for personalized guidance and career opportunities. Empowering students to thrive through mentorship and community support.
          </p>
          <button id="abt-btn" className="btn1">
            Read more about us{" "}
            <ArrowForwardRoundedIcon style={{ margin: "0px 6px" }} />
          </button>
        </div>
        <div className="rightLanding"></div>
      </div>
    </div>
  );
};

export default LandingPage;
