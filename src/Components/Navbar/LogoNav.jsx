import React from "react";
import logo from "../../assets/logo.svg";
import { BsCart } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
const LogoNav = () => {
  let cartItems = JSON.parse(localStorage.getItem("product"));
  return (
    <>
      <div className="hidden py-3  px-4 sm:px-10 md:px-12 lg:px-16 xl:px-20 w-full xl:flex items-center justify-center gap-10">
        {/* logo */}
        <div className="w-full ">
          <img src={logo} alt="logo" className="w-28 h-8" />
        </div>

        {/* search categry */}

        <SearchBar />

        {/* cart user */}
        <div className="w-full flex items-end justify-end  gap-5 ">
          <FaRegUser size={20} className="" />
          <Link to={'/cart'}>
            <div className="relative inline-block cursor-pointer">
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
