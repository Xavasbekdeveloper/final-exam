import React, { memo } from "react";
import Hero from "../../components/hero/Hero";
import Brands from "../../components/brands/Brands";
import Category from "../../components/category/Category";

const Home = () => {
  return (
    <>
      <Hero />
      <Brands />
      <Category />
    </>
  );
};

export default memo(Home);
