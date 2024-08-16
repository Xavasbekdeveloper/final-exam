import React, { memo } from "react";
import { FaStar, FaCircleCheck } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { CUSTOMERS } from "../../static";

import "swiper/css";
import "swiper/css/navigation";

import "./customer.scss";

import { Navigation, Autoplay } from "swiper/modules";

const Customers = () => {
  return (
    <>
      <section className="py-10">
        <div className="container">
          <div>
            <h2 className="mb-10 font-bold text-5xl">OUR HAPPY CUSTOMERS</h2>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            navigation={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {CUSTOMERS.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="border border-[#0000001A] rounded-[20px] py-7 px-8 h-60">
                  <div className="flex items-center gap-1.5 mb-4">
                    <FaStar className="text-[#FFC633] w-6 h-6" />
                    <FaStar className="text-[#FFC633] w-6 h-6" />
                    <FaStar className="text-[#FFC633] w-6 h-6" />
                    <FaStar className="text-[#FFC633] w-6 h-6" />
                    <FaStar className="text-[#FFC633] w-6 h-6" />
                  </div>
                  <div className="flex items-center mb-3.5">
                    <h3 className="font-bold text-xl">{item.title}</h3>
                    <FaCircleCheck className="text-[#01AB31] w-5 h-6" />
                  </div>
                  <p className="text-[#00000099] text-base text-left">
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
