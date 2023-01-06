import React, { useEffect, useState } from "react";
import "./unstaking.scss";
import tierBack from "../../assets/images/tierBack.png";
import { Icon } from "@iconify/react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
const Unstaking = () => {
  const topnft = [
    {
      nftName: "AUSTRALIAN SHEPHARD",
      creatorname: "Sonia Williams",
      nftPrice: 4.89,
      nftImg: "/assets/images/australianShephard.png",
      creatorAvatar: "/assets/images/creatorAvatar.png",
    },
    {
      nftName: "Border collie",
      creatorname: " Jade shaw",
      creatorAvatar: "/assets/images/creatorAvatar.png",

      nftPrice: 3.6,
      nftImg: "/assets/images/borderCollie.png",
    },
    {
      nftName: "Bull terrier",
      creatorname: "Nina holland ",
      creatorAvatar: "/assets/images/creatorAvatar.png",

      nftPrice: 3.6,
      nftImg: "/assets/images/australianShephard.png",
    },
    {
      nftName: "CHIHUAHUA ",
      creatorname: "Jack Hager ",
      creatorAvatar: "/assets/images/creatorAvatar.png",

      nftPrice: 3.69,
      nftImg: "/assets/images/australianShephard.png",
    },
    {
      nftName: "POODLE",
      creatorname: "john wick ",
      creatorAvatar: "/assets/images/creatorAvatar.png",

      nftPrice: 31.6,
      nftImg: "/assets/images/australianShephard.png",
    },
    {
      nftName: "DOBERMAN",
      creatorname: " sabrina kate",
      creatorAvatar: "/assets/images/creatorAvatar.png",

      nftPrice: 3.64,
      nftImg: "/assets/images/australianShephard.png",
    },
  ];

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const deadline = "January, 31, 2023";
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <section className="unstaking">
        <div className="section-header">
          <h1>un staking</h1>
          <img
            src="\assets\images\headingBackground.png"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="container">
          <div className="select-stakingTier">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select Tier
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item"> Tier 1 ( 15 Days )</a>
                </li>
                <li>
                  <a class="dropdown-item"> Tier 2 ( 30 Days )</a>
                </li>

                <li>
                  <a class="dropdown-item"> Tier 3 (60 Days )</a>
                </li>
                <li>
                  <a class="dropdown-item"> Tier 3 (90 Days )</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="unstaking-cards">
            <div className="nftStaking-cards">
              {topnft.map((item) => {
                return (
                  <div className="staking-card ">
                    <div className="background">
                      <img
                        src="\assets\images\cardBack.png"
                        alt=""
                        className="backImg img-fluid"
                      />
                      <div className="nft-claim-reward">
                        <p>Claim Reward</p>

                        <p>
                          {/* days */}
                          <span className="days">
                            <span className="time">
                              {days < 10 ? "0" + days : days}
                            </span>
                            <span className="alphaTime">days</span>
                          </span>
                          <span className="timer-space"> : </span>
                          {/* hour */}
                          <span className="days">
                            <span className="time">
                              {hours < 10 ? "0" + hours : hours}
                            </span>
                            <span className="alphaTime">hours</span>
                          </span>
                          <span className="timer-space"> : </span>

                          {/* minutes */}
                          <span className="days">
                            <span className="time">
                              {minutes < 10 ? "0" + minutes : minutes}
                            </span>
                            <span className="alphaTime">minutes</span>
                          </span>
                          <span className="timer-space"> : </span>
                          {/* second */}
                          <span className="days">
                            <span className="time">
                              {seconds < 10 ? "0" + seconds : seconds}
                            </span>
                            <span className="alphaTime">seconds</span>
                          </span>
                        </p>
                      </div>
                      <div className="drop-shadow"></div>
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
                            disabled
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
                            <div className="creator-avatar">
                              <img
                                //   src="\assets\images\creatorAvatar.png"
                                src={item.creatorAvatar}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div className="creator-tag">
                              <p>Creator</p>

                              {/* <p className="creator-name">Sonia Williams</p> */}
                              <p className="creator-name">{item.creatorname}</p>
                            </div>
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
          </div>
          <div className="loadmore-btn">
            <button>load more</button>
          </div>
        </div>
        <div className="unstakback">
          <h1>unstaking</h1>
        </div>
      </section>
    </div>
  );
};

export default Unstaking;
