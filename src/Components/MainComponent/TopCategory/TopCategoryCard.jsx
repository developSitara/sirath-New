import React from "react";
import { products } from "../../../Data/ProductData";
import { useNavigate } from "react-router-dom";

const TopCategoryCard = ({ img, productName }) => {
  const navigate =  useNavigate()
  const getCatgeoryName =(name)=>{
    navigate(`/category/${name}`)

  }
  return (
    <div onClick={()=>getCatgeoryName(productName)} className="p-2 sm:w-40 sm:h-36  md:w-40 md:h-48 flex flex-col items-center text-center group hover:bg-[#fff] rounded-lg transition-all duration-300 ease-in-out">
      {/* Image with Fixed Size */}
      <div className="bg-[#fff]  w-full h-auto sm:w-36 sm:h-36 md:w-40 md:h-40 flex justify-center items-center overflow-hidden  ">
        <img
          src={img}
          alt={productName}
          className="w-32  h-32 object-contain aspect-square"
        />
      </div>

      {/* Product Name with Hover Effects */}
      <h6 className=" mt-1 text-ellipsis line-clamp-1 text-sm md:text-base font-medium text-gray-800 max-w-xs ">
        {productName}
      </h6>
      {/* Border */}
      <div className=" group-hover:w-10  group-hover:border-b-2 group-hover:border-blue transition-all duration-300 ease-in-out"></div>
    </div>
  );
};

export default TopCategoryCard;
