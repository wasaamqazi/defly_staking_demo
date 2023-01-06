import React from "react";
import Footer from "../components/footer/Footer";
import NFTtier from "../components/nftTier/NFTtier";
import StakingBanner from "../components/stakingBanner/StakingBanner";
import TopNFT from "../components/topNFT/TopNFT";
import Unstaking from "../components/unStaking/Unstaking";

const NftStaking = () => {
  return (
    <div className="nftStaking-page">
      <div className="landing">
        <StakingBanner />
        <NFTtier />
        <Unstaking />
        <TopNFT />
        <Footer />
      </div>
    </div>
  );
};

export default NftStaking;
