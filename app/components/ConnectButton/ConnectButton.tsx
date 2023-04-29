import React, { useState, useEffect, useRef } from 'react'
import { ethers } from 'ethers'
import Button from '../Common/Button'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { useWalletStore } from '@/app/store/accountStore'

const ConnectWalletButton: React.FC = () => {
    const [showDropdown, setShowDropdown] = useState<boolean>(false)
    const [network, setNetwork] = useState<boolean>(false)
    const { address, setAddress, removeAddress } = useWalletStore()

    const router = useRouter()
    const button = useRef<HTMLButtonElement>(null)

    const handleConnectWallet = async () => {
        // Check if the user has an Ethereum wallet installed
        if (!window.ethereum) {
            alert('Please install an Ethereum wallet like MetaMask to connect to this application.')
            return
        }

        // Request access to the user's Ethereum wallet
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        try {
            await (window.ethereum as any).request({ method: 'eth_requestAccounts' })
            const accounts = await provider.listAccounts()
            await setAddress(accounts[0])
        } catch (err) {
            alert('Failed to connect to wallet.')
            console.error(err)
        }
    }

    const handleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    const handleNetwork = async () => {
        setNetwork(!network)
    }

    const sliceAddress = (address: string) => {
        return `${address.slice(0, 6)}...${address.slice(-4)}`
    }

    const buttonText = address ? `Connected: ${sliceAddress(address)}` : 'Connect Wallet'

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            if (button.current && !button.current.contains(event.target as Node)) {
                setShowDropdown(false)
            }
        }

        window.addEventListener('click', handleClickOutside)

        return () => {
            window.removeEventListener('click', handleClickOutside)
        }
    }, [button])

    return (
        <div className="flex flex-col items-center">
            <div>
                <div>
                    <button
                        type="button"
                        className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-blue-600 text-sm font-medium text-white hover:bg-blue-700"
                        id="options-menu"
                        aria-haspopup="true"
                        aria-expanded={network}
                        onClick={handleNetwork}
                        ref={button}
                    >
                        Ethereum
                        <svg
                            className="-mr-1 ml-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
                {network && (
                    <div className="absolute z-10 w-full mt-2 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <div
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                            >
                                Arbitrum
                            </div>
                            <div
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                            >
                                Polygon
                            </div>
                            <div
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                            >
                                BSC
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {address ? (
                <>
                    <div className="relative inline-block text-left">
                        <div>
                            <button
                                type="button"
                                className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-blue-600 text-sm font-medium text-white hover:bg-blue-700"
                                id="options-menu"
                                aria-haspopup="true"
                                aria-expanded={showDropdown}
                                onClick={handleDropdown}
                                ref={button}
                            >
                                {`Connected: ${sliceAddress(address)}`}
                                <svg
                                    className="-mr-1 ml-2 h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
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
                                        href="/"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                        role="menuitem"
                                        onClick={() => {
                                            removeAddress()
                                        }}
                                    >
                                        Logout
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
                    {'Connect Wallet'}
                </Button>
            )}
        </div>
    )
}

export default ConnectWalletButton
