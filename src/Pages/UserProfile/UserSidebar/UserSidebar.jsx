import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import { RiLogoutCircleLine, RiHomeHeartLine } from "react-icons/ri";

const UserSidebar = () => {
  const location = useLocation();
 
  return (
    <aside className="hidden w-1/4 bg-[#91A2B633] shadow-md sticky top-20 h-[620px] xl:flex flex-col ">
      {/* User Info */}
      <div className="bg-[#fff] p-6 flex gap-5 items-center">
        <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
        <Link to={'/'}>
          <h6 className="mt-2 font-medium text-lg capitalize font-Public">
            hello
          </h6>
          <h2 className="font-semibold text-2xl font-Public">Chandan Yadav</h2>
        </Link>
      </div>

      <div className="w-full p-6 flex-1 px-14">
        <div className="">
          <h3 className="font-semibold text-2xl font-Public">
            Account Setting
          </h3>
          <ul className="flex flex-col mt-2 space-y-2 text-gray-500">
            <NavLink
              to="/profile/personalinfo"
              className={({ isActive }) =>
                `cursor-pointer font-normal text-base font-Public hover:text-darkgrey ${
                  isActive || location.pathname === "/profile"
                    ? "text-darkgrey font-semibold"
                    : ""
                }`
              }
            >
              Profile Information
            </NavLink>
            <NavLink
              to="/profile/address"
              className={({ isActive }) =>
                `cursor-pointer font-normal text-base font-Public hover:text-darkgrey ${
                  isActive ? "text-darkgrey font-semibold" : ""
                }`
              }
            >
              Manage Address
            </NavLink>
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="font-semibold text-2xl font-Public">Other</h3>
          <ul className="flex flex-col mt-2 space-y-2 text-gray-500">
            <NavLink
              to="/profile/wishlist"
              className={({ isActive }) =>
                `cursor-pointer font-normal text-base font-Public hover:text-darkgrey ${
                  isActive ? "text-darkgrey font-semibold" : ""
                }`
              }
            >
              My Wishlist
            </NavLink>
            <NavLink
              to="/profile/pagenothere"
              className={({ isActive }) =>
                `cursor-pointer font-normal text-base font-Public hover:text-darkgrey ${
                  isActive ? "text-darkgrey font-semibold" : ""
                }`
              }
            >
              My Orders
            </NavLink>
            <NavLink to="/profile/pagenothere">My Reviews & Rating</NavLink>
            <NavLink to="/profile/pagenothere">Delete my Account</NavLink>
            <NavLink to="/profile/pagenothere">Help</NavLink>
          </ul>
        </div>
      </div>

      <div className="mt-auto">
        <button className="flex items-center justify-center gap-2 font-semibold text-2xl font-Public w-full py-3 bg-[#ffff] text-black hover:bg-blue hover:text-white">
          <RiLogoutCircleLine /> Log Out
        </button>
      </div>
    </aside>
  );
};

export default UserSidebar;
