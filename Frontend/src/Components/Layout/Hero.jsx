import React from "react";
import heroImg from "../../assets/hero2.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative">
      <div>
        <img
          src={heroImg}
          alt="shopnosis"
          className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center ">
        <div className="text-center text-white p-6 z-100">
          <h1 className="sm:text-4xl  md:text-6xl  tracking-tight uppercase mb-4 font-bold">
            {" "}
            Style That Speaks. Fashion That Moves.
          </h1>
          <p className="mb-10 sm:text-xl  md:text-4xl  tracking-tight text-gray-200">
            Discover the latest trends in streetwear, casuals, and more.
          </p>
          <Link
            to="#"
            className="bg-black mr-2 text-white px-6 py-3 rounded hover:bg-gray-800 transition"
          >
            Shop Now
          </Link>
          <Link
            to="#"
            className="bg-white text-black px-6 py-3 rounded hover:bg-gray-300 transition"
          >
            Explore Collections
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
