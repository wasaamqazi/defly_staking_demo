import { Icon } from "@iconify/react";
import React from "react";
import "./stakingDetail.scss";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
const StakingDetailModal = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div>
      <div className="staking-modal">
        <div className="stakingDetail-card show-lazmi">
          <div className="left-side">
            <div
              className="responsive-rotation"
              style={{ position: "relative" }}
            >
              {/* Mian nft card in detail page */}
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
                          src="\assets\images\australianShephard.png"
                          alt=""
                          srcSet=""
                        />
                      </div>

                      <div className="card-name">
                        <p>Australian shephard</p>
                      </div>

                      <div className="creator-details">
                        <div className="left">
                          <div className="creator-avatar">
                            <img
                              src="\assets\images\creatorAvatar.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="creator-tag">
                            <p>Creator</p>

                            <p className="creator-name">Sonia Williams</p>
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
                              <span>4.89 ETH</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Rotated Card in nft detail page */}
              {/* <div className="nftStaking-cards rotated-card">
                  <div className="staking-card">
                    <div className="background ">
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
                            src="\assets\images\australianShephard.png"
                            alt=""
                            srcSet=""
                          />
                        </div>

                        <div className="card-name">
                          <p>Australian shephard</p>
                        </div>

                        <div className="creator-details">
                          <div className="left">
                            <div className="creator-avatar">
                              <img
                                src="\assets\images\creatorAvatar.png"
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div className="creator-tag">
                              <p>Creator</p>

                              <p className="creator-name">Sonia Williams</p>
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
                                <span>4.89 ETH</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              <div className="stake-btn">
                <button>approved</button>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="stakingDetail-card-header">
              <h1>romeo</h1>
              <div className="select-stakingTier">
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
              </div>
            </div>
            <div className="stakCard-details">
              <div className="price">
                <p>price</p>
                <p>
                  <img src="\assets\images\eth.png" alt="" />
                  4.89 ETH
                </p>
              </div>
              <div className="discription">
                <div className="discription-head">
                  <p>Description</p>
                </div>
                <div className="discrip">
                  <p>
                    ROMEO is a perfect fit for a DeFly Ball game choice. With
                    extreme intelligence, high energy, easy to train,
                    fun-loving, and passionate to jump and run for long. Good at
                    herding and socialisation skills, making it possess great
                    temperament traits. Known for its high obedience while
                    training and high target achiever while racing. This
                    Australian Shepherd’s dog is a great team player and is an
                    intense dog with high endurance, making him a great
                    competitor in the DeFly Ball game.
                  </p>
                </div>
              </div>
              {/* <div className="discription">
                  <div className="discription-head">
                    <p>Details</p>
                  </div>
                  <div className="detail-element">
                    <div className="element-head">
                      <p>Attributes</p>
                      <p>levels</p>
                    </div>
                    <div className="level-progress">
                      <h6>Speed</h6>
                      <div className="p-value">
                        <div className="progress-bar">
                          <div
                            className="current-progress"
                            style={{ width: "60%" }}
                          ></div>

                          <div className="progress-value">
                            <p>60/100</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="level-progress">
                      <h6>Agility</h6>
                      <div className="p-value">
                        <div className="progress-bar">
                          <div
                            className="current-progress"
                            style={{ width: "87%" }}
                          ></div>

                          <div className="progress-value">
                            <p>87/100</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="level-progress">
                      <h6>Stamina</h6>
                      <div className="p-value">
                        <div className="progress-bar">
                          <div
                            className="current-progress"
                            style={{ width: "70%" }}
                          ></div>

                          <div className="progress-value">
                            <p>70/100</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakingDetailModal;
