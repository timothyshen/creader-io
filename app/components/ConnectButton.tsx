import React, { useState } from "react";
import { ethers } from "ethers";
import Button from "./Common/Button";
import { useRouter } from "next/router";

const ConnectWalletButton: React.FC = () => {
  const [address, setAddress] = useState("");
  const router = useRouter();

  const handleConnectWallet = async () => {
    // Check if the user has an Ethereum wallet installed
    if (!window.ethereum) {
      alert(
        "Please install an Ethereum wallet like MetaMask to connect to this application."
      );
      return;
    }

    // Request access to the user's Ethereum wallet
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    try {
      await (window.ethereum as any).request({ method: "eth_requestAccounts" });
      const accounts = await provider.listAccounts();
      setAddress(accounts[0]);
      const userAddress = accounts[0];
      setAddress(userAddress);
      alert("Successfully connected to wallet!");
    } catch (err) {
      alert("Failed to connect to wallet.");
      console.error(err);
    }
  };

  const handleNavigateToMint = () => {
    router.push("/mint");
  };

  const sliceAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const buttonText = address
    ? `Connected: ${sliceAddress(address)}`
    : "Connect Wallet";

  return (
    <div className="flex flex-col items-center">
      <Button
        onClick={handleConnectWallet}
        className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default ConnectWalletButton;
