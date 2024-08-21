import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus, FaMinus } from "react-icons/fa6";
import {
  decreaseAmount,
  increaseAmount,
  removeCart,
} from "../../../context/slice/cartSlice";
import { RiCoupon4Line } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";

const View = () => {
  const [voucher, setVoucher] = useState(0);
  const [coupon, setCoupon] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cart.value);

  const calculateAllPrice = () => {
    let total = cartData?.reduce(
      (sum, item) => sum + item?.amount * item?.price,
      0
    );
    return total.toFixed(2);
  };

  const handleCoupon = (e) => {
    e.preventDefault();
    if (coupon === "laylo") {
      setVoucher((+calculateAllPrice() + +calculateAllPrice() * 0.02) * 0.2);
    } else {
      alert("Invalid coupon");
    }
    setCoupon("");
  };

  const calculateDiscountedPrice = () => {
    const total = calculateAllPrice();
    return (total - voucher).toFixed(2);
  };

  const handleCheckout = () => {
    navigate("/cart/checkout");
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className="py-10">
        <div className="container">
          <h1 className="mb-6 font-bold text-[40px] uppercase">Your Cart</h1>
          <div className="grid grid-cols-[1fr_460px] items-start gap-5 max-[965px]:grid-cols-1">
            {/* left */}
            <div className="rounded-[20px] border border-[#0000001A] py-5 px-6 max-[450px]:p-3">
              {cartData?.map((product) => (
                <div
                  className="flex gap-4 py-6 border-b border-[#0000001A] first:pt-0 last:pb-0 last:border-none"
                  key={product._id}
                >
                  <div>
                    <Link to={`/detail/${product._id}`}>
                      <div className="w-[124px] h-[124px] rounded-lg bg-[#F0EEED] p-1 max-md:w-[99px] max-md:h-[99px]">
                        <img
                          className="w-full h-full object-contain"
                          src={product?.urls[0]}
                          alt={product?.title}
                        />
                      </div>
                    </Link>
                  </div>

                  <div className="flex-1 space-y-14">
                    <div className="flex justify-between gap-4">
                      <h3
                        title={product?.title}
                        className="text-xl font-bold line-clamp-1 max-sm:text-base"
                      >
                        {product?.title}
                      </h3>
                      <div>
                        <button onClick={() => dispatch(removeCart(product))}>
                          <RiDeleteBin6Line className="text-[#FF3333] w-[18px] h-[19.5px]" />
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between gap-4">
                      <p className="font-bold text-2xl max-sm:text-xl">
                        ${product?.price}
                      </p>
                      <div className="flex items-center rounded-[62px] bg-[#F0F0F0] h-11 max-sm:h-8 w-[126px] max-[400px]:w-full overflow-hidden">
                        <button
                          className="flex-grow h-full grid place-items-center"
                          disabled={product?.amount === 1}
                          onClick={() => dispatch(decreaseAmount(product))}
                        >
                          <FaMinus />
                        </button>
                        <span className="flex-grow h-full grid place-items-center">
                          {product?.amount}
                        </span>
                        <button
                          className="flex-grow h-full grid place-items-center"
                          disabled={product?.amount === product?.stock}
                          onClick={() => dispatch(increaseAmount(product))}
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* right */}
            <div className="rounded-[20px] border border-[#0000001A] py-5 px-6 bg-white">
              <h4 className="text-2xl font-bold mb-6 max-sm:text-xl">
                Order Summary
              </h4>

              <div className="mb-6">
                <ul className="space-y-5">
                  <li className="flex justify-between text-xl font-bold max-sm:text-base">
                    <span className="text-[#00000099]">Subtotal</span>
                    <span className="font-medium">${calculateAllPrice()}</span>
                  </li>
                  <li className="flex justify-between text-xl font-bold max-sm:text-base">
                    <span className="text-[#00000099]">Discount (-20%)</span>
                    <span className="font-medium text-[#FF3333]">
                      -${voucher}
                    </span>
                  </li>
                  <li className="flex justify-between text-xl font-bold max-sm:text-base">
                    <span className="text-[#00000099]">Delivery Fee</span>
                    <span className="font-medium">$15</span>
                  </li>
                </ul>
              </div>

              <div className="flex justify-between items-center border-t border-[#0000001A] pt-4 mb-6">
                <span className="text-xl max-sm:text-base">Total</span>
                <span className="text-2xl font-bold">
                  ${calculateDiscountedPrice()}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-6 max-[400px]:flex-col">
                <div className="flex-1 flex items-center border pl-4 border-[#0000001A] rounded-[62px] h-12 w-full max-[400px]:py-3">
                  <RiCoupon4Line className="text-gray-500" />
                  <input
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    type="text"
                    placeholder="Add promo code"
                    className="bg-transparent h-full focus:outline-none pl-3 w-full text-sm text-gray-500"
                  />
                </div>
                <button
                  onClick={handleCoupon}
                  className="bg-black text-white rounded-[62px] px-9 py-3 h-12 text-center text-sm font-medium max-[400px]:w-full"
                >
                  Apply
                </button>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full bg-black text-white py-3 rounded-[62px] text-lg font-medium flex items-center justify-center max-sm:text-sm"
              >
                Go to Checkout <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(View);
