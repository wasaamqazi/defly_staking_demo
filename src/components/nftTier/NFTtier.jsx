import React, { useState } from "react";
import "./nftTier.scss";
import tierBack from "../../assets/images/tierBack.png";
import { Icon } from "@iconify/react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import StakingDetailModal from "../stakingDetail/StakingDetailModal";
const NFTtier = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const topnft = [
    {
      nftName: "AUSTRALIAN SHEPHARD",
      nftPrice: 4.89,
      nftImg: "/assets/images/australianShephard.png",
    },
    {
      nftName: "Border collie",
      nftPrice: 3.6,
      nftImg: "/assets/images/borderCollie.png",
    },
    {
      nftName: "Bull terrier",
      nftPrice: 3.6,
      nftImg: "/assets/images/australianShephard.png",
    },
    {
      nftName: "CHIHUAHUA ",
      nftPrice: 3.69,
      nftImg: "/assets/images/australianShephard.png",
    },
    {
      nftName: "POODLE",
      nftPrice: 31.6,
      nftImg: "/assets/images/australianShephard.png",
    },
    {
      nftName: "DOBERMAN",
      nftPrice: 3.64,
      nftImg: "/assets/images/australianShephard.png",
    },
  ];

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div>
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
          <div className="staking-tab-detail1">
            <p>
              Lorem ipsum dolor sit amet consectetur. Feugiat nisl diam turpis
              sed nec tellus egestas sed. Tincidunt molestie sed morbi lacus
              quis at cras pharetra duis. Morbi pellentesque risus sociis ipsum
              nam id porttitor nunc donec. Commodo mus rhoncus nunc consequat.
              Volutpat morbi sollicitudin sapien vitae at et eleifend semper. Eu
              quis malesuada aliquet dolor.
            </p>
          </div>
          <ul class="nav nav-tabs tier-parentTab" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
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
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
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
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
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

            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
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
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="tier1"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabindex="0"
            >
              <p className="tier-tabContent">
                Tier1 : You Can Stake Your DEFLY BALL NFT for 15 Days
              </p>
            </div>
            <div
              class="tab-pane fade"
              id="tier2"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabindex="0"
            >
              <p className="tier-tabContent">
                Tier1 : You Can Stake Your DEFLY BALL NFT for 30 Days
              </p>
            </div>
            <div
              class="tab-pane fade"
              id="tier3"
              role="tabpanel"
              aria-labelledby="contact-tab"
              tabindex="0"
            >
              <p className="tier-tabContent">
                Tier1 : You Can Stake Your DEFLY BALL NFT for 60 Days
              </p>
            </div>
            <div
              class="tab-pane fade"
              id="tier4"
              role="tabpanel"
              aria-labelledby="disabled-tab"
              tabindex="0"
            >
              <p className="tier-tabContent">
                Tier1 : You Can Stake Your DEFLY BALL NFT for 90 Days
              </p>
            </div>
          </div>

          <div className="nftStaking-cards">
            {topnft.map((item) => {
              return (
                <div className="staking-card">
                  <div className="background">
                    <img
                      src="\assets\images\cardBack.png"
                      alt=""
                      className="backImg img-fluid"
                    />
                    <div className="nft-claim-reward">
                      <p>Claim Reward</p>
                    </div>
                  </div>
                  <div className="card-plate">
                    <div className="card-gold-plate">
                      <img
                        src="\assets\images\cardSheild.png"
                        alt=""
                        className="img-fluid"
                      />

                      <div className="fav d-flex align-items-center">
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
                      </div>

                      <div className="ourNft">
                        <img
                          //   src="\assets\images\australianShephard.png"
                          src={item.nftImg}
                          alt=""
                          srcset=""
                        />
                      </div>

                      <div className="card-name">
                        {/* <p>Australian shephard</p> */}
                        <p>{item.nftName} </p>
                      </div>

                      <div className="creator-details">
                        <div className="left">
                          {/* <div className="creator-avatar ">
                            <img
                              src="\assets\images\creatorAvatar.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="creator-tag">
                            <p>Creator</p>

                            <p className="creator-name">Sonia Williams</p>
                          </div> */}
                          <button className="stake-card" onClick={handleShow}>
                            stake
                          </button>
                        </div>
                        <div className="right">
                          <div className="price">
                            <p>Price</p>
                            <p>
                              <Icon
                                icon="cryptocurrency:eth"
                                color="white"
                                width="11"
                                height="11"
                                className="icon"
                              />
                              <span>{item.nftPrice} ETH</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="loadmore-btn">
            <button>load more</button>
          </div>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          // backdrop="static"
          keyboard={false}
          size="lg"
          className="staking-modal"
          centered
        >
          <Modal.Body>
            <StakingDetailModal />
          </Modal.Body>
        </Modal>
      </section>
    </div>
  );
};

export default NFTtier;
