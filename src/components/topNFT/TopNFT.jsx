import React from "react";
import "./topnft.scss";
import { Icon } from "@iconify/react";
import img from "../../assets/images/background.png";
const TopNFT = () => {
  const topnft = [
    {
      topNFTname: "AUSTRALIAN SHEPHARD",
      topnftPrice: 4.89,
      topnftImg: "/assets/images/topnft.png",
    },
    {
      topNFTname: "DOBERMAN",
      topnftPrice: 3.6,
      topnftImg: "/assets/images/topnft.png",
    },
    {
      topNFTname: "BORDER COLLIE",
      topnftPrice: 3.6,
      topnftImg: "/assets/images/topnft.png",
    },
    {
      topNFTname: "CHIHUAHUA ",
      topnftPrice: 3.6,
      topnftImg: "/assets/images/topnft.png",
    },
    {
      topNFTname: "POODLE",
      topnftPrice: 3.6,
      topnftImg: "/assets/images/topnft.png",
    },
    {
      topNFTname: "BULL TERRIER",
      topnftPrice: 3.6,
      topnftImg: "/assets/images/topnft.png",
    },
  ];
  return (
    <div>
      <section className="top-nft">
        <div className="section-header">
          <h1>defly ball top nft’s</h1>
        </div>

        <div className="top-nft-content">
          <div className="container">
            <div className="top-nft-grid">
              {topnft.map((item, index) => {
                return (
                  <div className="top-nft-card" key={index}>
                    <div className="left">
                      <img src={item.topnftImg} alt="" className="img-fluid" />
                    </div>
                    <div className="right">
                      {/* <p>AUSTRALIAN SHEPHARD</p> */}
                      <p>{item.topNFTname}</p>
                      <p>
                        <Icon
                          icon="cryptocurrency:eth"
                          color="white"
                          width="11"
                          height="11"
                          className="icon"
                        />
                        <span>{item.topnftPrice}</span>
                        <span>ETH</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopNFT;
