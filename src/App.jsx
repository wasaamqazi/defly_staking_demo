import { useState } from "react";
import "./App.css";

import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import Landing from "./page/Landing";
import NftStaking from "./page/NftStaking";
import TokenStakingPage from "./page/TokenStakingPage";
import { Routes, Route } from "react-router-dom";
import StakingDetail from "./components/stakingDetail/StakingDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./page/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/navigateTokenStaking" element={<TokenStakingPage />} />
        <Route path="/navNFTStaking" element={<NftStaking />} />
        <Route path="/stakingDetail" element={<StakingDetail />} />
      </Routes>
    </div>
  );
}

export default App;
