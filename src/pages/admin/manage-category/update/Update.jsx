import { Button, Form, Input } from "antd";
import React, { memo, useEffect } from "react";
import { useUpdateCategoryMutation } from "../../../../context/api/categoryApi";
import { toast } from "react-toastify";

const Update = ({ editCategory, setEditCategory }) => {
  const [update, { data, isError, error, isLoading, isSuccess }] =
    useUpdateCategoryMutation();

  console.log(editCategory);

  const handleSubmit = (values) => {
    update({ id: editCategory?._id, body: values });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully updated!");
      setEditCategory(null);
    }
    if (isError) {
      toast.error(error?.data?.msg || "An error occurred");
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
        className="w-full max-sm:w-full p-6"
        initialValues={{
          title: editCategory?.title,
        }}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please enter a title!",
            },
          ]}
        >
          <Input placeholder="Enter title" />
        </Form.Item>

        <div className="flex justify-end space-x-2">
          <Button
            className="w-full"
            type="default"
            onClick={() => setEditCategory(null)}
          >
            Cancel
          </Button>
          <Button
            className="w-full"
            type="primary"
            htmlType="submit"
            loading={isLoading}
          >
            {isLoading ? "Saving..." : "Save"}
          </Button>
        </div>
      </Form>
    </>
  );
};

export default memo(Update);
