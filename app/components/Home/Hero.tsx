import React from "react";
import Button from "../Common/Button";
const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-20 text-center w-full">
      <h1 className="text-4xl font-bold mb-4">Welcome to Creader</h1>
      <p className="text-xl mb-4">
        A decentralized platform for publishing and protecting your literary
        works
      </p>
      <Button>{"Get Started"}</Button>
    </div>
  );
};

export default Hero;
