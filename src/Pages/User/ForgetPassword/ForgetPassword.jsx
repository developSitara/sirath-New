import React, { useState } from "react";
import googleIcon from "../../../assets/Google.png";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const ForgetPassword = () => {
  const navigate = useNavigate();
  const [number, setNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");
  

  const formSubmitHandler = (e) => {
    e.preventDefault();

    

    if (number.length !== 10) {
      setPhoneError("Please enter a valid 10-digit phone number.");
      return;
    }

    setPhoneError("");

    toast.success("Form submitted successfully!");
    navigate("/forgetotp");
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (value.length <= 10) {
      setNumber(value);
    }
  };
  return (
    <>
      <div className="w-full py-10 px-5">
        <div className="px-5 xl:px-20 max-w-screen-sm xl:max-w-screen-md  mx-auto py-5 xl:py-10 bg-[#fff]">
          <div className="w-full  text-center">
            <h3 className="text-blue font-bold text-2xl lg:text-[28px]  font-Public">
              Forgot Password
            </h3>
            <p className="text-blue font-normal text-[15px] mt-2  font-Public">
              Enter your email to reset your password.
            </p>
          </div>
          <form className="w-full" onSubmit={formSubmitHandler}>
            <div className="w-full mt-10">
              <input
                required
                value={number}
                onChange={handlePhoneChange}
                min={10}
                type="number"
                maxlength="10"
                placeholder="Enter Your Number"
                className="block w-full border-2 bg-gray-400/20 border-white/50 rounded-2xl  py-3 text-[15px]
              text-base text-blue px-4 placeholder:text-blue 
              outline-none focus:border-blue "
              />
              {phoneError && (
                <p className="text-red-600 text-[12px]">{phoneError}</p>
              )}
            </div>
            <button
              type="submit"
              className="tracking-wider mt-8 w-full rounded-2xl py-3   bg-blue hover:bg-blue/90 text-white font-medium text-[15px] font-Public"
            >
              Send OTP
            </button>
            <small className="mt-8 gap-2 text-blue font-Public text-[13px] font-normal relative flex items-center">
              <span className="flex-grow border-[1px] border-t border-blue"></span>
              or continue with
              <span className="flex-grow border-[1px] border-t border-blue"></span>
            </small>

            <div className="mt-8 relative border-2 bg-white/20 border-blue  rounded-2xl py-3 ">
              <img
                src={googleIcon}
                alt="googleIcon"
                className="absolute  top-3 left-2"
              />
              <button className="tracking-wider w-full  text-blue font-medium text-[15px] font-Public">
                Google
              </button>
            </div>

           
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
