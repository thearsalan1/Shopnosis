import React, { useState } from "react";
import { Link } from "react-router-dom";
import login from "../assets/login.png";
import { loginUser } from "../Redux/slices/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };
  return (
    <div className="flex ">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm">
          <div className="flex justify-center mb-6">
            <h2 className="text-3xl font-medium">SHOPNOSIS</h2>
          </div>
          <h2 className="tex-2xl font-bold text-center mb-6">Hey user ✋</h2>
          <p className="text-center mb-6">Enter Details to Login</p>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition"
            onClick={(e) => handleSubmit(e)}
          >
            Sign In
          </button>
          <p className="mt-2 text-sm">
            Dont have an account?{" "}
            <Link to="/register" className="font-semibold underline">
              Sing Up
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <img src={login} className="h-[635px] w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
