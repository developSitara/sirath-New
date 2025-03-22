import React from "react";
import panel_board from "../../../assets/NewImgs/panel_board_4.png";

const SaleOff = () => {
  return (
    <div className="relative mt-10 px-5 w-full h-[500px] bg-gray-100 flex flex-col justify-center items-center text-center">
      {/* Text Section */}
      <div className="z-10 ">
        <h6 className="text-lg font-medium uppercase text-gray-500">
        Panel Board
        </h6>
        <h2 className="text-4xl font-semibold ">Distribution Box</h2>
        <button className="border-b-2 border-blue mt-5 text-lg font-semibold font-Poppins text-blue">
          $1999.00
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full flex justify-center mt-4">
        <img src={panel_board} alt="panel_board" className="w-auto object-contain" />
      </div>
    </div>
  );
};

export default SaleOff;
