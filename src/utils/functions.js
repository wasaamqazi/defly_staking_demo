import * as dotenv from "dotenv";
import Defly_Nft_Staking from "../abi/deflyNFTStaking.json";
import Erc20_contractABI from "../abi/ERC20.json";
import defly_mint_ERC721_contractABI from "../abi/MintERC721.json";
import defly_Token_Staking_ABI from "../abi/TokenStaking.json";
import defly_mint_old from "../abi/deflyballnft-abiOLD.json";
import { toast } from "react-toastify";
import Web3 from "web3/dist/web3.min.js";
import { useEffect } from "react";
import axios from "axios";

// require('dotenv').config()

const VITE_DEFLY_MINT_721 = import.meta.env.VITE_DEFLY_MINT_721;
const VITE_DEFLY_NFT_STAKING = import.meta.env.VITE_DEFLY_NFT_STAKING;
const VITE_ERC_20s = import.meta.env.VITE_ERC_20;
const VITE_MINT_OLD = import.meta.env.VITE_MINT_OLD_ADDRESS;
const VITE_DEFLY_Token_STAKING = import.meta.env.VITE_DEFLY_Token_STAKING;
const web3 = new Web3(window.ethereum);

// defly mint contract
window.defly_mint_contract = new web3.eth.Contract(
  defly_mint_ERC721_contractABI,
  VITE_DEFLY_MINT_721
);

// defly mint contract old
window.defly_nft_contract_old = new web3.eth.Contract(
  defly_mint_old,
  VITE_MINT_OLD
);

// defly staking contract
window.defly_nft_staking = new web3.eth.Contract(
  Defly_Nft_Staking,
  VITE_DEFLY_NFT_STAKING
);
window.defly_ERC20_contract = new web3.eth.Contract(
  Erc20_contractABI,
  VITE_ERC_20s
);
window.defly_Token_contract = new web3.eth.Contract(
  defly_Token_Staking_ABI,
  VITE_DEFLY_Token_STAKING
);

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const getTokens = async () => {
  let nfts_data_new = await window.defly_ERC20_contract.methods
    .balanceOf(window.ethereum.selectedAddress)
    .call();
  const etherValue = Web3.utils.fromWei(nfts_data_new, "ether");
  return etherValue;
};

export const checkApprove = async () => {
  let nfts_data_new = await window.defly_ERC20_contract.methods
    .allowance(window.ethereum.selectedAddress, VITE_DEFLY_Token_STAKING)
    .call();
  const etherValue = Web3.utils.fromWei(nfts_data_new, "ether");
  return etherValue;
};

export const StakeToken = async (customTokens, tier) => {
  const tokensCustom = web3.utils.toWei(String(customTokens), "ether");

  window.defly_Token_contract.methods
    .deposit(tokensCustom, tier)
    .send({ from: window.ethereum.selectedAddress })
    .on("transactionHash", async (hash) => {
      for (let index = 0; index > -1; index++) {
        var receipt = await web3.eth.getTransactionReceipt(hash);
        if (receipt != null) {
          window.location.reload(false);
          break;
        }
        console.log("hello");
      }
    })
    .on("error", (error) => {
      toast("Something went wrong while Approving");
    });
};

export const getAllStakedTokens = async () => {
  let nfts_data_new = await window.defly_Token_contract.methods
    .Staker(window.ethereum.selectedAddress)
    .call();

  let time =
    (await (Number(nfts_data_new.day) * 24 * 60 * 60 +
      Number(nfts_data_new.StartTime))) * 1000;
  nfts_data_new.countdownTime = time;
  nfts_data_new.tokens = await Web3.utils.fromWei(
    nfts_data_new.tokens,
    "ether"
  );
  return nfts_data_new;
};
