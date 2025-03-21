import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from "./BlogCard";
import blog from "../../../Data/Blog";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Blog = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1500, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      { breakpoint: 1050, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      { breakpoint: 750, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };
  
  return (
    <div className="w-full  mt-10  relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-col lg:flex-col  justify-between mb-6">
        <div className=" md:text-left text-center">
          <h2 className="text-3xl font-bold">Our Blog</h2>
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
        {blog.map((item) => (
          <div className="px-2 mt-5 lg:mt-0 w-full flex items-center justify-center">
            <BlogCard
              key={item.id}
              img={item.img}
              name={item.title}
              des={item.des}
              date={item.date}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Blog;
