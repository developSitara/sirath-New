import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import ProductSlider from "./ProductSlider";
import { useNavigate, useParams } from "react-router-dom";
import ProductReview from "./ProductReview";
import TopCategory from "../../Components/MainComponent/TopCategory/TopCategory";
import PopularProduct from "../ProductCategory/PopularProduct";
import ProductAbout from "./ProductAbout";
import { products } from "../../Data/ProductData";
import ReactRating from "react-rating";
import { addToCart } from "../../api/localStorage";
const sections = [
  {
    title: "Overview",
    description:
      "A stylish and comfortable t-shirt made from premium materials.",
  },
  {
    title: "Specifications",
    description:
      "High-conductivity electronic conductor with enhanced durability and efficiency.",
  },
  {
    title: "Product Details",
    description:
      "High Conductivity, Long-lasting Durability, Energy Efficient.",
  },
];

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const addToCartHandler = async (id) => {
    let singlePro = products.find((product) => product.id == id);
    await addToCart(singlePro);
    navigate("/cart");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  useEffect(() => {
    const foundProduct = products.find((item) => item.id === productId);
    setProduct(foundProduct);
  }, [productId]);

  if (!product) {
    return (
      <p className="py-10 text-center text-red-500 text-xl">Loading.....</p>
    );
  }

  return (
    <>
      <div className=" lg:mt-5 py-5 lg:py-8 px-4 sm:px-6 md:px-6 lg:px-8 xl:px-10 w-full">
        <div className="relative w-full grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 items-start justify-center">
          {/* product slider */}
          <div className=" xl:sticky  xl:top-20 lg:h-[700px] xl:h-[700px] z-10 bg-[#fff]">
            <ProductSlider images={product.img} />
            <div className=" w-full flex items-center justify-center gap-5">
              <button className="w-full rounded-full py-2 lg:py-3 bg-blue hover:bg-blue/90 text-white font-medium text-base font-inter">
                Buy Now
              </button>
              <button
                onClick={() => addToCartHandler(product.id)}
                className="w-full rounded-full py-2 lg:py-3 border-blue border-2 text-blue hover:bg-blue hover:text-white font-medium text-base font-inter"
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* product details */}
          <div className="xl:overflow-y-auto w-full px-8 py-5 space-y-3 h-auto bg-[#fff]">
            <h3 className="capitalize text-3xl lg:text-4xl xl:text-4xl font-bold font-Poppins">
              {product?.productName}
            </h3>
            <div className="w-full flex gap-10">
              <div className="flex flex-wrap items-center justify md:justify-start lg:justify-start gap-2 sm:gap-4 md:gap-6 lg:gap-8">
                <p className="capitalize text-xl sm:text-2xl md:text-3xl font-inter font-normal text-blue">
                  ₹{product?.price} <span className="text-sm">/piece</span>
                </p>
                <del className="text-lg sm:text-xl md:text-2xl font-inter font-normal text-gray-400">
                  ₹{product?.deletePrice}{" "}
                  <span className="text-sm">/piece</span>
                </del>
              </div>

              {/* offer */}
              <p className="font-Poppins font-medium text-base text-green-600">
                {product.tagOff}
              </p>
            </div>

            {/* rating section */}
            <div className="py-1 flex w-full items-center gap-3 text-orange-600">
              <ReactRating
                className="flex items-center justify-center gap-5"
                initialRating={product.totalRating}
                readonly
                emptySymbol={<FaStar size={20} className="text-gray-300" />}
                fullSymbol={<FaStar size={20} className="text-blue" />}
              />
            </div>
            <p className="capitalize text-sm lg:text-base text-blue font-inter font-normal">
              {product.description}
            </p>

            {/* input field */}
            <div className="pb-2 w-full">
              <h6 className="mb-2 text-blue text-base font-inter font-semibold">
                Enter Delivery Code
              </h6>
              <div className="flex w-full bg-white">
                <input
                  type="text"
                  placeholder="Enter location..."
                  className="py-2 border-b-2 border-blue/25 w-full p-2 focus:outline-none hover:bg-blue/30 bg-blue/20 text-blue"
                />
                <button className="w-[30%] px-4 py-2 text-white rounded-r-md bg-blue">
                  Search
                </button>
              </div>
            </div>

            {/* add to cart section */}
            <h6 className="text-blue text-base font-inter font-semibold">
              Minimum quantity{" "}
            </h6>
            <div className="w-full gap-5 flex flex-col">
              <button className="w-full rounded-full py-2 lg:py-3 hover:bg-blue/30 bg-blue/20 text-blue font-medium text-base font-inter">
               {product.qty}
              </button>
            </div>
            <div className="space-y-6">
              <hr className="border-gray-300 my-4" />
              {sections.map((section, index) => (
                <div key={index}>
                  <div className="mb-4">
                    <h4 className="text-blue font-semibold text-base font-inter">
                      {section.title}
                    </h4>
                    <p className="text-blue text-sm font-inter font-normal">
                      {section.description}
                    </p>
                  </div>

                  {index < sections.length - 1 && (
                    <hr className="border-gray-300 my-4" />
                  )}
                </div>
              ))}
            </div>

            <ProductAbout />
            <ProductReview product={product.review} />
          </div>
        </div>
        <TopCategory />
        <PopularProduct />
      </div>
    </>
  );
};

export default ProductDetail;
