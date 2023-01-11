import React from "react";
import "./totalToken.scss";
const TotalToken = () => {
  return (
    <div>
      <section className="total-token">
        <div className="container">
          <div className="token-box">
            <div className="box-heading">
              <h1>total token</h1>
              <h1>
                1000
                <img src="\assets\images\defly-logo.svg" alt="" />
              </h1>
            </div>
            <div>
              <ul class="unstyled centered">
                <li className="listStyle">
                  <input
                    class="styled-checkbox"
                    id="styled-checkbox-1"
                    value="15%"
                    type="radio"
                    name="token"
                  />
                  <label for="styled-checkbox-1">15 %</label>
                </li>
                <li className="listStyle">
                  <input
                    class="styled-checkbox"
                    id="styled-checkbox-2"
                    value="value2"
                    type="radio"
                    name="token"
                  />
                  <label for="styled-checkbox-2">25 %</label>
                </li>
                <li>
                  <input
                    class="styled-checkbox"
                    id="styled-checkbox-3"
                    value="value3"
                    type="radio"
                    name="token"
                  />
                  <label for="styled-checkbox-3">50%</label>
                </li>
                <li>
                  <input
                    class="styled-checkbox"
                    id="styled-checkbox-4"
                    type="radio"
                    value="value4"
                    name="token"
                  />
                  <label for="styled-checkbox-4">75 %</label>
                </li>

                <li>
                  <input
                    class="styled-checkbox"
                    id="styled-checkbox-5"
                    value="value5"
                    type="radio"
                    name="token"
                  />
                  <label for="styled-checkbox-5">100 %</label>
                </li>

                <li>
                  <input
                    class="styled-checkbox"
                    id="styled-checkbox-6"
                    value="custom"
                    type="radio"
                    name="token"
                  />
                  <label for="styled-checkbox-6">Custom</label>
                </li>
              </ul>
            </div>
            <div className="box-input">
              <div className="top" id="customToken">
                <ul>
                  <li>How Much You Satke Defly Tokens</li>
                </ul>
                <div className="input-resp">
                  <input type="number" placeholder="Type Here ..." />
                </div>
              </div>
              <div className="bottom">
                <ul>
                  <li>Choose Your Tier / Time Frame For Staking</li>
                </ul>
                <div className="select-stakingTier input-resp ">
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Select Tier
                    </button>

                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item"> Tier 1 ( 15 Days )</a>
                      </li>
                      <li>
                        <a class="dropdown-item"> Tier 2 ( 30 Days )</a>
                      </li>

                      <li>
                        <a class="dropdown-item"> Tier 3 (60 Days )</a>
                      </li>
                      <li>
                        <a class="dropdown-item"> Tier 3 (90 Days )</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="stak-btn">
              <button>Stake</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TotalToken;
