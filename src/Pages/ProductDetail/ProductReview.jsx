import React from "react";
import { FaSearch, FaStar, FaStarHalf } from "react-icons/fa";
import ReviewSection from "./ReviewSection";
import FAQ from "./FAQ/FAQ";
import ReactRating from "react-rating";
const ProductReview = ({ product }) => {
    console.log(product)
  const progressData = [
    { step: 5, percentage: 82 },
    { step: 4, percentage: 10 },
    { step: 3, percentage: 4 },
    { step: 2, percentage: 1 },
    { step: 1, percentage: 3 },
  ];
  return (
    <>
      <div className="lg:mt-5 py-5 lg:py-8  w-full">
        {/* total review */}
        <div className="w-full  ">
          <div className=" md:hidden xl:block hidden"></div>
          <div className=" w-full  ">
            <div className="w-full">
              <p className="text-3xl font-inter font-semibold text-blue/30">
                4.5 / <span>5.0</span>
              </p>
              <div className="py-1 flex w-full items-center gap-3 text-blue">
                <ReactRating
                  className="flex items-center justify-center gap-5"
                  initialRating={product.totalRating}
                  readonly
                  emptySymbol={<FaStar size={20} className="text-gray-300" />}
                  fullSymbol={<FaStar size={20} className="text-blue" />}
                />
              </div>
              <p className="text-sm font-normal font-inter text-gray-500">
                434 reviews
              </p>
            </div>

            <div className="flex flex-col space-y-1 w-full">
              {progressData.map((data) => (
                <div key={data.step} className="flex items-center space-x-2">
                  {/* Step Number */}
                  <span className="text-lg font-semibold text-gray-600">
                    {data.step}
                  </span>

                  {/* Progress Bar */}
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-3 bg-blue transition-all duration-300"
                      style={{ width: `${data.percentage}%` }}
                    ></div>
                  </div>

                  {/* Percentage */}
                  <span className="text-sm font-semibold text-blue/50">
                    {data.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* user review section */}
        <ReviewSection product={product}/>
        <FAQ />
      </div>
    </>
  );
};

export default ProductReview;
