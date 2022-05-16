import React from "react";

import icons from "react-icons";

import {
  MdWeb,
  MdOutlineDesignServices,
  MdChatBubbleOutline,
} from "react-icons/md";

import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { GiGrowth } from "react-icons/gi";
import { SiAzuredevops } from "react-icons/si";

function Service() {
  return (
    <div className="my-20">
      <p className="text-center uppercase text-violet-500">Services</p>
      <h2 className="text-center text-5xl">
        Our Best <span className="font-bold">Services</span>
      </h2>
      <div className="flex items-center justify-center">
        <div className="my-20 mx-10 grid grid-cols-2 gap-5 md:mx-0 md:grid-cols-3">
          <div className="group cursor-pointer flex-col items-center justify-center rounded-md border border-violet-100 p-8 hover:bg-violet-500 hover:shadow-lg">
            <MdWeb className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="my-2 text-xl font-semibold text-gray-600 group-hover:text-white">
              Web Development
            </h1>
          </div>
          <div className="group cursor-pointer flex-col items-center justify-center rounded-md border border-violet-100 p-8 hover:bg-violet-500 hover:shadow-lg">
            <MdOutlineDesignServices className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="my-2 text-xl font-semibold text-gray-600 group-hover:text-white">
              App Development
            </h1>
          </div>
          <div className="group cursor-pointer flex-col items-center justify-center rounded-md border border-violet-100 p-8 hover:bg-violet-500 hover:shadow-lg">
            <MdChatBubbleOutline className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="my-2 text-xl font-semibold text-gray-600 group-hover:text-white">
              UI/UX Design
            </h1>
          </div>
          <div className="group cursor-pointer flex-col items-center justify-center rounded-md border border-violet-100 p-8 hover:bg-violet-500 hover:shadow-lg">
            <AiOutlineAppstoreAdd className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="my-2 text-xl font-semibold text-gray-600 group-hover:text-white">
              AI Chatbot
            </h1>
          </div>
          <div className="group cursor-pointer flex-col items-center justify-center rounded-md border border-violet-100 p-8 hover:bg-violet-500 hover:shadow-lg">
            <GiGrowth className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="my-2 text-xl font-semibold text-gray-600 group-hover:text-white">
              Growth Hacking
            </h1>
          </div>
          <div className="group cursor-pointer flex-col items-center justify-center rounded-md border border-violet-100 p-8 hover:bg-violet-500 hover:shadow-lg">
            <SiAzuredevops className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="my-2 text-xl font-semibold text-gray-600 group-hover:text-white">
              Devops
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
