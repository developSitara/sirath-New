import React, { useState } from "react";
import googleIcon from "../../../assets/Google.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setText("");
    // console.log(`phone number is ${number}`)
    alert("form submitted..");
    navigate("/loginpassword");
  };

  return (
    <>
      <div className="px-5 max-w-screen-sm xl:max-w-screen-md  mx-auto py-28 xl:py-32">
        <div className="w-full  text-center">
          <h3 className="text-blue font-bold text-[28px]  font-Public">
            Login to Sirath
          </h3>
          <p className="text-blue font-normal text-[15px] mt-2  font-Public">
            Access your account and start shopping!
          </p>
        </div>
        <form className="w-full" onSubmit={formSubmitHandler}>
          <div className="w-full mt-10">
            <input
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
              min={10}
              type="text"
              placeholder="Enter Your Email/Number"
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
            <span className="flex-grow border-[1px] border-t border-blue"></span>
            or continue with
            <span className="flex-grow border-[1px] border-t border-blue"></span>
          </small>

          <div className="mt-8 relative border-2 border-blue bg-white/20  rounded-2xl py-3 ">
            <img
              src={googleIcon}
              alt="googleIcon"
              className="absolute  top-3 left-2"
            />
            <button className="tracking-wider w-full  text-blue font-medium text-[15px] font-Public">
              Google
            </button>
          </div>

          <div className="mt-6 text-blue font-Public text-[13px] font-normal gap-2 flex items-center justify-center">
            <input type="checkbox" /> Remember me
          </div>
          <small className="mt-6 gap-2 text-blue font-Public text-[13px] font-normal relative flex items-center">
            <span className="flex-grow border-[1px] border-t border-blue"></span>
            Need help? Contact support
            <span className="flex-grow border-[1px] border-t border-blue"></span>
          </small>

          <div className="w-full flex flex-col items-center justify-center mt-6">
            <small className="text-center text-blue font-Public text-[13px] font-normal">
              I don’t have account!{" "}
              <NavLink to={"/signup"} className={"underline pl-2"}>
                Create a new account
              </NavLink>
            </small>

            <NavLink to={'/forgetpassword'} className="mt-6 text-center text-blue font-Public text-[13px] font-normal">Forget my password!</NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
