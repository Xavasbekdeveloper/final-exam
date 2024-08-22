import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

const Empty = ({
  img,
  title = "No Content Available",
  message = "It seems like there’s nothing here at the moment. Please check back later or explore other sections of the site.",
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="rounded-lg p-6 mb-10 max-w-lg text-center">
        <img
          className="w-3/6 mx-auto mb-4 max-[570px]:w-full"
          src={img}
          alt="empty"
        />
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{message}</p>
        <button
          onClick={() => navigate("/shop")}
          className="bg-black text-white px-4 py-2 rounded-lg transition"
        >
          go shop
        </button>
      </div>
    </div>
  );
};

export default memo(Empty);
