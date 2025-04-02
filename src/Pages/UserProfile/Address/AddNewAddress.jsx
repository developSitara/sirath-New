import React, { useState } from "react";

const AddNewAddress = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    pincode: "",
    landmark:'',
    locality: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

  };
  return (
    <div className=" p-6 border rounded-lg shadow-md bg-[#fff]">
      <h3 className="font-semibold text-2xl font-Public text-blue">
        New Address
      </h3>
      <form onSubmit={handleFormSubmit} className="mt-5">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            required
            value={formData.firstName}
            onChange={handleChange}
            type="text"
            placeholder="Enter first name"
            className="placeholder:text-blue p-4 w-full border-2 outline-none font-Public focus:border-blue rounded-lg text-blue bg-gray-400/20 text-[15px] font-normal"
          />
          <input
            required
            value={formData.lastName}
            onChange={handleChange}
            type="text"
            placeholder="Your Number"
            className="placeholder:text-blue p-4 w-full border-2 outline-none font-Public focus:border-blue rounded-lg text-blue bg-gray-400/20 text-[15px] font-normal"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            required
            value={formData.pincode}
            onChange={handleChange}
            type="text"
            placeholder="Pin Code"
            className="placeholder:text-blue p-4 w-full border-2 outline-none font-Public focus:border-blue rounded-lg text-blue bg-gray-400/20 text-[15px] font-normal"
          />
          <input
            required
            value={formData.locality}
            onChange={handleChange}
            type="text"
            placeholder="Locality"
            className="placeholder:text-blue p-4 w-full border-2 outline-none font-Public focus:border-blue rounded-lg text-blue bg-gray-400/20 text-[15px] font-normal"
          />
        </div>
        <div className="mb-4">
          <input
            required
            type="text"
            value={formData.address}
            onChange={handleChange}
            placeholder="Full address"
            className="placeholder:text-blue p-4 w-full border-2 outline-none font-Public focus:border-blue rounded-lg text-blue bg-gray-400/20 text-[15px] font-normal"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            required
            type="text"
            value={formData.landmark}
            onChange={handleChange}
            placeholder="Land mark"
            className="placeholder:text-blue p-4 w-full border-2 outline-none font-Public focus:border-blue rounded-lg text-blue bg-gray-400/20 text-[15px] font-normal"
          />
          <input
            required
            type="number"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Alternative Number"
            className="placeholder:text-blue p-4 w-full border-2 outline-none font-Public focus:border-blue rounded-lg text-blue bg-gray-400/20 text-[15px] font-normal"
          />
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue text-white px-6 py-4 rounded-md w-1/2 text-[15px] font-normal font-Public"
          >
            Save
          </button>
          <button
            type="button"
            className="border px-6 py-4 rounded-md w-1/2 font-Public text-blue bg-gray-400/20 text-[15px] font-normal"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewAddress;
