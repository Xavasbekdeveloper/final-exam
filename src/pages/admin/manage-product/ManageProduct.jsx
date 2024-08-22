import React, { memo, useEffect, useState } from "react";
import { useGetProductsQuery } from "../../../context/api/productApi";
import ProductsLoading from "../../../components/products-loading";
import Product from "../../../components/product/Product";
import { Pagination } from "antd";

const ManageProduct = () => {
  const [current, setCurrent] = useState(1);
  const limit = 8;

  const { data, isFetching, isLoading } = useGetProductsQuery({
    limit,
    skip: current,
  });

  const onChange = (page) => {
    setCurrent(page);
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, [current]);

  return (
    <>
      <section className="p-8">
        <div className="grid grid-cols-4 gap-5 mb-5">
          {isLoading || isFetching ? (
            <ProductsLoading limit={limit} />
          ) : (
            data?.payload?.map((product) => (
              <Product key={product?._id} data={product} isAdmin={true} />
            ))
          )}
        </div>
        <div className="flex justify-end">
          <Pagination
            current={current}
            onChange={onChange}
            total={data?.total}
            pageSize={limit}
            showSizeChanger={false}
          />
        </div>
      </section>
    </>
  );
};

export default memo(ManageProduct);
