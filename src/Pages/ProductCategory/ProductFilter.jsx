import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { products } from "../../Data/ProductData";
import PriceRangeSlider from "./PriceRangeSlider";

const ProductFilter = ({
  selectedRating,
  sortBy,
  handleCheckboxChange,
  handleSortByChange,
}) => {
  return (
    <>
      <div className="w-full bg-[#fff] pb-40">
        <h3 className="p-2 text-2xl font-semibold font-Poppins text-grey">
          Filter
        </h3>
        <div className="w-full border-b-2 border-gray-300 mb-3"></div>

        {/* range section */}
        <div className="p-2 w-full border-2">
          <h3 className="text-2xl font-semibold text-gray-700">Price</h3>
          <PriceRangeSlider />
        </div>

        {/* rating filter */}
        <div className="w-full mt-5">
          <h3 className="p-2 text-2xl font-semibold font-Poppins text-grey">
            Rating
          </h3>
          <div className="w-full border-b-2 border-gray-300 mb-3"></div>

          <div className="p-2 w-full flex flex-col gap-4">
            <div className="w-full flex items-center gap-4">
              <input
                type="checkbox"
                id="star4"
                className="text-grey text-xl"
                checked={selectedRating === 4}
                onChange={() => handleCheckboxChange(4)}
              />
              <small className="text-xl font-semibold font-Poppins text-grey">
                4
              </small>
              <FaStar size={15} className="text-grey" />
              <small className="text-xl font-semibold font-Poppins text-grey">
                & Above
              </small>
            </div>
            <div className="w-full flex items-center gap-4">
              <input
                type="checkbox"
                id="star3"
                className="text-grey text-xl"
                checked={selectedRating === 3}
                onChange={() => handleCheckboxChange(3)}
              />
              <small className="text-xl font-semibold font-Poppins text-grey">
                3
              </small>
              <FaStar size={15} className="text-grey" />
              <small className="text-xl font-semibold font-Poppins text-grey">
                & Above
              </small>
            </div>
            <div className="w-full flex items-center gap-4">
              <input
                type="checkbox"
                id="star2"
                className="text-grey text-xl"
                checked={selectedRating === 2}
                onChange={() => handleCheckboxChange(2)}
              />
              <small className="text-xl font-semibold font-Poppins text-grey">
                2
              </small>
              <FaStar size={15} className="text-grey" />
              <small className="text-xl font-semibold font-Poppins text-grey">
                & Above
              </small>
            </div>
            <div className="w-full flex items-center gap-4">
              <input
                type="checkbox"
                id="star1"
                className="text-grey text-xl"
                checked={selectedRating === 1}
                onChange={() => handleCheckboxChange(1)}
              />
              <small className="text-xl font-semibold font-Poppins text-grey">
                1
              </small>
              <FaStar size={15} className="text-grey" />
              <small className="text-xl font-semibold font-Poppins text-grey">
                & Above
              </small>
            </div>
          </div>
        </div>

        {/* sort by filter */}
        <div className="w-full mt-5">
          <h3 className="p-2 text-2xl font-semibold font-Poppins text-grey">
            Sort By
          </h3>
          <div className="w-full border-b-2 border-gray-300 mb-3"></div>
          <div className="w-full flex flex-col items-start justify-start text-base font-Poppins font-normal text-gray-700">
            {["lowToHigh", "highToLow", "newestFirst"].map((option) => (
              <button
                key={option}
                className={`px-2 w-full py-2 flex flex-col items-start justify-start ${
                  sortBy === option ? "text-red-800" : ""
                }`}
                onClick={() => handleSortByChange(option)}
              >
                {option === "lowToHigh"
                  ? "Low to High"
                  : option === "highToLow"
                  ? "High to Low"
                  : "Newest First"}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
