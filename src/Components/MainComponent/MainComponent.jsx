import React from "react";
import Discount from "./Discount/Discount";
import Bluebanner from "./BlueBanner/Bluebanner";
import TwoCard from "./TwoCard/TwoCard";
import Blog from "./Blog/Blog";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import TopCategory from "./TopCategory/TopCategory";
import TrendingProducts from "./Products/TrendingProducts/TrendingProducts";
import CategoryProduct from "./Products/CategoryProduct/CategoryProduct";
import Testimonials from "./Testimonials/Testimonials";
import Service from "./Service/Service";

const MainComponent = () => {
  return (
    <>
      <TrendingProducts  />
      <TwoCard />
      <TopCategory />
      <Bluebanner />
      <CategoryProduct  />
      <Discount />
      {/* <ShopByCategory /> */}
      <Testimonials />
      <Blog />
      <Service />
    </>
  );
};

export default MainComponent;
