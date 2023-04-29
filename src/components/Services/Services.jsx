import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Card from "../Card/Card";

const Services = () => {
  return (
    <div className="s-wrapper">
      <div className="s-left">
        <div className="s-name">
          <span>My Awesome</span>
          <span>Service</span>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus quidem quia placeat ea aut saepe delectus ex voluptas
            aliquid eveniet? Accusamus facilis temporibus dolores vitae sapiente
            libero consectetur. Illo, numquam.
          </span>
        </div>
        <button className="button s-button">Download CV</button>
      </div>
      <div className="s-right cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading="Design"
            detail="Figma, Sketch,PhotoShop"
          />
        </div>
        <div style={{ top: "14rem", left: "-4rem" }}>
          <Card
            emoji={HeartEmoji}
            heading="Design"
            detail="Figma, Sketch,PhotoShop"
          />
        </div>
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={HeartEmoji}
            heading="Design"
            detail="Figma, Sketch,PhotoShop"
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
