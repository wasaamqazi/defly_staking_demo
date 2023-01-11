import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="logos">
              <Link to="/">
                <img
                  src="\assets\images\defly-logo.svg"
                  alt=""
                  className="img-fluid"
                />
              </Link>
            </div>
            <div className="learn-more">
              <div className="footer-heading">
                <h1>learn More</h1>
              </div>
              <Link to="/"> home</Link>
              <a href="#"> Gameplay</a>
              <a href="#"> Roadmap</a>
              <a href="#"> Superverse</a>
            </div>
            <div className="learn-more">
              <div className="footer-heading">
                <h1>Marketplace</h1>
              </div>

              <a href="#">Charcters</a>
              <a href="#">In-Game Assets</a>
              <a href="#">Buy/Sell</a>
              <a href="#">NFT Staking</a>
            </div>
            <div className="learn-more">
              <div className="footer-heading">
                <h1>Quick Links</h1>
              </div>
              <a href="#">Whitepaper</a>
              <a href="#">Pitch Deck</a>
              <Link to="https://market.deflyball.com/" target="_blank">
                Marketplace
              </Link>
              <a href="#">Smart contract</a>
            </div>
            <div className="learn-more subscribe-us">
              <div className="footer-heading">
                <h1>Subscribe Us</h1>
              </div>
              <div className="subscribe-input">
                <input type="text" placeholder="info@yourgmail.com" />
                <button>
                  <img
                    src="\assets\images\arrow.svg"
                    alt=""
                    className="img-fluid"
                  />
                </button>
              </div>

              <div className="social-icons">
                {/* <a href="#" target="_blank">
                  <Icon
                    icon="mdi:facebook"
                    color="white"
                    width="40"
                    height="40"
                    className="social-ico"
                  />
                </a> */}
                <a href="https://www.instagram.com/deflyball/" target="_blank">
                  <Icon
                    icon="mdi:instagram"
                    color="white"
                    width="40"
                    height="40"
                    className="social-ico"
                  />
                </a>
                <a href="https://twitter.com/DeflyBall" target="_blank">
                  <Icon
                    icon="mdi:twitter"
                    color="white"
                    width="40"
                    height="40"
                    className="social-ico"
                  />
                </a>
                <a href="https://medium.com/@deflyball" target="_blank">
                  <Icon
                    icon="mdi:medium"
                    color="white"
                    width="40"
                    height="40"
                    className="social-ico"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
