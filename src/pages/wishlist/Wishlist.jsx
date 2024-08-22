import React, { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import Product from "../../components/product/Product";
import Empty from "../../components/empty";
import emptyImg from "../../assets/images/wishlist.webp";

const Wishlist = () => {
  const wishlistData = useSelector((state) => state.wishlist.data);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      {wishlistData.length ? (
        <section className="my-10">
          <div className="container">
            <h1 className="text-5xl text-center mb-5">Wishlist</h1>
            <div className="grid grid-cols-4 gap-5 mb-16 max-lg:grid-cols-3 max-md:grid-cols-2 max-[570px]:gap-3">
              {wishlistData?.map((product) => (
                <Product key={product?._id} data={product} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <Empty img={emptyImg} />
      )}
    </>
  );
};

export default memo(Wishlist);
