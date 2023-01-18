import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const NavBar = () => {

  //Main Net
  // const bnbChainId = "0x38";
  //Test Net
  const bnbChainId = "0x61";

  const [selectwallet, setShowSlctWallet] = useState(false);
  const SWhandleClose = () => setShowSlctWallet(false);
  const SWhandleShow = () => setShowSlctWallet(true);
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const obj = {
          status: "👆🏽 Write a message in the text-field above.",
          address: addressArray[0],
        };
        return obj;
      } catch (err) {
        return {
          address: "",
          status: "😥 " + err.message,
        };
      }
    } else {
      toast.error(
        " You must install Metamask, a virtual Ethereum wallet, in your browser.",
        {
          toastId: "error1",
        }
      );
      return {
        address: "",
        status: (
          <span>
            <p>
              🦊
              <a target="_blank" href={`https://metamask.io/download.html`}>
                You must install Metamask, a virtual Ethereum wallet, in your
                browser.
              </a>
            </p>
          </span>
        ),
      };
    }
  };

  //On Metamask Account Changed....
  function addAccountChangedListener() {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", (_chainId) => {
        window.location.reload();
        if (_chainId === bnbChainId) {
        } else {
          toast.error("Please connect to BSC main network", {
            toastId: "error1",
          });
        }
      });
    } else {
      toast.error(
        "You must install Metamask, a virtual Ethereum wallet, in your browser."
      );
    }
  }

  const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (addressArray.length > 0) {
          return {
            address: addressArray[0],
            status: "👆🏽 Write a message in the text-field above.",
          };
        } else {
          toast.error("🦊 Connect to Metamask using the top right button.", {
            toastId: "error2",
          });
          return {
            address: "",
            status: "🦊 Connect to Metamask using the top right button.",
          };
        }
      } catch (err) {
        return {
          address: "",
          status: "😥 " + err.message,
        };
      }
    } else {
      toast.error(
        "You must install Metamask, a virtual Ethereum wallet, in your browser.!",
        {
          toastId: "error1",
        }
      );
      return {
        address: "",
        status: (
          <span>
            <p>
              🦊{" "}
              <a target="_blank" href={`https://metamask.io/download.html`}>
                You must install Metamask, a virtual Ethereum wallet, in your
                browser.
              </a>
            </p>
          </span>
        ),
      };
    }
  };
  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();

    setWallet(walletResponse.address);
    SWhandleClose();
  };
  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
          window.location.reload();
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      toast.error(
        "You must install Metamask, a virtual Ethereum wallet, in your browser.!",
        {
          toastId: "error1",
        }
      );
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }
  const walletAtLoad = async () => {
    await window.ethereum.enable();
    const CurrentWallet = async () => {
      const { address } = await getCurrentWalletConnected();
      setWallet(address);
    };
    if (window.ethereum) {
      if (window.ethereum.chainId === bnbChainId) {
        CurrentWallet();
      } else {
        setWallet("");
        toast.error("Please connect to BSC main network", {
          toastId: "error1",
        });
      }
    }

    addWalletListener();
    addAccountChangedListener();
  };
  useEffect(() => {
    walletAtLoad();
  }, []);


  return (
    <div>
      <section className="nav-bar">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                src="\assets\images\defly-logo.svg"
                alt=""
                srcSet=""
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

                  {walletAddress && walletAddress != "" ? (
                    <button>
                      {"" +
                        String(walletAddress).substring(0, 6) +
                        "..." +
                        String(walletAddress).substring(38)}
                    </button>
                  ) : (
                    <button onClick={connectWalletPressed}>
                      Connect Wallet
                    </button>
                  )}

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
