import React, { useEffect, useState } from "react";
import Hero from "../Components/Layout/Hero";
import GenderCollectionSection from "../Components/Products/GenderCollection";
import NewArrivals from "../Components/Products/NewArrivals";
import ProductDetails from "../Components/Products/ProductDetails";
import ProductGrid from "../Components/Products/ProductGrid";
import FeaturedSection from "../Components/Products/FeaturedSection";
import FeaturedCollection from "../Components/Products/FeaturedCollection";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByFilter } from "../Redux/slices/productsSlice";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [bestSellerProduct, setBestSellerProducts] = useState(null);

  useEffect(() => {
    // Fetch products for a specific collection
    dispatch(
      fetchProductsByFilter({
        gender: "Women",
        category: "Bottom Wear",
        limit: 8,
      })
    );
    // Fetch best seller product
    const fetchBestSeller = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
        );
        setBestSellerProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBestSeller();
  }, [dispatch]);

  return (
    <div>
      <Hero></Hero>
      <GenderCollectionSection></GenderCollectionSection>
      <NewArrivals></NewArrivals>
      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-4 mt-10">
        Best Seller
      </h2>{" "}
      {bestSellerProduct ? (
        <ProductDetails productId={bestSellerProduct._id}></ProductDetails>
      ) : (
        <p className="text-center">Fetching data</p>
      )}
      {/* Top Womens Wears */}
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top wears for Women
        </h2>
        <ProductGrid products={products} loading={loading} error={error} />
      </div>
      <div className="w-[90%] mx-auto">
        <FeaturedCollection></FeaturedCollection>
      </div>
      <FeaturedSection></FeaturedSection>
    </div>
  );
};

export default Home;
