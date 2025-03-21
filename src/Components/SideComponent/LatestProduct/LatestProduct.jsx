import React from "react";
import fuse_1 from '../../../assets/NewImgs/fuse_1.png'
import fuse_2 from '../../../assets/NewImgs/fuse_2.png'
import { FaStar } from "react-icons/fa";
const latestProduct = [
  {
    img: fuse_1,
    title: "Wire fuse",
    price: "$26.00",
  },
  {
    img: fuse_2,
    title: "Fuse",
    price: "$26.00",
  },
];

const LatestProduct = () => {
  return (
    <div className="mt-10 px-5 py-5 bg-[#fff]">
      <h3 className="capitalize text-center  w-full mb-3 font-Poppins font-semibold text-lg">
      latest products
      </h3>
      {/* Border */}
      <div className="w-full border-b-[1px] border-gray-300 mb-3"></div>
      <div className="w-full flex flex-col items-center justify-center gap-5">
        {latestProduct.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mb-8"
          >
            <img
              src={item.img}
              alt="service-image"
              className="w-[72px] h-[63px] mb-2"
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

export default LatestProduct;
