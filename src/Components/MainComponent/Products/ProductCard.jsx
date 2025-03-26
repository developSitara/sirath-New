import React from "react";
import { FaStar } from "react-icons/fa";
import ReactRating from "react-rating";
import { addToCart } from "../../../api/localStorage";
import { products } from "../../../Data/ProductData";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
const ProductCard = ({
  id,
  key,
  tagOff,
  img,
  productName,
  qty,
  price,
  deletePrice,
  totalRating,
  showBuyNow = true,
}) => {
  const banner = Array.isArray(img) ? img[0] : img;
  const navigate = useNavigate();

  const addToCartHandler = async () => {
    let singlePro = products.find((product) => product.id == id);
    await addToCart(singlePro);
    navigate("/cart");
  };

  return (
    <div
      key={key}
      className="cursor-pointer w-full relative  h-auto bg-[#fff] py-2 xl:py-5 shadow-md"
    >
      <div
        onClick={() => navigate(`/product-detail/${id}`)}
        className=" w-full"
      >
        <div className="flex w-full items-end justify-end px-4">
          <CiHeart className="size-5 absolute top-2 right-2"/>
        </div>
        <div className="w-32 h-32 md:w-36 md:h-36 m-auto flex justify-center items-center overflow-hidden">
          {tagOff === "New" ? (
            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-br-lg shadow-md">
              New
            </div>
          ) : tagOff === "30% Off" ? (
            <div className="absolute top-2 left-2 bg-green-600 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-br-lg shadow-md">
              30% Off
            </div>
          ) : null}

          {/* Product Image */}

          <div className="product-images">
            <img
              src={banner}
              alt={"banner"}
              className="w-full h-full object-contain p-2 aspect-square"
            />
          </div>
        </div>

        <div className="w-full flex text-center flex-col items-center justify-center px-2 pb-3">
          <h3 className="text-lg font-medium  text-ellipsis line-clamp-1 font-Poppins mt-2">
            {productName}
          </h3>
          {/* rating section */}
          <div className="flex  items-center justify-center gap-5 mb-3 mt-3">
            <ReactRating
              className="flex items-center justify-center gap-5"
              initialRating={totalRating}
              readonly
              emptySymbol={<FaStar size={20} className="text-gray-300" />}
              fullSymbol={<FaStar size={20} className="text-yellow-400" />}
            />
          </div>
          <p className="text-xl font-Poppins font-semibold ">
            ₹{price}
            <span className="text-gray-400 text-base font-normal line-through pl-2">
              {" "}
              ₹{deletePrice}
            </span>
          </p>
        </div>
      </div>

      {/* add to cart */}
      <div className="px-2 py-5  w-full flex items-center justify-center gap-3">
        {showBuyNow && (
          <button className="w-full rounded-md border-2 border-blue py-2 hover:text-white  hover:bg-blue text-blue font-medium text-base font-inter">
            Buy Now
          </button>
        )}
        <button
          onClick={() => addToCartHandler()}
          className="w-full rounded-md py-2 border-blue bg-blue hover:bg-blue/90  text-white  font-medium text-base font-inter"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
