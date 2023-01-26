import React, { useEffect, useState } from "react";
import "./nftTier.scss";
import tierBack from "../../assets/images/tierBack.png";
import { Icon } from "@iconify/react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import defly_mint_ERC721_contractABI from "../../abi/MintERC721.json";
import Defly_Nft_Staking from "../../abi/deflyNFTStaking.json";
import Favorite from "@mui/icons-material/Favorite";
import { Navigate, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Web3 from "web3/dist/web3.min.js";
import Button from "react-bootstrap/Button";
import StakingDetailModal from "../stakingDetail/StakingDetailModal";
import {
  Approve,
  ApproveOld,
  getMyNFTsDataOld,
  getNFTs,
  stakerInfo,
} from "../../utils/action";
import axios from "axios";
import "./stakingDetail.scss";
import NavBar from "../navbar/NavBar";
import { toast } from "react-toastify";
import defly_mint_old from "../../abi/deflyballnft-abiOLD.json";


const NFTtier = () => {
  const [show, setShow] = useState(false);
  const [NFTdetails, setNFTdetails] = useState([]);
  const [allDATA, setALLDATA] = useState([]);
  const [currentItem, setCurrentItem] = useState({});
  const [tireSelected, setTire] = useState("");
  const [ApproveCheck, setApproveCheck] = useState(false);
  const [Staker, setStaker] = useState("");
  const [loadingState, setLoadingState] = useState(false);
  const [loadingState1, setLoadingState1] = useState(false);
  // const [loadingState2, setLoadingState2] = useState(false);
  const navigate = useNavigate()


  const VITE_DEFLY_NFT_STAKING = import.meta.env.VITE_DEFLY_NFT_STAKING;
  const VITE_DEFLY_MINT_721 = import.meta.env.VITE_DEFLY_MINT_721;
  const VITE_MINT_OLD = import.meta.env.VITE_MINT_OLD_ADDRESS;


  const web3 = new Web3(window.ethereum);

  const handleClose = () => setShow(false);
  const handleShow = async (item) => {


    if (item.type == "new") {
      // checkApprove();

      const appCheck = await Approve(item.tokenId);

      setApproveCheck(appCheck);


      console.log("new approve check");
    } else if (item.type == "old") {
      // checkApproveOld();

      const appCheck = await ApproveOld(item.tokenId);

      setApproveCheck(appCheck);

      console.log("old approve check");

    }
    setShow(true);

    setCurrentItem(item);

    navigate("#NFTtiers")

  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const getAllNFTs = async () => {

    setLoadingState(true)

    const allNFTs = await getNFTs();

    var temp = [];
    allNFTs.map((item, index) => {

      axios.get(item.tokenURI).then((res) => {


        temp.push({
          description: res.data.description,
          id: res.data.id,
          image: res.data.image,
          image_1: res.data.image_1,
          name: res.data.name,
          tokenId: item.tokenid,
          attributes: res.data.attributes,
          type: "new"
        });
        setNFTdetails(temp);
      });
    });
  };
  const stakerDet = async () => {
    const staker = await stakerInfo();

    setStaker(staker.DepositToken);
  };

  const mergeArray = async () => {
    if (NFTdetails) {
      const oldNFTS = await getMyNFTsDataOld();

      let nftTempArr = [...NFTdetails, ...oldNFTS.nftData];


      setALLDATA(nftTempArr);
      setLoadingState(false)
    }
  };

  const stake = async () => {

    if (tireSelected) {
      window.defly_nft_staking = await new web3.eth.Contract(
        Defly_Nft_Staking,
        VITE_DEFLY_NFT_STAKING
      );

      if (currentItem.type == "new") {
        console.log("new");
        setLoadingState1(true)
        await window.ethereum.enable();
        window.defly_nft_staking.methods.deposit(currentItem.tokenId, tireSelected, window.ethereum.selectedAddress, VITE_DEFLY_MINT_721)
          .send({ from: window.ethereum.selectedAddress })
          .on("transactionHash", async (hash) => {

            for (let index = 0; index > -1; index++) {
              var receipt = await web3.eth.getTransactionReceipt(hash)
              if (receipt != null) {
                window.location.reload(false)
                // setLoadingState1(false)
                break;
              }
              console.log("hello");

            }
          })
          .on("error", (error) => {
            toast("Something went wrong while Approving");
            setLoadingState1(false)
          });
      } else if (currentItem.type == "old") {
        console.log("old");


        setLoadingState1(true)

        // defly staking contract 

        await window.ethereum.enable();
        window.defly_nft_staking.methods.deposit(currentItem.tokenId, tireSelected, window.ethereum.selectedAddress, VITE_MINT_OLD)
          .send({ from: window.ethereum.selectedAddress })
          .on("transactionHash", async (hash) => {

            for (let index = 0; index > -1; index++) {
              var receipt = await web3.eth.getTransactionReceipt(hash)
              if (receipt != null) {
                window.location.reload(false)
                // setLoadingState1(false)
                break;
              }
              console.log("hello");

            }
          })
          .on("error", (error) => {
            toast("Something went wrong while Approving");
            setLoadingState1(false)
          });

      }
      // await deposit(currentItem.tokenId, tireSelected);
    } else {
      toast("please select tier");
    }

  };

  const approveNFT = async () => {
    if (currentItem.type == "new") {
      setLoadingState1(true)



      window.defly_mint_contract = await new web3.eth.Contract(
        defly_mint_ERC721_contractABI,
        VITE_DEFLY_MINT_721
      );

      window.defly_mint_contract.methods
        .approve(VITE_DEFLY_NFT_STAKING, currentItem.tokenId)
        .send({ from: window.ethereum.selectedAddress })
        .on("transactionHash", async (hash) => {

          for (let index = 0; index > -1; index++) {
            var receipt = await web3.eth.getTransactionReceipt(hash);
            if (receipt != null) {
              checkApprove();
              setLoadingState1(false)
              break;
            }
            console.log("hello");
          }
        })
        .on("error", (error) => {
          toast("Something went wrong while Approving");
          setLoadingState1(false)
        });
    }
    else if (currentItem.type == "old") {

      setLoadingState1(true)


      // defly mint contract old
      window.defly_nft_contract_old = await new web3.eth.Contract(
        defly_mint_old,
        VITE_MINT_OLD
      );

      window.defly_nft_contract_old.methods
        .approve(VITE_DEFLY_NFT_STAKING, currentItem.tokenId)
        .send({ from: window.ethereum.selectedAddress })
        .on("transactionHash", async (hash) => {

          for (let index = 0; index > -1; index++) {
            var receipt = await web3.eth.getTransactionReceipt(hash);
            if (receipt != null) {
              checkApproveOld();
              setLoadingState1(false)
              break;
            }
            console.log("hello");
          }
        })
        .on("error", (error) => {
          toast("Something went wrong while Approving");
          setLoadingState1(false)
        });

    }



  };
  const checkApprove = async () => {
    const appCheck = await Approve(currentItem.tokenId);

    setApproveCheck(appCheck);
  };
  const checkApproveOld = async () => {
    const appCheck = await ApproveOld(currentItem.tokenId);

    setApproveCheck(appCheck);
  };

  useEffect(() => {
    getAllNFTs();
  }, []);

  useEffect(() => {
    stakerDet();
  }, []);

  useEffect(() => {
    mergeArray();
  }, [NFTdetails]);



  return (
    <div className="nfttier" id="NFTtiers">


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
          <video className="stakingNft" playsInline autoPlay muted loop>
            <source src="\assets\video\fire.mp4" type="video/mp4" />
          </video>
        </section>

        <section className="nft-tier">
          <div className="container">
            <div className="section-header">
              <h1>staking</h1>
              <img
                src="\assets\images\headingBackground.png"
                alt=""
                className="img-fluid"
              />
            </div>
            {/* <div className="staking-tab-detail1">
            <p>
              Lorem ipsum dolor sit amet consectetur. Feugiat nisl diam turpis
              sed nec tellus egestas sed. Tincidunt molestie sed morbi lacus
              quis at cras pharetra duis. Morbi pellentesque risus sociis ipsum
              nam id porttitor nunc donec. Commodo mus rhoncus nunc consequat.
              Volutpat morbi sollicitudin sapien vitae at et eleifend semper. Eu
              quis malesuada aliquet dolor.
            </p>
          </div> */}
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

            {/* this is tab1 tier1 */}


            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="tier1"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabIndex="0"
              >
                <p className="tier-tabContent">
                  Tier1 : You Can Stake Your DEFLY BALL NFT for 15 Days
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
                  Tier2 : You Can Stake Your DEFLY BALL NFT for 30 Days
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
                  Tier3 : You Can Stake Your DEFLY BALL NFT for 60 Days
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
                  Tier4 : You Can Stake Your DEFLY BALL NFT for 90 Days
                </p>
              </div>
            </div>



            {loadingState ? (
              <div className="loader-wrao" style={{ visibility: "visible" }}>
                <div className="loader"></div>
              </div>
            ) : (
              <div className="nftStaking-cards">
                {allDATA.map((item, index) => {
                  return (
                    <div className="staking-card" key={index}>
                      <div className="background">
                        <img
                          src="\assets\images\cardBack.png"
                          alt=""
                          className="backImg img-fluid"
                        />
                      </div>
                      <div className="card-plate">
                        <div className="card-gold-plate">
                          <img
                            src="\assets\images\cardSheild.png"
                            alt=""
                            className="img-fluid"
                          />

                          <div className="ourNft">
                            <img src={item.image} alt="" srcSet="" />
                          </div>

                          <div className="card-name">
                            <p>{item.name} </p>
                          </div>
                          {Staker ? (

                            <div className="creator-details">
                              <div className="left">
                                <button
                                  className="stake-card already-staked"

                                >
                                  ALREADY STAKED !!!
                                </button>
                              </div>
                            </div>


                          ) : (
                            <div className="creator-details">
                              <div className="left">
                                <button
                                  className="stake-card"
                                  onClick={() => handleShow(item)}
                                >
                                  stake
                                </button>
                              </div>

                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>



        </section>

      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="xl"
        className="staking-modal"
        centered
      >
        <Modal.Body>

          {loadingState1 ? (
            <div className="loader-wrao" style={{ visibility: "visible" }}>
              <div className="loader"></div>
            </div>
          )
            :
            <>
              <div>
                <div className="staking-modal">
                  <div className="stakingDetail-card show-lazmi">
                    <div className="left-side">
                      <div
                        className="responsive-rotation"
                        style={{ position: "relative" }}
                      >
                        <div className="nftStaking-cards">
                          <div className="staking-card">
                            <div className="background">
                              <img
                                src="\assets\images\cardBack.png"
                                alt=""
                                className="backImg img-fluid"
                              />
                            </div>
                            <div className="card-plate">
                              <div className="card-gold-plate">
                                <img
                                  src="\assets\images\cardSheild.png"
                                  alt=""
                                  className="img-fluid"
                                />

                                {/* <div className="fav d-flex align-items-center">
                                <Checkbox
                                  className="favCheck"
                                  {...label}
                                  icon={<FavoriteBorder />}
                                  checkedIcon={
                                    <Favorite
                                      sx={{
                                        color: "white",
                                        "&.Mui-checked": {
                                          border: "white",
                                        },
                                      }}
                                    />
                                  }
                                />
                                <p>100</p>
                              </div> */}

                                <div className="ourNft">
                                  <img src={currentItem.image} alt="" srcSet="" />
                                </div>

                                <div className="card-name">
                                  <p>{currentItem.name}</p>
                                </div>

                                <div className="creator-details">
                                  <div className="left">
                                    <div className="creator-avatar">
                                      <img
                                        src="../../../assets/images/defly-logo.svg"
                                        alt=""
                                        className="img-fluid logo-in-card"
                                      />
                                    </div>
                                    <div className="creator-tag">
                                      <p>Creator</p>

                                      <p className="creator-name">Deflyball</p>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {ApproveCheck ? (
                          <p></p>
                        ) : (
                          <div className="stake-btn">
                            <button onClick={approveNFT}>approve</button>
                          </div>
                        )}

                        {/* <div className="stake-btn">
                        <button onClick={approveNFT}>approved</button>
                      </div> */}
                      </div>
                    </div>
                    <div className="right-side">
                      <div className="stakingDetail-card-header">
                        <h1>{currentItem.name}</h1>
                      </div>
                      <div className="stakCard-details">
                        <div className="price">
                          <p>Token Id</p>
                          <p>
                            {/* <img src="\assets\images\eth.png" alt="" /> */}
                            {currentItem.tokenId}
                          </p>
                        </div>
                        <div className="discription">
                          <div className="discription-head">
                            <p>Description</p>
                          </div>
                          <div className="discrip">
                            <p>{currentItem.description}</p>
                          </div>
                        </div>
                        {ApproveCheck ? (
                          <div className="select-stakingTier">
                            <select
                              className="customSelect"
                              name=""
                              id=""
                              onChange={(e) => {
                                setTire(e.currentTarget.value);
                              }}
                            >
                              <option value="">Select Tier</option>
                              <option value="15">Tier 1 ( 15 Days )</option>
                              <option value="30">Tier 2 ( 30 Days )</option>
                              <option value="60">Tier 3 ( 60 Days )</option>
                              <option value="90">Tier 4 ( 90 Days )</option>
                            </select>

                            <button
                              className="customStakeBtn"
                              onClick={() => stake()}
                            >
                              Stake
                            </button>
                          </div>
                        ) : (
                          <p></p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button onClick={handleClose} className="close-modal-btn">
                <Icon
                  icon="mdi:close-box"
                  color="#fcc016"
                  width="32"
                  height="32"
                />
              </button>
            </>
          }

        </Modal.Body>
      </Modal>



    </div>
  );
};

export default NFTtier;
