import React from "react";
import "./stakingtab.scss";
import { useNavigate } from "react-router-dom";
const StakingTab = () => {
  const navigate = useNavigate();
  const navTokenStaking = () => {
    navigate("/navigateTokenStaking");
  };
  const navNFTStaking = () => {
    navigate("/navNFTStaking");
  };
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
              Put your idle assets to work by staking DeFly Ball’s dog NFTs and
              $DeFly tokens to earn massive rewards in your wallets. Lock up
              your favorite dog NFTs or $DeFly tokens for a certain period of
              time in 4 tiers to earn rewards with more privileges. Staking NFTs
              in the Defly ball game is the newest way to elevate your gaming
              experience while also earning rewards
            </p>
          </div>
          <div className="stak-tabs">
            <div className="left">
              <div className="blob" onClick={navNFTStaking}>
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
              <div className="blob" onClick={navTokenStaking}>
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
              Staking NFTs with lots of perks has never been easier before.
              Stake your $Defly tokens or dog NFTs within the defined days of
              each tier and earn exclusive rewards with additional perks. DeFly
              Ball’s staking has undoubtedly unlocked the new use cases of its
              digital assets for its users that goes beyond just collecting
              them.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StakingTab;
