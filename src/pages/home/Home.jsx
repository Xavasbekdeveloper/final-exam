import React, { memo } from "react";
import Hero from "../../components/hero/Hero";
import Brands from "../../components/brands/Brands";
import Category from "../../components/category/Category";
import Customers from "../../components/customers/Customers";

const Home = () => {
  return (
    <>
      <Hero />
      <Brands />
      <Category />
      <Customers />
    </>
  );
};

export default memo(Home);
