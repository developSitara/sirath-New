import React, { useEffect, useState } from "react";
import TopCategory from "../../Components/MainComponent/TopCategory/TopCategory";
import PopularProduct from "./PopularProduct";
import SpecificProduct from "./SpecificProduct";
import ProductFilter from "./ProductFilter";

const ProductCategory = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [sortBy, setSortBy] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 3000 });

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
    <>
      <div className="lg:mt-5 py-5 lg:py-8 px-4 sm:px-6 md:px-6 lg:px-8 xl:px-10 w-full">
        <div className="relative  w-full flex gap-5">
          {/* specific product */}
          <div className="  w-full xl:w-3/4 xl:overflow-y-auto ">
            <SpecificProduct  selectedRating={selectedRating} sortBy={sortBy}  setPriceRange={setPriceRange}/>
          </div>

          {/* filter section */}
          <div className=" w-full hidden lg:block  xl:w-1/4   xl:sticky  xl:top-20 lg:h-[100vh] xl:h-[100vh] z-10">
            <ProductFilter
              selectedRating={selectedRating}
              sortBy={sortBy}
              handleCheckboxChange={handleCheckboxChange}
              handleSortByChange={handleSortByChange}
              priceRange={priceRange}
            />
          </div>
        </div>
        <TopCategory />
        <PopularProduct />
      </div>
    </>
  );
};

export default ProductCategory;
