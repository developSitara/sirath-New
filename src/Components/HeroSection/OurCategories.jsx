import { FaBars, FaFan, FaRegLightbulb, FaSpeakerDeck, FaTag } from "react-icons/fa";
import { FaMobileAlt, FaLaptop, FaGamepad } from "react-icons/fa";
import { GiStripedSword } from "react-icons/gi";
import { MdOutlineIron, MdOutlineLocalLaundryService, MdOutlineKitchen } from "react-icons/md";
import { SiWire } from "react-icons/si";
import { TbCircuitBattery, TbSolarPanel } from "react-icons/tb";

const categories = [
  { name: "Wiring", icon: <SiWire /> },
  { name: "Circuit Breakers", icon: <TbCircuitBattery /> },
  { name: "Panel Boards", icon: <TbSolarPanel /> },
  { name: "Transformers", icon: <MdOutlineKitchen /> },
  { name: "Generators", icon: <TbCircuitBattery /> },
  { name: "Power Strips", icon: <GiStripedSword /> },
  { name: "Electric Fans", icon: <FaFan /> },
  { name: "LED Lights", icon: <FaRegLightbulb /> },
];

const OurCategories = () => {
  return (
    <div className="bg-white h-full flex flex-col">
      <div className="w-full flex items-center justify-between bg-blue text-white px-7 py-3 text-lg font-semibold">
        <span className="flex items-center gap-4 font-Poppins font-semibold text-xl">
          <FaBars /> Our Categories
        </span>
      </div>
      <ul className="p-4 border-t border-gray-200 space-y-2 overflow-auto">
        {categories.map((item, index) => (
          <li
            key={index}
            className="text-xl font-Poppins font-normal flex items-center gap-4 px-4 py-3 hover:bg-gray-100 cursor-pointer text-gray-700 border-b border-gray-200 last:border-b-0"
          >
            <span className="text-xl text-gray-600">{item.icon}</span>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurCategories;
