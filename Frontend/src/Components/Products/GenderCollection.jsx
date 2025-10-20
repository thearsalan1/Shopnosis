import React from "react";
import menCollectionSection from "../../assets/mens-collection.png";
import womenCollectionSection from "../../assets/womens-collection.png";
import { Link } from "react-router-dom";

const GenderCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Women's Collection */}
        <div className="relative flex-1">
          <img
            src={womenCollectionSection}
            alt="Women's Collection"
            className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 bg-white bg-opacity-90 p-4 rounded-md max-w-[80%]">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
              Women's Collection
            </h2>
            <Link
              to="/collections/all?gender=Women"
              className="text-sm sm:text-base text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Men's Collection */}
        <div className="relative flex-1">
          <img
            src={menCollectionSection}
            alt="Men's Collection"
            className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 bg-white bg-opacity-90 p-4 rounded-md max-w-[80%]">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
              Men's Collection
            </h2>
            <Link
              to="/collections/all?gender=Men"
              className="text-sm sm:text-base text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollection;
