import React, { ReactNode, useState } from "react";
import Link from "next/link";

interface TabProps {
  tab: string;
  children: ReactNode;
}

const UserDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("nfts");

  const Tab = ({ tab, children }: TabProps) => (
    <button
      className={`px-4 py-2 rounded-t-lg focus:outline-none ${
        activeTab === tab
          ? "bg-white text-blue-600 border-blue-600"
          : "bg-blue-100 text-gray-700 border-gray-300"
      } border-b-2`}
      onClick={() => setActiveTab(tab)}
    >
      {children}
    </button>
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">User Dashboard</h1>
      <div className="bg-white border border-gray-300 rounded-lg">
        <div className="border-b border-gray-300 flex space-x-2">
          <Tab tab="nfts">My NFTs</Tab>
          <Tab tab="content">Purchased/Licensed Content</Tab>
          <Tab tab="transactions">Transaction History</Tab>
        </div>
        {activeTab === "nfts" && (
          <div className="p-4">
            {/* Replace this part with dynamic content loaded from your backend */}
            {/* Loop through the NFTs and create a card for each */}
            <h2 className="text-2xl mb-4">My NFTs:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="text-xl font-bold mb-2">NFT Title</h3>
                <p className="text-blue-700">Author Name</p>
              </div>
              {/* Add more cards for each NFT */}
            </div>
          </div>
        )}

        {activeTab === "content" && (
          <div className="p-4">
            {/* Replace this part with dynamic content loaded from your backend */}
            {/* Loop through the purchased/licensed content and create a card for each */}
            <h2 className="text-2xl mb-4">Purchased/Licensed Content:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="text-xl font-bold mb-2">Content Title</h3>
                <p className="text-blue-700">Author Name</p>
              </div>
              {/* Add more cards for each purchased/licensed content */}
            </div>
          </div>
        )}

        {activeTab === "transactions" && (
          <div className="p-4">
            <h2 className="text-2xl mb-4">Transaction History:</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-100">
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Transaction ID</th>
                  <th className="px-6 py-4">Content</th>
                  <th className="px-6 py-4">Amount</th>
                </tr>
              </thead>
              <tbody>
                {/* Replace this part with dynamic content loaded from your backend */}
                {/* Loop through the transactions and create a row for each */}
                <tr className="hover:bg-gray-100">
                  <td className="border-t px-6 py-4">2023-03-22</td>
                  <td className="border-t px-6 py-4">0x123abc...</td>
                  <td className="border-t px-6 py-4">Novel Title</td>
                  <td className="border-t px-6 py-4">100 Creader Tokens</td>
                </tr>
                {/* Add more rows for each transaction */}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
