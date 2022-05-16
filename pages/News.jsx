import React from "react";
import { FcBbc } from "react-icons/fc";
import { SiCnn, SiDesignernews } from "react-icons/si";

function News() {
  return (
    <div className="my-20">
      <p className="text-center uppercase text-violet-500">Press</p>
      <h2 className="text-center text-5xl">
        Press <span className="font-bold">Attention</span>
      </h2>
      <div className="flex items-center justify-center">
        <div className="my-20 mx-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="group cursor-pointer rounded-md border border-violet-100 p-8 hover:border-violet-500">
            <FcBbc className="text-4xl text-gray-600" />
            <h1 className="my-2 text-xl font-semibold text-gray-800">
              Best Agency for App & web product with 100% quality work.
            </h1>
            <a
              href="#"
              className="text-xl text-violet-500 group-hover:text-violet-800"
            >
              {" "}
              Read More...
            </a>
          </div>
          <div className="group cursor-pointer rounded-md border border-violet-100 p-8 hover:border-violet-500">
            <SiCnn className="text-4xl text-gray-600" />
            <h1 className="my-2 text-xl font-semibold text-gray-800 ">
              Product Hunt for Online Programming Courses & Tutorials
            </h1>
            <a
              href="#"
              className="text-xl text-violet-500 group-hover:text-violet-800"
            >
              {" "}
              Read More...
            </a>
          </div>
          <div className="group cursor-pointer rounded-md border border-violet-100 p-8 hover:border-violet-500">
            <SiDesignernews className="text-4xl text-gray-600" />
            <h1 className="my-2 text-xl font-semibold text-gray-800">
              Best Agency for digital product with full ownership.
            </h1>
            <a
              href="#"
              className="text-xl text-violet-500 group-hover:text-violet-800"
            >
              {" "}
              Read More...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
