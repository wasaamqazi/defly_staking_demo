import React from "react";
import NavBar from "../navbar/NavBar";
import "./hero.scss";
const Hero = () => {
  return (
    <div>
      <section className="hero-section">
        <NavBar />
        <div className="hero-tagline">
          <h1>DEFLY BALL</h1>
          <h1>STAKING</h1>
        </div>
        {/* <img src="\assets\images\herogif.png" alt="" className="img-fluid" /> */}
        <div className="hero-gifs">
          <video className="stakingNft" playsInline autoPlay muted loop>
            <source src="\assets\video\landing.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </div>
  );
};

export default Hero;
