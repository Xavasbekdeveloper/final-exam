import React, { useState } from "react";
import { TbVectorBezier2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { useGetCategoriesQuery } from "../../context/api/categoryApi";
import { useGetProductsQuery } from "../../context/api/productApi";
import { Pagination, Slider } from "antd";
import ProductsLoading from "../../components/products-loading";
import Product from "../../components/product/Product";

const Shop = () => {
  const [categoryValue, setCategoryValue] = useState("all");
  const [current, setCurrent] = useState(1);
  const [bar, setBar] = useState(false);
  const limit = 9;
  const { data, isLoading, isFetching } = useGetProductsQuery({
    limit,
    skip: current,
  });
  const { data: categoryData, isLoading: categoriesLoading } =
    useGetCategoriesQuery();

  const onChange = (page) => {
    setCurrent(page);
  };

  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-[295px_1fr] gap-5 items-start max-[880px]:grid-cols-1">
          <div
            className={`border border-[#0000001A] rounded-[20px] py-5 px-6 bg-white max-[880px]:fixed max-[880px]:w-full max-[880px]:h-screen max-[880px]:z-20 duration-200 ${
              bar ? "max-[880px]:left-0" : "max-[880px]:-left-full"
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Filters</h3>
              <button className="max-[880px]:hidden">
                <TbVectorBezier2 className="w-6 h-6" />
              </button>
              <button
                onClick={() => setBar(false)}
                className="hidden max-[880px]:block"
              >
                <IoClose className="w-5 h-5" />
              </button>
            </div>
            <ul className="py-6 border-y border-[#0000001A] space-y-5">
              <li>
                <data
                  onClick={(e) => {
                    setCategoryValue(e.target.value);
                  }}
                  className={`text-base font-normal text-[#00000099] cursor-pointer`}
                  value="all"
                >
                  All
                </data>
              </li>
              {categoryData?.payload?.map((item) => (
                <li key={item._id}>
                  <data
                    onClick={(e) => {
                      setCategoryValue(e.target.value);
                    }}
                    className={`text-base font-normal text-[#00000099] cursor-pointer`}
                    value={item._id}
                  >
                    {item.title}
                  </data>
                </li>
              ))}
            </ul>
            <div className="py-6">
              <h3 className="text-xl fon-bold mb-5">Price</h3>
              <Slider range defaultValue={[20, 50]} />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-5 gap-2">
              <h3 className="text-3xl font-bold">Casual</h3>
              <button
                onClick={() => setBar(!bar)}
                className="hidden max-[880px]:block"
              >
                <TbVectorBezier2 className="w-6 h-6" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-5 mb-5 max-lg:grid-cols-2 max-[880px]:grid-cols-3 max-md:grid-cols-2">
              {isLoading || isFetching ? (
                <ProductsLoading limit={limit} />
              ) : (
                data?.payload?.map((product) => (
                  <Product key={product?._id} data={product} isAdmin={false} />
                ))
              )}
            </div>
            <div className="flex justify-center">
              <Pagination
                current={current}
                onChange={onChange}
                total={data?.total}
                pageSize={limit}
                showSizeChanger={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
