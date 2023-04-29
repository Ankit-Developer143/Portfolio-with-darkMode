import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import Linkedin from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { motion } from "framer-motion";


const Intro = () => {

  const transition = {duration: 2, type:'spring'}
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Ankit Singh</span>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam sit
            aut autem suscipit, aliquid sunt quidem nisi laudantium eius ipsa,
            at eveniet assumenda cum dolorum? Reiciendis quod libero debitis
            molestiae.
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <img src={Github} alt="github" />
          <img src={Linkedin} alt="github" />
          <img src={Instagram} alt="github" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="github" />
        <img src={Vector2} alt="github" />
        <img src={boy} alt="github" />
        <img style={{left:'-10%',}} src={glassesimoji} alt="github" />
        <div style={{top:'-4%', left:'68%'}}>
            <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{top:'18rem', left:'0rem'}}>
            <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
        </div>
        <div className="blur" style={{background:"rgb(238 210 255"}}></div>
        <div className="blur" style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
      </div>
    </div>
  );
};

export default Intro;
