import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const Notfound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screens text-center">
      <div className="rounded-lg p-6 mb-10 max-w-md w-full">
        <FaExclamationTriangle className="text-black w-32 h-32 mb-4 mx-auto" />
        <h1 className="text-3xl font-bold mb-2">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
        <div className="flex items-center gap-3 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-black text-white px-4 py-2 rounded-lg transition"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-black text-white px-4 py-2 rounded-lg transition"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Notfound);
