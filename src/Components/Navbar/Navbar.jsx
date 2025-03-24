import React, { useState, useEffect } from "react";
import TopNav from "./TopNav";
import LogoNav from "./LogoNav";
import {
  FaCross,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { RiPinterestLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { CiMenuFries } from "react-icons/ci";
import { BsCart } from "react-icons/bs";

const Navbar = ({ cart }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let cartItems = JSON.parse(localStorage.getItem("product"));
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <TopNav />
      <LogoNav cart={cart} />

      {/* Sticky Navbar */}
      <div
        className={`sticky top-0 z-20 bg-blue py-6 px-4 sm:px-6 md:px-6 lg:px-8 xl:px-10 w-full flex items-center justify-between shadow-md transition-all duration-300`}
      >
        {/* Show Logo Only When Sticky */}
        {isSticky && (
          <div className="hidden xl:flex items-center gap-3">
            <Link to={"/"}>
              <img src={logo} alt="Logo" className="h-10 w-auto bg-white" />
            </Link>
          </div>
        )}

        {/* Phone Number */}
        <div>
          <div className="hidden xl:flex items-center gap-2 text-white">
            <FaPhone size={14} />
            <p className="border-l-2 pl-2 text-base font-Poppins font-semibold">
              (+91) 987 654 3210
            </p>
          </div>
          <div className="flex lg:flex xl:hidden items-center gap-3">
            <Link to={"/"}>
              <img src={logo} alt="Logo" className="h-8 w-auto bg-white" />
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden xl:flex items-center gap-10">
          {[
            { name: "Home", path: "/" },
            {
              name: "Shop",
              path: "/shop",
              badge: "New",
              badgeColor: "bg-red-500",
            },
            { name: "About", path: "/about" },
            {
              name: "Blog",
              path: "/blog",
              badge: "Pro",
              badgeColor: "bg-yellow-500",
            },
            { name: "Pages", path: "/pages" },
            { name: "Brand", path: "/brand" },
          ].map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `relative text-base font-Poppins font-medium flex items-center ${
                  isActive ? "text-yellow-500" : "text-white"
                }`
              }
            >
              {link.name}
              {/* Badge */}
              {link.badge && (
                <span
                  className={`absolute -top-4 -right-3 ${link.badgeColor} text-white text-xs font-bold px-2 py-0.5 rounded-sm`}
                >
                  {link.badge}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden xl:flex items-center gap-4 text-white">
          <FaFacebookF
            size={20}
            className="hover:text-sky-500  transition-all duration-300 ease-in-out cursor-pointer"
          />
          <FaTwitter
            size={20}
            className="hover:text-sky-400  transition-all duration-300 ease-in-out cursor-pointer"
          />
          <FaInstagram
            size={20}
            className="hover:text-pink-500  transition-all duration-300 ease-in-out cursor-pointer"
          />
          <FiYoutube
            size={20}
            className="hover:text-red-500 transition-all duration-300 ease-in-out cursor-pointer"
          />
          <RiPinterestLine
            size={20}
            className="hover:text-red-600   transition-all duration-300 ease-in-out cursor-pointer"
          />
        </div>

        {/* Mobile Menu Button */}
        <div
          className="xl:hidden flex"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <CiMenuFries size={30} className="text-[#fff]" />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-blue bg-opacity-90 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Menu Content */}
          <div
            className="bg-transparent text-white text-center space-y-6 text-2xl font-semibold"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button (Top-Right) */}
            <button
              className="absolute top-5 right-5 text-white text-3xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ✕
            </button>

            {/* Links */}
            {["Home", "Shop", "About", "Blog", "Pages", "Brand","Login"].map(
              (name, index) => (
                <NavLink
                  key={index}
                  to={`/${name.toLowerCase()}`}
                  className="block hover:text-yellow-500 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {name}
                </NavLink>
              )
            )}
         
            <div className="flex items-center gap-2 text-white">
              <FaPhone size={15} />
              <p className="border-l-2 pl-2 text-base font-Poppins font-semibold">
                (+91) 987 654 3210
              </p>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-4 text-white">
              <FaFacebookF
                size={25}
                className="hover:text-sky-500  transition-all duration-300 ease-in-out cursor-pointer"
              />
              <FaTwitter
                size={25}
                className="hover:text-sky-400  transition-all duration-300 ease-in-out cursor-pointer"
              />
              <FaInstagram
                size={25}
                className="hover:text-pink-500  transition-all duration-300 ease-in-out cursor-pointer"
              />
              <FiYoutube
                size={25}
                className="hover:text-red-500 transition-all duration-300 ease-in-out cursor-pointer"
              />
              <RiPinterestLine
                size={25}
                className="hover:text-red-600   transition-all duration-300 ease-in-out cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
