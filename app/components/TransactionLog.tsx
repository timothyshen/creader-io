// src/components/TransactionHistory.tsx

import React from 'react';
import { ethers } from 'ethers';

type TransactionHistoryProps = {
  transactions: ethers.providers.TransactionReceipt[];
};

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ transactions }) => {
  if (!transactions.length) {
    return null;
  }

  return (
    <div className="w-full p-4 mt-8 bg-white rounded shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Transaction History</h2>
      {transactions.map((transaction, index) => (
        <div key={transaction.transactionHash} className="mb-2">
          <strong>Transaction {index + 1}:</strong> {transaction.transactionHash}
        </div>
      ))}
    </div>
  );
};

export default TransactionHistory;
