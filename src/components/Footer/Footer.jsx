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
          <LinkedIn color="white" size={"3rem"} />
          <Github color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
