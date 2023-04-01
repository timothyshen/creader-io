import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NFTMintPage from "@/app/components/NFTMintPage";

interface Novel {
  id: number;
  title: string;
  author: string;
  description: string;
  contentPreview: string;
}

const NovelDetails: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handlePurchaseClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const novel: Novel = {
    id: 1,
    title: "Sword God in a World of Magic",
    author: "Fang Xiang",
    description:
      "In a world where magic is everything, a young man named Lu Chen enters the world of magic after mastering the art of swordsmanship. With his powerful sword and unparalleled determination, he sets out to conquer the magical world and become the Sword God.",
    contentPreview:
      "Lu Chen stood at the top of the mountain, gazing out at the world below. With his sword in hand, he felt invincible. He was the Sword God, and nothing could stand in his way...",
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <nav aria-label="breadcrumb">
        <ol className="flex space-x-2">
          <li className="text-gray-500 hover:text-gray-700">
            <Link href="/">Home</Link>
          </li>
          <li className="text-gray-500 hover:text-gray-700">
            <Link href="/">Home</Link>
          </li>
          <li className="text-blue-700" aria-current="page">
            <span>{novel.title}</span>
          </li>
        </ol>
      </nav>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <Image
            className="w-full h-full object-cover mb-4 rounded"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            alt="Novel Cover"
            width={400}
            height={400}
          />
        </div>
        <div className="col-span-2 flex flex-col justify-between">
          <div className="mb-2">
            <h1 className="text-4xl font-bold mb-4 text-blue-700">
              {novel.title}
            </h1>
            <h2 className="text-2xl mb-4">Author: {novel.author}</h2>
            <p className="text-lg mb-8">{novel.description}</p>
            <h3 className="text-2xl mb-2">Content Preview:</h3>
            <p className="text-lg">{novel.contentPreview}</p>
          </div>
          <div className="flex space-x-4">
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
              onClick={handlePurchaseClick}
            >
              Purchase Copyright NFT
            </button>
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
              Access Full Content
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg w-1/2">
            <NFTMintPage />
          </div>
        </div>
      )}
    </div>
  );
};

export default NovelDetails;
