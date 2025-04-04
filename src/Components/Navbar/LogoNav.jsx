import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { BsCart } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
const LogoNav = () => {
  let cartItems = JSON.parse(localStorage.getItem("product"));
  const [isOpen, setIsOpen] = useState(false);



  return (
    <>
      <div className="hidden py-3 px-4 sm:px-6 md:px-6 lg:px-8 xl:px-10 w-full xl:flex items-center justify-center gap-10">
        {/* logo */}
        <div className="w-full ">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="w-28 h-8" />
          </Link>
        </div>

        {/* search categry */}
        <SearchBar />

        {/* cart user */}
        <div className="w-full flex items-e justify-end  gap-5 ">
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center p rounded-md hover:bg-gray-100"
            >
              <FaRegUser size={20} className="text-gray-700" />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <Link
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </Link>

                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
          <Link to={"/cart"}>
            <div className="relative flex items-center justify-center  cursor-pointer">
              <BsCart size={20} className="text-gray-700" />
              {cartItems?.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems?.length}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LogoNav;
