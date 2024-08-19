import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../context/api/productApi";
import Zoom from "react-medium-image-zoom";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import NewArivals from "../../components/new-arrivals/NewArivals";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../context/slice/cartSlice";
import { addWishlist } from "../../context/slice/wishlistSlice";
import Info from "./info/Info";

import "react-medium-image-zoom/dist/styles.css";

const Detail = () => {
  const [imgInx, setImgInx] = useState(0);
  const { id } = useParams();

  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlist.data);
  const cartData = useSelector((state) => state.cart.value);

  const { data, isLoading } = useGetProductByIdQuery(id);

  useEffect(() => {
    window.scroll(0, 0);
  }, [id]);

  const rating = (rating) => {
    let res = [];
    for (let i = 0; i < parseInt(rating); i++) {
      res.push(
        <IoIosStar className="text-[#FFC633] w-6 h-6 max-[500px]:w-3.5 max-[500px]:h-3.5" />
      );
    }
    if (rating % 1 > 0.4) {
      res.push(
        <IoIosStarHalf className="text-[#FFC633] w-6 h-6  max-[500px]:w-3.5 max-[500px]:h-3.5" />
      );
    }
    for (let i = Math.round(rating); i < 5; i++) {
      res.push(
        <IoIosStarOutline className="text-[#FFC633] w-6 h-6  max-[500px]:w-3.5 max-[500px]:h-3.5" />
      );
    }
    return res;
  };

  return (
    <>
      <section className="mt-20">
        <div className="container">
          <div className="grid grid-cols-2 gap-10 mb-20 max-[920px]:grid-cols-1">
            {/* left */}
            <div className="grid grid-cols-[152px_1fr] gap-3.5 max-lg:flex max-lg:flex-col-reverse">
              {/* left */}
              <div className="grid grid-cols-1 grid-rows-3 gap-3.5 overflow-auto max-lg:flex max-lg:items-center max-sm:grid max-sm:grid-cols-3 max-sm:grid-rows-1">
                {data?.innerData?.urls?.map((url, inx) => (
                  <div
                    className={`p-3 rounded-[20px] bg-[#F0EEED] border max-lg:h-28 max-sm:p-2 ${
                      inx === imgInx ? " border-black" : "border-[#F0EEED]"
                    }`}
                    key={inx}
                    onClick={() => setImgInx(inx)}
                  >
                    <img
                      className="w-full h-full object-contain"
                      src={url}
                      alt="detail img"
                    />
                  </div>
                ))}
              </div>

              {/* right */}
              <div className="w-full h-full max-lg:h-[530px] grid place-items-center bg-[#F0EEED] rounded-[20px] max-sm:h-[290px]">
                <Zoom>
                  <img
                    className="w-full h-full object-contain"
                    src={data?.innerData?.urls[0]}
                    alt={data?.innerData?.title}
                  />
                </Zoom>
              </div>
            </div>
            {/* right */}
            <div>
              <h2 className="font-bold text-[40px] line-clamp-2 mb-3.5 max-[430px]:text-2xl">
                {data?.innerData?.title}
              </h2>

              <div className="flex items-center gap-3 mb-3.5">
                <div className="flex items-center gap-1.5">
                  {rating(data?.innerData?.rating)}
                </div>
                <span className="text-sm font-normal">
                  {data?.innerData?.rating}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-5">
                <span className="font-bold text-3xl max-[500px]:text-sm">
                  ${data?.innerData?.price}
                </span>
                {data?.innerData?.oldPrice > data?.innerData?.price ? (
                  <span className="text-[#00000066] line-through font-bold text-3xl max-[500px]:text-sm">
                    ${data?.innerData?.oldPrice}
                  </span>
                ) : (
                  <></>
                )}
              </div>

              <p className="font-normal text-base text-[#00000099] mb-6 pb-6 border-b border=[#0000001A]">
                {data?.innerData?.description}
              </p>

              <div className="pb-6 mb-6 border-b border=[#0000001A]">
                <p className="text-base font-normal text-[#00000099] mb-4">
                  Select Colors
                </p>
                <div className="flex items-center gap-4 max-lg:flex-wrap">
                  <div className="w-9 h-9 rounded-full cursor-pointer bg-[#4F4631]"></div>
                  <div className="w-9 h-9 rounded-full cursor-pointer bg-[#314F4A]"></div>
                  <div className="w-9 h-9 rounded-full cursor-pointer bg-[#31344F]"></div>
                </div>
              </div>

              <div className="pb-6 mb-6 border-b border=[#0000001A]">
                <p className="text-base font-normal text-[#00000099] mb-4">
                  Choose Size
                </p>
                <div className="flex items-center gap-3 max-lg:flex-wrap">
                  <span className="px-6 py-3 rounded-[62px] bg-[#F0F0F0] text-[#00000099] text-base font-normal cursor-pointer max-[430px]:text-sm max-[430px]:px-5 max-[430px]:py-2.5">
                    Small
                  </span>
                  <span className="px-6 py-3 rounded-[62px] bg-[#F0F0F0] text-[#00000099] text-base font-normal cursor-pointer max-[430px]:text-sm max-[430px]:px-5 max-[430px]:py-2.5">
                    Medium
                  </span>
                  <span className="px-6 py-3 rounded-[62px] bg-[#F0F0F0] text-[#00000099] text-base font-normal cursor-pointer max-[430px]:text-sm max-[430px]:px-5 max-[430px]:py-2.5">
                    Large
                  </span>
                  <span className="px-6 py-3 rounded-[62px] bg-[#F0F0F0] text-[#00000099] text-base font-normal cursor-pointer max-[430px]:text-sm max-[430px]:px-5 max-[430px]:py-2.5">
                    X-Large
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-5">
                <button
                  className="py-4 px-5 rounded-3xl border border-[#00000066]"
                  onClick={() => dispatch(addWishlist(data?.innerData))}
                >
                  {wishlistData.some(
                    (el) => el._id === data?.innerData?._id
                  ) ? (
                    <FaHeart className="w-4 h-4 max-[500px]:w-3 max-[500px]:h-3 text-[#00000066]" />
                  ) : (
                    <FaRegHeart className="w-4 h-4 max-[500px]:w-3 max-[500px]:h-3" />
                  )}
                </button>
                <button
                  className="text-white text-base font-medium py-4 rounded-[62px] bg-black w-full"
                  onClick={() => dispatch(addToCart(data?.innerData))}
                >
                  {cartData.some((el) => el._id === data?.innerData?._id)
                    ? "Added to cart"
                    : "Add to cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Info />
        </div>
        <div className="pb-6">
          <NewArivals title={"You might also like"} />
        </div>
      </section>
    </>
  );
};

export default memo(Detail);
