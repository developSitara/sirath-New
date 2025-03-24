import { useState } from "react";
import { AiOutlineSwitcher } from "react-icons/ai";
import { BsInboxesFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { GiPowerGenerator } from "react-icons/gi";
import { SiNordicsemiconductor, SiWire } from "react-icons/si";
import { TbCircuitBattery, TbSolarPanel } from "react-icons/tb";
import { products } from "../../Data/ProductData";
import topCategory from "../../Data/TopCategory";
import { useNavigate } from "react-router-dom";
const categoriess = [
  { name: "Wire & Cables", icon: <SiWire /> },
  { name: "Circuit Breakers", icon: <TbCircuitBattery /> },
  { name: "Panel Boards", icon: <TbSolarPanel /> },
  { name: "Transformers", icon: <GiPowerGenerator /> },
  { name: "Air break switch", icon: <TbCircuitBattery /> },
  { name: "Earthing switch", icon: <AiOutlineSwitcher /> },
  { name: "Conductors", icon: <SiNordicsemiconductor /> },
  { name: "Distribution Box", icon: <BsInboxesFill /> },
];

const OurCategories = () => {
  const navigate =  useNavigate()
  const getCatgeoryName =(name)=>{
    navigate(`/category/${name}`)
  }
  return (
    <div className="bg-white h-full flex flex-col">
      <div className="w-full flex items-center justify-between bg-blue text-white px-7 py-3 text-lg font-semibold">
        <span className="flex items-center gap-4 font-Poppins font-semibold text-xl">
          <FaBars /> Our Categories
        </span>
      </div>
      <ul className="p-4 border-t border-gray-200 space-y-2 overflow-auto"  >
        {topCategory.map((item) => (
          <li onClick={() => getCatgeoryName(item.productName)} 
            key={item.id}
            className="text-xl font-Poppins font-normal flex items-center gap-4 px-4 py-3 hover:bg-gray-100 cursor-pointer text-gray-700 border-b border-gray-200 last:border-b-0"
          >
            <div className="w-10 h-8">
              <img src={item.img} alt="" />
            </div>
            {item.productName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurCategories;
