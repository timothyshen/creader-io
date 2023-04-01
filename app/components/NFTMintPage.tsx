// src/components/NFTMintPage.tsx

import React, { useState } from "react";
import { ethers } from "ethers";
import Button from "./Common/Button";
import { connect } from "../util/contract/contract";

const NFTMintPage: React.FC = () => {
  const [address, setAddress] = useState("");
  const [uri, setUri] = useState("");

  const mintNFT = async () => {
    if (!window.ethereum) {
      alert(
        "Please install an Ethereum wallet like MetaMask to connect to this application."
      );
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const { baseContract } = await connect();
    console.log(baseContract);

    await (window.ethereum as any).request({ method: "eth_requestAccounts" });
    const accounts = await provider.listAccounts();
    console.log(accounts);

    try {
      const mint = await baseContract.functions.mint(uri);
      await mint.wait();
      alert("NFT successfully minted!");
    } catch (err) {
      alert("Failed to mint NFT.");
      console.error(err);
    }
  };

  return (
    <>
      <div>
        <h1 className="mb-4 text-2xl font-semibold text-center">
          Mint Your NFT
        </h1>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            URI
          </label>
          <input
            type="text"
            placeholder="Enter NFT URI"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500 focus:ring-blue-500"
            onChange={(e) => setUri(e.target.value)}
          />
        </div>
        <div className="mx-auto">
          <Button
            onClick={mintNFT}
            className="w-full mb-3 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Mint NFT
          </Button>
          <Button
            onClick={mintNFT}
            className="w-full text-white bg-red-600 rounded-md hover:bg-red-700"
          >
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
};

export default NFTMintPage;
