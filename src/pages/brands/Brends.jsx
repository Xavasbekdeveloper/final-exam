import React from "react";
import { Brands } from "../../static";
import { NavLink } from "react-router-dom";

const BrandPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-4 gap-12 max-md:grid-cols-3 max-sm:grid-cols-2 gap-y-8">
        {Brands?.map((el) => (
          <NavLink
            target="_blank"
            to={el?.url}
            key={el?.url}
            className="transition-transform transform hover:scale-105 focus:outline-none focus:scale-105"
          >
            <div className="h-48 flex justify-center items-center bg-white rounded-lg shadow-sm transition-shadow duration-500 ease-in-out hover:shadow-xl max-sm:h-40 xs:h-32">
              <img
                src={el?.img}
                alt="brand.img"
                className="w-1/2 h-1/2 object-contain rounded-lg max-sm:w-3/5 max-sm:h-3/5 max-xs:w-4/5 max-xs:h-4/5"
              />
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
