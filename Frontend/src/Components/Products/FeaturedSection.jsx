import React from "react";
import { HiShoppingBag, HiOutlineCreditCard } from "react-icons/hi";
import { MdAutorenew } from "react-icons/md";

const featuredSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Featured 1 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiShoppingBag className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-2">NO COST NO BORDER SHIPPING</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            On all orders over $100
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <MdAutorenew className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-2">1 Month return</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            Not satisfied? No loss
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiOutlineCreditCard className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-2">SECURE CHECKOUT</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            Your trust Our assurity
          </p>
        </div>
      </div>
    </section>
  );
};

export default featuredSection;
