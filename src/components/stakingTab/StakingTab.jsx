import React from "react";
import "./stakingtab.scss";
const StakingTab = () => {
  return (
    <div>
      <section className="staking-tab">
        <div className="container">
          <div className="section-header">
            <h1>staking</h1>
            <img
              src="\assets\images\headingBackground.png"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="staking-tab-detail1">
            <p>
              Lorem ipsum dolor sit amet consectetur. Feugiat nisl diam turpis
              sed nec tellus egestas sed. Tincidunt molestie sed morbi lacus
              quis at cras pharetra duis. Morbi pellentesque risus sociis ipsum
              nam id porttitor nunc donec. Commodo mus rhoncus nunc consequat.
              Volutpat morbi sollicitudin sapien vitae at et eleifend semper. Eu
              quis malesuada aliquet tincidunt fames dolor.{" "}
            </p>
          </div>
          <div className="stak-tabs">
            <div className="left">
              <div className="blob">
                <img
                  src="\assets\images\stakingBlog.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="stak-circle">
                <img src="\assets\images\nftStaking.png" alt="" />
              </div>
              <div className="stak-tab-tagline">
                <h1>NFT STAKING</h1>
              </div>
            </div>
            <div className="right">
              <div className="blob">
                <img
                  src="\assets\images\stakingBlog.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="stak-circle">
                <img src="\assets\images\nftStaking.png" alt="" />
              </div>
              <div className="stak-tab-tagline">
                <h1>Token STAKING</h1>
              </div>
            </div>
          </div>
          <div className="staking-tab-detail1 tab-detail2">
            <p>
              Lorem ipsum dolor sit amet consectetur. Feugiat nisl diam turpis
              sed nec tellus egestas sed. Tincidunt molestie sed morbi lacus
              quis at cras pharetra duis. Morbi pellentesque risus sociis ipsum
              nam id porttitor nunc donec. Commodo mus rhoncus nunc consequat.
              Volutpat morbi sollicitudin sapien vitae at et eleifend semper. Eu
              quis malesuada aliquet tincidunt fames dolor.{" "}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StakingTab;
