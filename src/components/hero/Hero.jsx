import React, { useEffect, useState } from "react";
import NavBar from "../navbar/NavBar";
import "./hero.scss";
const Hero = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const deadline = "Feb, 17, 2023";
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="hero-section">
        {/* <NavBar /> */}

        {/* coming soon time */}
        <div className="coming-time-container">
          <p className="coming-time">
            {/* days */}
            <span className="days">
              <span className="time">{days < 10 ? "0" + days : days}</span>
              <span className="alphaTime"> days</span>
            </span>
            <span className="timer-space"> : </span>
            {/* hour */}
            <span className="days">
              <span className="time">{hours < 10 ? "0" + hours : hours}</span>
              <span className="alphaTime"> hours</span>
            </span>
            <span className="timer-space"> : </span>

            {/* minutes */}
            <span className="days">
              <span className="time">
                {minutes < 10 ? "0" + minutes : minutes}
              </span>
              <span className="alphaTime"> minutes</span>
            </span>
            <span className="timer-space"> : </span>
            {/* second */}
            <span className="days">
              <span className="time">
                {seconds < 10 ? "0" + seconds : seconds}
              </span>
              <span className="alphaTime"> seconds</span>
            </span>
          </p>
        </div>

        <div className="hero-tagline">
          <h1>DEFLY BALL</h1>
          <h1>STAKING</h1>
          <h2 className="come-soon">
            Coming Soon
            <a href="https://www.deflyball.com/" className="go-home">
              Go back to home
            </a>
          </h2>
        </div>
        <div className="hero-gifs">
          <img
            src="\assets\images\herogif.png"
            alt=""
            className="img-fluid landing-back"
          />
          <video className="stakingNft" playsInline autoPlay muted loop>
            <source src="\assets\video\landing.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </div>
  );
};

export default Hero;
