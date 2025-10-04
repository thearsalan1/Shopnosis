import React from "react";
import Hero from "../Components/Layout/Hero";
import GenderCollectionSection from "../Components/Products/GenderCollection";
import NewArrivals from "../Components/Products/NewArrivals";
import ProductDetails from "../Components/Products/ProductDetails";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <GenderCollectionSection></GenderCollectionSection>
      <NewArrivals></NewArrivals>
      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-4 mt-10">Best Seller</h2>
      <ProductDetails></ProductDetails>
    </div>
  );
};

export default Home;
