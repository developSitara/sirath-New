import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import category from "../../../Data/ShopByCategory";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ShopByCategoryCard from "./ShopByCategoryCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ShopByCategory = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1700, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 1500, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 1310, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 1050, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 880, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="w-full  mt-10  relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold capitalize">Reliable Electrical & Signal Cables</h2>
        </div>
      </div>

       {/* Slider Arrows */}
            <div className="absolute top-0 right-4 md:right-0 z-10 hidden md:flex space-x-4">
              <IoIosArrowBack
                size={30}
                className="border-blue border-b-2 text-blue px-1 cursor-pointer"
                onClick={() => sliderRef.current.slickPrev()}
              />
              <IoIosArrowForward
                size={30}
                className="bg-blue text-white px-1 cursor-pointer"
                onClick={() => sliderRef.current.slickNext()}
              />
            </div>
      
            {/* Mobile Slider Arrows */}
            <div className="flex justify-center mt-4 md:hidden space-x-4">
              <IoIosArrowBack
                size={36}
                className="bg-blue text-white px-1 cursor-pointer"
                onClick={() => sliderRef.current.slickPrev()}
              />
              <IoIosArrowForward
                size={36}
                className="bg-blue text-white px-1 cursor-pointer"
                onClick={() => sliderRef.current.slickNext()}
              />
            </div>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings} className="">
        {category.map((item, index) => (
          <div key={index} className=" lg:px-3 mt-5 lg:mt-0">
            <ShopByCategoryCard
            key={item.id}
              img={item.img}
              title={item.title}
              point={item.points}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ShopByCategory;
