import React, { useState } from "react";
import { ethers } from "ethers";
import Button from "../Common/Button";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";

const ConnectWalletButton: React.FC = () => {
  const [address, setAddress] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
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

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
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
      {address ? (
        <>
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex items-center justify-center w-full rounded-md px-4 py-2 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded={showDropdown}
                onClick={handleDropdown}
              >
                {`Connected: ${sliceAddress(address)}`}
                <FontAwesomeIcon
                  icon={showDropdown ? faSortDown : faSortUp}
                  style={{
                    color: "white",
                    fontSize: "1.25rem",
                    marginTop: showDropdown ? undefined : "0.5rem",
                    marginBottom: showDropdown ? "0.5rem" : undefined,
                    transition: "margin 0.3s linear",
                  }}
                  className="-mr-1 ml-2"
                />
              </button>
            </div>
            {showDropdown && (
              <div className="absolute z-10 w-full mt-2 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <NextLink
                    href="/author-dashboard"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Dashboard
                  </NextLink>
                  <NextLink
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Profile
                  </NextLink>
                  <NextLink
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Log out
                  </NextLink>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <Button
          onClick={handleConnectWallet}
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          {"Connect Wallet"}
        </Button>
      )}
    </div>
  );
};

export default ConnectWalletButton;
