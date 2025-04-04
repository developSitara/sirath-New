import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Navigate, NavLink, Outlet, useLocation } from "react-router-dom";
import UserSidebar from "./UserSidebar/UserSidebar";

const UserProfile = () => {
  const location = useLocation();
  return (
    <div className="relative  w-full lg:mt-5 py-5 lg:py-10 px-4 sm:px-6 md:px-6 lg:px-8 xl:px-10">
      <div className="w-full flex gap-5 relative">
        {/* Sidebar */}
        <UserSidebar />
        {location.pathname === "/profile" && <Navigate to="/profile/personalinfo" replace />}

        <div className="w-3/4 h-[620px] overflow-y-auto scrollbar-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
