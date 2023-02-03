import React, { useEffect, useState } from "react";
import NavBar from "../navbar/NavBar";
import "./hero.scss";
const HeroHome = () => {
 
 


  return (
    <div>
      <section className="hero-section">
        <NavBar />

        {/* coming soon time */}
      

        <div className="hero-tagline">
          <h1>DEFLY BALL</h1>
          <h1>STAKING</h1>
       
        </div>
        <div className="hero-gifs">
          <img
            src="\assets\images\herogif.png"
            alt=""
            className="img-fluid landing-back"
          />
          <video className="stakingNft" playsInline autoPlay muted loop>
            <source src="\assets\video\landing.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </div>
  );
};

export default HeroHome;
