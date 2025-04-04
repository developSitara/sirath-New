import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const Address = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Chandan Yadav",
      phone: "9876543210",
      address: "Vill- Duhana post nagloi serohi dehat alwar rajasthan",
      pincode: "202301",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      phone: "9876509876",
      address: "Vill- Kherli post Sikandra Alwar Rajasthan",
      pincode: "202302",
    },
  ]);

  const deleteAddress = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
    toast.success("Address deleted successfully");
  };

  return (
    <div className="w-full">
      <NavLink
        to="add-new-address"
        className="mt-4 inline-block font-semibold text-2xl text-blue"
      >
        + Add New Address
      </NavLink>

      <div className="space-y-6 mt-5">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="bg-[#fff] text-blue shadow p-4 flex justify-between items-center w-full relative"
          >
            <div>
              <span className="bg-gray-200 px-2 py-1 rounded text-sm font-light">
                Address {address.id}
              </span>
              <h2 className="flex items-center justify-between text-blue font-medium text-lg mt-1">
                {address.name}
                <span className="text-blue-700 text-sm">{address.phone}</span>
              </h2>
              <p className="text-blue/80 text-base mt-1">{address.address}</p>
              <p className="text-blue text-base">{address.pincode}</p>
            </div>
            <div className="absolute top-4 right-4 cursor-pointer">
              <FaEdit className="text-blue-600 size-5" />
            </div>
            <div
              className="absolute bottom-4 right-4 cursor-pointer"
              onClick={() => deleteAddress(address.id)}
            >
              <MdDelete className="text-red-700 size-5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Address;
