import React from "react";
import NextLink from "next/link";
import { Line } from "react-chartjs-2";

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
      <header className="bg-blue-500 py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-white font-bold text-xl">
            Decentralized Publishing
          </h1>
          <ul className="flex space-x-4">
            <li>
              <NextLink className="text-white" href="/profile">
                Profile
              </NextLink>
            </li>
            <li>
              <NextLink className="text-white" href="/logout">
                Log Out
              </NextLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto my-8 min-h-screen">
        <div className="grid grid-cols-12 gap-8">
          <aside className="col-span-3">
            <nav className="bg-gray-100 p-4 rounded">
              <ul className="space-y-4">
                <li>
                  <NextLink
                    className="block py-2.5 px-4 hover:bg-gray-200 text-blue-900 rounded"
                    href="/author-dashboard"
                  >
                    Home
                  </NextLink>
                </li>
                <li>
                  <NextLink
                    className="block py-2.5 px-4 hover:bg-gray-200 text-blue-900 rounded"
                    href="/author-dashboard/work"
                  >
                    My Works
                  </NextLink>
                </li>
                <li>
                  <NextLink
                    className="block py-2.5 px-4 hover:bg-gray-200 text-blue-900 rounded"
                    href="/author-dashboard/subscribers"
                  >
                    Subscriber
                  </NextLink>
                </li>
                <li>
                  <NextLink
                    className="block py-2.5 px-4 hover:bg-gray-200 text-blue-900 rounded"
                    href="/author-dashboard/earnings"
                  >
                    Earnings
                  </NextLink>
                </li>
                <li>
                  <NextLink
                    className="block py-2.5 px-4 hover:bg-gray-200 text-blue-900 rounded"
                    href="/author-dashboard/settings"
                  >
                    Settings
                  </NextLink>
                </li>
              </ul>
            </nav>
          </aside>

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
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {data.txnHash}
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data.block}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data.age}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {data.from}
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-800"
                        >
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
        </div>
      </main>

      <footer className="bg-blue-500 text-white ">
        <div className=" py-4">
          <div className="container mx-auto flex justify-between items-center">
            <p className="">
              &copy; 2021 Decentralized Publishing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Earnings;
