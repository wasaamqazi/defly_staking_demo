import React from "react";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import NavBar from "../components/navbar/NavBar";
import StakingTab from "../components/stakingTab/StakingTab";
import TopNFT from "../components/topNFT/TopNFT";
const Landing = () => {
  return (
    <div className="landing">
      <StakingTab />
      <TopNFT />
      <Footer />
    </div>
  );
};

export default Landing;
