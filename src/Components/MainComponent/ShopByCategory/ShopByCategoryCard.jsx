import React from "react";

const ShopByCategoryCard = ({ img, title, point }) => {
  return (
    <div className="px-5 py-2 flex flex-col md:flex-row items-center justify-center gap-2 w-full  bg-white  lg:py-8">
      {/* Image Section */}
      <div className="flex justify-center md:justify-start w-full ">
        <img
          src={img}
          alt={title}
          className="w-full object-contain xl:w-60  h-44 xl:h-40"
        />
      </div>

      {/* Content Section */}
      <div className="w-full   md:text-left  md:mt-0">
        <h6 className="text-lg md:text-xl font-semibold font-Poppins text-gray-800">
          {title}
        </h6>
        <ul className="mt-2 space-y-1">
          {point.map((point, index) => (
            <li
              key={index}
              className="flex items-center text-sm md:text-base font-normal text-gray-500"
            >
              <span className="text-blue-500 mr-2">•</span> {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShopByCategoryCard;
