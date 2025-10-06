import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./Components/Layout/UserLayout";
import AdminLayout from "./Components/Layout/AdminLayout";
import Home from "./Pages/Home";
import { Toaster } from "sonner";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import CollectionPage from "./Pages/CollectionPage";
import ProductDetails from "./Components/Products/ProductDetails";
import Checkout from "./Components/Cart/Checkout";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const App = () => {
  return (
    <BrowserRouter>
      <PayPalScriptProvider
        options={{
          clientId:
            "ATwYPA07Q7awRbnWDhuH9ldFXR9Jm4dfFjx1seDtiFyY6RUZOcphzFcd6Gekc7QkT5g6GTMUHpFXdB6H",
        }}
      >
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route
              path="collections/:collection"
              element={<CollectionPage />}
            />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />} />
        </Routes>
      </PayPalScriptProvider>
    </BrowserRouter>
  );
};

export default App;
