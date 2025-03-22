import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../ProductCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { products } from "../../../../Data/ProductData";

const CategoryProduct = () => {
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
    { id: "Distribution box", label: "Distribution box" },
    { id: "wire & cable", label: "wire & cable" },
    { id: "drop out switch", label: "drop out switch" },
    { id: "horn up fuse", label: "horn up fuse" },
    { id: "earthing switch", label: "earthing switch" },
  ];
  console.log("Active Tab: ", activeTab);
  // filter
  const filterProducts =
    activeTab === "all"
      ? products
      : products.filter((product) => {
          return product.category === activeTab;
        });
  console.log(filterProducts);
  return (
    <div className="w-full  mt-10  relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold capitalize">category Product</h2>
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

      {/* Tabs Section */}
      <div className="mb-10 mt-10 overflow-x-auto flex space-x-4  w-full md:w-auto justify-around">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`relative px-3 py-1 xl:px-4 xl:py-2 xl:font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-blue text-white"
                : "bg-[#fff] hover:text-black"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {/* Bottom Border for All Tabs */}
            <span
              className={`absolute left-0 bottom-0 w-full h-[2px] transition-all duration-300 ${
                activeTab === tab.id ? "bg-blue" : "bg-gray"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Slider */}
      <div className="px-5 w-full m-auto flex justify-center">
        <Slider
          ref={sliderRef}
          {...settings}
          className="w-full flex justify-center items-center gap-10"
        >
          {filterProducts.length > 0 ? (
            filterProducts.map((item) => (
              <div className="mb-6 px-2" key={item.id}>
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

export default CategoryProduct;
