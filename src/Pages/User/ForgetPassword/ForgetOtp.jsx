import React, { useState } from "react";
import googleIcon from "../../../assets/Google.png";
import { useNavigate } from "react-router-dom";
const ForgetOtp = () => {
  const navigate = useNavigate();
   const [isChecked, setIsChecked] = useState(false);
    const [checkboxError, setCheckboxError] = useState("");
  const formSubmitHandler = (e) => {
    e.preventDefault();
    // if (!isChecked) {
    //   setCheckboxError("remember me");
    //   return;
    // }
    // setCheckboxError('')
    navigate("/forgetnewpassword");
  };
  return (
    <>
      <div className="w-full py-10 px-5">
        <div className="px-5 xl:px-20 max-w-screen-sm xl:max-w-screen-md  mx-auto  bg-[#fff] py-5 xl:py-10">
          <div className="w-full  text-center">
            <h3 className="text-blue font-bold text-2xl lg:text-[28px]  font-Public">
              Forgot Password
            </h3>
            <p className="text-blue font-normal text-xs md:text-sm xl:text-[15px] mt-2  font-Public">
              Enter your email to reset your password.
            </p>
          </div>
          <form className="w-full" onSubmit={formSubmitHandler}>
            <div class="w-full mt-8 gap-2 xl:gap-4 flex items-center justify-center space-x-2">
              <label class="text-blue text-[15px] font-Public font-medium">
                Enter Your OTP
              </label>
              <div class="flex space-x-2  xl:space-x-8">
                <input
                  type="text"
                  maxlength="1"
                  class="w-6 h-6 xl:w-10 xl:h-10 border-b-2 border-blue bg-transparent text-center focus:outline-none focus:border-blue"
                />
                <input
                  type="text"
                  maxlength="1"
                  class="w-6 h-6 xl:w-10 xl:h-10 border-b-2 border-blue bg-transparent text-center focus:outline-none focus:border-blue"
                />
                <input
                  type="text"
                  maxlength="1"
                  class="w-6 h-6 xl:w-10 xl:h-10 border-b-2 border-blue bg-transparent text-center focus:outline-none focus:border-blue"
                />
                <input
                  type="text"
                  maxlength="1"
                  class="w-6 h-6 xl:w-10 xl:h-10 border-b-2 border-blue bg-transparent text-center focus:outline-none focus:border-blue"
                />
              </div>
            </div>
            <button
              type="submit"
              className="tracking-wider mt-8 w-full rounded-2xl py-2 xl:py-3    bg-blue hover:bg-blue/90 text-white font-medium text-[15px] font-Public"
            >
              Submit
            </button>
            <small className="mt-8 gap-2 text-blue font-Public text-[13px] font-normal relative flex items-center">
              <span className="flex-grow border-[1px] border-t border-blue"></span>
              or continue with
              <span className="flex-grow border-[1px] border-t border-blue"></span>
            </small>

            <div className="mt-8 relative border-2 bg-white/20 border-blue  rounded-2xl py-2 xl:py-3  ">
              <img
                src={googleIcon}
                alt="googleIcon"
                className="absolute  top-3 left-2"
              />
              <button className="tracking-wider w-full  text-blue font-medium text-[15px] font-Public">
                Google
              </button>
            </div>

            {/* <div className="mt-8 text-blue font-Public text-[13px] font-normal gap-2 flex items-center justify-center">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              Remember me
            </div>
            {checkboxError && (
              <p className="text-red-600 text-center text-[12px]">
                {checkboxError}
              </p>
            )} */}
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetOtp;
