import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Work With</span>
        <span>Srishti</span>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            heading={"Content Writer"}
            detail={"With 2 years of experience, I've worked with 10+ individuals and startups, crafting quality content that simplifies complex concepts. Let's collaborate to create engaging content that communicates your unique value proposition."}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            heading={"Frontend Developer"}
            detail={"With expertise in HTML, CSS, JavaScript, and React, I've honed my skills in crafting seamless user experiences through creating visually appealing and interactive user interfaces."}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            heading={"Blockchain Developer"}
            detail={
              "I'm expanding my expertise in blockchain domain"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;



