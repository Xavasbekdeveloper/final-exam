import React, { memo } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { AiOutlineProduct } from "react-icons/ai";
import { RiEdit2Line } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "../../../context/slice/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <section className="sticky top-0 left-0 h-screen px-5 bg-white shadow-md">
      <div className="flex items-center gap-2 pt-7 mb-8">
        <Link to={"/"}>
          <FaArrowLeft className="w-5 h-5 text-black" />
        </Link>
        <h3 className="text-2xl font-semibold text-black">Dashboard</h3>
      </div>
      <ul className="flex flex-col">
        <li>
          <NavLink
            to={"/admin/create-product"}
            className={({ isActive }) =>
              `flex items-center gap-2 py-2 px-3 rounded-lg  ${
                isActive
                  ? "bg-black text-white"
                  : "text-black hover:bg-gray-100"
              }`
            }
          >
            <AiOutlineProduct className="w-5 h-5" />
            Create product
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/admin/manage-product"}
            className={({ isActive }) =>
              `flex items-center gap-2 py-2 px-3 rounded-lg ${
                isActive
                  ? "bg-black text-white"
                  : "text-black hover:bg-gray-100"
              }`
            }
          >
            <RiEdit2Line className="w-5 h-5" />
            Manage product
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/admin/create-category"}
            className={({ isActive }) =>
              `flex items-center gap-2 py-2 px-3 rounded-lg ${
                isActive
                  ? "bg-black text-white"
                  : "text-black hover:bg-gray-100"
              }`
            }
          >
            <AiOutlineProduct className="w-5 h-5" />
            Create category
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/admin/manage-category"}
            className={({ isActive }) =>
              `flex items-center gap-2 py-2 px-3 rounded-lg ${
                isActive
                  ? "bg-black text-white"
                  : "text-black hover:bg-gray-100"
              }`
            }
          >
            <RiEdit2Line className="w-5 h-5" />
            Manage category
          </NavLink>
        </li>
      </ul>
      <div className="absolute bottom-5 left-5">
        <button
          onClick={() => dispatch(logout())}
          className="flex items-center gap-2"
        >
          <MdOutlineLogout className="w-5 h-5" />
          Logout
        </button>
      </div>
    </section>
  );
};

export default memo(Sidebar);
