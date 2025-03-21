import React from "react";
import insulator_banner_img from "../../../assets/NewImgs/insulator_banner_img.png";

const Discount = () => {
  return (
    <div className="h-auto  xl:h-[310px]  xl:py-14 py-5 mt-[5rem] px-5 xl:px-0 grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-10 w-full bg-white ">
      {/* Image Section */}
      <div className="w-full flex justify-center h-[335px] space-y-10 ">
        <img
          src={insulator_banner_img}
          alt="insulator_banner_img"
          className="w-full max-w-lg h-auto object-contain transform xl:-translate-y-28"
        />
      </div>

      {/* Text Section */}
      <div className="w-full flex flex-col justify-center xl:justify-start  items-start">
        <small
          className="w-2/3 xl:w-[34%] px-2 py-2 bg-blue text-white text-lg font-Poppins font-normal"
          style={{
            clipPath:
              "polygon(100% 0%, 70% 50%, 100% 100%, 0 100%, 0% 50%, 0 0)",
          }}
        >
         Hurry Up
        </small>
        <h1 className="mt-5 w-full text-3xl md:text-4xl lg:text-5xl font-semibold font-Poppins leading-snug capitalize">
          up to 25% discount chek it out
        </h1>
        <button className="border-b-2 border-blue text-base font-semibold font-Poppins capitalize mt-4">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Discount;
