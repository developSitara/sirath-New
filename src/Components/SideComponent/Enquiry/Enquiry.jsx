import React from "react";

const Enquiry = () => {
  return (
    <div className="mt-10 px-5 py-10 bg-blue text-white">
      <h3 className="capitalize text-center  w-full mb-3 font-Poppins font-semibold text-lg">
        enquiry number
      </h3>
      {/* Border */}
      <div className="w-full border-b-[1px] border-gray-300 mb-3"></div>

      <div className="w-full text-center">
        <p className="font-Poppins font-normal text-base mb-6 text-gray-100">Call Us:</p>
        <h3 className="text-xl font-Poppins font-semibold">(055) 888 8888</h3>

        <p className="font-Poppins font-normal text-base mt-5">OR</p>
        <button className="mt-8 w-full py-5 text-base font-Poppins font-semibold bg-white text-blue">enquiry Now</button>
      </div>
    </div>
  );
};

export default Enquiry;
