import React, { memo } from "react";
import versace from "../../assets/icons/versace.svg";
import zara from "../../assets/icons/zara.svg";
import gucci from "../../assets/icons/gucci.svg";
import prada from "../../assets/icons/prada.svg";
import calvin from "../../assets/icons/calvin.svg";

const Brands = () => {
  return (
    <div className="py-10 max-md:py-5 bg-black mb-20">
      <div className="container flex items-center justify-between gap-7 max-lg:flex-wrap max-lg:justify-center">
        <img className="max-sm:w-28 max-sm:h-6" src={versace} alt="brand img" />
        <img className="max-sm:w-16 max-sm:h-6" src={zara} alt="brand img" />
        <img
          className="max-sm:w-[109px] max-sm:h-6"
          src={gucci}
          alt="brand img"
        />
        <img className="max-sm:w-32 max-sm:h-6" src={prada} alt="brand img" />
        <img className="max-sm:w-32 max-sm:h-6" src={calvin} alt="brand img" />
      </div>
    </div>
  );
};

export default memo(Brands);
