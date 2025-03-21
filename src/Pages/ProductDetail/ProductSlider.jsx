import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productImg from "../../assets/NewImgs/panel_board_1.png";
import productImg2 from "../../assets/NewImgs/fuse_2.png";
import productImg4 from "../../assets/NewImgs/wire_2.png";

const ProductSlider = ({ images }) => {
 const singleImg =images[0]
  const [mainImage, setMainImage] = useState(singleImg);

  const settings = {
    dots: false, 
    infinite: false, 
    speed: 500, 
    slidesToShow: 4, 
    slidesToScroll: 1, 
    focusOnSelect: true, 
    centerMode: true,
    centerPadding: '0', 
  };

  return (
    <div className="max-w-lg mx-auto  p-4">
      {/* Big Main Image */}
      <div className="mb-4">
        <img
          src={mainImage}
          alt="Product"
          className="w-full h-80 xl:h-96 object-contain "
        />
      </div>

      {/* Thumbnail Images */}
      <div className="mt-16 w-full h-36">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-2 cursor-pointer">
              <img
                src={img}
                alt={`Thumbnail ${index}`}
                onClick={() => setMainImage(img)}
                className={`w-20 h-16 xl:w-24 xl:h-24 object-contain rounded-md transition-all 
                                    ${
                                      mainImage === img
                                        ? "border-2 border-blue"
                                        : "border border-gray-300"
                                    }`}
              />
            </div>
          ))}
        </Slider>

        
      </div>
    </div>
  );
};

export default ProductSlider;
