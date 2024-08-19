import React, { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

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
        <h1>Cart is empty</h1>
      )}
    </>
  );
};

export default memo(Cart);
