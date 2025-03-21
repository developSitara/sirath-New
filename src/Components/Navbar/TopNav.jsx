import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
const TopNav = () => {
  return (
    <>
      <div className=" bg-white py-3 px-4 sm:px-10 md:px-12 lg:px-16 xl:px-20 w-full ">
        <div className="w-full flex gap-2 items-center">
          <TbTruckDelivery size={20}/>
          <p className="font-Poppins font-semibold text-xs xl:text-sm">
            World’s Fastest Online Shopping Destination
          </p>
        </div>
      </div>
    </>
  );
};

export default TopNav;
