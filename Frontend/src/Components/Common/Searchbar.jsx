import React, { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";
import { Form } from "react-router-dom";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search itme :", searchTerm);
    setIsOpen(false);
  };
  return (
    <div
      className={`flex justify-center items-center w-full transition-all duration-300 ${
        isOpen ? "absolute left-0 top-0 bg-white h-24 z-50" : "w-full"
      }`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="relative flex items-center justify-center w-full"
        >
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-100 py-2 px-4 pr-12 rounded focus:outline-none w-full placeholder:text-gray-700"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <HiMagnifyingGlass className="w-4 h-4" />
            </button>
          </div>
          <button
            className="absolute right-5 text-gray-600 top-1/2 transform -translate-y-1/2  hover:text-gray-800 "
            onClick={handleSearchToggle}
          >
            <HiMiniXMark className="w-5 h-5" />
          </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Searchbar;
