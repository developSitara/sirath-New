import React from "react";
import ShopByProduct from "./ShopByProduct/ShopByProduct";
import { products } from "../../Data/ProductData";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  // const navigate =  useNavigate()
  // const getCatgeory =(category)=>{
  //   navigate(`/shop-by-category/${category}`)
  // }
  // console.log(getCatgeory)

  return (
    <div className=" lg:mt-5 py-5 lg:py-8 px-4 sm:px-6 md:px-6 lg:px-8 xl:px-10 w-full">
      <div className="w-full flex flex-col gap-8 xl:gap-14">
        <ShopByProduct heading={"Transformer"} category={"Transformer"}  products={products} />
        <ShopByProduct heading={"Horn Up Switches"} category={"horn up fuse"}  products={products} />
        <ShopByProduct heading={"Wire & cables"} category={"wire & cable"}  products={products} />
        <ShopByProduct heading={"Distribution Box"} category={"Distribution box"}  products={products} />
        <ShopByProduct heading={"Earth Switches"} category={"earthing switch"}  products={products} />
        <ShopByProduct heading={"Drop Out Switches"} category={"drop out switch"}  products={products} />
      </div>
    </div>
  );
};

export default Shop;
