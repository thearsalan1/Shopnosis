import React, { useState } from "react";
import { FaHandLizard } from "react-icons/fa";

const UserManagement = () => {
  const users = [
    {
      _id: 1,
      name: "John doe",
      email: "jhon@gmail.com",
      role: "admin",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleRoleChange = (userId, newRole) => {
    console.log({ id: userId, role: newRole });
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete the user?")) {
      console.log("deleting userId", userId);
    }
  };
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      {/* Add new User Form */}
      <div className="p-6 rounded-lg mb-6">
        <h3 className="text-lg font-bold mb-4">Add New User</h3>
        <form onSubmit={handleOnSubmit}>
          <div className="max-w-6xl">
            <p className="text-sm text-gray-700 font-semibold mb-1">Name</p>
            <input
              type="text"
              className="w-full border border-gray-300 outline-none px-2 py-1 rounded mb-3 text-md"
              placeholder="Enter Name"
              value={formData.name}
              name="name"
              onChange={handleOnChange}
              required
            />
            <p className="text-sm text-gray-700 font-semibold mb-1">Email</p>
            <input
              type="email"
              className="w-full border border-gray-300 outline-none px-2 py-1 rounded mb-3 text-md"
              placeholder="Enter Email"
              value={formData.email}
              name="email"
              onChange={handleOnChange}
              required
            />
            <p className="text-sm text-gray-700 font-semibold mb-1">Password</p>
            <input
              type="password"
              className="w-full border border-gray-300 outline-none px-2 py-1 rounded mb-3 text-md"
              placeholder="Enter Password"
              value={formData.password}
              name="password"
              onChange={handleOnChange}
              required
            />
            <p className="text-sm text-gray-700 font-semibold mb-1">Role</p>
            <select
              className="w-full border border-gray-300 outline-none px-2 py-1 rounded mb-3 text-md"
              name="role"
              value={formData.role}
              onChange={handleOnChange}
              required
            >
              <option
                className="w-full border text-gray-700 border-gray-300 outline-none px-2 py-1 rounded mb-3 text-md"
                value="customer"
              >
                Customer
              </option>
              <option
                className="w-full border text-gray-700  outline-none px-2 py-1 rounded mb-3 text-md"
                value="admin"
              >
                Admin
              </option>
            </select>
          </div>
          <button className="px-3 py-2 bg-emerald-500 text-white text-sm rounded ">
            Add User
          </button>
        </form>
      </div>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700 ">
            <tr>
              <td className="px-3 py-4">NAME</td>
              <td className="px-3 py-4">EMAIL</td>
              <td className="px-3 py-4">ROLE</td>
              <td className="px-3 py-4">Actions</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                  {user.name}
                </td>
                <td className="p-4 ">{user.email}</td>
                <td className="p-4 ">
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                    className="p-2 border rounded"
                  >
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td className="p-4 ">
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="bg-red-500 text-white px-4 py-2 hover:bg-red-600 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
