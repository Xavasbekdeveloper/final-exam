import React, { memo } from "react";
import { IoClose } from "react-icons/io5";

import "./modal.scss";

const Modal = ({ children, close, width }) => {
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-40 z-50"
        onClick={() => close(false)}
      ></div>
      <div
        style={{ width }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-90 bg-white rounded-lg p-4 max-h-[97vh] overflow-y-scroll z-50 duration-300 scrollbar-hide"
      >
        <div className="fixed top-2 right-3">
          <button
            onClick={() => close(false)}
            className="p-0 border-none bg-transparent"
          >
            <IoClose className="w-6 h-6" />
          </button>
        </div>
        {children}
      </div>
    </>
  );
};

export default memo(Modal);
