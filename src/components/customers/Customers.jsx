import React, { memo } from "react";
import { FaStar, FaCircleCheck } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { CUSTOMERS } from "../../static";

import "swiper/css";
// import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";

const Customers = () => {
  return (
    <>
      <section className="py-10">
        <div className="container">
          <div>
            <h2 className="mb-10 font-bold text-5xl max-sm:text-3xl">
              OUR HAPPY CUSTOMERS
            </h2>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            // breakpoints={{
            //   640: { slidesPerView: 1, spaceBetween: 20 },
            //   768: { slidesPerView: 2, spaceBetween: 30 },
            //   1024: { slidesPerView: 3, spaceBetween: 30 },
            // }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {CUSTOMERS.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="border border-[#0000001A] rounded-[20px] py-7 px-8 h-60 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 mb-4">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          className="text-[#FFC633] w-6 h-6"
                        />
                      ))}
                    </div>
                    <div className="flex items-center mb-3.5">
                      <h3 className="font-bold text-xl">{item.title}</h3>
                      <FaCircleCheck className="text-[#01AB31] w-5 h-6 ml-2" />
                    </div>
                  </div>
                  <p className="text-[#00000099] text-base text-left line-clamp-4">
                    {item.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default memo(Customers);
