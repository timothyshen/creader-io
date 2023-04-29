import { ethers } from 'ethers'
import { BASE_CONTRACT_ADDRESS } from '../constant'
import abiJSON from '../constant/abi.json'

interface ConnectResult {
    baseContract: ethers.Contract
    signer: ethers.Signer
}

const checkEthereum = (ethereum: any) => {
    if (!ethereum || ethereum.chainId !== '0x5') {
        throw new Error('Please connect to the Goerli network')
    }
}

const getProviderAndSigner = (
    ethereum: any,
): {
    provider: ethers.providers.Web3Provider
    signer: ethers.Signer
} => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    console.log(signer)
    return { provider, signer }
}

const initialContract = (address: string, abi: any, signer: ethers.Signer) => {
    if (!address || !abi) {
        throw new Error('Contract address or ABI is missing or invalid.')
    }
    return new ethers.Contract(address, abi, signer)
}

export const connect = async (): Promise<ConnectResult> => {
    try {
        const { ethereum } = window
        checkEthereum(ethereum)
        const { provider, signer } = getProviderAndSigner(ethereum)
        const baseContract = initialContract(BASE_CONTRACT_ADDRESS, abiJSON, await signer)
        console.log(signer)
        return { baseContract, signer }
    } catch (error: any) {
        console.error('ERROR:', error)
        throw new Error(`Unable to connect to the contract: ${error.message}`)
    }
}
