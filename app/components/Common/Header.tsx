import React, { useState } from "react";
import NextLink from "next/link";
import ConnectWalletButton from "../ConnectButton/ConnectButton";

const Header: React.FC = () => {
  const [loggedIn, setLoggIn] = useState<Boolean>(true);

  const handleLoggIn = () => {
    setLoggIn(!loggedIn);
  };

  return (
    <header className="bg-blue-500 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">
          Decentralized Publishing
        </h1>
        {loggedIn && <ConnectWalletButton />}
      </nav>
    </header>
  );
};

export default Header;
