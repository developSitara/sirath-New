import React from "react";
import ProductCard from "../../../Components/MainComponent/Products/ProductCard";
import { useNavigate } from "react-router-dom";
const ShopByProduct = ({ heading,category, products }) => {
  const filterTransformerCatgery = products.filter(
    (product) => product.category === category
  );
  const navigate =  useNavigate()
  const getCatgeory =()=>{
    navigate(`/shop-by-category/${category}`)
  }
  console.log(getCatgeory)
  return (
    <>
      <div className="w-full ">
        <div className="w-full flex items-center justify-between">
          <p className="text-xl lg:text-4xl xl:text-[40px] font-Poppins font-semibold">
            {heading}
          </p>
          <p onClick={()=>getCatgeory()} className="cursor-pointer text-xl lg:text-4xl xl:text-[40px] font-Poppins font-semibold text-blue">
            See All
          </p>
        </div>
        <div className="mt-5 xl:mt-10 w-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {/* <div className=""> */}
          {filterTransformerCatgery &&
            filterTransformerCatgery.slice(0,5).map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                img={item.img}
                productName={item.productName}
                qty={item.qty}
                price={item.price}
                deletePrice={item.deletePrice}
                tagOff={item.tagOff}
                totalRating={item.totalRating}
                showBuyNow={true}
              />
            ))}
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default ShopByProduct;
