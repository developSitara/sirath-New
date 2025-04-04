import React from "react";
import pic from "../../../assets/NewImgs/wire_1.png";
import { FaEdit, FaHeart, FaRegHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const MyWishlist = () => {
  const wishlistList = [
    {
      img: pic,
      title: "title of product",
      des: "description ",
      price: "2545.00",
    },
    {
      img: pic,
      title: "title of product",
      des: "description ",
      price: "2545.00",
    },

  ];
  return (
    <>
      
        <div className="space-y-6 ">
          {wishlistList.map((item) => (
            <div className="bg-[#fff]  shadow p-4 flex justify-between items-center w-full relative">
              <div className="w-full flex gap-4">
                <div className="w-24 h-24 bg-gray-200">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="space-y-2">
                  <h5 className="text-base text-blue font-Public font-semibold capitalize">{item.title}</h5>
                  <p className="text-base font-medium font-Public text-gray-600">{item.des}</p>
                  <small className="text-base font-Public font-semibold">{item.price}</small>
                </div>
              </div>
              <div className="">
                <FaRegHeart className="text-blue-600 cursor-pointer size-5  text-blue " />
              </div>
              <div className="absolute bottom-4 right-4">
                <MdDelete className="text-red-700 cursor-pointer size-5 hover:text-red-800" />
              </div>
            </div>
          ))}
        </div>
      
    </>
  );
};

export default MyWishlist;
