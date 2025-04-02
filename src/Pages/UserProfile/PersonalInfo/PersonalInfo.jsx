import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

const PersonalInfo = () => {

  return (
    <>
      <div className=" bg-[#fff] shadow-lg p-6 ">
        <div className="w-4/5">
          <h3 className="font-semibold font-Public text-xl text-blue">
            Personal Information
          </h3>

          {/* Name Fields */}
          <div className="flex items-center gap-4 mt-5">
            <input
              type="text"
              className="w-1/2 p-2 border-2 outline-none focus:border-blue rounded-lg text-blue bg-gray-400/20 text-sm font-normal"
              value="kumar"
              readOnly
            />
            <input
              type="text"
              className="w-1/2 p-2 border-2 outline-none focus:border-blue rounded-lg text-blue bg-gray-400/20 text-sm font-normal"
              value="sanu"
              readOnly
            />
            <div className="text-blue cursor-pointer">
              <FaEdit size={20} />
            </div>
          </div>

          {/* Email */}
          <h3 className="mt-5 font-semibold font-Public text-xl text-blue">
            Email
          </h3>
          <div className="flex items-center justify-center gap-4">
            <input
              type="email"
              className="w-full p-2 border-2 outline-none focus:border-blue rounded-lg text-blue bg-gray-400/20 text-sm font-normal mt-2"
              value="Kumar@sanu.com"
              readOnly
            />
            <div className="text-blue cursor-pointer">
              <FaEdit size={20} />
            </div>
          </div>

          {/* Number */}
          <h3 className="mt-5 font-semibold font-Public text-xl text-blue">
            Number
          </h3>
          <div className="flex items-center justify-center gap-4">
            <input
              type="text"
              className="w-full p-2 border-2 outline-none focus:border-blue rounded-lg text-blue bg-gray-400/20 text-sm font-normal mt-2"
              value="8786345230"
              readOnly
            />
            <div className="text-blue cursor-pointer">
              <FaEdit size={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
