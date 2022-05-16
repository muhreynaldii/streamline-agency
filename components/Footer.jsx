import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="flex h-1/2 w-full flex-col items-start justify-around bg-gray-50 p-20 md:flex-row">
        <div className="p-5 ">
          <ul>
            <p className="pb-6 text-3xl font-bold text-gray-800">
              Stream<span className="text-indigo-600">line</span>
            </p>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="cursor-pointer text-2xl text-gray-500 hover:text-yellow-600" />
              <FaTwitter className="cursor-pointer text-2xl text-gray-500 hover:text-violet-600" />
              <FaLinkedin className="cursor-pointer text-2xl text-gray-500 hover:text-violet-600" />
              <FaYoutube className="cursor-pointer text-2xl text-gray-500 hover:text-red-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="pb-4 text-2xl font-bold text-gray-800">Product</p>
            <li className="cursor-pointer pb-2 text-sm font-semibold text-gray-500 hover:text-violet-600">
              Web Apps
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold text-gray-500 hover:text-violet-600">
              Apps
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold text-gray-500 hover:text-violet-600">
              Color Generator <span className="text-violet-600">New</span>
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold text-gray-500 hover:text-violet-600">
              Themes
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="pb-4 text-2xl font-bold text-gray-800">Company</p>
            <li className="cursor-pointer pb-2 text-sm font-semibold text-gray-500 hover:text-violet-600">
              Services
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold text-gray-500 hover:text-violet-600">
              About
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold text-gray-500 hover:text-violet-600">
              Blog
            </li>

            <li className="cursor-pointer pb-2 text-sm font-semibold text-gray-500 hover:text-violet-600">
              Press & Media
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="pb-4 text-2xl font-bold text-gray-800">Support</p>
            <li className="cursor-pointer pb-2 text-sm font-semibold text-gray-500 hover:text-violet-600">
              Contact
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold text-gray-500 hover:text-violet-600">
              FAQ&apos;s
            </li>

            <li className="cursor-pointer pb-2 text-sm font-semibold text-gray-500 hover:text-violet-600">
              Downloads & Resources
            </li>
            <li className="cursor-pointer pb-2 text-sm font-semibold text-gray-500 hover:text-violet-600">
              Videos
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
