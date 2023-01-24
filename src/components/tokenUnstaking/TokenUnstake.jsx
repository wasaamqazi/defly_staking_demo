import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
// import React from "react";
import tierBack from "../../assets/images/tierBack.png";
import { Icon } from "@iconify/react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import StakingDetailModal from "../stakingDetail/StakingDetailModal";
import { getAllStakedTokens, unStakeToken } from "../../utils/functions";
import axios from "axios";

const TokenUnstake = () => {
  const [nftCountdown, setNftCountdown] = useState("");
  const [Tokens, setTokens] = useState("");
  const [isStaked, setIsStaked] = useState(false);

  const getStakedTokens = async () => {
    const allTokens = await getAllStakedTokens();
    console.log(allTokens);
    setIsStaked(allTokens.DepositToken);
    setTokens(allTokens.tokens);
    console.log(allTokens.countdownTime);
    setNftCountdown(Number(allTokens.countdownTime));
  };
  const unStaked = async () => {
    await unStakeToken();
  };

  useEffect(() => {
    getStakedTokens();
  }, []);

  useEffect(() => {
    console.log(nftCountdown);
    console.log(Tokens);
  }, [nftCountdown]);
  return (
    <div>
      {isStaked ? (
        <section className="section-unstakeToken">
          <div className="section-header nbg-danger">
            <h1>unstaking</h1>
            <img
              src="\assets\images\headingBackground.png"
              alt=""
              className="img-fluid"
            />
          </div>
          <section className="total-token">
            <div className="container">
              <div className="token-box">
                <div className="box-heading">
                  <h1>token staked</h1>
                  <h1 style={{ color: "white" }}>
                    {Tokens}
                    <img src="\assets\images\defly-logo.svg" alt="" />
                  </h1>
                </div>

                <div
                  className="nft-claim-reward mt-5 d-flex justify-content-center "
                  style={{ color: "white", paddingBottom: "2rem" }}
                >
                  <h1 className="customCountDownClass">
                    {nftCountdown && nftCountdown > 0 ? (
                      <Countdown date={nftCountdown} />
                    ) : (
                      <>00:00:00:00</>
                    )}
                  </h1>
                </div>
                <div class="danger">
                  <p>
                    <strong>NOTE!</strong>
                  </p>
                  <p>
                    {" "}
                    If tokens are unstake before time then 2% penalty on staked
                    tokens and <br></br> No reward of NFTs.
                  </p>
                </div>
                {/* <div
                  className="nft-claim-reward mt-5 d-flex justify-content-center "
                  style={{ color: "white" }}
                >
                  <p1>
                    NOTICE<br></br>If tokens are unstake before time then 2%
                    penalty on staked tokens and <br></br> No reward of NFTs.
                  </p1>
                </div> */}
                <div className="stak-btn">
                  <button onClick={unStaked}>UnStake</button>
                </div>
              </div>
            </div>
          </section>
        </section>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TokenUnstake;
