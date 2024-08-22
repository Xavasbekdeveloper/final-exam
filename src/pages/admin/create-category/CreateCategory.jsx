import React, { memo, useEffect } from "react";
import { useCreateCategoryMutation } from "../../../context/api/categoryApi";
import { toast } from "react-toastify";
import { Button, Form, Input } from "antd";

const CreateCategory = () => {
  const [create, { data, isError, error, isLoading, isSuccess }] =
    useCreateCategoryMutation();

  const handleSubmit = (values) => {
    create(values);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Create category successfully");
    }
    if (isError) {
      toast.error(error?.data?.msg);
    }
  }, [isSuccess, isError]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Form
        name="basic"
        layout="vertical"
        className="w-96 max-sm:w-full pl-8 pt-7"
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
          label="title"
          name="title"
          rules={[
            {
              required: true,
              message: "Title",
            },
          ]}
        >
          <Input placeholder="Enter title" />
        </Form.Item>

        <Form.Item>
          <Button className="w-full" type="default" htmlType="submit">
            {isLoading ? "Loading..." : " Create"}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default memo(CreateCategory);
