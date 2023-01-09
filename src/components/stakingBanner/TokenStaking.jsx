import React from "react";
import NavBar from "../navbar/NavBar";
import "./stakingBanner.scss";

import landing from "../../assets/video/landing.mp4";
const TokenStaking = () => {
  return (
    <div>
      <section className="token-staking-banner">
        <NavBar />
        <div className="stakingBanner-content">
          <div className="tag-line">
            <h1>
              token <span>staking</span>
              <h2>with 4 tier</h2>
            </h1>
          </div>
        </div>

        <video
          className="stakingNft"
          id="slider-desk"
          playsInline
          autoPlay
          muted
          loop
        >
          <source src="\assets\video\fire.mp4" type="video/mp4"></source>
        </video>
      </section>
    </div>
  );
};

export default TokenStaking;
