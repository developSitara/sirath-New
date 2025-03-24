import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const TotalAmount = ({ cartItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/*  Total Section */}
      <div className="w-full flex justify-between mb-4">
        <h5 className="text-xl xl:text-2xl font-semibold">Total</h5>
        <div className="w-full text-right  text-xl xl:text-2xl font-Poppins font-semibold ">
          <h5 className="text-black mb-2">
            {cartItems?.reduce(
              (total, item) => total + item.price * item.qty,
              0
            )}
          </h5>
        </div>
      </div>

      <div className=" text-lg xl:text-xl font-Poppins font-semibold ">
        {cartItems?.map((item, index) => (
          <p key={index} className="w-full flex items-center justify-between text-gray-500 font-normal mb-2">
            <span>{item.productName}</span>
            {/* <span className="ml-2">${item.price}</span>
            <span className="ml-2">x</span>
            <span className="ml-2">{item.qty}</span> */}
            <span className="ml-2">${item?.price * item?.qty}</span>
          </p>
        ))}
      </div>

      <div className="w-full flex justify-between text-xl xl:text-2xl font-Poppins text-gray-500 font-normal">
        <div className="space-y-2">
          <p>Shipping</p>
          <p>Other</p>
        </div>
        <div className="text-right space-y-2">
          <p>$200</p>
          <p>$400</p>
        </div>
      </div>

      <div className="w-full mt-5">
        {/* Dropdown Button */}
        <button
          className="w-full flex justify-between items-center text-black font-Poppins font-medium text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          Order Instructions
          {isOpen ? (
            <IoIosArrowDown className="w-5 h-5 text-black" />
          ) : (
            <IoIosArrowDown className="w-5 h-5 text-black" />
          )}
        </button>

        {isOpen && (
          <div className="mt-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              maiores sequi quae praesentium suscipit sit
            </p>
          </div>
        )}
      </div>

      <p className="mt-6 text-sm font-Poppins font-medium">
        Tax included, <span className="text-sky-500">Shipping</span> Calculated
        at checkout
      </p>
      <button className="mt-7 px-5 py-3 text-xl font-Poppins font-medium bg-white">
        Place Order
      </button>
    </>
  );
};

export default TotalAmount;
