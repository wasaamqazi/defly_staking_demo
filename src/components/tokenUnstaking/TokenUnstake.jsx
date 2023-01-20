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
                  <h1>
                    {Tokens}
                    <img src="\assets\images\defly-logo.svg" alt="" />
                  </h1>
                </div>
                {/* <div>
              <ul className="unstyled centered">
                <li className="listStyle">
                  <input
                    className="styled-checkbox"
                    id="styled-checkbox-1"
                    value="15%"
                    type="radio"
                    name="token"
                  />
                  <label for="styled-checkbox-1">15 %</label>
                </li>
                <li className="listStyle">
                  <input
                    className="styled-checkbox"
                    id="styled-checkbox-2"
                    value="value2"
                    type="radio"
                    name="token"
                  />
                  <label for="styled-checkbox-2">25 %</label>
                </li>
                <li>
                  <input
                    className="styled-checkbox"
                    id="styled-checkbox-3"
                    value="value3"
                    type="radio"
                    name="token"
                  />
                  <label for="styled-checkbox-3">50%</label>
                </li>
                <li>
                  <input
                    className="styled-checkbox"
                    id="styled-checkbox-4"
                    type="radio"
                    value="value4"
                    name="token"
                  />
                  <label for="styled-checkbox-4">75 %</label>
                </li>

                <li>
                  <input
                    className="styled-checkbox"
                    id="styled-checkbox-5"
                    value="value5"
                    type="radio"
                    name="token"
                  />
                  <label for="styled-checkbox-5">100 %</label>
                </li>

                <li>
                  <input
                    className="styled-checkbox"
                    id="styled-checkbox-6"
                    value="custom"
                    type="radio"
                    name="token"
                  />
                  <label for="styled-checkbox-6">Custom</label>
                </li>
              </ul>
            </div> */}
                <div
                  className="nft-claim-reward mt-5 d-flex justify-content-center "
                  style={{ color: "white" }}
                >
                  <h1>
                    {nftCountdown && nftCountdown > 0 ? (
                      <Countdown date={nftCountdown} />
                    ) : (
                      <>00:00:00:00</>
                    )}
                  </h1>
                </div>
                <div className="stak-btn">
                  <button onClick={unStaked}>Unstake</button>
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
