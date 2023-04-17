import React from "react";
import NextLink from "next/link";
import { Line } from "react-chartjs-2";
import AuthorCentreLayout from "@/app/layout/authorCentreLayout";

const Earnings = () => {
  // Sample data for the earnings chart
  const chartData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Earnings",
        data: [1200, 1500, 1100, 1700, 1400],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.4)",
      },
    ],
  };

  const mockData = [
    {
      txnHash: "0xa16f",
      block: 13245678,
      age: "2 hrs 5 mins ago",
      from: "0xa16f",
      to: "0xa16f",
      amount: "100 Creader",
      txFee: "0.01 ETH ($1.23)",
    },
    {
      txnHash: "0xa16f",
      block: 13245123,
      age: "5 hrs 15 mins ago",
      from: "0xa16f",
      to: "0xa16f",
      amount: "50 Creader",
      txFee: "0.01 ETH ($1.23)",
    },
  ];

  return (
    <>
      <AuthorCentreLayout>
        <section className="col-span-9">
          <h2 className="text-2xl font-bold mb-4">Earnings</h2>
          <div className="bg-gray-100 p-4 rounded">
            <Line data={chartData} />
          </div>
          <div className="mt-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Txn Hash
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Block
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Age
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    From
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    To
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    TxFee
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockData.map((data, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <a href="#" className="text-blue-600 hover:text-blue-800">
                        {data.txnHash}
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {data.block}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{data.age}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <a href="#" className="text-blue-600 hover:text-blue-800">
                        {data.from}
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <a href="#" className="text-blue-600 hover:text-blue-800">
                        {data.to}
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {data.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {data.txFee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </AuthorCentreLayout>
    </>
  );
};

export default Earnings;
