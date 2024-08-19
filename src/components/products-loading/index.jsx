import React, { memo } from "react";

import "./productsLoading.scss";

const ProductsLoading = ({ limit }) => {
  let loading = [];

  for (let i = 0; i < limit; i++) {
    loading.push(
      <div key={i} className="productsLoading__item">
        <div className="productsLoading__img bg__animation"></div>
        <div className="productsLoading__title bg__animation"></div>
        <div className="productsLoading__title bg__animation"></div>
      </div>
    );
  }

  return <>{loading}</>;
};

export default memo(ProductsLoading);
