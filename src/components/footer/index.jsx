import React, { memo } from "react";
import logo from "../../assets/icons/logo.svg";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";
import visa from "../../assets/icons/visa.svg";
import masterCard from "../../assets/icons/master-card.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#F0F0F0] mt-32">
        <div className="container">
          <div className="bg-black rounded-3xl -translate-y-2/4">
            <div className="py-9 px-16 flex items-center justify-between gap-8 max-[1041px]:px-6 max-[1041px]:py-7 max-[800px]:flex-wrap">
              <h3 className="font-bold text-[40px] max-w-[551px] text-white max-[1041px]:text-4xl max-[800px]:max-w-full max-[375px]:text-2xl">
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
              </h3>
              <div className="max-[800px]:w-full">
                <div className="h-12 rounded-[62px] bg-white flex items-center overflow-hidden mb-3.5 w-96 max-[470px]:w-full ">
                  <button className="pl-4 pr-2 h-full">
                    <TfiEmail className="text-[#00000066] w-5 h-5 max-[375px]:w-4 max-[375px]:h-4" />
                  </button>
                  <input
                    className="flex-1 pl-1 text-base text-[#00000066] h-full outline-none max-[375px]:text-xs"
                    type="text"
                    placeholder="Enter your email address"
                  />
                </div>
                <button className="h-12 rounded-[62px] bg-white text-base font-medium w-96 max-[470px]:w-full max-[375px]:text-xs">
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </div>
          <div className="pb-12 pt-36 flex items-start justify-between gap-4 border-[#0000001A] border-b flex-wrap">
            {/*  */}
            <div>
              <img className="mb-6" src={logo} alt="logo img" />
              <p className="text-sm  text-[#00000099] mb-9 max-w-60">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-white grid place-items-center border border-[#00000033] hover:bg-black duration-200">
                  <FaTwitter className="hover:text-white duration-200" />
                </div>
                <div className="w-7 h-7 rounded-full bg-white grid place-items-center border border-[#00000033] hover:bg-black duration-200">
                  <FaFacebookF className="hover:text-white duration-200" />
                </div>
                <div className="w-7 h-7 rounded-full bg-white grid place-items-center border border-[#00000033] hover:bg-black duration-200">
                  <FaInstagram className="hover:text-white duration-200" />
                </div>
                <div className="w-7 h-7 rounded-full bg-white grid place-items-center border border-[#00000033] hover:bg-black duration-200">
                  <FaGithub className="hover:text-white duration-200" />
                </div>
              </div>
            </div>
            {/*  */}
            <div>
              <h3 className="mb-6 font-medium text-base">Company</h3>
              <ul className="space-y-4">
                <li>
                  <Link className="text-base text-[#00000099]" to={"/about"}>
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#00000099]" to={"/features"}>
                    Features
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#00000099]" to={"/works"}>
                    Works
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#00000099]" to={"/career"}>
                    Career
                  </Link>
                </li>
              </ul>
            </div>
            {/*  */}
            <div>
              <h3 className="mb-6 font-medium text-base">Help</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    className="text-base text-[#00000099]"
                    to={"/customer-support"}
                  >
                    Customer Support
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base text-[#00000099]"
                    to={"/delivery-details"}
                  >
                    Delivery Details
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base text-[#00000099]"
                    to={"/terms-conditions"}
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base text-[#00000099]"
                    to={"/privacy-policy"}
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            {/*  */}
            <div>
              <h3 className="mb-6 font-medium text-base">FAQ</h3>
              <ul className="space-y-4">
                <li>
                  <Link className="text-base text-[#00000099]" to={"/account"}>
                    Account
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base text-[#00000099]"
                    to={"/manage-deliveries"}
                  >
                    Manage Deliveries
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#00000099]" to={"/orders"}>
                    Orders
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-[#00000099]" to={"/payments"}>
                    Payments
                  </Link>
                </li>
              </ul>
            </div>
            {/*  */}
            <div>
              <h3 className="mb-6 font-medium text-base">Resources</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    className="text-base text-[#00000099]"
                    to={"/free=eBooks"}
                  >
                    Free eBooks
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base text-[#00000099]"
                    to={"/development-tutorial"}
                  >
                    Development Tutorial
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base text-[#00000099]"
                    to={"/how-to-blog"}
                  >
                    How to - Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base text-[#00000099]"
                    to={"/youtube-playlist"}
                  >
                    Youtube Playlist
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-5 pb-20 flex items-center justify-between flex-wrap gap-4">
            <p>Shop.co © 2000-2023, All Rights Reserved</p>
            <div className="flex items-center gap-3 flex-wrap">
              <img src={visa} alt="img" />
              <img src={masterCard} alt="img" />
              <img src={visa} alt="img" />
              <img src={masterCard} alt="img" />
              <img src={visa} alt="img" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default memo(Footer);
