import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";

const NewArrivals = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const [newArrivals, setNewArrivals] = useState([]);
  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/new-arrivals`
        );
        setNewArrivals(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNewArrivals();
  }, []);
  return (
    <section>
      <div className="container max-w-7xl mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nulla
          necessitatibus obcaecati
        </p>

        <div className="absolute right-0 bottom-[-30px] flex space-x-2 z-10">
          <button
            onClick={scrollLeft}
            className="p-2 rounded border bg-white text-black"
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 rounded border bg-white text-black"
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="container mx-auto max-w-7xl overflow-x-scroll flex space-x-6 relative scrollbar px-2"
      >
        {newArrivals.map((product) => (
          <Link
            to={`/product/${product._id}`}
            key={product._id}
            className="min-w-[300px] sm:w-[250px] bg-black h-[300px] relative rounded"
          >
            <img
              src={product.images[0].url}
              className="h-full w-full object-cover"
              alt={product.images[0].altText}
              draggable={false}
            />
            <div className="flex flex-col absolute bottom-0 w-full h-[20%] bg-gray-200/10 backdrop-blur-sm px-3 py-2">
              <h1 className="font-semibold text-white">{product.name}</h1>
              <h2 className="text-xs text-gray-300">size: ${product.price}</h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
