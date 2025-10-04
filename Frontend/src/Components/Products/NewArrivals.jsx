import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: "200",
      images: [
        {
          url: "https://picsum.photos/seed/jacket1/500/500",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Elegant Lingerie Set",
      price: "150",
      images: [
        {
          url: "https://picsum.photos/seed/lingerie1/500/500",
          altText: "Elegant Lingerie Set",
        },
      ],
    },
    {
      _id: "3",
      name: "Casual Denim Jacket",
      price: "180",
      images: [
        {
          url: "https://picsum.photos/seed/jacket2/500/500",
          altText: "Casual Denim Jacket",
        },
      ],
    },
    {
      _id: "4",
      name: "Lace Bodysuit",
      price: "120",
      images: [
        {
          url: "https://picsum.photos/seed/lingerie2/500/500",
          altText: "Lace Bodysuit",
        },
      ],
    },
    {
      _id: "5",
      name: "Silk Robe",
      price: "220",
      images: [
        {
          url: "https://picsum.photos/seed/robe1/500/500",
          altText: "Silk Robe",
        },
      ],
    },
    {
      _id: "6",
      name: "Leather Biker Jacket",
      price: "250",
      images: [
        {
          url: "https://picsum.photos/seed/jacket3/500/500",
          altText: "Leather Biker Jacket",
        },
      ],
    },
  ];

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
