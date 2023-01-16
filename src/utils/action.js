import { firestoredb } from "../components/firebase";
import { collection, addDoc } from "firebase/firestore";
import blenny_mint_contractABI from "../abi/blenny-mint.json";
import { toast } from "react-toastify";
import Web3 from "web3/dist/web3.min.js";
import { useEffect } from "react";


const blenny_mint_contractAddress = process.env.REACT_APP_BLENNY_MINT_ADDRESS;

var allData = [];
let mintedPlots = [{ mintedPlote: 1 }];

export const onMint = async (plotID) => {
    const web3 = new Web3(window.ethereum);

    if (plotID == "" || plotID == null || plotID == undefined) {
        toast("Invalid Plot id", {
            toastId: "customId",
        });
    } else {
        //Blenny Mint Contract
        window.blenny_contract = await new web3.eth.Contract(
            blenny_mint_contractABI,
            blenny_mint_contractAddress
        );

        try {
            // console.log(window.blenny_contract.methods);
            const txHash = await web3.eth.sendTransaction({
                to: blenny_mint_contractAddress, // Required except during contract publications.
                from: window.ethereum.selectedAddress, // must match user's active address.
                // value: web3.utils.toHex(nftPriceTemp),
                data: window.blenny_contract.methods.safeMint(plotID).encodeABI(), //make call to buy box
            });
            await addDoc(collection(firestoredb, "mintedPlots"), {
                plotid: plotID,
                minterAddress: window.ethereum.selectedAddress,
                mintDate: new Date(),
            })
                .then(async (docRef) => {
                    window.location.reload();
                    return true;
                })
                .catch((error) => {
                    console.log(error);
                    return false;
                });
        } catch (error) {
            console.log("Error While Minting: ", error);
            toast("Error While Minting: Please Connect Metamask", error);
        }
    }
};