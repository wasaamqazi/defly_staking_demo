import React from "react";
import "./navbar.scss";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <section className="nav-bar">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                src="\assets\images\defly-logo.svg"
                alt=""
                srcset=""
                className="logo-img"
              />
            </a>
            <button
              className="navbar-toggler collapsed d-flex d-lg-none  flex-column justify-content-around"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="toggler-icon top-bar"></span>
              <span className="toggler-icon middle-bar"></span>
              <span className="toggler-icon bottom-bar"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to="/navNFTStaking"
                  >
                    NFT STaking
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/navigateTokenStaking">
                    token STaking
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <a className="nav-link lock-link" href="#">
                    STADIUMS
                    <Icon
                      icon="dashicons:lock"
                      color="#ababab"
                      width="22"
                      height="22"
                      className="locks"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  lock-link" href="#">
                    ACCESSORIES
                    <Icon
                      icon="dashicons:lock"
                      color="#ababab"
                      width="22"
                      height="22"
                      className="locks"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <button>CONNECT WALLET</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default NavBar;
