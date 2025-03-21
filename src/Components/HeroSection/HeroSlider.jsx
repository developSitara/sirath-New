import React from "react";
import badge from "../../assets/HeroImg/badge.png";
const HeroSlider = ({ img, title }) => {
  return (
    <div
      className=" bg-blue/20 px-10 flex items-center justify-center w-full bg-no-repeat  bg-bottom xl:bg-right-bottom h-[570px]"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="w-full">
        <img src={badge} alt="badge" className="w-52 h-11" />
        <h1 className=" w-full xl:w-3/5 mt-10 text-4xl  md:text-4xl lg:text-5xl  xl:text-6xl font-semibold font-Poppins leading-snug  capitalize">
          {title}
          <span className="text-blue">30%</span> off
        </h1>
        <h4 className="mt-5 text-xl font-medium font-Poppins capitalize">
          Start from $140.05
        </h4>
        <button className="border-b-2 border-blue mt-10 text-base font-semibold font-Poppins capitalize">
          shop now
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
