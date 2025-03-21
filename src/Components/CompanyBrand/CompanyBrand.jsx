import React from "react";
import apple from "../../assets/CompanyBrand/apple.svg";
import ubl from "../../assets/CompanyBrand/ubl.svg";
import dell from "../../assets/CompanyBrand/dell.svg";
import asus from "../../assets/CompanyBrand/asus.svg";
import samsung from "../../assets/CompanyBrand/samsung.svg";
import lg from "../../assets/CompanyBrand/lg.svg";
import CompanyBrandSlider from "./CompanyBrandSlider";

// Brand Logos Array
const brandLogos = [
  { id: "1", img: apple, alt: "Apple" },
  { id: "2", img: ubl, alt: "UBL" },
  { id: "3", img: dell, alt: "Dell" },
  { id: "4", img: asus, alt: "Asus" },
  { id: "5", img: samsung, alt: "Samsung" },
  { id: "6", img: lg, alt: "LG" },
];

const CompanyBrand = () => {
  return (
    <>
      <div className="hidden sm:flex md:flex lg:flex xl:flex  px-4 sm:px-6 md:px-6 lg:px-8 xl:px-10 w-full  items-center justify-center gap-8">
        {brandLogos.map((brand) => (
          <div
            key={brand.id}
            className="shadow-md w-full  flex items-center justify-center py-3  bg-[#FFFFFF]"
          >
            <img
              src={brand.img}
              alt={brand.alt}
              className="w-[142px] h-[51px]"
            />
          </div>
        ))}
      </div>
      <CompanyBrandSlider />
    </>
  );
};

export default CompanyBrand;
