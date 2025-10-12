import React from "react";

const OrderManagement = () => {
  const orders = [
    {
      _id: 123123,
      user: {
        name: "jhon Doe",
      },
      totalPrice: 110,
      status: "Processing",
    },
  ];

  const handleStatusChange = (orderId, value) => {
    console.log(orderId, value);
  };
  return (
    <div className="mx-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Order Management</h2>
      <div className="overflow-x-auto shadow-md sm:rounded-md">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-300 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Order Id</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Total Price</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr className="border-b hover:bg-gray-50" key={order._id}>
                  <td className="py-3  font-medium text-gray-900 whitespace-nowrap px-4">
                    #{order._id}
                  </td>
                  <td className="py-3 px-4">{order.user.name}</td>
                  <td className="py-3 px-4">${order.totalPrice}</td>
                  <td className="py-3 px-4">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                    >
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleStatusChange(order._id, "Delivered")}
                      className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 rounded"
                    >
                      Mark as Delivered
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">
                  No Orders
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;
