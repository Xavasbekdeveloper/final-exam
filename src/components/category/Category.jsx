import React, { memo } from "react";
import casualImg from "../../assets/images/casual.png";
import formalImg from "../../assets/images/formal.png";
import partyImg from "../../assets/images/party.png";
import gymImg from "../../assets/images/gym.png";

const Category = () => {
  return (
    <section className="my-20">
      <div className="container">
        <div className="py-[73px] bg-[#F0F0F0] rounded-[40px] px-16 max-md:px-6 max-md:py-10">
          <h2 className="font-bold text-5xl text-center mb-16 max-sm:text-3xl">
            BROWSE BY DRESS STYLE
          </h2>
          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
            <div
              className="bg-white rounded-[20px] bg-cover bg-center h-[289px] max-sm:h-48"
              style={{ backgroundImage: `url(${casualImg})` }}
            >
              <h3 className="text-4xl pt-6 pl-9 font-bold max-sm:text-2xl">
                Casual
              </h3>
            </div>
            <div
              className="bg-white rounded-[20px] bg-cover bg-center h-[289px] max-sm:h-48 col-span-2 max-md:col-span-1"
              style={{ backgroundImage: `url(${formalImg})` }}
            >
              <h3 className="text-4xl pt-6 pl-9 font-bold max-sm:text-2xl">
                Formal
              </h3>
            </div>
            <div
              className="bg-white rounded-[20px] bg-cover bg-center h-[289px] max-sm:h-48 col-span-2 max-md:col-span-1"
              style={{ backgroundImage: `url(${partyImg})` }}
            >
              <h3 className="text-4xl pt-6 pl-9 font-bold max-sm:text-2xl">
                Party
              </h3>
            </div>
            <div
              className="bg-white rounded-[20px] bg-cover bg-center h-[289px] max-sm:h-48"
              style={{ backgroundImage: `url(${gymImg})` }}
            >
              <h3 className="text-4xl pt-6 pl-9 font-bold max-sm:text-2xl">
                Gym
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Category);
