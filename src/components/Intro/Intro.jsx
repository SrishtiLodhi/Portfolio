import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import girl from "../../img/girl.png";
import LinkedIn from "../../img/linkedin.png";
import Github from "../../img/github.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">

      {/* left name side */}
      <div className="i-left">
        <div className="i-name">

          {/* change darkmode */}
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I'm Srishti</span>
          <span>Ignite your Business by crafting incredible user experience!</span>
          <span>
          As a passionate frontend developer, I specialize in creating visually appealing interfaces that captivate users, optimize performance, and drive conversions. Let's collaborate to bring your digital vision to life! Contact me and let's create a website that leaves a lasting impression. 
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Let's work</button>
        </Link>
        <div className="i-icons">
          <a href="https://github.com/SrishtiLodhi" target="_blank"  rel="noopener noreferrer">
          <img src={Github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/srishti-lodhi-b488b6222" target="_blank" rel="noopener noreferrer">
         <img src={LinkedIn} alt="LinkedIn" />
         </a>
        </div>
      </div>

      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={girl} alt="" />

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
