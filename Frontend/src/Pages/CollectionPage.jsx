import React, { useEffect, useRef, useState } from "react";
import { FiFilter } from "react-icons/fi";
import FilterSidebar from "../Components/Products/FilterSidebar";
import SortOptions from "../Components/Products/SortOptions";
import ProductGrid from "../Components/Products/ProductGrid";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleOnClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };
  useEffect(() => {
    // Adding event listner for click
    document.addEventListener("mousedown", handleOnClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleOnClickOutside);
    };
  }, []);
  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: 1,
          name: "Product 1",
          price: 100,
          image: [{ url: "https://picsum.photos/id/1015/400/300" }],
        },
        {
          _id: 2,
          name: "Product 2",
          price: 120,
          image: [{ url: "https://picsum.photos/id/1025/400/300" }],
        },
        {
          _id: 3,
          name: "Product 3",
          price: 90,
          image: [{ url: "https://picsum.photos/id/1035/400/300" }],
        },
        {
          _id: 4,
          name: "Product 4",
          price: 150,
          image: [{ url: "https://picsum.photos/id/1045/400/300" }],
        },
        {
          _id: 5,
          name: "Product 5",
          price: 160,
          image: [{ url: "https://picsum.photos/id/1045/400/300" }],
        },
        {
          _id: 6,
          name: "Product 6",
          price: 140,
          image: [{ url: "https://picsum.photos/id/1045/400/300" }],
        },
        {
          _id: 7,
          name: "Product 7",
          price: 130,
          image: [{ url: "https://picsum.photos/id/1045/400/300" }],
        },
        {
          _id: 8,
          name: "Product 8",
          price: 120,
          image: [{ url: "https://picsum.photos/id/1045/400/300" }],
        },
      ];
      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filter Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FiFilter className="mr-2" />
        Personalised
      </button>

      {/* Filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-0  border-r-1 border-gray-300`}
      >
        <FilterSidebar></FilterSidebar>
      </div>
      <div className="flex-grow p-4 w-full md:w-2/3">
        <h2 className="text-2xl uppercase mb-4">All collections</h2>

        {/* Sort Option */}
        <SortOptions />
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;
