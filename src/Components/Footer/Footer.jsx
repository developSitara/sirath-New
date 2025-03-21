import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import appleStore from "../../assets/PlayStorImg/appleStore.png";
import googlePay from "../../assets/PlayStorImg/gogglePay.png";
import windowsStore from "../../assets/PlayStorImg/windowsStore.png";
import amex from "../../assets/FooterLogo/amex.png";
import visa from "../../assets/FooterLogo/visa.png";
import mastercard from "../../assets/FooterLogo/mastercard.png";
import Discover from "../../assets/FooterLogo/Discover.png";
const information = [
  {
    Icon: <FaLocationDot size={16} />,
    name: "Demo StoreUnited States",
  },
  {
    Icon: <FaPhone size={16} />,
    name: "(555) 888 8888",
  },
  {
    Icon: <MdEmail size={16} />,
    name: "demo@demo.com",
  },
  {
    Icon: <TbDeviceLandlinePhone size={16} />,
    name: "(012) 800 456 789",
  },
];

const ourCompany = [
  { link: "/", item: "Delivery" },
  { link: "/", item: "Legal Notice" },
  { link: "/", item: "Terms & Condition" },
  { link: "/", item: "About Us" },
  { link: "/", item: "Contact Us" },
];
const ourAccount = [
  { link: "/", item: "Personal Info" },
  { link: "/", item: "Orders" },
  { link: "/", item: "Credit Slip" },
  { link: "/", item: "Address" },
  { link: "/", item: "My wishlist" },
];
const products = [
  { link: "/", item: "Price Drop" },
  { link: "/", item: "New Product" },
  { link: "/", item: "Best Sales" },
  { link: "/", item: "Latest Product" },
  { link: "/", item: "Discount" },
];
const storeLinks = [
  { id: "1", img: appleStore, alt: "Apple Store" },
  { id: "2", img: googlePay, alt: "Google Play" },
  { id: "3", img: windowsStore, alt: "Windows Store" },
];
const paymentMethods = [
  { id: "1", img: amex, alt: "American Express" },
  { id: "2", img: visa, alt: "Visa" },
  { id: "3", img: mastercard, alt: "MasterCard" },
  { id: "4", img: Discover, alt: "Discover" },
];
const Footer = () => {
  return (
    <>
      <div className="w-full bg-white">
        <footer className="py-12 px-4 sm:px-6 md:px-6 lg:px-8 xl:px-10  w-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 md:gap-6 lg:gap-8 xl:gap-10">
          {/* Store Information */}
          <div className="w-full">
            <h3 className="font-Poppins text-lg font-semibold uppercase">
              Store Information
            </h3>
            <div className=" w-full gap-2 mt-3">
              {information.map((item) => (
                <div
                  key={item.name}
                  className="w-full flex items-center gap-3 mb-3"
                >
                  <p>{item.Icon}</p>
                  <p className="text-sm font-Poppins font-normal">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Company */}
          <div className=" w-full">
            <h3 className="font-Poppins text-lg font-semibold uppercase">
              Our Company
            </h3>
            <div className=" w-full gap-2 mt-3">
              {ourCompany.map((item) => (
                <div
                  key={item.item}
                  className="w-full flex items-center gap-3 mb-3"
                >
                  <NavLink
                    to={item.link}
                    className="text-sm font-Poppins font-normal"
                  >
                    {item.item}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
          {/* Our ourAccount */}
          <div className=" w-full">
            <h3 className="font-Poppins text-lg font-semibold uppercase">
              Our Account
            </h3>
            <div className=" w-full gap-2 mt-3">
              {ourAccount.map((item) => (
                <div
                  key={item.item}
                  className="w-full flex items-center gap-3 mb-3"
                >
                  <NavLink
                    to={item.link}
                    className="text-sm font-Poppins font-normal"
                  >
                    {item.item}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
          {/* products */}
          <div className=" w-full">
            <h3 className="font-Poppins text-lg font-semibold uppercase">
              products
            </h3>
            <div className="w-full gap-2 mt-3">
              {products.map((item) => (
                <div
                  key={item.item}
                  className="w-full flex items-center gap-3 mb-3"
                >
                  <NavLink
                    to={item.link}
                    className="text-sm font-Poppins font-normal"
                  >
                    {item.item}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
          {/* opening hours */}
          <div className=" w-full">
            <h3 className="font-Poppins text-lg font-semibold uppercase">
              opening hours
            </h3>
            <div className=" w-full gap-2 mt-3">
              <div className="w-full flex  flex-col gap-2 mb-3">
                <p className="text-sm font-Poppins font-normal">
                  Mon - Tues : 8Am - 10PM
                </p>
                <p className="text-sm font-Poppins font-normal">
                  Wed - Sat : 9AM - 8PM{" "}
                </p>
                <p className="text-sm font-Poppins font-normal">
                  Sun :
                  <span className="ml-3 bg-black text-white rounded-md px-2 py-1 text-sm">
                    Close
                  </span>
                </p>
              </div>
            </div>
          </div>
        </footer>
        {/* bottom logo */}
        <div className=" flex w-full items-center flex-col justify-center">
          <div>
            <img
              src={logo}
              alt="logo"
              className="w-full sm:w-52 md:w-52 lg:w-52 xl:w-52 h-auto xl:h-[56.61px]"
            />
          </div>

          <div className="px-4 py-6 md:py-8 lg:py-8 xl:py-10 w-full flex items-center justify-center gap-4 lg:gap-6 xl:gap-6">
            {storeLinks.map((store) => (
              <div key={store.id} className=" flex justify-center">
                <img
                  src={store.img}
                  alt={store.alt}
                  className="w-32 h-auto cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* copyright footer */}
        <div className="px-4 sm:px-6 md:px-6 lg:px-8 xl:px-10 bg-blue w-full flex   items-center sm:text-left  md:text-left lg:text-left xl:text-left text-center justify-center lg:justify-between flex-wrap sm:flex-nowrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap py-3">
          <div className="w-full mb-3 lg:mb-0">
            <p className="text-white font-Poppins font-normal  text-sm xl:text-base">
              All Copyright © 2025 reserved By - SiRath.llc
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            {paymentMethods.map((payment) => (
              <div key={payment.id} className="w-full flex items-center xl:items-end xl:justify-end justify-center">
                <img
                  src={payment.img}
                  alt={payment.alt}
                  className="w-16 h-8 rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
