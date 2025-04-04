import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";

const PersonalInfo = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "Kumar",
    lastName: "Sanu",
    email: "Kumar@sanu.com",
    number: "8786345230",
  });

  const [editField, setEditField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const toggleEdit = (field) => {
    setEditField(field === editField ? null : field);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    toast.success("Form  updated", userInfo);
    console.log("Form  updated", userInfo);
  };

  return (
    <div className="bg-[#fff] shadow-lg p-6 ">
      <h3 className="font-semibold font-Public text-xl text-blue">
        Personal Information
      </h3>

      <form className="w-full xl:w-4/5" onSubmit={handleSubmit}>
        {/* Name Fields */}
        <div className="flex items-center gap-4 mt-5">
          <input
            type="text"
            name="firstName"
            className="w-1/2 p-2 border-2 outline-none focus:border-blue rounded-lg text-blue bg-gray-400/20 text-sm font-normal"
            value={userInfo.firstName}
            onChange={handleChange}
            readOnly={editField !== "firstName"}
          />
          <input
            type="text"
            name="lastName"
            className="w-1/2 p-2 border-2 outline-none focus:border-blue rounded-lg text-blue bg-gray-400/20 text-sm font-normal"
            value={userInfo.lastName}
            onChange={handleChange}
            readOnly={editField !== "lastName"}
          />
          <div
            className="text-blue cursor-pointer"
            onClick={() => toggleEdit("firstName")}
          >
            <FaEdit size={20} />
          </div>
        </div>

        {/* Email */}
        <h3 className="mt-5 font-semibold font-Public text-xl text-blue">
          Email
        </h3>
        <div className="flex items-center justify-center gap-4">
          <input
            type="email"
            name="email"
            className="w-full p-2 border-2 outline-none focus:border-blue rounded-lg text-blue bg-gray-400/20 text-sm font-normal mt-2"
            value={userInfo.email}
            onChange={handleChange}
            readOnly={editField !== "email"}
          />
          <div
            className="text-blue cursor-pointer"
            onClick={() => toggleEdit("email")}
          >
            <FaEdit size={20} />
          </div>
        </div>

        {/* Number */}
        <h3 className="mt-5 font-semibold font-Public text-xl text-blue">
          Number
        </h3>
        <div className="flex items-center justify-center gap-4">
          <input
            type="text"
            name="number"
            className="w-full p-2 border-2 outline-none focus:border-blue rounded-lg text-blue bg-gray-400/20 text-sm font-normal mt-2"
            value={userInfo.number}
            onChange={handleChange}
            readOnly={editField !== "number"}
          />
          <div
            className="text-blue cursor-pointer"
            onClick={() => toggleEdit("number")}
          >
            <FaEdit size={20} />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue hover:bg-blue/80 mt-6 text-white px-4 py-3 rounded-md w-1/2 text-[15px] font-normal font-Public"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default PersonalInfo;
