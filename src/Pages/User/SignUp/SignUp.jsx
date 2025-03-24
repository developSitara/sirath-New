import React, { useState } from "react";
import googleIcon from "../../../assets/Google.png";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const [number, setNumber] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setNumber("");
    // console.log(`phone number is ${number}`)
    alert("form submitted..");
    navigate("/signupOpt");
  };

  return (
    <>
      <div className="w-full py-10 px-5">
        <div className="px-5 max-w-screen-sm xl:max-w-screen-md  mx-auto py-24 xl:py-32 bg-[#fff]">
          <div className="w-full  text-center">
            <h3 className="text-blue font-bold text-[28px]  font-Public">
              Create Your Account
            </h3>
            <p className="text-blue font-normal text-[15px] mt-2  font-Public">
              Sign up to start shopping with us!
            </p>
          </div>
          <form className="w-full" onSubmit={formSubmitHandler}>
            <div className="w-full mt-10">
              <input
                required
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                min={10}
                type="number"
                maxlength="10"
                placeholder="Enter Your Number"
                className="block w-full border-2 bg-gray-400/20 border-white/50 rounded-2xl  py-3 text-[15px]
              text-base text-blue px-4 placeholder:text-blue 
              outline-none focus:border-blue "
              />
            </div>
            <button
              type="submit"
              className="tracking-wider mt-8 w-full rounded-2xl py-3   bg-blue hover:bg-blue/90 text-white font-medium text-[15px] font-Public"
            >
              Sign Up
            </button>
            <small className="mt-8 gap-2 text-blue font-Public text-[13px] font-normal relative flex items-center">
              <span className="flex-grow border-[1px] border-t border-gray-200"></span>
              or continue with
              <span className="flex-grow border-[1px] border-t border-gray-200"></span>
            </small>

            <div className="mt-8 relative border-2 bg-white/20  rounded-2xl py-3 ">
              <img
                src={googleIcon}
                alt="googleIcon"
                className="absolute  top-3 left-2"
              />
              <button className="tracking-wider w-full  text-gray-400 font-medium text-[15px] font-Public">
                Google
              </button>
            </div>

            <div className="mt-8 text-blue font-Public text-[13px] font-normal gap-2 flex items-center justify-center">
              <input type="checkbox" /> I agree to the terms and conditions
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
