import React from "react";
import icons from "react-icons";
import {
  FaMicrosoft,
  FaDiscord,
  FaApple,
  FaAmazon,
  FaUber,
} from "react-icons/fa";

function Client() {
  return (
    <div className="my-40 flex-col items-center justify-center">
      <p className="text-center uppercase text-violet-400">Client</p>
      <h2 className="text-center text-5xl">
        Awesome <span className="font-bold">Client</span>
      </h2>
      <div className="flex items-center justify-center ">
        <div className="mt-10 grid grid-cols-3 gap-8 md:grid-cols-5">
          <FaMicrosoft className="cursor-pointer text-6xl text-gray-300 hover:text-black" />
          <FaDiscord className="cursor-pointer text-6xl text-gray-300 hover:text-black" />
          <FaApple className="cursor-pointer text-6xl text-gray-300 hover:text-black" />
          <FaAmazon className="cursor-pointer text-6xl text-gray-300 hover:text-black" />
          <FaUber className="cursor-pointer text-6xl text-gray-300 hover:text-black" />
        </div>
      </div>
    </div>
  );
}

export default Client;
