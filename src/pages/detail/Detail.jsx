import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../context/api/productApi";
import Zoom from "react-medium-image-zoom";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

import "react-medium-image-zoom/dist/styles.css";
import NewArivals from "../../components/new-arrivals/NewArivals";

const Detail = () => {
  const [imgInx, setImgInx] = useState(0);
  const { id } = useParams();

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
          <div className="grid grid-cols-2 gap-10 mb-10">
            {/* left */}
            <div className="grid grid-cols-[152px_1fr] gap-3.5">
              {/* left */}
              <div className="grid grid-cols-1 grid-rows-3 gap-3.5 overflow-auto">
                {data?.innerData?.urls?.map((url, inx) => (
                  <div
                    className={`p-3 rounded-[20px] bg-[#F0EEED] border ${
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
              <div className="w-full h-[530px] grid place-items-center bg-[#F0EEED] rounded-[20px]">
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
              <h2 className="font-bold text-[40px] line-clamp-2 mb-3.5">
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
            </div>
          </div>

          <NewArivals title={"You might also like"} />
        </div>
      </section>
    </>
  );
};

export default memo(Detail);
