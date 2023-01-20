import React, { useEffect } from "react";
import Footer from "../components/footer/Footer";
import NFTtier from "../components/nftTier/NFTtier";
import TokenTier from "../components/nftTier/TokenTier";
import TokenStaking from "../components/stakingBanner/TokenStaking";
import TokenUnstake from "../components/tokenUnstaking/TokenUnstake";
import TopNFT from "../components/topNFT/TopNFT";
import TotalToken from "../components/totalToken/TotalToken";
import Unstaking from "../components/unStaking/Unstaking";
const TokenStakingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="landing">
        <TokenStaking />
        {/* <NFTtier /> */}
        <TokenTier />
        <TotalToken />
        <TokenUnstake />

        <Footer />
      </div>
    </div>
  );
};

export default TokenStakingPage;
