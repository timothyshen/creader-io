// src/pages/mint.tsx

import React from 'react'
import NFTMintPage from '@/app/components/NFTMintPage'
import TransactionHistory from '@/app/components/TransactionLog'

const MintPage: React.FC = () => {
    return (
        <div>
            <NFTMintPage />
            <TransactionHistory transactions={[]} />
        </div>
    )
}

export default MintPage
