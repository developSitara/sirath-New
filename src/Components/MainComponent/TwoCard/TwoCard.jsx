import React from "react";
import wire_1 from "../../../assets/HomeImgs/wire.png";
import wire_2 from "../../../assets/HomeImgs/wire (1).png";

const TwoCard = () => {
  return (
    <div className="mt-10 mb-10 xl:mb-0 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 w-full">
      {/* Left Section  */}
      <div
        className=" bg-gray-200 rounded-lg w-full bg-no-repeat text-center bg-bottom bg-contain p-5 h-[335px] flex flex-col gap-1"
        style={{ backgroundImage: `url(${wire_1})` }}
      >
        <p className="text-lg text-grey font-Poppins font-normal uppercase">
          Long Lasting
        </p>
        <h4 className="text-3xl font-Poppins font-semibold uppercase">
          smart Wire series 7
        </h4>
        <div>
          <button className="border-b-2  border-blue mt-2 text-xl font-bold font-Poppins capitalize text-blue">
            $1500.00
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-gray-200  w-full flex items-center h-[335px] p-5 xl:p-10 relative overflow-hidden rounded-lg">
       
        <img
          src={wire_2}
          alt="Wire Display"
          className="w-full h-full object-contain xl:object-cover absolute top-0 left-0"
        />
        <div className="relative z-10   rounded-lg ml-auto w-full lg:w-[35%] text-center">
          <p className="text-2xl xl:text-lg text-grey font-Poppins font-normal uppercase">Studio Display</p>
          <h4 className="text-4xl xl:text-3xl font-Poppins font-semibold uppercase">
            600 NITS OF BRIGHTNESS
          </h4>
          <button className="border-b-2 border-blue mt-3 text-2xl xl:text-xl font-bold font-Poppins capitalize text-blue">
            $599.00
          </button>
        </div>
      </div>
    </div>
  );
};

export default TwoCard;
