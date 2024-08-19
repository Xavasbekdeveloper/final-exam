import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./backtop.scss";

const BackTop = () => {
  const [top, setTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setTop(true);
    } else {
      setTop(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className={`backtop ${top ? "show" : ""}`}>
      <button onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </div>
  );
};

export default BackTop;
