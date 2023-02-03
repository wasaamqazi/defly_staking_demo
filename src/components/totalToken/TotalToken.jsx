// import React from "react";
import "./totalToken.scss";
import React, { useEffect, useState } from "react";
import tierBack from "../../assets/images/tierBack.png";
import Erc20_contractABI from "../../abi/ERC20.json";
import { Icon } from "@iconify/react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Web3 from "web3/dist/web3.min.js";
import Favorite from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import StakingDetailModal from "../stakingDetail/StakingDetailModal";
import {
  getTokens,
  StakeToken,
  checkApprove,
  getAllStakedTokens,
} from "../../utils/functions";
import axios from "axios";
import { toast } from "react-toastify";
import defly_Token_Staking_ABI from "../../abi/TokenStaking.json";
import Sliders from "@mui/material/Slider";

const TotalToken = () => {
  const [Tokens, setTokens] = useState("0");
  const [tireSelected, setTire] = useState("");
  const [customTokens, setCustomTokens] = useState(250);
  const [approve, setApprove] = useState(false);
  const [app, setApp] = useState(false);
  const [range, setRange] = useState("");
  const [StakerInfo, setStakerInfo] = useState("");
  const [loadingState, setLoadingState] = useState(false);

  const VITE_ERC_20s = import.meta.env.VITE_ERC_20;
  const VITE_DEFLY_Token_STAKING = import.meta.env.VITE_DEFLY_Token_STAKING;
  const web3 = new Web3(window.ethereum);

  const handleSliderChange = (event, value) => {
    setCustomTokens(value);
  };

  const getAllTokens = async () => {
    const allTokens = await getTokens();

    setTokens(allTokens);
  };
  const stakerInfo = async () => {
    const allTokens = await getAllStakedTokens();
    setStakerInfo(allTokens.DepositToken);
  };

  const approveCheck = async () => {
    const allApproveToken = await checkApprove();
    setApprove(allApproveToken);
  };

  const Approve = async () => {
    setLoadingState(true);
    window.defly_ERC20_contract = await new web3.eth.Contract(
      Erc20_contractABI,
      VITE_ERC_20s
    );
    if (Tokens == "") {
      toast("You Have 0 Tokens !!!");
    } else {
      const tokensCustom = web3.utils.toWei(String(Tokens), "ether");
      window.defly_ERC20_contract.methods
        .approve(VITE_DEFLY_Token_STAKING, tokensCustom)
        .send({ from: window.ethereum.selectedAddress })
        .on("transactionHash", async (hash) => {
          for (let index = 0; index > -1; index++) {
            var receipt = await web3.eth.getTransactionReceipt(hash);
            if (receipt != null) {
              setApp(true);
              setLoadingState(false);
              break;
            }
            console.log("hello");
          }
        })
        .on("error", (error) => {
          toast("Something went wrong while Approving");
          setApp(false);
          setLoadingState(false);
        });
      // await approveTokens(Tokens);
      StakerInfo;
    }
  };

  const Stake = async () => {
    if (tireSelected == "") {
      toast("Please Select Tier Value !!!");
    } else {
      if (tireSelected == 15 && (customTokens < 250 || customTokens > 999)) {
        toast("Select Token Value (250 - 999) !!!");
      } else if (
        tireSelected == 30 &&
        (customTokens < 1000 || customTokens > 2499)
      ) {
        toast("Select Token Value (1000 - 2499) !!!");
      } else if (
        tireSelected == 60 &&
        (customTokens < 2500 || customTokens > 4999)
      ) {
        toast("Select Token Value (2500 - 4999) !!!");
      } else if (tireSelected == 90 && customTokens < 5000) {
        toast("Select Token Value (5000 - more) !!!");
      } else {
        // await StakeToken(customTokens, tireSelected);
        setLoadingState(true);

        window.defly_Token_contract = await new web3.eth.Contract(
          defly_Token_Staking_ABI,
          VITE_DEFLY_Token_STAKING
        );

        const tokensCustom = web3.utils.toWei(String(customTokens), "ether");

        window.defly_Token_contract.methods
          .deposit(tokensCustom, tireSelected)
          .send({ from: window.ethereum.selectedAddress })
          .on("transactionHash", async (hash) => {
            for (let index = 0; index > -1; index++) {
              var receipt = await web3.eth.getTransactionReceipt(hash);
              if (receipt != null) {
                window.location.reload(false);
                break;
              }
              console.log("hello");
            }
          })
          .on("error", (error) => {
            toast("Something went wrong while Approving");
            setLoadingState(false);
          });
      }
    }
  };

  useEffect(() => {
    getAllTokens();
    stakerInfo();
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
      setRange("( 5000+)");
      setCustomTokens(5000);
    } else {
      setRange("(250 - 999)");
      setCustomTokens(250);
    }
  }, [tireSelected]);
  useEffect(() => {
    approveCheck();
  }, [app]);

  return (
    <div>
      <section className="total-token">
        <div className="container">
          <div className="token-box">
            <div className="box-heading">
              <h1>total token</h1>
              <h1 style={{ color: "white" }}>
                {Number(Tokens)?.toFixed(2)}
                <img src="\assets\images\defly-logo.svg" alt="" />
              </h1>
            </div>

            {StakerInfo ? (
              <div
                className="nft-claim-reward mt-5 d-flex justify-content-center "
                style={{
                  color: "white",
                  letterSpacing: "0.6px",
                  fontFamily: "Anton",
                  fontSize: "x-large",
                }}
              >
                <p>YOU ALREADY STAKED TOKENS !!!</p>
              </div>
            ) : Tokens > 250 ? (
              <div className="box-input">
                <div className="bottom">
                  <ul>
                    <li className="customFont">
                      Choose Your Tier / Time Frame For Staking
                    </li>
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
                    <li className="customFont">
                      How Much You Stake Defly Tokens{" "}
                      <span className="customFont"> {range} </span>
                    </li>
                  </ul>
                  <div className="input-resp">
                    {tireSelected == 15 ? (
                      <>
                        {/* <input type="range"   min={250} max={999} onChange={(e)=>{setCustomTokens(e.target.value);}} /> */}
                        <Sliders
                          min={250}
                          max={999}
                          className="tireselectedrange"
                          onChange={handleSliderChange}
                          aria-labelledby="input-slider"
                        />
                        <p style={{ color: "white" }}>{customTokens}</p>
                      </>
                    ) : tireSelected == 30 ? (
                      <>
                        {/* <input type="range"   min={1000} max={2499} onChange={(e)=>{setCustomTokens(e.target.value);}} /> */}
                        <Sliders
                          min={1000}
                          max={2499}
                          className="tireselectedrange"
                          onChange={handleSliderChange}
                          aria-labelledby="input-slider"
                        />
                        <p style={{ color: "white" }}>{customTokens}</p>
                      </>
                    ) : tireSelected == 60 ? (
                      <>
                        {/* <input type="range"   min={2500} max={4999} onChange={(e)=>{setCustomTokens(e.target.value);}} /> */}
                        <Sliders
                          min={2500}
                          max={4999}
                          className="tireselectedrange"
                          onChange={handleSliderChange}
                          aria-labelledby="input-slider"
                        />
                        <p style={{ color: "white" }}>{customTokens}</p>
                      </>
                    ) : tireSelected == 90 ? (
                      <>
                        {/* <input type="range"   min={5000} max={10000}  onChange={(e)=>{setCustomTokens(e.target.value);}} /> */}
                        <Sliders
                          min={5000}
                          max={10000}
                          className="tireselectedrange"
                          onChange={handleSliderChange}
                          aria-labelledby="input-slider"
                        />
                        <p style={{ color: "white" }}>{customTokens}</p>
                      </>
                    ) : (
                      <></>
                    )}

                    {/* <input
                      value={customTokens}
                      type="number"
                      placeholder="Type Here ..."
                      min={250}
                      onChange={(e) => {
                        setCustomTokens(e.target.value);
                      }}
                    /> */}
                  </div>
                </div>

                {loadingState ? (
                  <div
                    className="loader-wrao"
                    style={{ visibility: "visible" }}
                  >
                    <div className="loader"></div>
                  </div>
                ) : (
                  <div className="stak-btn">
                    {approve == Tokens ? (
                      <button onClick={Stake}>Stake</button>
                    ) : tireSelected == null || tireSelected == "" ? (
                      <></>
                    ) : tireSelected == 15 && Tokens >= 250 ? (
                      <button onClick={Approve}>Approve</button>
                    ) : tireSelected == 30 && Tokens >= 1000 ? (
                      <button onClick={Approve}>Approve</button>
                    ) : tireSelected == 60 && Tokens >= 2500 ? (
                      <button onClick={Approve}>Approve</button>
                    ) : tireSelected == 90 && Tokens >= 5000 ? (
                      <button onClick={Approve}>Approve</button>
                    ) : (
                      <></>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TotalToken;
