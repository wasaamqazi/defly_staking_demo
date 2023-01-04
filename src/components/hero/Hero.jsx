import React from "react";
import NavBar from "../navbar/NavBar";
import "./hero.scss";
const Hero = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-tagline">
          <h1>DEFLY BALL</h1>
          <h1>STAKING</h1>
        </div>
        <div className="hero-gifs">
          <img src="\assets\images\herogif.png" alt="" className="img-fluid" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
