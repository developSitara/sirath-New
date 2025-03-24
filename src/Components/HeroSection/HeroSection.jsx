import React from "react";
import badge from "../../assets/HeroImg/badge.png";
import distribution from "../../assets/HeroImg/panel_board_6.png";
import consulates from "../../assets/HeroImg/panel_board_4.png";
import isolators from "../../assets/HeroImg/fuse_1.png";
import cable from "../../assets/HeroImg/wire_2.png";
import OurCategories from "./OurCategories";
import Slider from "react-slick";
import HeroSlider from "./HeroSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import topCategory from "../../Data/TopCategory";
const heroSlider = [
  {
    img: distribution,
    title: "on-Distribution box sale up to ",
    cat:'Distribution box'
  },
  {
    img: consulates,
    title: "on Consulates sale up to ",
     cat:'Box'
  },
  {
    img: isolators,
    title: "on Isolators  sale up to ",
      cat:'Schneider Electric'
  },
  {
    img: cable,
    title: "on wire & Cables  sale up to ",
      cat:'wire & cable'
  },
];
const HeroSection = () => {
 
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    arrows: false, 
    dots: false,
  };
  
  return (
    <div className=" py-12 px-4 sm:px-6 md:px-6 lg:px-8 xl:px-10 w-full flex items-center lg:gap-8 xl:gap-10">
      {/* Hero Section */}
      <div  className="w-full lg:w-3/4 ">
        <Slider {...settings}>
          {heroSlider &&
            heroSlider.map((item, i) => (
              <HeroSlider img={item.img} title={item.title} cat={item.cat}/>
            ))}
        </Slider>
      </div>

      {/* side categories */}
      <div className="hidden lg:block lg:w-1/4 h-[570px] overflow-hidden">
        <OurCategories />
      </div>
    </div>
  );
};

export default HeroSection;
