import React, { memo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoClose, IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegCircleUser, FaBarsStaggered } from "react-icons/fa6";

import logo from "../../assets/icons/logo.svg";

const Header = () => {
  const [topHide, setTopHide] = useState(
    sessionStorage.getItem("topHide") || true
  );
  const [bar, setBar] = useState(false);
  const handleTopHide = () => {
    setTopHide(false);
    sessionStorage.setItem("topHide", topHide);
  };
  return (
    <>
      {topHide ? (
        <div className="py-2 bg-black">
          <div className="container flex items-center justify-between gap-2 max-[440px]:text-xs">
            <div></div>
            <div>
              <p className="text-sm text-white font-normal text-center">
                Sign up and get 20% off to your first order.{" "}
                <Link
                  to={"/login"}
                  className="font-medium underline decoration-white underline-offset-4"
                >
                  Sign Up Now
                </Link>
              </p>
            </div>
            <button onClick={handleTopHide}>
              <IoClose className="text-white w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
      <header className="sticky top-0 left-0 w-full bg-white z-50">
        <nav className="py-6">
          <div className="container flex items-center justify-between gap-10 max-md:gap-5">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setBar(true)}
                className="hidden max-md:block"
              >
                <FaBarsStaggered className="w-6 h-6" />
              </button>
              <Link>
                <img src={logo} alt="logo img" />
              </Link>
            </div>
            <ul
              className={`flex items-center gap-6 max-md:fixed max-md:top-0 max-md:duration-150 max-md:bg-white max-md:h-screen max-md:flex-col max-md:py-5 max-md:min-w-60 max-md:shadow-md max-md:w-3/4 ${
                bar ? "max-md:left-0" : "max-md:-left-full"
              }`}
            >
              <li className="hidden max-md:block max-md:absolute max-md:top-3 max-md:right-3">
                <button onClick={() => setBar(false)}>
                  <IoClose className="w-5 h-5" />
                </button>
              </li>
              <li>
                <NavLink className={"flex items-center gap-1"} to={"/shop"}>
                  <span className="text-base font-normal">Shop</span>
                  <IoIosArrowDown />
                </NavLink>
              </li>
              <li>
                <NavLink className={"/on-sale"}>
                  <span className="text-base font-normal">On Sale</span>
                </NavLink>
              </li>
              <li>
                <NavLink className={"/new-arrivals"}>
                  <span className="text-base font-normal">New Arrivals</span>
                </NavLink>
              </li>
              <li>
                <NavLink className={"/brands"}>
                  <span className="text-base font-normal">Brands</span>
                </NavLink>
              </li>
            </ul>
            <div className="flex-1 flex items-center h-12 bg-[#F0F0F0] rounded-[62px] overflow-hidden max-lg:hidden">
              <button className="h-full px-3">
                <IoSearch className="w-5 h-5 text-[#00000066]" />
              </button>
              <input
                className="flex-1 h-full bg-[#F0F0F0] text-base text-[#00000066] outline-none pl-1"
                type="text"
                placeholder="Search for products..."
              />
            </div>
            <div className="flex items-center gap-4 max-md:gap-2">
              <button className="hidden max-lg:block">
                <IoSearch className="h-5 w-6" />
              </button>
              <Link to={"/cart"}>
                <LuShoppingCart className="h-5 w-6" />
              </Link>
              <Link to={"/admin"}>
                <FaRegCircleUser className="h-5 w-6" />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default memo(Header);
