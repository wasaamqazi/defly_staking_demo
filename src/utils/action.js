// import { firestoredb } from "../components/firebase";
// import { collection, addDoc } from "firebase/firestore";
import * as dotenv from 'dotenv'
import Defly_Nft_Staking from "../abi/deflyNFTStaking.json";
import Erc20_contractABI from "../abi/ERC20.json";
import defly_mint_ERC721_contractABI from "../abi/MintERC721.json";
import defly_mint_old from "../abi/deflyballnft-abiOLD.json";
import { toast } from "react-toastify";
import Web3 from "web3/dist/web3.min.js";
import { useEffect } from "react";
import axios from 'axios';

// require('dotenv').config()

const VITE_DEFLY_MINT_721 = import.meta.env.VITE_DEFLY_MINT_721;
const VITE_DEFLY_NFT_STAKING = import.meta.env.VITE_DEFLY_NFT_STAKING;
const VITE_ERC_20s = import.meta.env.VITE_ERC_20;
const VITE_MINT_OLD = import.meta.env.VITE_MINT_OLD_ADDRESS;

const web3 = new Web3(window.ethereum);


// defly mint contract
window.defly_mint_contract = await new web3.eth.Contract(
    defly_mint_ERC721_contractABI,
    VITE_DEFLY_MINT_721
);

// defly mint contract old
window.defly_nft_contract_old = await new web3.eth.Contract(
    defly_mint_old,
    VITE_MINT_OLD
);

// defly staking contract 
window.defly_nft_staking = await new web3.eth.Contract(
    Defly_Nft_Staking,
    VITE_DEFLY_NFT_STAKING
);


export const getNFTs = async () => {


    var AllNFTs = [];
    const nfts_data_new = await window.defly_mint_contract.methods
        .balanceOf(window.ethereum.selectedAddress)
        .call();


    //loop for fetching tokenIDs
    for (var i = 0; i < nfts_data_new; i++) {
        const tokenIdofOwner = await window.defly_mint_contract.methods
            .tokenOfOwnerByIndex(window.ethereum.selectedAddress, i)
            .call();


        const url = await window.defly_mint_contract.methods
            .tokenURI(tokenIdofOwner)
            .call();
        AllNFTs.push({ tokenURI: url, tokenid: tokenIdofOwner, type: "new" })
    }
    return AllNFTs;

};

export const getMyNFTsDataOld = async () => {

    var nftData = [];
    try {
        const nfts_data_new = await window.defly_nft_contract_old.methods
            .balanceOf(window.ethereum.selectedAddress)
            .call();

        //loop for fetching tokenIDs
        for (var i = 0; i < nfts_data_new; i++) {
            const tokenIdofOwner = await window.defly_nft_contract_old.methods
                .tokenOfOwnerByIndex(window.ethereum.selectedAddress, i)
                .call();


            const url = await window.defly_nft_contract_old.methods
                .tokenURI(tokenIdofOwner)
                .call();

            const response = await fetch(url);

            if (!response.ok) {
                console.log("Something went wrong!");
                throw new Error("Something went wrong!");
                // continue;
            }
            const data = await response.json();
            data.tokenId = tokenIdofOwner;
            data.type = "old";

            nftData.push(data);

            if (i == nfts_data_new - 1) {
                return {
                    success: true,
                    msg: "Data Fetched Successfully",
                    nftData: nftData,
                };
            }
        }
        if (nfts_data_new == 0) {
            return {
                success: false,
                msg: "No Data Fetched",
                nftData: [],
            };
        }
    } catch (err) {

        console.log(err);
        return {
            success: false,
            msg: err,
            nftData: [],
        };
    }


};
// export const deposit = async (tokenid, tier) => {
//     await window.ethereum.enable();


//     window.defly_nft_staking.methods.deposit(tokenid, tier)
//         .send({ from: window.ethereum.selectedAddress })
//         .on("transactionHash", async (hash) => {

//             for (let index = 0; index > -1; index++) {
//                 var receipt = await web3.eth.getTransactionReceipt(hash)
//                 if (receipt != null) {
//                     window.location.reload(false)
//                     break;
//                 }
//                 console.log("hello");
//             }
//         })
//         .on("error", (error) => {
//             toast("Something went wrong while Approving");


//         });

// };
export const Approve = async (tokenid) => {
    await window.ethereum.enable();

    const data = await window.defly_mint_contract.methods.getApproved(tokenid).call();
    if (data == VITE_DEFLY_NFT_STAKING) {

        return true;
    } else {
        return false;
    }
};

export const ApproveOld = async (tokenid) => {
    await window.ethereum.enable();

    const data = await window.defly_nft_contract_old.methods.getApproved(tokenid).call();
    if (data == VITE_DEFLY_NFT_STAKING) {

        return true;
    } else {
        return false;
    }
};


export const stakerInfo = async () => {

    let stakerDetails = await window.defly_nft_staking.methods
        .Staker(window.ethereum.selectedAddress, VITE_DEFLY_MINT_721,).call()
    return stakerDetails;
};
export const staker = async () => {

    let stakerDetails = await window.defly_nft_staking.methods
        .Staker(window.ethereum.selectedAddress).call()

    if (stakerDetails.DepositToken) {
        stakerDetails.tokenuri = await window.defly_mint_contract.methods.tokenURI(stakerDetails.NFT).call()

        let time = await ((Number(stakerDetails.day) * 24 * 60 * 60) + Number(stakerDetails.StartTime)) * 1000

        stakerDetails.countdownTime = time;
        return stakerDetails
    }
    else {
        return {}
    }




};
// export const unstake = async () => {

//     window.defly_nft_staking.methods.withdraw(window.ethereum.selectedAddress)
//         .send({ from: window.ethereum.selectedAddress })
//         .on("transactionHash", async (hash) => {

//             for (let index = 0; index > -1; index++) {
//                 var receipt = await web3.eth.getTransactionReceipt(hash)
//                 if (receipt != null) {
//                     window.location.reload(false)
//                     break;
//                 }
//             }
//         })
//         .on("error", (error) => {
//             toast("Something went wrong while Approving");
//             return false
//         });
// };
