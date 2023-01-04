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
                  className="img-fluid blob-img"
                />
                <img
                  src="\assets\images\nftStaking.png"
                  alt=""
                  className="img-fluid img-circle"
                />
                <h1 className="stak-tab-tagline">NFT STAKING</h1>
              </div>
            </div>
            <div className="left">
              <div className="blob">
                <img
                  src="\assets\images\stakingBlog.png"
                  alt=""
                  className="img-fluid blob-img"
                />
                <img
                  src="\assets\images\nftStaking.png"
                  alt=""
                  className="img-fluid img-circle"
                />
                <h1 className="stak-tab-tagline">token STAKING</h1>
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
