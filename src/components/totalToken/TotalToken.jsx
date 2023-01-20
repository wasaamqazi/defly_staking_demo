// import React from "react";
import "./totalToken.scss";
import React, { useEffect, useState } from "react";
import tierBack from "../../assets/images/tierBack.png";
import { Icon } from "@iconify/react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import StakingDetailModal from "../stakingDetail/StakingDetailModal";
import {
  getTokens,
  StakeToken,
  approveTokens,
  checkApprove,
} from "../../utils/functions";
import axios from "axios";

const TotalToken = () => {
  const [Tokens, setTokens] = useState("");
  const [tireSelected, setTire] = useState("");
  const [customTokens, setCustomTokens] = useState(250);
  const [approve, setApprove] = useState(false);
  const [range, setRange] = useState("");

  const getAllTokens = async () => {
    const allNFTs = await getTokens();
    setTokens(allNFTs);
  };

  const approveCheck = async () => {
    const allApproveToken = await checkApprove();
    setApprove(allApproveToken);
  };

  const Approve = async () => {
    console.log(Tokens);
    if (Tokens == "") {
      alert("You Have 0 Tokens !!!");
    } else {
      await approveTokens(Tokens);
    }
  };

  const Stake = async () => {
    if (tireSelected == "") {
      alert("Please Select Tier Value !!!");
    } else {
      if (tireSelected == 15 && (customTokens < 250 || customTokens > 999)) {
        alert("Select Token Value (250 - 999) !!!");
      } else if (
        tireSelected == 30 &&
        (customTokens < 1000 || customTokens > 2499)
      ) {
        alert("Select Token Value (1000 - 2499) !!!");
      } else if (
        tireSelected == 60 &&
        (customTokens < 2500 || customTokens > 4999)
      ) {
        alert("Select Token Value (2500 - 4999) !!!");
      } else if (tireSelected == 90 && customTokens < 5000) {
        alert("Select Token Value (5000 - more) !!!");
      } else {
        await StakeToken(customTokens, tireSelected);
      }
    }
  };

  useEffect(() => {
    getAllTokens();
    console.log(Tokens);
  }, [Tokens]);
  useEffect(() => {
    if (tireSelected == 15) {
      setRange("(250 - 999)");
      setCustomTokens(250);
    } else if (tireSelected == 30) {
      setRange("(1000 - 2499)");
      setCustomTokens(1000);
    } else if (tireSelected == 60) {
      setRange("(2500 - 4999)");
      setCustomTokens(2500);
    } else if (tireSelected == 90) {
      setRange("( 5000.... )");
      setCustomTokens(5000);
    } else {
      setRange("(250 - 999)");
      setCustomTokens(250);
    }
    console.log(range);
  }, [tireSelected]);
  useEffect(() => {
    approveCheck();
    console.log(approve);
  }, [approve]);

  return (
    <div>
      <section className="total-token">
        <div className="container">
          <div className="token-box">
            <div className="box-heading">
              <h1>total token</h1>
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
            <div className="box-input">
              <div className="bottom">
                <ul>
                  <li>Choose Your Tier / Time Frame For Staking</li>
                </ul>
                <div className="select-stakingTier input-resp ">
                  <select
                    name=""
                    id=""
                    onChange={(e) => {
                      setTire(e.currentTarget.value);
                    }}
                    className="dropdown-menu-select"
                  >
                    <option value="" className="select-menu">
                      Select Tier
                    </option>
                    <option value="15" className="select-menu">
                      Tier 1 ( 15 Days )
                    </option>
                    <option value="30" className="select-menu">
                      Tier 2 ( 30 Days )
                    </option>
                    <option value="60" className="select-menu">
                      Tier 3 ( 60 Days )
                    </option>
                    <option value="90" className="select-menu">
                      Tier 4 ( 90 Days )
                    </option>
                  </select>
                </div>
              </div>
              <div className="top" id="customToken">
                <ul>
                  <li>
                    How Much You Stake Defly Tokens <span> {range} </span>
                  </li>
                </ul>
                <div className="input-resp">
                  <input
                    value={customTokens}
                    type="number"
                    placeholder="Type Here ..."
                    min={250}
                    onChange={(e) => {
                      setCustomTokens(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="stak-btn">
              {approve == Tokens ? (
                <button onClick={Stake}>Stake</button>
              ) : (
                <button onClick={Approve}>Approve</button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TotalToken;
