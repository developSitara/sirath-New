import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import apple from "../../assets/CompanyBrand/apple.svg";
import ubl from "../../assets/CompanyBrand/ubl.svg";
import dell from "../../assets/CompanyBrand/dell.svg";
import asus from "../../assets/CompanyBrand/asus.svg";
import samsung from "../../assets/CompanyBrand/samsung.svg";
import lg from "../../assets/CompanyBrand/lg.svg";

// Brand Logos Array
const brandLogos = [
  { id: "1", img: apple, alt: "Apple" },
  { id: "2", img: ubl, alt: "UBL" },
  { id: "3", img: dell, alt: "Dell" },
  { id: "4", img: asus, alt: "Asus" },
  { id: "5", img: samsung, alt: "Samsung" },
  { id: "6", img: lg, alt: "LG" },
];

const CompanyBrandSlider = () => {
  // Slick slider settings
  const settings = {
    arrow:false,
    dots: false, // Hide dots navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Animation speed
    slidesToShow: 5, // Default number of slides to show
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds
    responsive: [
      {
        breakpoint: 1024, // LG Screens
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768, // MD Screens (Tablets)
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640, // SM Screens (Mobile)
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className=" xl:py-10 px-2 sm:px-6 md:px-6 lg:px-8 xl:px-10 w-full flex lg:hidden md:hidden sm:hidden xl:hidden items-center justify-center">
      <Slider {...settings} className="w-full">
        {brandLogos.map((brand) => (
          <div
            key={brand.id}
            className="px-2 lg:px-3" // Adds gap between items
          >
            <div className="shadow-md flex items-center justify-center py-2 lg:py-4 bg-[#FFFFFF]">
              <img src={brand.img} alt={brand.alt} className="w-[142px] h-[45px] lg:h-[51px]" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CompanyBrandSlider;
