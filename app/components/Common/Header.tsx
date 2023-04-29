import React, { useState } from 'react'
import NextLink from 'next/link'
import ConnectWalletButton from '../ConnectButton/ConnectButton'

const Header: React.FC = () => {
    const [loggedIn, setLoggIn] = useState<Boolean>(true)

    const handleLoggIn = () => {
        setLoggIn(!loggedIn)
    }

    return (
        <header className="bg-blue-500 py-4">
            <nav className="container mx-auto flex justify-between items-center text-white">
                <div className="w-max">
                    <h1 className="font-bold text-xl">
                        <NextLink href="/" className="hover:text-gray-300">
                            Decentralized Publishing
                        </NextLink>
                    </h1>
                </div>
                <div className="w-[60%] left-1">
                    <NextLink href="/" className="mr-4 hover:text-gray-300">
                        Home
                    </NextLink>
                    <NextLink href="/browse" className="mr-4 hover:text-gray-300">
                        Browse
                    </NextLink>
                    <NextLink href="/about" className="hover:text-gray-300">
                        About
                    </NextLink>
                </div>
                {loggedIn && <ConnectWalletButton />}
            </nav>
        </header>
    )
}

export default Header
