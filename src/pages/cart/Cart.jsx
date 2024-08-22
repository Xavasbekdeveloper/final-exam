import React, { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Empty from "../../components/empty";
import emptyImg from "../../assets/images/empty-cart.jpg";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.value);

  useEffect(() => {
    window.scroll(0, 0);
  }, [cartData]);

  return (
    <>
      {cartData.length ? (
        <section>
          <Outlet />
        </section>
      ) : (
        <Empty img={emptyImg} />
      )}
    </>
  );
};

export default memo(Cart);
