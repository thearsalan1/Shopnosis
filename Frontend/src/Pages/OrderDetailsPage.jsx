import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "PayPal",
      shippingMethod: "Standard",
      shippingAddress: [{ city: "New York", country: "USA" }],
      orderItems: [
        {
          productId: "1",
          name: "Jacket",
          quantity: 2,
          price: 1,
          image: "https://picsum.photos/150?random=1",
        },
        {
          productId: "2",
          name: "Tshirt",
          quantity: 2,
          price: 2,
          image: "https://picsum.photos/150?random=2",
        },
      ],
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>
      {!orderDetails ? (
        <p>Keep Buying</p>
      ) : (
        <div className="p-4 sm:p-6 rounded-lg border">
          {/* order Info */}
          <div className="flex flex-col sm:flex-row justify-between mv-8">
            <div className="">
              <h3 className="text-lg md:text-xl font-semibold">
                Order ID: #{orderDetails._id}
              </h3>
              <p className="text-gray-600">
                {new Date(orderDetails.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
              <span
                className={`${
                  orderDetails.isPaid
                    ? "bg-green-400 text-green-900"
                    : "bg-red-400 text-red-900"
                } px-3 py-1  rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isPaid ? "Approve" : "Pending"}
              </span>
              <span
                className={`${
                  orderDetails.isPaid
                    ? "bg-yellow-400 text-yellow-900"
                    : "bg-orange-400 text-orange-900"
                } px-3 py-1  rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isDelivered ? "Shipped" : "Pending"}
              </span>
            </div>
          </div>
          {/* Costomer , Payment ,shipping info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Payment Info</h4>
              <p>Payment Method: {orderDetails.paymentMethod}</p>
              <p>status: {orderDetails.isPaid ? "Paid" : "UnPaid"}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Shipping Info</h4>
              <p>Shipping Method: {orderDetails.shippingMethod}</p>
              <p>
                Address: {orderDetails.shippingAddress[0].city}
                {", "}
                {orderDetails.shippingAddress[0].country}
              </p>
            </div>
          </div>
          {/* Product list */}
          <div className="overflow-x-auto ">
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <table className="min-w-full text-gray-600 mb-4">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Unit Price</th>
                  <th className="py-2 px-4">Quantity</th>
                  <th className="py-2 px-4">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.orderItems.map((item) => (
                  <tr key={item.productId} className="border-b">
                    <td className="py-2 px-4 flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-1/2 object-cover mr-4"
                      />
                      <Link
                        to={`/product/${item.productId}`}
                        className="text-blue-500 hover:text-blue-600 hover:underline"
                      >
                        {item.name}
                      </Link>
                    </td>
                    <td className="py-2 px-4">
                      <p>${item.price}</p>
                    </td>
                    <td className="py-2 px-4">{item.quantity}</td>
                    <td className="py-2 px-4">${item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Back To My orders */}
          <Link to="/my-orders" className="text-blue-500 hover:underline">
            My orders
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPage;
