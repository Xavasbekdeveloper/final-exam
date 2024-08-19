import React, { memo, useState } from "react";
import { CUSTOMERS } from "../../../static";
import { FaStar, FaCircleCheck } from "react-icons/fa6";

const TABS = [
  { id: "ProductDetails", label: "Product Details" },
  { id: "RatingReviews", label: "Rating & Reviews" },
  { id: "FAQs", label: "FAQs" },
];

const Info = () => {
  const [activeTab, setActiveTab] = useState("ProductDetails");

  return (
    <section className="py-8">
      <div className="container">
        {/* Tabs */}
        <div className="grid grid-cols-3 text-center border-b border-[#0000001A] mb-8 text-xl font-medium max-sm:text-base max-sm:flex max-sm:items-center max-sm:justify-between max-sm:gap-3 max-[360px]:text-sm">
          {TABS.map((tab) => (
            <h3
              key={tab.id}
              className={`cursor-pointer pb-6 border-b max-sm:pb-5 ${
                activeTab === tab.id ? "border-black" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </h3>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white">
          {activeTab === "ProductDetails" ? (
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis dignissimos provident exercitationem quasi aspernatur
                vel nulla incidunt, cupiditate laudantium excepturi, quibusdam
                veniam, suscipit adipisci dicta error tenetur ad autem quod
                nostrum deserunt? Quas veniam delectus similique fugiat
                necessitatibus quibusdam magni unde nobis itaque praesentium
                deserunt optio odio beatae cumque ducimus ex atque est nisi,
                totam illo ab. Alias voluptas excepturi voluptatum? Sint
                voluptates quod explicabo autem consequatur qui consequuntur
                possimus error. Nesciunt sed maxime laudantium ad minus ratione
                consectetur facere dolorem. Itaque iure natus unde blanditiis
                est ipsum aperiam? Dolore doloremque, dolorem minima officiis
                placeat ipsam. Maxime, facere provident! Corrupti!
              </p>
            </div>
          ) : (
            <></>
          )}

          {activeTab === "RatingReviews" ? (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-semibold max-sm:text-base">
                  All Reviews{" "}
                  <span className="text-gray-500">({CUSTOMERS.length})</span>
                </h4>
                <div className="flex items-center space-x-4">
                  <select
                    name="sort"
                    id="sort"
                    className="rounded-[62px] bg-[#F0F0F0] px-4 py-2 focus:outline-none max-md:hidden"
                  >
                    <option value="latest">Latest</option>
                    <option value="oldest">Oldest</option>
                  </select>
                  <button className="bg-black text-white px-4 py-2 rounded-[62px] max-sm:px-3 max-sm:text-sm">
                    Write a Review
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
                {CUSTOMERS?.map((item) => (
                  <div
                    key={item.id}
                    className="border border-gray-200 rounded-xl p-6 flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, index) => (
                          <FaStar
                            key={index}
                            className="text-yellow-500 w-5 h-5"
                          />
                        ))}
                      </div>
                      <div className="flex items-center justify-between mb-3.5">
                        <div className="flex items-center">
                          <h3 className="font-bold text-lg">{item.title}</h3>
                          <FaCircleCheck className="text-green-600 w-5 h-5 ml-2" />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm line-clamp-4">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <button className="border border-[#0000001A] text-base font-medium text-black py-3.5 px-11 rounded-[62px]">
                  Load More Reviews
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}

          {activeTab === "FAQs" ? (
            <div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, quas maxime unde necessitatibus ad hic vel commodi
                rerum totam perspiciatis excepturi fuga nisi aspernatur dolore
                impedit magnam exercitationem fugiat odit atque in minima
                distinctio cupiditate ea. Saepe, error vitae eum tenetur
                nostrum, exercitationem, sunt molestias voluptates dolor magni
                repellat labore nobis ipsum culpa corrupti tempora aperiam! Rem,
                nulla aut assumenda saepe aperiam ut quae aspernatur laudantium
                ea deserunt, quo eligendi eum non optio exercitationem omnis
                veritatis quis corporis natus autem perspiciatis eaque
                perferendis. Vel ex suscipit odit, incidunt natus repellat
                saepe, qui, facilis quam expedita tenetur! Eligendi
                exercitationem nobis quae.
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(Info);
