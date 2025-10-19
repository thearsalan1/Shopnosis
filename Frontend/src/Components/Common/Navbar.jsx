import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineShoppingBag,
  HiBars3BottomRight,
  HiOutlineUser,
} from "react-icons/hi2";
import Searchbar from "./Searchbar";
import CartDrawer from "../Layout/CartDrawer";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const { cart } = useSelector((state) => state.cart);

  const cartItemCount =
    cart?.products?.reduce((total, product) => total + product.quantity, 0) ||
    0;

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleHamBurger = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 ">
        <div>
          <Link to="/" className="text-2xl font-medium">
            Shopnosis
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            to="/collections/all?gender=Men"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="/collections/all?gender=Women"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="/collections/all?category=Top Wear"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Top Wear
          </Link>
          <Link
            to="/collections/all?category=Bottom Wear"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Bottom Wear
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            to="/admin"
            className="block bg-black px-2 py-0.5 rounded text-sm text-white"
          >
            Admin
          </Link>
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 bg-[#ea2e0e] text-white text-xs rounded-full px-2 py-0.5">
                {cartItemCount}
              </span>
            )}
          </button>
          <Searchbar />

          <button className="md:hidden" onClick={toggleHamBurger}>
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer toggleCartDrawer={toggleCartDrawer} drawerOpen={drawerOpen} />

      <div
        className={`fixed left-0 top-0 w-1/2 sm:w-2/5 md:w-1/5 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full ">
          <div className="h-1/6 flex items-center justify-center border-b bg-gray-200">
            Shopnosis
            <button>
              <IoMdClose
                className="w-6 h-6 absolute right-2 top-2"
                onClick={toggleHamBurger}
              />
            </button>
          </div>
          <h1 className="text-3xl font-semibold ml-6 mt-5">Menu</h1>
          <div className="flex flex-col gap-5 px-6 pt-6">
            <Link
              to="/collections/all?gender=Men"
              onClick={toggleHamBurger}
              className="text-gray-700 hover:text-black text-sm font-medium uppercase"
            >
              Men
            </Link>
            <Link
              to="/collections/all?gender=Women"
              onClick={toggleHamBurger}
              className="text-gray-700 hover:text-black text-sm font-medium uppercase"
            >
              Women
            </Link>
            <Link
              to="/collections/all?category=Top Wear"
              onClick={toggleHamBurger}
              className="text-gray-700 hover:text-black text-sm font-medium uppercase"
            >
              Top Wear
            </Link>
            <Link
              to="/collections/all?category=Bottom Wear"
              onClick={toggleHamBurger}
              className="text-gray-700 hover:text-black text-sm font-medium uppercase"
            >
              Bottom Wear
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
