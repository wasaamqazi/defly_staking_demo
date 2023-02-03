import React from "react";
import "./nftTier.scss";
import tierBack from "../../assets/images/tierBack.png";

const TokenTier = () => {
  return (
    <div>
      <section className="tokenTier">
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
              Staking $DeFly tokens in four tiers offers token holders a way to
              earn rewards while supporting the network's security. Each tier
              has different rewards, with higher tiers providing greater
              benefits. However, unstaking before the specified time will result
              in a 2% penalty on the tokens staked and no NFT will be given as a
              reward. This penalty is designed to discourage premature unstaking
              and maintain stability in the staking system.
            </p>
          </div>

          <ul className="nav nav-tabs tier-parentTab" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#tier1"
                type="button"
                role="tab"
                aria-controls="tier1"
                aria-selected="true"
              >
                <img
                  src={tierBack}
                  alt=""
                  className="tierback"

                  //   className={isActive ? "tierback" : "tierBackRotate"}
                />
              </button>
              <p
                data-bs-target="#tier1"
                data-bs-toggle="tab"
                // onClick={rotateback}
              >
                tier 1
              </p>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#tier2"
                type="button"
                role="tab"
                aria-controls="tier2"
                aria-selected="false"
              >
                <img src={tierBack} alt="" className="tierback img-fluid" />
              </button>
              <p data-bs-target="#tier2" data-bs-toggle="tab">
                Tier 2
              </p>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#tier3"
                type="button"
                role="tab"
                aria-controls="tier3"
                aria-selected="false"
              >
                <img src={tierBack} alt="" className="tierback img-fluid" />
              </button>
              <p data-bs-target="#tier3" data-bs-toggle="tab">
                tier 3
              </p>
            </li>

            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="disabled-tab"
                data-bs-toggle="tab"
                data-bs-target="#tier4"
                type="button"
                role="tab"
                aria-controls="tier4"
                aria-selected="false"
              >
                <img src={tierBack} alt="" className="tierback img-fluid" />
              </button>
              <p data-bs-target="#tier4" data-bs-toggle="tab">
                tier 4
              </p>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="tier1"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabIndex="0"
            >
              <p className="tier-tabContent">
                Tier1 : You Can Stake Your DEFLY TOKENS for 15 Days and Get 1
                NFT
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="tier2"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabIndex="0"
            >
              <p className="tier-tabContent">
                Tier2 : You Can Stake Your DEFLY TOKENS for 30 Days and Get 2
                NFT
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="tier3"
              role="tabpanel"
              aria-labelledby="contact-tab"
              tabIndex="0"
            >
              <p className="tier-tabContent">
                Tier3 : You Can Stake Your DEFLY TOKENS for 60 Days and Get 3
                NFT
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="tier4"
              role="tabpanel"
              aria-labelledby="disabled-tab"
              tabIndex="0"
            >
              <p className="tier-tabContent">
                Tier4 : You Can Stake Your DEFLY TOKENS for 90 Days and Get 4
                NFT
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TokenTier;
