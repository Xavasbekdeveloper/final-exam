import React, { memo } from "react";
import { useGetProductsQuery } from "../../context/api/productApi";
import Product from "../product/Product";

const NewArivals = ({ title }) => {
  const limit = 4;
  const { data, isLoading, isFetching } = useGetProductsQuery({
    limit,
    skip: 1,
  });
  console.log(data);

  return (
    <>
      <section className="mb-10">
        <div
          className={`container ${
            title !== "Top Selling" ? "border-b border-[#0000001A]" : ""
          }`}
        >
          <h2 className="text-center text-5xl font-bold mb-14 uppercase max-sm:text-4xl">
            {title}
          </h2>
          <div className="grid grid-cols-4 gap-5 mb-16 max-lg:grid-cols-3 max-md:grid-cols-2 max-[570px]:gap-3">
            {isLoading ? (
              <h3>Loading...</h3>
            ) : (
              data?.innerData?.map((product) => (
                <Product key={product?._id} data={product} />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(NewArivals);
