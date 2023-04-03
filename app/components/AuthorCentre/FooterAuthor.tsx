import React from "react";

const FooterAuthor: React.FC = () => {
  return (
    <footer className="bg-blue-500 text-white ">
      <div className=" py-4">
        <div className="container mx-auto flex justify-between items-center">
          <p className="">
            &copy; 2021 Decentralized Publishing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterAuthor;
