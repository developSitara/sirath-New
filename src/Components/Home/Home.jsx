import React from "react";
import CompanyBrand from "../CompanyBrand/CompanyBrand";
import HeroSection from "../HeroSection/HeroSection";
import SideComponent from "../SideComponent/SideComponent";
import MainComponent from "../MainComponent/MainComponent";

const Home = () => {
  
  return (
    <>
      <HeroSection />
      <CompanyBrand />

      <div className="py-12 px-4 sm:px-6 md:px-6 lg:px-8 xl:px-10 w-full flex">
        {/* Main Container */}
        <div className=" xl:w-3/4 w-full">
          <MainComponent />
        </div>

        {/* Side Content */}
        <div className="pl-6  hidden lg:hidden xl:block  xl:w-3/12 w-full ">
          <SideComponent />
        </div>
      </div>
    </>
  );
};

export default Home;
