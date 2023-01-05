import React from "react";
import NavBar from "../navbar/NavBar";
import "./stakingBanner.scss";
const StakingBanner = () => {
  return (
    <div>
      <section className="nft-staking-banner">
        <NavBar />
        <div className="stakingBanner-content">
          <div className="tag-line">
            <h1>
              nft <span>staking</span>
            </h1>
            <h2>with 4 tier</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StakingBanner;
