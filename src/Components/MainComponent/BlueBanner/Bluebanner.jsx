import React from "react";
import banner from "../../../assets/HomeImgs/banner.png";
import blueBanner from "./banner.png";
const Bluebanner = () => {
  return (
    <>
      <div
        className="mt-10 mb-10  w-full hidden  xl:block xl:h-[200px] bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${blueBanner})` }}
      ></div>
      {/* <div
        className="px-3 py-3 flex items-center justify-center mt-10 mb-10  w-full   bg-blue xl:h-[120px] bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${blueBanner})` }}
      >
        <p className="text-center text-base xl:text-2xl text-white font-Poppins font-semibold">
          Discover Innovative Electric Solutions for Maximum Efficiency and
          Savings
        </p>
      </div> */}
    </>
  );
};

export default Bluebanner;
