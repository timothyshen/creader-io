import React, { useState } from "react";
import NextLink from "next/link";
import ConnectWalletButton from "../ConnectButton";

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
        {loggedIn ? (
          <ul className="flex space-x-4">
            <li>
              <NextLink className="text-white" href="/author-dashboard">
                Dashboard
              </NextLink>
            </li>
            <li>
              <NextLink className="text-white" href="/profile">
                Profile
              </NextLink>
            </li>
            <li>
              <NextLink className="text-white" href="/" onClick={handleLoggIn}>
                Log Out
              </NextLink>
            </li>
          </ul>
        ) : (
          <ConnectWalletButton />
        )}
      </nav>
    </header>
  );
};

export default Header;
