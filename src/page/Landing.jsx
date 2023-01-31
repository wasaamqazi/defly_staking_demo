import React, { useEffect } from "react";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import NavBar from "../components/navbar/NavBar";
import StakingTab from "../components/stakingTab/StakingTab";
import TopNFT from "../components/topNFT/TopNFT";
const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="landing">
      <Hero />
      {/* <StakingTab /> */}
      {/* <TopNFT /> */}
      <Footer />
    </div>
  );
};

export default Landing;
