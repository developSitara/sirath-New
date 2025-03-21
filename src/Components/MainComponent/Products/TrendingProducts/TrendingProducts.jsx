import React, { useEffect, useRef, useState } from "react";
import ProductCard from "../ProductCard";
import trendingProducts from "../../../../Data/TrendingProduct";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { products } from "../../../../Data/ProductData";

const TrendingProducts = () => {
  const sliderRef = useRef(null);
  const [activeTab, setActiveTab] = useState("all"); 
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    rows: 2,
    centerPadding: "60px",
    responsive: [
      { breakpoint: 1700, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 1310, settings: { slidesToShow: 4, slidesToScroll: 2 } },
      { breakpoint: 1050, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      { breakpoint: 800, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      { breakpoint: 750, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 650, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 550, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };
  const tabs = [
    { id: "all", label: "All" },
    { id: "Best Seller", label: "Best Seller" },
    { id: "Featured Product", label: "Featured Product" },
    { id: "new product", label: "new product" },
  ];


  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((product) => product.trendingCat === activeTab);

 
  console.log(filteredProducts)
  return (
    <div className=" w-full  relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <div className="w-full flex items-center justify-between flex-wrap">
          <h2 className="text-3xl font-bold capitalize text-center md:text-left">
           Trending Product
          </h2>

          {/* Tabs Section */}
          <div className="mt-5 overflow-x-auto flex space-x-4 border-b w-full md:w-auto justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`text-sm xl:text-xl relative px-2 py-1 xl:px-4 xl:py-2 xl:font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-blue text-white"
                    : "text-gray-500 hover:text-black border-b-2 border-blue"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
            
                <span
                  className={`absolute left-0 bottom-0 w-full h-[2px] transition-all duration-300 ${
                    activeTab === tab.id ? "bg-blue" : "bg-gray"
                  }`}
                />
              </button>
            ))}
          </div>
          {/* Slider Arrows */}
          <div className="pl-4">
            <div className="absolute top-5 right-4 md:right-0 z-10 hidden md:flex space-x-4">
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
          </div>
          {/* Mobile Slider Arrows */}
          <div className=" flex w-full justify-center mt-4 md:hidden space-x-4">
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
        </div>
      </div>

      {/* Products Section */}

      <div className="px-5 w-full m-auto flex justify-center">
        <Slider
          ref={sliderRef}
          {...settings}
          className="w-full flex justify-center items-center gap-10"
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div className="mb-6" key={item.id}>
                {/* <Link to={`/product-detail/${item.id}`}> */}
                  <ProductCard
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    productName={item.productName}
                    qty={item.qty}
                    price={item.price}
                    deletePrice={item.deletePrice}
                    tagOff={item.tagOff}
                    totalRating={item.totalRating}
                    showBuyNow={false}
                    
                  />
                {/* </Link> */}
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-lg mt-5">No products available.</p>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default TrendingProducts;
