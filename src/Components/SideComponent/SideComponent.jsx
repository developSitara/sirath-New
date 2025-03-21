import React from "react";
import SpecialProduct from "./SpecialProduct/SpecialProduct";
import Service from "./Service/Service";
import Testimonials from "./Testimonials/Testimonials";
import LatestProduct from "./LatestProduct/LatestProduct";
import FeatureProduct from "./FeatureProduct/FeatureProduct";
import SaleOff from "./SaleOff/SaleOff";
import Enquiry from "./Enquiry/Enquiry";

const SideComponent = () => {
  return (
    <>
      <SpecialProduct />
      <Service />
      <Testimonials />
      <LatestProduct />
      <SaleOff />
      <FeatureProduct />
      <Enquiry />
    </>
  );
};

export default SideComponent;
