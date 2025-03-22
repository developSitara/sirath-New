import React from "react";
import { FaCalendar } from "react-icons/fa";

const BlogCard = ({ key,img, name, des, date }) => {
  return (
    <div key={key} className=" bg-white shadow-md hover:shadow-xl transition-shadow flex justify-center w-full rounded-lg overflow-hidden">
      <div className="w-full pb-5 flex flex-col items-center text-center">
        {/* Image */}
        <div className="w-full">
          <img
            src={img}
            alt={name}
            className="w-full h-auto object-cover aspect-[4/3]"
          />
        </div>

        {/* Content */}
        <div className="xl:px-5 h-auto p-4 w-full flex flex-col items-center justify-center text-center">
          <h3 className="text-sm md:text-base xl:text-xl font-medium font-Poppins text-ellipsis line-clamp-1 text-gray-500">
            {name}
          </h3>

          {/* Date Section */}
          <div className="w-full flex items-center justify-center gap-2 my-2">
            <FaCalendar size={14} className="text-gray-700" />
            <p className="text-sm md:text-base xl:text-xl font-bold ">{date}</p>
          </div>

          {/* Description */}
          <p className="text-sm xl:text-base text-gray-600 text-ellipsis line-clamp-3 font-Poppins font-normal">
            {des}
          </p>
        </div>

        {/* Button */}
        <button className="bg-blue hover:bg-blue/90 text-white font-semibold text-sm md:text-base px-6 py-2 ">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
