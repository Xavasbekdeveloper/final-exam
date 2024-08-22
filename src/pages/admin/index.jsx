import React, { memo } from "react";
import Sidebar from "./side-bar/Sidebar";
import { Outlet } from "react-router-dom";
import { useGetProfileQuery } from "../../context/api/adminApi";

const Admin = () => {
  const { data } = useGetProfileQuery();
  console.log(data);

  return (
    <div className="grid grid-cols-[250px_1fr]">
      <div>
        <Sidebar />
      </div>
      <div className="bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default memo(Admin);
