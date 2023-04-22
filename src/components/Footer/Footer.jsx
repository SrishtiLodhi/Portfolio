import React from "react";
import "./Footer.css";
import Wave1 from "../../img/wave1.png";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave1} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>SrishtiLodhi38@gmail.com</span>
        <div className="f-icons">
           <a href="https://github.com/SrishtiLodhi" target="_blank"  rel="noopener noreferrer">
           <Github color="white" size={"3rem"} />
           </a>
           <a href="https://www.linkedin.com/in/srishti-lodhi-b488b6222" target="_blank" rel="noopener noreferrer">
           <LinkedIn color="white" size={"3rem"} />
         </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
