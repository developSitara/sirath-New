import React, { useState } from "react";
import googleIcon from "../../../assets/Google.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const LoginPassword = () => {
    const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState("");
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!isChecked) {
      setCheckboxError("Remember me");
      return;
    }
    setCheckboxError("");
    setPassword("");
    toast.success("form submitted..");
    navigate("/");
  };

  return (
    <>
      <div className="w-full py-10 px-5">
        <div className="px-5 xl:px-10 max-w-screen-sm xl:max-w-screen-md  mx-auto py-5 xl:py-10 bg-[#fff]">
          <div className="w-full  text-center">
            <h3 className="text-blue font-bold text-2xl lg:text-[28px]  font-Public">
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                min={10}
                type="password"
                placeholder="Enter Your Password"
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
            )}
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

              <NavLink
                to={"/forgetpassword"}
                className="mt-6 text-center text-blue font-Public text-[13px] font-normal"
              >
                Forget my password!
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPassword;
