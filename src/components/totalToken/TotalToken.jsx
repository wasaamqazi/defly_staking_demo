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
import { getTokens, StakeToken, approveTokens } from "../../utils/functions";
import axios from "axios"

const TotalToken = () => {


  const [Tokens, setTokens] = useState("")
  const [tireSelected, setTire] = useState("");
  const [customTokens, setCustomTokens] = useState(250)

  const getAllTokens = async () => {
    const allNFTs = await getTokens()
    setTokens(allNFTs)

  }

  const Approve = async () => {
    await approveTokens(customTokens)
  }

  const Stake = async () => {
    console.log(customTokens);
    console.log(tireSelected);
    await StakeToken(customTokens, tireSelected)
  }

  useEffect(() => {
    getAllTokens()
    console.log(Tokens);
  }, [Tokens])
  useEffect(() => {
    console.log(tireSelected)
    console.log(customTokens)
  }, [Tokens])


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
              <div className="top" id="customToken">
                <ul>
                  <li>How Much You Stake Defly Tokens</li>
                </ul>
                <div className="input-resp">
                  <input value={customTokens} type="number" placeholder="Type Here ..." min={250} onChange={e => {
                    setCustomTokens(e.target.value)
                  }} />
                </div>
              </div>
              <div className="bottom">
                <ul>
                  <li>Choose Your Tier / Time Frame For Staking</li>
                </ul>
                <div className="select-stakingTier input-resp ">
                  <div className="dropdown">
                    {/* <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Select Tier
                    </button>
               

                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item"> Tier 1 ( 15 Days )</a>
                      </li>
                      <li>
                        <a className="dropdown-item"> Tier 2 ( 30 Days )</a>
                      </li>

                      <li>
                        <a className="dropdown-item"> Tier 3 (60 Days )</a>
                      </li>
                      <li>
                        <a className="dropdown-item"> Tier 3 (90 Days )</a>
                      </li>
                    </ul> */}
                    <select name="" id="" onChange={(e) => {
                      setTire(e.currentTarget.value)

                    }}>

                      <option value="">Select Tier</option>
                      <option value="15">Tier 1 ( 15 Days )</option>
                      <option value="30">Tier 2 ( 30 Days )</option>
                      <option value="60">Tier 3 ( 60 Days )</option>
                      <option value="90">Tier 4 ( 90 Days )</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="stak-btn">
              <button onClick={Approve}>Approve</button>
              <button onClick={Stake}>Stake</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TotalToken;
