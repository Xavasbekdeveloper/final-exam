import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useGetInputValue from "../../../hooks/useGetValue";
import { removeAll } from "../../../context/slice/cartSlice";

const initialState = {
  fname: "",
  phone: "",
  address: "",
};

const BOT__TOKEN = "7296011111:AAH9fsPtqvBOqekhvlcG9MVl4JBifgNtEJk";
const CHAT__ID = "-1002221404265";

const Checkout = () => {
  const [voucher, setVoucher] = useState(0);
  const [coupon, setCoupon] = useState("");
  const dispatch = useDispatch();
  const { formData, setFormData, handleChange } =
    useGetInputValue(initialState);
  const cartData = useSelector((state) => state.cart.value);

  const calculateAllPrice = () => {
    let total = cartData?.reduce(
      (sum, item) => sum + item?.amount * item?.price,
      0
    );
    return total.toFixed(2);
  };

  const calculateDiscountedPrice = () => {
    const total = calculateAllPrice();
    return (total - voucher).toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let cartText = cartData
      .map(
        (product) =>
          `Mahsulot: ${product.title}%0A Miqdori: ${product.amount}%0A Narxi: ${product.price}`
      )
      .join("%0A%0A");

    const text = ` 
Ism: ${formData.fname}%0A
Telefon: ${formData.phone}%0A
Manzil: ${formData.address}%0A
Mahsulotlar:%0A%0A${cartText}%0A%0A
Jami: ${calculateDiscountedPrice()}
        `;

    let url = ` https://api.telegram.org/bot${BOT__TOKEN}/sendMessage?chat_id=${CHAT__ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    dispatch(removeAll());
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="py-14 px-4 mt-10 w-full max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg max-[450px]:max-w-full max-[450px]:px-0"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Checkout</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            required
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            type="text"
            id="firstName"
            placeholder="Adham"
            className="w-full outline-none border border-gray-300 rounded-lg p-3"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            required
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="text"
            id="phone"
            placeholder="+998 99 567 8909"
            className="w-full outline-none border border-gray-300 rounded-lg p-3"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" htmlFor="address">
            Address
          </label>
          <input
            required
            name="address"
            value={formData.address}
            onChange={handleChange}
            type="text"
            id="address"
            placeholder="Uzbekistan, Tashkent"
            className="w-full outline-none border border-gray-300 rounded-lg p-3"
          />
        </div>

        <div className="flex justify-between items-center mb-6">
          <p className="text-lg font-medium">Total:</p>
          <p className="text-lg font-semibold">${calculateDiscountedPrice()}</p>
        </div>

        <button
          type="submit"
          className="w-full outline-none bg-black text-white py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition duration-300"
        >
          Checkout
        </button>
      </form>
    </div>
  );
};

export default memo(Checkout);
