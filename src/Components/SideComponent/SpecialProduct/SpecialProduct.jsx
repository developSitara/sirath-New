import React, { useEffect } from "react";
import panel_board from "../../../assets/Products/NewImgs/wire_5.png";
import { FaStar } from "react-icons/fa";
import CountDownTimer from "./CountDownTimer";
import { products } from "../../../Data/ProductData";
import { addToCart } from "../../../api/localStorage";
import { useNavigate } from "react-router-dom";

const SpecialProduct = () => {
  const futureDate = new Date("2025-12-31T23:59:59");
   const navigate = useNavigate();
   const category = 'Conductors'
   const getCatgeoryName = (name) => {
     navigate(`/category/${name}`);
   };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="px-5 py-10  bg-[#fff] w-full flex items-center justify-center flex-col">
        <h3 className="text-center  w-full mb-3 font-Poppins font-semibold text-lg">
          Special Trend Products
        </h3>
        {/* Border */}
        <div className="w-full border-b-[1px] border-gray-300 mb-3"></div>
        <div className="w-full">
          <div className="w-52 h-52  m-auto flex justify-center items-center overflow-hidden  bg-white">
            <img
              src={panel_board}
              alt={panel_board}
              className="max-w-56 max-h-56 object-contain "
            />
          </div>
          {/* counting section */}
          <div className="mt-5 w-full flex items-center justify-center gap-4">
            <CountDownTimer targetDate={futureDate} />
          </div>

          {/* rating section */}
          <div className="w-full flex  items-center justify-center gap-2 mb-3 mt-3">
            <FaStar size={20} className="text-yellow-400" />
            <FaStar size={20} className="text-yellow-400" />
            <FaStar size={20} className="text-yellow-400" />
            <FaStar size={20} className="text-yellow-400" />
          </div>
          <h5 className="text-lg font-Poppins font-semibold text-center">
            Schneider Solutions
          </h5>
          {/* price section */}
          <div className="w-full text-center space-x-4 mt-2">
            <strong className="text-xl font-Poppins font-bold">$4000.00</strong>
            <del className="text-base font-Poppins font-normal text-gray-700">
              $5000.99
            </del>
          </div>
          <button
            onClick={() => getCatgeoryName(category)}
            className="mt-3 w-full rounded-full py-2 border-blue border-2 text-blue hover:bg-blue hover:text-white font-medium text-base font-inter"
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default SpecialProduct;
