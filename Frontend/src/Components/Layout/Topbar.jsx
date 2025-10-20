import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="bg-blue-800 text-white">
      <div className="container mx-auto flex justify-between items-center  px-4 py-3">
        <div className=" md:flex items-center space-x-4 hidden ">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta />
          </a>
          <a href="#" className="hover:hover:text-gray-300">
            <IoLogoInstagram />
          </a>
          <a href="#" className="hover:hover:text-gray-300">
            <RiTwitterXLine className="h-4 w-4" />
          </a>
        </div>
        <div>
          <p className="text-sm text-center flex-grow">
            {" "}
            Wherever You Are, We Deliver — Fast & Trusted Shipping!
          </p>
        </div>
        <div className="text-sm hidden md:block">
          <p className="hover:hover:text-gray-300">Shopnosis</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
