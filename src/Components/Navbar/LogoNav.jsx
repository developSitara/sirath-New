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
        <div className="w-full flex items-end justify-end  gap-5 ">
          <Link to={'/login'}>
            <FaRegUser size={20} className="" />
          </Link>
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
