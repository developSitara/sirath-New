import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { products } from "../../Data/ProductData";
import PriceRangeSlider from "./PriceRangeSlider";

const ProductFilter = ({
  selectedRating,
  sortBy,
  handleCheckboxChange,
  handleSortByChange,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
}) => {
  return (
    <>
      <div className="w-full bg-[#fff] pb-40">
        <div className="w-full">
          <h3 className="p-2 text-xl xl:text-2xl font-semibold font-Poppins text-grey">
            Filter
          </h3>
          <div className="w-full border-b-2 border-gray-300 mb-3 hidden xl:block"></div>
        </div>

        {/* Price Range Section */}
        <div className="w-full">
          <h3 className="text-2xl font-semibold text-gray-700 p-2">Price</h3>
          <div className="w-full border-b-2 border-gray-300 hidden xl:block"></div>
          <PriceRangeSlider
            min={0}
            max={2000}
            minVal={minPrice}
            maxVal={maxPrice}
            setMinVal={setMinPrice}
            setMaxVal={setMaxPrice}
          />
        </div>

        <div className="mt-5 xl:mt-0 w-full flex xl:block items-center justify-between gap-4">
          {/* Rating Filter for Mobile Dropdown and Desktop Checkboxes */}
          <div className="w-full mt-5 xl:mt-10 ">
            <h3 className="p-2 text-xl xl:text-2xl font-semibold font-Poppins text-grey">
              Rating
            </h3>
            <div className="w-full border-b-2 border-gray-300 mb-3 hidden xl:block"></div>

            {/* Mobile Dropdown */}
            <div className="block lg:hidden">
              <select
                value={selectedRating || ""}
                onChange={(e) => handleCheckboxChange(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Rating</option>
                <option value="4">4 & Above</option>
                <option value="3">3 & Above</option>
                <option value="2">2 & Above</option>
                <option value="1">1 & Above</option>
              </select>
            </div>

            {/* Desktop Checkboxes */}
            <div className="hidden lg:block">
              <div className="p-2 w-full flex flex-col gap-4">
                {[4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="w-full flex items-center gap-4">
                    <input
                      type="checkbox"
                      id={`star${rating}`}
                      className="text-grey text-xl"
                      checked={selectedRating === rating}
                      onChange={() => handleCheckboxChange(rating)}
                    />
                    <small className="text-xl font-semibold font-Poppins text-grey">
                      {rating}
                    </small>
                    <FaStar size={15} className="text-grey" />
                    <small className="text-xl font-semibold font-Poppins text-grey">
                      & Above
                    </small>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sort By Filter for Mobile Dropdown and Desktop Buttons */}
          <div className="w-full mt-5 ">
            <h3 className="p-2 text-xl xl:text-2xl font-semibold font-Poppins text-grey">
              Sort By
            </h3>
            <div className="w-full border-b-2 border-gray-300 mb-3 hidden xl:block"></div>

            {/* Mobile Dropdown */}
            <div className="block lg:hidden ">
              <select
                value={sortBy}
                onChange={(e) => handleSortByChange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
                <option value="newestFirst">Newest First</option>
              </select>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden lg:block w-full  flex-col items-start justify-start text-base font-Poppins font-normal text-gray-700">
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
      </div>
    </>
  );
};

export default ProductFilter;
