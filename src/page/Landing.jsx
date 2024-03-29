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
    <div
      className="d-flex justify-content-center align-items-center  "
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <Hero />
      {/* <StakingTab />
    <Footer /> */}
    </div>
  );
};

export default Landing;
