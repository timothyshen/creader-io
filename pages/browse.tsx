import React from "react";
import Image from "next/image";

const BrowseDiscover: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Discover Novels</h1>
      <div className="mb-8">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search novels"
        />
      </div>
      <div className="mb-8">
        <h2 className="text-2xl mb-4">Categories:</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded">
            Mystery
          </button>
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded">
            Sci-fi
          </button>
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded">
            Fantasy
          </button>
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded">
            Romance
          </button>
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded">
            Adventure
          </button>
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded">
            Horror
          </button>
          {/* Add more categories as needed */}
        </div>
      </div>
      <div className="mb-8 flex justify-between">
        <h2 className="text-2xl">Novels:</h2>
        <div>
          <label htmlFor="sort" className="mr-2">
            Sort by:
          </label>
          <select
            id="sort"
            className="border-2 border-gray-300 bg-white h-8 pl-2 pr-6 rounded-lg text-sm focus:outline-none"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Replace this part with dynamic content loaded from your backend */}
        {/* Loop through the novels and create a card for each */}
        <div className="bg-white border border-gray-200 p-4 rounded">
          <Image
            className="w-full h-48 object-cover mb-4 rounded"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            alt="Novel Cover"
            width={400}
            height={300}
          />
          <h3 className="text-xl font-bold mb-2">Novel Title</h3>
          <p className="text-blue-700">Author Name</p>
        </div>
        {/* Add more cards for each novel */}
      </div>
    </div>
  );
};

export default BrowseDiscover;
