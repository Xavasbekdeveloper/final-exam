import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setToken } from "../../context/slice/authSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //   useEffect(() => {
  //     if (isSuccess) {
  //       dispatch(setToken(data.payload.token));
  //     }
  //     if (isError) {
  //       <Alert
  //         message="Error"
  //         description="This is an error message about copywriting."
  //         type="error"
  //         showIcon
  //       />;
  //     }
  //   }, [isSuccess, isError]);

  const handleSubmit = (values) => {
    signIn(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="max-sm:p-4 flex items-center justify-center min-h-screen flex-col gap-4">
      <h2 className="text-3xl font-semibold">Sign in</h2>
      <Form
        name="basic"
        layout="vertical"
        className="w-96 max-sm:w-full"
        labelCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input placeholder="john33" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="12345678" />
        </Form.Item>

        <Form.Item>
          <Button
            // disabled={isLoading}
            className="w-full"
            type="primary"
            htmlType="submit"
          >
            Sign in
          </Button>
        </Form.Item>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
          <Link
            to="/"
            className="inline-block mt-2 text-blue-500 hover:underline"
          >
            Go Home
          </Link>
        </div>
      </Form>
    </div>
  );
};
export default SignIn;
