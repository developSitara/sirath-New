import React, { useEffect, useState } from "react";
import ProductFilter from "../../ProductCategory/ProductFilter";
import TopCategory from "../../../Components/MainComponent/TopCategory/TopCategory";
import PopularProduct from "../../ProductCategory/PopularProduct";
import CategoryProduct from "./CategoryProduct";

const ShopByCategory = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [sortBy, setSortBy] = useState("");

  const handleCheckboxChange = (rating) => {
    setSelectedRating(selectedRating === rating ? null : rating);
  };

  const handleSortByChange = (option) => {
    setSortBy(option);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="lg:mt-5 py-5 lg:py-8 px-4 sm:px-6 md:px-6 lg:px-8 xl:px-10 w-full">
      <div className=" relative  w-full flex gap-5">
        {/* shop by category product */}
        <div className="  w-full xl:w-3/4 xl:overflow-y-auto ">
          <CategoryProduct selectedRating={selectedRating} sortBy={sortBy}/>
        </div>

        {/* filter section */}
        <div className="  w-full hidden lg:block  xl:w-1/4   xl:sticky  xl:top-20 lg:h-[100vh] xl:h-[100vh] z-10">
          <ProductFilter
            selectedRating={selectedRating}
            sortBy={sortBy}
            handleCheckboxChange={handleCheckboxChange}
            handleSortByChange={handleSortByChange}
          />
        </div>
      </div>
      <TopCategory />
      <PopularProduct />
    </div>
  );
};

export default ShopByCategory;
