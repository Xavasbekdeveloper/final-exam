import React, { memo } from "react";
import Hero from "../../components/hero/Hero";
import Brands from "../../components/brands/Brands";
import Category from "../../components/category/Category";
import Customers from "../../components/customers/Customers";
import NewArivals from "../../components/new-arrivals/NewArivals";

const Home = () => {
  return (
    <>
      <Hero />
      <Brands />
      <NewArivals title={"New Arrivals"} />
      <NewArivals title={"Top Selling"} />
      <Category />
      <Customers />
    </>
  );
};

export default memo(Home);
