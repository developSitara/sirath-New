import React from "react";
import TotalAmount from "./TotalAmount";
import CartProduct from "./CartProduct";

const AddToCart = () => {
  let cartItems = JSON.parse(localStorage.getItem("product"));
  return (
    <>
      <div className=" lg:mt-5 py-5 lg:py-10 px-4 sm:px-6 md:px-6 lg:px-8 xl:px-10 w-full">
        <div className="w-full flex items-start justify-start gap-5 xl:gap-10 flex-wrap xl:flex-nowrap">
          {/* product to add cart */}
          <div className="w-full xl:w-3/4  ">
            <CartProduct cartItems={cartItems} />
          </div>

          {/* total product amount section */}
          <div className=" xl:w-1/4  bg-[#E4E4E4] py-10 px-4">
            <TotalAmount />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
