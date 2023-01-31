import React, { useEffect, useState } from "react";
import "./unstaking.scss";
import tierBack from "../../assets/images/tierBack.png";
import { Icon } from "@iconify/react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { staker, stakerInfo } from "../../utils/action";
import axios from "axios";
import Countdown from "react-countdown";
import Defly_Nft_Staking from "../../abi/deflyNFTStaking.json";
import Web3 from "web3/dist/web3.min";
import { toast } from "react-toastify";

const Unstaking = () => {
  // const [nftImage, setNftImage] = useState("");
  const [nftDetails, setNftDetails] = useState([]);
  const [nftDetailss, setNftDetailss] = useState([]);
  // const [nftCountdown, setNftCountdown] = useState("");
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  // const [stakerDetail, setStakerDetail] = useState("");
  const [loadingState, setLoadingState] = useState(false);
  const [loadingState1, setLoadingState1] = useState([]);
  // const [mintAddress, setMintAddress] = useState("");
  

  const VITE_DEFLY_NFT_STAKING = import.meta.env.VITE_DEFLY_NFT_STAKING;
  const VITE_DEFLY_MINT_721 = import.meta.env.VITE_DEFLY_MINT_721;
  const VITE_MINT_OLD = import.meta.env.VITE_MINT_OLD_ADDRESS;
  const web3 = new Web3(window.ethereum);



  const stakerDet = async () => {
    setLoadingState(true)
    const staker = await stakerInfo()
    // console.log(staker);

    setNftDetails([])
    if (staker.length > 0) {
      staker.map(async (item, index) => {
        await axios
          .get(item.tokenuri)
          .then(async (res) => {
            item.id = res.data.id
            item.description = res.data.description
            item.image = res.data.image
            item.image_1 = res.data.image_1
            item.name = res.data.name
            item.attributes = res.data.attributes
            // item.loading = false
            setNftDetails(prev => [...prev, (
              item
            )
            ])

          })
          .catch((err) => {
            console.log(err);
            setLoadingState(false)
          });

        if (staker.length == index + 1) {
          setLoadingState(false)
        }

      })
    }
    if (staker.length == 0) {
      setLoadingState(false)
    }
  };

  // const getStaker = async () => {
  //   let temp = await staker().then(async (res) => {
  //     setMintAddress(res.mint721)
  //     if (res && JSON.stringify(res) !== "{}") {
  //       setNftCountdown(res.countdownTime);
  //       await axios
  //         .get(res.tokenuri)
  //         .then(async (res) => {

  //           setNftDetails(res.data);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     }
  //   });
  // };

  const withDrawNFT = async (mintAddress, tokenid) => {

const test=tokenid+mintAddress;
    setLoadingState1({[test]:true})
    // defly staking contract 
    window.defly_nft_staking = await new web3.eth.Contract(
      Defly_Nft_Staking,
      VITE_DEFLY_NFT_STAKING
    );

    window.defly_nft_staking.methods.withdraw(tokenid, window.ethereum.selectedAddress, mintAddress)
      .send({ from: window.ethereum.selectedAddress })
      .on("transactionHash", async (hash) => {

        for (let index = 0; index > -1; index++) {
          var receipt = await web3.eth.getTransactionReceipt(hash)
          if (receipt != null) {
            if (receipt.status) {
              window.location.reload(false)
              // setLoadingState1(false)
              break;
            }
          }
          console.log("Hello");
        }
      })
      .on("error", (error) => {
        toast("Something went wrong while Approving");
            setLoadingState1({[test]:false})


      });
  };

  useEffect(() => {
    stakerDet()
  }, []);
 

  useEffect(() => {
   console.log(loadingState1);
  }, [loadingState1]);
 
  useEffect(() => {
    // console.log(nftDetailss);
    nftDetails.map((item,index)=>{
      console.log(index);
     console.log(item.NFT); 
     console.log(item.mint721); 
     let key=item.NFT+item.mint721
     setLoadingState1(prev=> [...prev,({[key]:false})])
    })
  }, [nftDetails]);


  return (
    <div>
      <section className="unstaking">
        <div className="section-header">
          <h1>un staking</h1>
          <img
            src="\assets\images\headingBackground.png"
            alt=""
            className="img-fluid"
          />
        </div>

        <>
          <div className="container">
            <div className="unstaking-cards">
              <div className="nftStaking-cards">


                {
                  nftDetails && nftDetails.length > 0 ?

                    nftDetails.map((item, index) => {
                      return (
                        <div className="staking-card " key={index}>
                          <div className="background">
                            <img
                              src="\assets\images\cardBack.png"
                              alt=""
                              className="backImg img-fluid"
                            />
                          </div>
                          <div className="card-plate">
                            <div className="card-gold-plate">
                              <img
                                src="\assets\images\cardSheild.png"
                                alt=""
                                className="img-fluid"
                              />
                              <div className="ourNft">
                                {item.image ? <img src={item.image} alt="" /> : <></>}
                              </div>
                              <div
                                className="nft-claim-reward d-flex justify-content-center"
                                style={{ color: "white" }}
                              >
                                <h1 className="customCountDownClass">
                                  {item.countdownTime && item.countdownTime > 0 ? (
                                    <Countdown date={item.countdownTime+Number(2000)} />
                                  ) : (
                                    <>00:00:00:00</>
                                  )}
                                </h1>
                              </div>
                              {/* nft name  */}
                              <div className="card-name">
                                <p>{item.name}</p>
                                {/* <p>Hello</p> */}
                                {/* <p>{item.nftName} </p> */}
                              </div>
                              {/* nft detail price */}

                              <div className="creator-details">
                                <div className="left">
                                  {
                                 
                                  loadingState1[item.NFT+item.mint721] ? (
                                    <div className="loader-wrao mob" style={{ visibility: "visible" }}>
                                      <div className="loader"></div>
                                    </div>
                                  ) :
                                    <button className="claimReward" onClick={() => withDrawNFT(item.mint721, item.NFT)}>
                                      UnStake
                                    </button>

                                  }
                                </div>
                             </div>
                            </div>
                          </div>
                        </div>
                      )
                    })
                    :
                    <></>
                }
              </div>
            </div>
          </div>
          <div className="unstakback">
            <h1>unstaking</h1>
          </div>
        </>
      </section >


    </div >
  );
};

export default Unstaking;
