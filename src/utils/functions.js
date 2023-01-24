
import * as dotenv from 'dotenv'
import Defly_Nft_Staking from "../abi/deflyNFTStaking.json";
import Erc20_contractABI from "../abi/ERC20.json";
import defly_mint_ERC721_contractABI from "../abi/MintERC721.json";
import defly_Token_Staking_ABI from "../abi/TokenStaking.json";
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

const VITE_DEFLY_Token_STAKING = import.meta.env.VITE_DEFLY_Token_STAKING

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
window.defly_ERC20_contract = await new web3.eth.Contract(
    Erc20_contractABI,
    VITE_ERC_20s
);
window.defly_Token_contract = await new web3.eth.Contract(
    defly_Token_Staking_ABI,
    VITE_DEFLY_Token_STAKING
);


const label = { inputProps: { "aria-label": "Checkbox demo" } };
// const getAllTokens = async () => {
//     const allNFTs = await getNFTs();
//     console.log(allNFTs);
//     var temp = [];
//     allNFTs.map((item, index) => {
//         // console.log(item);
//         axios.get(item.tokenURI).then((res) => {
//             // console.log(res.data);

//             temp.push({
//                 description: res.data.description,
//                 id: res.data.id,
//                 image: res.data.image,
//                 image_1: res.data.image_1,
//                 name: res.data.name,
//                 tokenId: item.tokenid,
//                 attributes: res.data.attributes,
//             })
//             setNFTdetails(temp)
//         })
//     })

// }

export const getTokens = async () => {
    let nfts_data_new = await window.defly_ERC20_contract.methods
        .balanceOf(window.ethereum.selectedAddress)
        .call();
    const etherValue = Web3.utils.fromWei(nfts_data_new, 'ether');
    console.log(etherValue);
    // const tokensCustom = web3.utils.toWei(String(tokens), "ether");
    // nfts_data_new = nfts_data_new / 1000000000000000000;

    return etherValue;
};


export const checkApprove = async () => {
    let nfts_data_new = await window.defly_ERC20_contract.methods
        .allowance(window.ethereum.selectedAddress,VITE_DEFLY_Token_STAKING)
        .call();
    const etherValue = Web3.utils.fromWei(nfts_data_new, 'ether');
    console.log(etherValue);
    // const tokensCustom = web3.utils.toWei(String(tokens), "ether");
    // nfts_data_new = nfts_data_new / 1000000000000000000;

    return etherValue;
};


// export const getMyNFTsDataOld = async () => {

//     var nftData = [];
//     try {
//         const nfts_data_new = await window.defly_nft_contract_old.methods
//             .balanceOf(window.ethereum.selectedAddress)
//             .call();

//         //loop for fetching tokenIDs
//         for (var i = 0; i < nfts_data_new; i++) {
//             const tokenIdofOwner = await window.defly_nft_contract_old.methods
//                 .tokenOfOwnerByIndex(window.ethereum.selectedAddress, i)
//                 .call();


//             const url = await window.defly_nft_contract_old.methods
//                 .tokenURI(tokenIdofOwner)
//                 .call();

//             const response = await fetch(url);

//             if (!response.ok) {
//                 console.log("Something went wrong!");
//                 throw new Error("Something went wrong!");
//                 // continue;
//             }
//             const data = await response.json();
//             data.tokenId = tokenIdofOwner;

//             nftData.push(data);

//             if (i == nfts_data_new - 1) {
//                 return {
//                     success: true,
//                     msg: "Data Fetched Successfully",
//                     nftData: nftData,
//                 };
//             }
//         }
//         if (nfts_data_new == 0) {
//             return {
//                 success: false,
//                 msg: "No Data Fetched",
//                 nftData: [],
//             };
//         }
//     } catch (err) {

//         console.log(err);
//         return {
//             success: false,
//             msg: err,
//             nftData: [],
//         };
//     }


// };
export const StakeToken = async (customTokens, tier) => {
    const tokensCustom = web3.utils.toWei(String(customTokens), "ether");
    console.log(tokensCustom);
    window.defly_Token_contract.methods.deposit(tokensCustom, tier)
        .send({ from: window.ethereum.selectedAddress })
        .on("transactionHash", async (hash) => {
            console.log(hash);
            for (let index = 0; index > -1; index++) {
                var receipt = await web3.eth.getTransactionReceipt(hash)
                if (receipt != null) {
                    window.location.reload(false)
                    break;
                }
                console.log("hello");
            }
        })
        .on("error", (error) => {
            toast("Something went wrong while Approving");

        });

};
// export const approveTokens = async (tokens) => {
//     const tokensCustom = web3.utils.toWei(String(tokens), "ether");
//     console.log(tokensCustom);
//     window.defly_ERC20_contract.methods
//         .approve(VITE_DEFLY_Token_STAKING, tokensCustom)
//         .send({ from: window.ethereum.selectedAddress })
//         .on("transactionHash", async (hash) => {
//             console.log(hash);
//             for (let index = 0; index > -1; index++) {
//                 var receipt = await web3.eth.getTransactionReceipt(hash)
//                 if (receipt != null) {
//                     // window.location.reload(false)
//                     return true;
//                 }
//                 console.log("hello");
//             }
//         })
//         .on("error", (error) => {
//             toast("Something went wrong while Approving");
//             return false;
//         });
// };
export const getAllStakedTokens = async () => {
    let nfts_data_new = await window.defly_Token_contract.methods
        .Staker(window.ethereum.selectedAddress)
        .call();
    console.log(nfts_data_new);
    let time = await ((Number(nfts_data_new.day) * 24 * 60 * 60) + Number(nfts_data_new.StartTime)) * 1000
    nfts_data_new.countdownTime = time;
    nfts_data_new.tokens = await Web3.utils.fromWei(nfts_data_new.tokens, 'ether');
    return nfts_data_new;
};
export const unStakeToken = async () => {
    window.defly_Token_contract.methods.withdraw(window.ethereum.selectedAddress)
        .send({ from: window.ethereum.selectedAddress })
        .on("transactionHash", async (hash) => {
            console.log(hash);
            for (let index = 0; index > -1; index++) {
                var receipt = await web3.eth.getTransactionReceipt(hash)
                if (receipt != null) {
                    window.location.reload(false)
                    break;
                }
                console.log("hello");
            }
        })
        .on("error", (error) => {
            toast("Something went wrong while Approving");

        });
};

// export const staker = async () => {

//     let stakerDetails = await window.defly_nft_staking.methods
//         .Staker(window.ethereum.selectedAddress).call()

//     if (stakerDetails.DepositToken) {
//         stakerDetails.tokenuri = await window.defly_mint_contract.methods.tokenURI(stakerDetails.NFT).call()

//         let time = await ((Number(stakerDetails.day) * 24 * 60 * 60) + Number(stakerDetails.StartTime)) * 1000

//         stakerDetails.countdownTime = time;
//         return stakerDetails
//     }
//     else {
//         return {}
//     }

//     // await axios.get(stakerDetails.tokenuri).then(async res => {
//     //     console.log(res.data);
//     //     stakerDetails.tokenuri = await window.defly_mint_contract.methods.tokenURI(stakerDetails.NFT).call()
//     //     stakerDetails.data = res.data
//     //     return res.data;
//     // }).catch(err => {
//     //     console.log(err)
//     //     return stakerDetails
//     // })


// };
// export const unstake = async () => {

//     window.defly_nft_staking.methods.withdraw(window.ethereum.selectedAddress)
//         .send({ from: window.ethereum.selectedAddress })
//         .on("transactionHash", async (hash) => {
//             console.log(hash);
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
//         });
// };
