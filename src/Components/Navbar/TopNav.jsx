import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
const TopNav = () => {
  return (
    <>
      <div className=" bg-white py-3 px-4 sm:px-6 md:px-6 lg:px-8 xl:px-10 w-full ">
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
