import React, { useEffect } from "react";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import StakingTab from "../components/stakingTab/StakingTab";
import TopNFT from "../components/topNFT/TopNFT";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <StakingTab />
      <Footer />
    </div>
  );
};

export default HomePage;
