import React, { memo } from "react";

import "./lazyLoading.scss";

const LazyLoading = () => {
  return (
    <div className="lazy">
      <span className="loader"></span>
    </div>
  );
};

export default memo(LazyLoading);
