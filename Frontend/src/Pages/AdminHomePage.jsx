import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAdminProducts } from "../Redux/slices/adminProduct";
import { fetchAllOrders } from "../Redux/slices/adminOrderSlice";

const AdminHomePage = () => {
  const dispatch = useDispatch();
  const {
    products,
    loading: productsLoading,
    error: productsError,
  } = useSelector((state) => state.adminProducts);
  const {
    orders,
    totalOrders,
    totalSales,
    loading: orderLoading,
    error: ordersError,
  } = useSelector((state) => state.adminOrders);

  useEffect(() => {
    dispatch(fetchAdminProducts());
    dispatch(fetchAllOrders());
  }, [dispatch]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Admin Dashboard</h1>

      {productsLoading || orderLoading ? (
        <p>Loading ...</p>
      ) : productsError ? (
        <p>Error fetching products: {productsError}</p>
      ) : ordersError ? (
        <p>Error fetching orders: {ordersError}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 shadow-md rounded-lg bg-white">
            <h2 className="text-lg sm:text-xl font-semibold">Revenue</h2>
            <p className="text-xl sm:text-2xl mt-2">${totalSales.toFixed(2)}</p>
          </div>
          <div className="p-4 shadow-md rounded-lg bg-white">
            <h2 className="text-lg sm:text-xl font-semibold">Total Orders</h2>
            <p className="text-xl sm:text-2xl mt-2">{totalOrders}</p>
            <Link
              to="/admin/orders"
              className="text-blue-500 hover:underline mt-2 block"
            >
              Manage Orders
            </Link>
          </div>
          <div className="p-4 shadow-md rounded-lg bg-white">
            <h2 className="text-lg sm:text-xl font-semibold">Total Products</h2>
            <p className="text-xl sm:text-2xl mt-2">{products.length}</p>
            <Link
              to="/admin/products"
              className="text-blue-500 hover:underline mt-2 block"
            >
              Manage Products
            </Link>
          </div>
        </div>
      )}

      <div className="mt-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[600px] w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-100 text-xs uppercase text-gray-700">
              <tr>
                <th className="py-3 px-4">Order ID</th>
                <th className="py-3 px-4">User</th>
                <th className="py-3 px-4">Total Price</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr
                    key={order._id}
                    className="border-b hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="p-4">#{order._id}</td>
                    <td className="p-4">
                      {order?.orderItem?.[0]?.name || "Unnamed Product"}
                    </td>
                    <td className="p-4">${order.totalPrice.toFixed(2)}</td>
                    <td className="p-4">{order.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-4 text-center text-gray-500">
                    No orders
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
