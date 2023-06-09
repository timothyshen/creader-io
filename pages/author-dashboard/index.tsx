import React, { useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { Line } from "react-chartjs-2";
import AuthorCentreLayout from "@/app/layout/authorCentreLayout";

const AuthorDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const chartData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sample Data",
        data: [12, 19, 3, 5, 2],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.4)",
      },
    ],
  };

  const bardata = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sample Data",
        data: {
          datasets: [
            { fill: "origin" }, // 0: fill to 'origin'
            { fill: "+2" }, // 1: fill to dataset 3
            { fill: 1 }, // 2: fill to dataset 1
            { fill: false }, // 3: no fill
            { fill: "-2" }, // 4: fill to dataset 2
            { fill: { value: 25 } }, // 5: fill to axis value 25
          ],
        },
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.4)",
      },
    ],
  };
  return (
    <>
      <Head>
        <title>Author Dashboard - Decentralized Publishing Platform</title>
        <meta
          name="description"
          content="Manage your works, track your earnings, and connect with your readers on our decentralized publishing platform."
        />
      </Head>
      <AuthorCentreLayout>
        <section className="col-span-9">
          {/* Main content goes here */}
          <h2 className="text-2xl font-bold mb-4">
            Welcome to your Author Dashboard
          </h2>
          <p>
            This is your Author Dashboard where you can manage your works, track
            your earnings, and connect with your readers.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-lg font-bold mb-2">Total Works</h3>
              <p className="text-2xl">10</p>
            </div>

            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-lg font-bold mb-2">Total Earnings</h3>
              <p className="text-2xl">1200 Creader Tokens</p>
            </div>

            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-lg font-bold mb-2">Total Readers</h3>
              <p className="text-2xl">900</p>
            </div>
          </div>

          {/* Add most recent book component */}
          <section className="mt-8">
            <h3 className="text-xl font-bold mb-4">Most Recent Work</h3>
            <div className="bg-gray-100 p-4 rounded">
              <h4 className="text-lg font-bold mb-2">
                Title of the most recent work
              </h4>
              <p>Short description of the most recent work...</p>
            </div>
          </section>

          {/* Add 2x2 grid to display some status */}
          <section className="mt-8">
            <h3 className="text-xl font-bold mb-4">Status Overview</h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="text-lg font-bold mb-2">Status 1</h3>
                <Line data={chartData} />
              </div>

              <div className="bg-gray-100 p-4 rounded">
                <h3 className="text-lg font-bold mb-2">Status 2</h3>
                <Line data={chartData} />
              </div>

              <div className="bg-gray-100 p-4 rounded">
                <h3 className="text-lg font-bold mb-2">Status 3</h3>
                <Line data={chartData} />
              </div>

              <div className="bg-gray-100 p-4 rounded">
                <h3 className="text-lg font-bold mb-2">Status 4</h3>
                <Line data={chartData} />
              </div>
            </div>
          </section>
        </section>
      </AuthorCentreLayout>
    </>
  );
};

export default AuthorDashboard;
