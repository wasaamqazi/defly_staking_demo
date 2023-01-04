import React from "react";
import "./navbar.scss";
import { Icon } from "@iconify/react";
const NavBar = () => {
  return (
    <div>
      <section className="nav-bar">
        <nav class="navbar navbar-expand-xl ">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src="\assets\images\defly-logo.svg" alt="" srcset="" />
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
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    DEFLY BALL NFTS
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    MY NFT’S
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link lock-link" href="#">
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
                <li class="nav-item">
                  <a class="nav-link  lock-link" href="#">
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
                <li class="nav-item">
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
