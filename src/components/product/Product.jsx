import React, { memo, useState } from "react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoCart, IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addWishlist } from "../../context/slice/wishlistSlice";
import { addToCart } from "../../context/slice/cartSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import Delete from "./delete/Delete";
import Modal from "../modal/Modal";
import Update from "./update/Update";

const Product = ({ data, isAdmin }) => {
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [editProduct, setEditProduct] = useState(null);
  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlist.data);
  const cartData = useSelector((state) => state.cart.value);
  // console.log(wishlistData);

  const rating = (rating) => {
    let res = [];
    for (let i = 0; i < parseInt(rating); i++) {
      res.push(
        <IoIosStar className="text-[#FFC633] w-[18.49px] h-[18.49px] max-[500px]:w-3.5 max-[500px]:h-3.5" />
      );
    }
    if (rating % 1 > 0.4) {
      res.push(
        <IoIosStarHalf className="text-[#FFC633] w-[18.49px] h-[18.49px]  max-[500px]:w-3.5 max-[500px]:h-3.5" />
      );
    }
    for (let i = Math.round(rating); i < 5; i++) {
      res.push(
        <IoIosStarOutline className="text-[#FFC633] w-[18.49px] h-[18.49px]  max-[500px]:w-3.5 max-[500px]:h-3.5" />
      );
    }
    return res;
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="h-[298px] w-full bg-[#F0EEED] rounded-[20px] p-3 mb-4 max-[500px]:h-60 relative group">
          <Link to={`/detail/${data?._id}`}>
            <img
              className="w-full h-full object-contain"
              src={data?.urls[0]}
              alt={data?.title}
            />
          </Link>
          {isAdmin ? (
            <></>
          ) : (
            <div className="absolute top-3 right-2 opacity-0 duration-150 group-hover:opacity-100 flex items-center justify-start gap-3 max-md:opacity-100">
              <button
                onClick={() => dispatch(addWishlist(data))}
                className="text-[#00000066] grid place-items-center p-1.5 rounded-3xl border border-[#00000066] max-[500px]:p-1"
              >
                {wishlistData.some((el) => el._id === data._id) ? (
                  <FaHeart className="w-4 h-4 max-[500px]:w-3 max-[500px]:h-3 text-[#00000066]" />
                ) : (
                  <FaRegHeart className="w-4 h-4 max-[500px]:w-3 max-[500px]:h-3" />
                )}
              </button>
              <button
                onClick={() => dispatch(addToCart(data))}
                className="text-[#00000066] grid place-items-center p-1.5 rounded-3xl border border-[#00000066] max-[500px]:p-1"
              >
                {cartData.some((el) => el._id === data._id) ? (
                  <IoCart className="w-4 h-4 max-[500px]:w-3 max-[500px]:h-3 text-[#00000066]" />
                ) : (
                  <IoCartOutline className="w-4 h-4 max-[500px]:w-3 max-[500px]:h-3" />
                )}
              </button>
            </div>
          )}
        </div>

        <div className="pr-2">
          <h3
            title={data?.title}
            className="font-bold text-xl mb-2 line-clamp-2 max-[500px]:text-base"
          >
            {data?.title}
          </h3>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center gap-1">
              {rating(data?.rating)}
            </div>
            <span className="text-sm font-normal">{data?.rating}</span>
          </div>
          <div className="flex items-center justify-between gap-3 max-[370px]:flex-wrap">
            <div className="flex items-center gap-2.5">
              <span className="font-bold text-2xl max-[500px]:text-sm">
                ${data?.price}
              </span>
              {data?.oldPrice > data?.price ? (
                <span className="text-[#00000066] line-through font-bold text-2xl max-[500px]:text-sm">
                  ${data?.oldPrice}
                </span>
              ) : (
                <></>
              )}
            </div>
            {isAdmin ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setEditProduct(data)}
                  className="py-1 px-1.5 border border-black rounded-lg"
                >
                  <FiEdit />
                </button>
                <button
                  onClick={() => setDeleteProduct(data)}
                  className="py-1 px-1.5 border border-black rounded-lg"
                >
                  <RiDeleteBin6Line />
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      {deleteProduct ? (
        <Modal close={setDeleteProduct} width={400}>
          <Delete
            deleteProduct={deleteProduct}
            setDeleteProduct={setDeleteProduct}
          />
        </Modal>
      ) : (
        <></>
      )}

      {editProduct ? (
        <Modal close={setEditProduct} width={500}>
          <Update editProduct={editProduct} setEditProduct={setEditProduct} />
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default memo(Product);
