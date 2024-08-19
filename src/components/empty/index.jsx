import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

import "./empty.scss";

const Empty = ({ img }) => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="empty">
        <img src={img} alt="empty img" />
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    </div>
  );
};

export default memo(Empty);
