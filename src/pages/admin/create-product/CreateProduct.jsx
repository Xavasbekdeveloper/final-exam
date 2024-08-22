import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useCreateProductMutation } from "../../../context/api/productApi";
import { useGetCategoriesQuery } from "../../../context/api/categoryApi";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const [fileList, setFileList] = useState([]);
  const [create, { data, isLoading, isSuccess, isError, error }] =
    useCreateProductMutation();
  const { data: categoriesData } = useGetCategoriesQuery();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Create product successfully");
    }
    if (isError) {
      toast.error(error?.data?.msg);
    }
  }, [isSuccess, isError]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const handleSubmit = async (values) => {
    const formData = new FormData();

    formData.append("title", values.title);
    formData.append("price", values.price);
    formData.append("units", values.units);
    formData.append("desc", values.desc);
    formData.append("categoryId", values.category);
    formData.append("stock", values.stock);
    fileList.forEach((file) => formData.append("photos", file.originFileObj));

    await create(formData).unwrap();
  };

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

        <Form.Item
          label="desc"
          name="desc"
          rules={[
            {
              required: true,
              message: "Desc",
            },
          ]}
        >
          <Input placeholder="Enter desc" />
        </Form.Item>

        <Form.Item
          label="price"
          name="price"
          rules={[
            {
              required: true,
              message: "Price",
            },
          ]}
        >
          <Input placeholder="Enter price" />
        </Form.Item>

        <Form.Item
          label="Units"
          name="units"
          rules={[
            {
              required: true,
              message: "units",
            },
          ]}
        >
          <Select placeholder="Select a units">
            <Select.Option value={"kg"}>kg</Select.Option>
            <Select.Option value={"dona"}>dona</Select.Option>
            <Select.Option value={"m"}>m</Select.Option>
            <Select.Option value={"litr"}>litr</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Category"
          name="category"
          rules={[
            {
              required: true,
              message: "Please select a category!",
            },
          ]}
        >
          <Select placeholder="Select a category">
            {categoriesData?.payload?.map((category) => (
              <Select.Option key={category.id} value={category?._id}>
                {category.title}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="stock"
          name="stock"
          rules={[
            {
              required: true,
              message: "Stock",
            },
          ]}
        >
          <Input placeholder="Enter stock" />
        </Form.Item>

        <Form.Item>
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture"
            multiple
            beforeUpload={() => false}
            onChange={handleFileChange}
            fileList={fileList}
            defaultFileList={fileList}
          >
            <Button type="default" icon={<UploadOutlined />}>
              Upload
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button
            loading={isLoading}
            className="w-full"
            type="default"
            htmlType="submit"
          >
            {isLoading ? "Loading..." : " Create"}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateProduct;
