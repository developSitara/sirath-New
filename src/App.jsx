import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState, Suspense } from "react";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Products from "./Pages/ProductCategory/ProductCategory";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ProductCategory from "./Pages/ProductCategory/ProductCategory";
import Shop from "./Pages/Shop/Shop";
import ShopByCategory from "./Pages/Shop/ShopByCategory/ShopByCategory";
import AddToCart from "./Pages/AddToCart/AddToCart";
import SignUp from "./Pages/User/SignUp/SignUp";
import SignUpOtp from "./Pages/User/SignUp/SignUpOtp";
import Login from "./Pages/User/Login/Login";
import LoginPassword from "./Pages/User/Login/LoginPassword";
import ForgetPassword from "./Pages/User/ForgetPassword/ForgetPassword";
import ForgetOtp from "./Pages/User/ForgetPassword/ForgetOtp";
import ForgetNewPassword from "./Pages/User/ForgetPassword/ForgetNewPassword";
import { Toaster } from "react-hot-toast";
// const Home = React.lazy(() => import("./Components/Home/Home"));
// const Navbar = React.lazy(() => import("./Components/Navbar/Navbar"));
// const Footer = React.lazy(() => import("./Components/Footer/Footer"));

function App() {
  return (
    <BrowserRouter>
      {/* Wrap Navbar, Routes, and Footer with Suspense for lazy loading */}
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product-detail/:productId" element={<ProductDetail />} />
        <Route path="/category/:cat" element={<ProductCategory />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/shop-by-category/:shopCategory"
          element={<ShopByCategory />}
        />
        <Route path="/cart" element={<AddToCart />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/signupOpt" element={<SignUpOtp />} />

        <Route path="/login" element={<Login />} />
        <Route path="/loginpassword" element={<LoginPassword />} />

        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/forgetOtp" element={<ForgetOtp />} />
        <Route path="/forgetnewpassword" element={<ForgetNewPassword />} />
      </Routes>

      <Footer />
      <Toaster />
      {/* </Suspense> */}
    </BrowserRouter>
  );
}

export default App;
