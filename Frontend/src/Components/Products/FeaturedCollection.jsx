import React from "react";
import { Link } from "react-router-dom";
import featured from "../../assets/group.png";

const FeaturedCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="contaienr mx-auto flex flex-col-reverse lg:flex-row items-center bg-blue-50 rounded-3xl">
        {/* Left Content */}
        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            🧥 Relaxed Fits, Refined Looks
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Built for Real Life, Worn with Confidence
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Crafted with care, styled with purpose. Because comfort should never
            compromise style.
          </p>
          <Link
            to="/collections/all"
            className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:text-gray-300"
          >
            Explore Now
          </Link>
        </div>
        {/* Right Content */}
        <div className="lg:w-1/2">
          <img
            src={featured}
            alt="Featured Collection"
            className="w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
