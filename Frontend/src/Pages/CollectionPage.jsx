import React, { useEffect, useRef, useState } from "react";
import { FiFilter } from "react-icons/fi";
import FilterSidebar from "../Components/Products/FilterSidebar";
import SortOptions from "../Components/Products/SortOptions";
import ProductGrid from "../Components/Products/ProductGrid";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByFilter } from "../Redux/slices/productsSlice";

const CollectionPage = () => {
  const { collection } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const queryParams = Object.fromEntries([...searchParams]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchProductsByFilter({ collection, ...queryParams }));
  }, [dispatch, collection, searchParams]);
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
        <ProductGrid products={products} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default CollectionPage;
