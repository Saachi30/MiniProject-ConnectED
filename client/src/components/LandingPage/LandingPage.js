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
      typeSpeed: 50, // typing speed in milliseconds
      loop: true, // loop the animation
    };

    const typed = new Typed(typedTextRef.current, options);

    return () => {
      typed.destroy(); // cleanup
    };
  }, []);

  return (
    <div className="mainLanding">
      <button className="Loginbtn">
        <Link to="/choice" style={{ textDecoration: "none", color: "#11113a" }}>
          Login/Sign up
        </Link>
      </button>
      <div className="outerdiv">
        <div className="leftLanding">
          <h1 ref={typedTextRef}></h1>
          <div id="typed-strings" style={{ display: "none" }}>
            <span>Flexible Connections for your Educational journey</span>
            <span>Machine Learning</span>
          </div>

          <p>
            Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus
            est mist aliquet elit ac nisl. Lorem ipsum praesent ac massa at
            ligula reet est iaculis. Vivamus est mist.
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
