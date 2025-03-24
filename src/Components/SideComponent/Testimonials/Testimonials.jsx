import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client from "./client.png";
import { FaStar } from "react-icons/fa";
import './Style.css'
const testimonials = [
  {
    user: client,
    clientName: "Darrel Austin",
    profession: "Founder",
    des: "“It is a long established fact that a reader will be distracted by the readable.”",
  },
  {
    user: client,
    clientName: "John Doe",
    profession: "CEO",
    des: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
  },
  {
    user: client,
    clientName: "Jane Smith",
    profession: "Marketing Head",
    des: "“Contrary to popular belief, Lorem Ipsum is not simply random text.”",
  },
];

const Testimonials = () => {
  
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="mt-10 py-5 px-10 bg-blue text-white">
      <h3 className="text-center capitalize w-full mb-3 font-Poppins font-semibold text-lg">
        our testimonials
      </h3>
      {/* Border */}
      <div className="w-full border-b-[1px] border-gray-300 mb-3"></div>
      <div className="py-8  px-5 w-full flex items-center justify-center">
        <Slider {...settings} className="w-full">
          {testimonials.map((tes, index) => (
            <div key={index} className="px-2 lg:px-3">
              <div className="w-full flex flex-col items-center justify-center text-white">
                <img
                  src={tes.user}
                  alt="Client"
                  className="w-[80px] h-[80px] rounded-full mb-3"
                />
                <h2 className="text-lg font-semibold text-white">
                  {tes.clientName}
                </h2>
                <p className="text-sm text-white">{tes.profession}</p>

                {/* Rating section */}
                <div className="flex items-center justify-center gap-1 mt-2">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} size={18} className="text-yellow-400" />
                  ))}
                </div>

                <p className="text-sm text-white mt-3 text-center">{tes.des}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
