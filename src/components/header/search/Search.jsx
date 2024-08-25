import React from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
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
  );
};

export default Search;
