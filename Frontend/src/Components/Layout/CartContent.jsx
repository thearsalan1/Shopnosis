import React from "react";
import { RiDeleteBin3Line, RiDeleteBin6Fill } from "react-icons/ri";

const CartContent = () => {
  const CartProducts = [
    {
      productId: 1,
      name: "Tshirt",
      color: "Red",
      size: "M",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      color: "Blue",
      size: "L",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=2",
    },
    {
      productId: 3,
      name: "Bra",
      color: "Transparent",
      size: "AA",
      quantity: 2,
      price: 10,
      image: "https://picsum.photos/200?random=3",
    },
    {
      productId: 1,
      name: "Lower",
      color: "Gray",
      size: "M",
      quantity: 1,
      price: 35,
      image: "https://picsum.photos/200?random=4",
    },
  ];
  return (
    <div>
      {CartProducts.map((product, index) => {
        return (
          <div
            key={index}
            className="flex item-center justify-between py-4 border-b"
          >
            <div className="flex items-start justify-between w-full p-2">
              <div className="flex">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 rounded mr-4 object-cover"
                />
                <div>
                  <h3>{product.name}</h3>
                  <p className="text-xs text-gray-500 mb-1">
                    size: {product.size} | color: {product.color}
                  </p>
                  <div>
                    <button className=" px-2.5 mr-1 text-md  text-center rounded border font-medium">
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button className=" px-2 ml-2 text-center rounded font-medium border">
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between items-center h-full">
                <p>$ {product.price.toLocaleString()}</p>
                <button>
                  <RiDeleteBin6Fill className="text-red-500" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartContent;
