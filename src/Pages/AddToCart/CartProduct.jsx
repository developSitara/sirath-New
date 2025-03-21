import React from "react";
import { FaMinus, FaTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { removeFromCart } from "../../api/localStorage";
import { products } from "../../Data/ProductData";
const CartProduct = ({ cartItems}) => {
  console.log(cartItems);
  const removeFromCartHandler = async (id) => {
    // let singlePro = products.find((product) => product.id == id);
    // console.log(singlePro)
    await removeFromCart(id);

  };
  return (
    <>
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-xl lg:text-4xl xl:text-[40px] font-Poppins font-semibold">
            Products
          </h2>
          <div className=" flex gap-10">
            <h2 className="text-xl lg:text-4xl xl:text-[40px] font-Poppins font-semibold">
              Quantity
            </h2>
            <h2 className="text-xl lg:text-4xl xl:text-[40px] font-Poppins font-semibold">
              Total
            </h2>
          </div>
        </div>

        {/* product item */}

        <div className="w-full mt-5 xl:mt-10">
          <div className="w-full grid gap-8 ">
            {cartItems.map((item) => (
              <div
                key={item?.id}
                className="bg-white flex  md:flex-row items-center p-1 xl:p-4 gap-3 xl:gap-14 "
              >
                <img
                  src={item?.img[0]}
                  alt={"product"}
                  className="w-16 h-16 xl:w-24 xl:h-24 object-contain"
                />
                <div className="flex-1">
                  <h3 className="text-base xl:text-lg font-semibold text-gray-400 text-ellipsis line-clamp-1">
                    {item?.productName}
                  </h3>
                  <p className="text-xs xl:text-sm text-black whitespace-pre-line text-ellipsis line-clamp-2">
                    {item?.description}
                  </p>
                  <p className="text-red-500 font-bold text-base xl:text-lg mt-1">
                    {item?.price}
                  </p>
                </div>
                <div className="flex items-center gap-2 xl:gap-5">
                  <button variant="outline" size="icon">
                    <FaMinus className="w-2 h-2 xl:w-5 xl:h-5 text-black" />
                  </button>
                  <span className="text-base xl:text-lg font-semibold">
                    {item?.qty}
                  </span>
                  <button variant="outline" size="icon">
                    <FaPlus className="w-2 h-2 xl:w-5 xl:h-5 text-black" />
                  </button>
                </div>
                <p className="text-xs xl:text-lg font-semibold">
                  ₹ {item?.price}
                </p>
                <button   onClick={() => removeFromCartHandler(item?.id)} variant="outline" size="icon">
                  <FaTrashAlt className="w-2 h-2 xl:w-5 xl:h-5 text-red-800 hover:text-blue" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
