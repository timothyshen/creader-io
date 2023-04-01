import React from "react";
import NextLink from "next/link";

const SubscriberManagementPage = () => {
  const subscribers = [
    {
      id: 1,
      name: "John Doe",
      subscriptionDate: "2023-03-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      subscriptionDate: "2023-02-28",
    },
    // Add more mock subscribers here
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
            <h1 className="text-2xl font-bold mb-6">Subscribers</h1>
            <div className="grid grid-cols-12 gap-8">
              <section className="col-span-9">
                {/* Main content goes here */}
                <table className="w-full text-left table-auto border-collapse">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">Name</th>
                      <th className="border px-4 py-2">Subscription Date</th>
                      <th className="border px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscribers.map((subscriber) => (
                      <tr key={subscriber.id}>
                        <td className="border px-4 py-2">{subscriber.name}</td>
                        <td className="border px-4 py-2">
                          {subscriber.subscriptionDate}
                        </td>
                        <td className="border px-4 py-2">
                          <button className="bg-blue-500 text-white px-4 py-2 rounded">
                            View Profile
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
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

export default SubscriberManagementPage;
