import React from "react";
import Hero from "../Components/Layout/Hero";
import GenderCollectionSection from "../Components/Products/GenderCollection";
import NewArrivals from "../Components/Products/NewArrivals";
import ProductDetails from "../Components/Products/ProductDetails";
import ProductGrid from "../Components/Products/ProductGrid";
import FeaturedSection from "../Components/Products/FeaturedSection";
import FeaturedCollection from "../Components/Products/FeaturedCollection";

const placeholderProducts = [
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

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <GenderCollectionSection></GenderCollectionSection>
      <NewArrivals></NewArrivals>
      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-4 mt-10">Best Seller</h2>
      <ProductDetails></ProductDetails>
      {/* Top Womens Wears */}
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top wears for Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>
      <div className="w-[90%] mx-auto">
        <FeaturedCollection></FeaturedCollection>
      </div>
      <FeaturedSection></FeaturedSection>
    </div>
  );
};

export default Home;
