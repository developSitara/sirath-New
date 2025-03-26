import React from "react";
import "./Style.css";

const PriceRangeSlider = ({ min, max, minVal, maxVal, setMinVal, setMaxVal }) => {
 

  return (
    <div className="container">
      {/* Left thumb */}
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => setMinVal(Number(event.target.value))}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 10 ? "5" : "3" }}
      />

      {/* Right thumb */}
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => setMaxVal(Number(event.target.value))}
        className="thumb thumb--right"
        style={{ zIndex: maxVal < min + 10 ? "5" : "4" }}
      />

      {/* Slider UI */}
      <div className="slider">
        <div className="slider__track" />
        <div  className="slider__range" />
        <div className="slider__values">
          <div className="slider__left-value">Min: {minVal}</div>
          <div className="slider__right-value">Max: {maxVal}</div>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
