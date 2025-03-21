import React from "react";
import wire_1 from '../../../assets/NewImgs/wire_1.png'
import wire_2 from '../../../assets/NewImgs/fuse.png'
import { FaStar } from "react-icons/fa";
const featureProduct = [
  {
    img: wire_1,
    title: "Power Wires",
    price: "$26.00",
  },
  {
    img: wire_2,
    title: "air switch breaker",
    price: "$26.00",
  },
];

const FeatureProduct = () => {
  return (
    <div className="mt-10 px-5 py-5 bg-[#fff]">
      <h3 className="capitalize text-center  w-full mb-3 font-Poppins font-semibold text-lg">
      Feature products
      </h3>
      {/* Border */}
      <div className="w-full border-b-[1px] border-gray-300 mb-3"></div>
      <div className="w-full flex flex-col items-center justify-center gap-5">
        {featureProduct.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mb-8 "
          >
            <img
              src={item.img}
              alt="service-image"
              className="w-[80px] h-[65px] mb-2 object-cover bg-white p-2"
            />

       
            <div className="w-16 border-b-[1px] border-gray-300 mb-2"></div>

            <div className="text-center">
              <h6 className="text-base font-Poppins font-semibold">
                {item.title}
              </h6>
              {/* Rating section */}
              <div className="flex items-center justify-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={18} className="text-yellow-400" />
                ))}
              </div>
              <p className="mt-3 text-base font-Poppins font-semibold ">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProduct;
