import React from 'react'

const HomeFeature: React.FC = () => {
    return (
        <div className="py-8 px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Platform Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                    <div className="bg-blue-500 text-white p-6 rounded mb-4">Icon</div>
                    <h3 className="text-xl font-bold mb-2">Copyright Protection</h3>
                    <p>Secure your work with blockchain-based copyright protection and NFTs.</p>
                </div>
                <div className="text-center">
                    <div className="bg-blue-500 text-white p-6 rounded mb-4">Icon</div>
                    <h3 className="text-xl font-bold mb-2">Revenue Sharing</h3>
                    <p>Earn a fair share of revenue from your work through our token system.</p>
                </div>
                <div className="text-center">
                    <div className="bg-blue-500 text-white p-6 rounded mb-4">Icon</div>
                    <h3 className="text-xl font-bold mb-2">Community Engagement</h3>
                    <p>Connect with readers and other authors in a decentralized community.</p>
                </div>
            </div>
        </div>
    )
}

export default HomeFeature
