import React, { memo } from "react";
import heroBg from "../../assets/images/hero-bg.png";
import star1 from "../../assets/icons/star1.svg";
import star2 from "../../assets/icons/star2.svg";

const Hero = () => {
  return (
    <>
      <section className="bg-[#F2F0F1]">
        <div className="container flex items-end justify-between gap-16 max-[1170px]:flex-wrap max-[1170px]:items-center">
          <div className="py-16 w-2/4 max-lg:w-full">
            <h1 className="font-bold text-6xl max-w-xl mb-8">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-base text-[#00000099] mb-8">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="py-4 px-16 max-w-[545px] rounded-[62px] bg-black text-white font-medium text-base mb-12">
              Shop Now
            </button>
            <div className="flex items-center">
              <div className="flex flex-col pr-8 border-r border-[#0000001A]">
                <span className="font-bold text-4xl">200+</span>
                <span className="text-base text-[#00000099]">
                  International Brands
                </span>
              </div>
              <div className="flex flex-col px-8 border-r border-[#0000001A]">
                <span className="font-bold text-4xl">2,000+</span>
                <span className="text-base text-[#00000099]">
                  High-Quality Products
                </span>
              </div>
              <div className="flex flex-col pl-8">
                <span className="font-bold text-4xl">30,000+</span>
                <span className="text-base text-[#00000099]">
                  Happy Customerss
                </span>
              </div>
            </div>
          </div>

          <div className="h-[500px] relative">
            <img className="absolute top-44" src={star1} alt="star img" />
            <img
              className="h-full w-full object-cover"
              src={heroBg}
              alt="hero bg img"
            />
            <img
              className="absolute top-6 right-0"
              src={star2}
              alt="star img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Hero);
