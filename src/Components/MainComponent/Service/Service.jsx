import React from "react";
import shipping from "../../../assets/SideImgs/shipping.svg";
import customer from "../../../assets/SideImgs/customer.svg";
import payment from "../../../assets/SideImgs/payment.svg";

const service = [
  {
    img: shipping,
    title: "Free Shipping",
    des: "Free Shipping On Order $19",
  },
  {
    img: customer,
    title: "24/7 Support",
    des: "Free Shipping On Order $19",
  },
  {
    img: payment,
    title: "Secure Payment",
    des: "Free Shipping On Order $19",
  },
];

const Service = () => {
  return (
    <div className="block sm:hidden md:hidden lg:hidden xl:hidden mt-7 py-8 bg-[#fff]">
      <div className="w-full flex flex-col items-center justify-center gap-5">
        {service.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center mb-8">
            <img
              src={item.img}
              alt="service-image"
              className="w-[72px] h-[63px] mb-2"
            />

            {/* Border below the image */}
            <div className="w-16 border-b-[1px] border-gray-300 mb-2"></div>

            <div className="text-center">
              <h6 className="text-base font-Poppins font-semibold">{item.title}</h6>
              <p className="text-sm font-Poppins font-normal text-gray-500">{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
