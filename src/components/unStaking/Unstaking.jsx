import React, { useEffect, useState } from "react";
import "./unstaking.scss";
import tierBack from "../../assets/images/tierBack.png";
import { Icon } from "@iconify/react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { staker } from "../../utils/action";
import Countdown from "react-countdown";
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
  // const [days, setDays] = useState(0);
  // const [hours, setHours] = useState(0);
  // const [minutes, setMinutes] = useState(0);
  // const [seconds, setSeconds] = useState(0);
  const [stakerDetail, setStakerDetail] = useState({});

  // const deadline = "January, 31, 2023";
  // const getTime = () => {

  //   console.log(CountdownTime);
  //   const time = Date.parse(CountdownTime) - Date.now();
  //   setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
  //   setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
  //   setMinutes(Math.floor((time / 1000 / 60) % 60));
  //   setSeconds(Math.floor((time / 1000) % 60));
  // };


  const getStaker = async () => {
    let temp = await staker().then(res => {

      setStakerDetail(res)
    })
  }


  useEffect(() => {
    getStaker()
  }, [])
  useEffect(() => {
    console.log(stakerDetail);

    console.log(stakerDetail?.data?.image);
  }, [stakerDetail])




  return (
    <div>

      {stakerDetail ? <section className="unstaking">
        <div className="section-header">
          <h1>un staking</h1>
          <img
            src="\assets\images\headingBackground.png"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="container">
          {/* <div className="select-stakingTier">
            <div className="dropdown">
              <button
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
              </ul>
            </div>
          </div> */}

          <div className="unstaking-cards">
            <div className="nftStaking-cards">
              <div className="staking-card " >
                <div className="background">
                  <img
                    src="\assets\images\cardBack.png"
                    alt=""
                    className="backImg img-fluid"
                  />
                  <div className="nft-claim-reward">
                    {

                      <Countdown date={stakerDetail.countdownTime} />
                    }

                  </div>
                  {/* <div className="drop-shadow"></div> */}
                </div>
                <div className="card-plate">
                  <div className="card-gold-plate">
                    {/* backgound gold image */}
                    <img
                      src="\assets\images\cardSheild.png"
                      alt=""
                      className="img-fluid"
                    />

                    {/* Favourite Checkbox */}

                    <div className="fav d-flex align-items-center ">
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

                    {/* Our NFT IMG (dog img) */}
                    <div className="ourNft">
                      <img
                        src={stakerDetail?.data?.image}

                        alt=""
                        srcSet=""
                      />
                    </div>

                    {/* nft name  */}
                    <div className="card-name">
                      <p>{stakerDetail?.data?.name}</p>
                      {/* <p>{item.nftName} </p> */}
                    </div>

                    {/* nft detail price */}
                    <div className="creator-details">
                      <div className="left">
                        {/* <div className="creator-avatar">
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
                        <button className="claimReward">
                          Claim Reward
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
                            {/* <span>{item.nftPrice} ETH</span> */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="loadmore-btn">
            <button>load more</button>
          </div>
        </div>
        <div className="unstakback">
          <h1>unstaking</h1>
        </div>
      </section> : <></>}
    </div>
  );
};

export default Unstaking;
