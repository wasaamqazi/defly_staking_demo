import { useState } from "react";
import "./App.css";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import Landing from "./page/Landing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Landing />
    </div>
  );
}

export default App;
