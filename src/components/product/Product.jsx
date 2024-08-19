import React, { memo } from "react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoCart, IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addWishlist } from "../../context/slice/wishlistSlice";

const Product = ({ data }) => {
  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlist.data);
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
        <Link to={`/detail/${data?._id}`}>
          <div className=" h-[298px] w-full bg-[#F0EEED] rounded-[20px] p-3 mb-4 max-[500px]:h-60">
            <img
              className="w-full h-full object-contain"
              src={data?.urls[0]}
              alt={data?.title}
            />
          </div>
        </Link>
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
            <div className="flex items-center justify-start gap-3">
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
              <button className="text-[#00000066] grid place-items-center p-1.5 rounded-3xl border border-[#00000066] max-[500px]:p-1">
                <IoCartOutline className="w-4 h-4 max-[500px]:w-3 max-[500px]:h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Product);
