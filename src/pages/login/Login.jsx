import React, { memo, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSignInMutation } from "../../context/api/adminApi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setToken } from "../../context/slice/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signIn, { data, error, isError, isLoading, isSuccess }] =
    useSignInMutation();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    signIn(data);
  };

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.msg);
    }
    if (isSuccess) {
      dispatch(setToken(data?.payload?.token));
      navigate("/admin/create-product");
    }
  }, [isError, isSuccess]);

  return (
    <section className="flex items-center justify-center h-screen bg-gray-900 px-4">
      <div className="w-96 bg-white p-8 rounded-lg shadow-lg max-[400px]:w-full max-[400px]:px-3">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">
          Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-4">
            <label
              className="block text-black font-semibold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              value={"ali32"}
              type="text"
              id="username"
              {...register("username")}
              className={`w-full px-4 py-2 border rounded-lg outline-none ${
                errors.username ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your username"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          <div className="mb-6 relative">
            <label
              className="block text-black font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              value={"12345678"}
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password")}
              className={`w-full px-4 py-2 border rounded-lg outline-none ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your password"
            />
            <div
              className="absolute right-3 top-11  transform cursor-pointer text-black"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible className="w-5 h-5" />
              ) : (
                <AiOutlineEye className="w-5 h-5" />
              )}
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-200"
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/" className="text-black hover:underline">
            Go to Home Page
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(Login);
