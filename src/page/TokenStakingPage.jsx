import React from "react";
import Footer from "../components/footer/Footer";
import NFTtier from "../components/nftTier/NFTtier";
import TokenTier from "../components/nftTier/TokenTier";
import TokenStaking from "../components/stakingBanner/TokenStaking";
import TopNFT from "../components/topNFT/TopNFT";
import TotalToken from "../components/totalToken/TotalToken";
import Unstaking from "../components/unStaking/Unstaking";
const TokenStakingPage = () => {
  return (
    <div>
      <div className="landing">
        <TokenStaking />
        {/* <NFTtier /> */}
        <TokenTier />
        <TotalToken />
        <Unstaking />
        <TopNFT />
        <Footer />
      </div>
    </div>
  );
};

export default TokenStakingPage;
