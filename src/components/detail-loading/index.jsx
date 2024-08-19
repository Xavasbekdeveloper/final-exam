import React, { memo } from "react";

import "./detailLoading.scss";

const DetailLoading = () => {
  return (
    <>
      <div className="detailLoading__left">
        <div className="bg__animation detailLoading__left__top"></div>
        <div className="detailLoading__left__bottom-box">
          <div className="bg__animation detailLoading__left__bottom"></div>
          <div className="bg__animation detailLoading__left__bottom"></div>
          <div className="bg__animation detailLoading__left__bottom"></div>
        </div>
      </div>
      <div className="detailLoading__middle">
        <div className="bg__animation detailLoading__middle__item"></div>
        <div className="bg__animation detailLoading__middle__item"></div>
        <div className="bg__animation detailLoading__middle__item"></div>
        <div className="bg__animation detailLoading__middle__item"></div>
        <div className="bg__animation detailLoading__middle__item"></div>
        <div className="bg__animation detailLoading__middle__item"></div>
        <div className="bg__animation detailLoading__middle__item"></div>
        <div className="bg__animation detailLoading__middle__item"></div>
        <div className="bg__animation detailLoading__middle__item"></div>
        <div className="bg__animation detailLoading__middle__item"></div>
        <div className="bg__animation detailLoading__middle__item"></div>
        <div className="bg__animation detailLoading__middle__item"></div>
      </div>
      {/* <div className="detailLoading__right">
        <div className="bg__animation detailLoading__right__top"></div>
        <div className="bg__animation detailLoading__right__item"></div>
        <div className="bg__animation detailLoading__right__item"></div>
      </div> */}
    </>
  );
};

export default memo(DetailLoading);
