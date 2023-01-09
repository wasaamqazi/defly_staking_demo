import { useState } from "react";
import "./App.css";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import Landing from "./page/Landing";
import NftStaking from "./page/NftStaking";
import TokenStakingPage from "./page/TokenStakingPage";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Landing /> */}
      {/* <NftStaking /> */}
      {/* <TokenStakingPage /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/navigateTokenStaking" element={<TokenStakingPage />} />
        <Route path="/navNFTStaking" element={<NftStaking />} />
        {/* <Route path="/AboutPage" element={<About />} />
        <Route path="/PortfolioPage" element={<Portfolio />} />
        <Route path="/ContactPage" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
