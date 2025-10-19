import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updateCartItemQuantity,
} from "../../Redux/slices/cartSlice";

const CartContent = ({ cart, userId, guestId }) => {
  const dispatch = useDispatch();

  // Handle quantity updates
  const handleQuantityChange = (productId, delta, quantity, size, color) => {
    const updatedQuantity = quantity + delta;
    if (updatedQuantity >= 1) {
      dispatch(
        updateCartItemQuantity({
          productId,
          quantity: updatedQuantity,
          guestId,
          userId,
          size,
          color,
        })
      );
    }
  };

  // Handle item removal
  const handleRemoveItem = (productId, size, color) => {
    dispatch(removeFromCart({ productId, size, color, guestId, userId }));
  };

  // Fallback for empty cart
  if (!cart || !Array.isArray(cart.products) || cart.products.length === 0) {
    return (
      <p className="text-center text-gray-500 py-10">
        Your cart is currently empty.
      </p>
    );
  }

  return (
    <div>
      {cart.products.map((product, index) => {
        const id = product.productId || product._id;
        return (
          <div
            key={id + index}
            className="flex items-center justify-between py-4 border-b"
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
                    Size: {product.size} | Color: {product.color}
                  </p>
                  <div>
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          id,
                          -1,
                          product.quantity,
                          product.size,
                          product.color
                        )
                      }
                      className="px-2.5 mr-1 text-md text-center rounded border font-medium"
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          id,
                          1,
                          product.quantity,
                          product.size,
                          product.color
                        )
                      }
                      className="px-2 ml-2 text-center rounded font-medium border"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between items-center h-full">
                <p>${product.price.toLocaleString()}</p>
                <button
                  onClick={() =>
                    handleRemoveItem(id, product.size, product.color)
                  }
                >
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
