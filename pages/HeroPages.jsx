import React from "react";
import Image from "next/image";
import Hero from "../public/images/img-hero.jpg";

function HeroPages() {
  return (
    <div className="container mx-0 md:mx-20">
      <div className="my-10 flex flex-col items-center justify-between md:flex-row">
        <div className="flex-col px-10">
          <h1 className="text-6xl font-bold text-violet-500">
            We are the{" "}
            <span className="text-violet-900">complete solution</span> for your{" "}
            <span className="border-b border-blue-200 text-violet-900">
              {" "}
              brand
            </span>
          </h1>
          <p className="mt-5 mb-10 text-2xl text-gray-400">
            We build beautiful and scalable web and mobile application.
          </p>
          <button className="h-14 rounded-md border-2 border-blue-500 px-8 text-violet-400 hover:bg-violet-500 hover:text-white hover:shadow-md">
            See Our Work
          </button>
        </div>
        <div className="px-10">
          <Image
            src={Hero}
            alt="hero picture"
            objectFit="contain"
            width={900}
            height={900}
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default HeroPages;
