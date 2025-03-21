import React, { useState } from 'react';

const PriceRangeSlider = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
        {/* <span className="text-gray-700">Min: ${minValue}</span>
        <span className="text-gray-700">Max: ${maxValue}</span> */}
      </div>

      <div className="relative mb-4">
        <input
          type="range"
          min="0"
          max="100"
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <input
          type="range"
          min="0"
          max="100"
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div className="mt-10 flex items-center justify-between mb-4">
        <span className="text-gray-700 border-2 border-gray-300 px-2 py-1 rounded-md">Min: {minValue}</span>
        <span className="text-gray-700 border-2 border-gray-300 px-2 py-1 rounded-md">Max: {maxValue}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;