import React, { memo, useEffect, useState } from "react";
import { Button, Form, Input, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useUpdateProductMutation } from "../../../context/api/productApi";
import { useGetCategoriesQuery } from "../../../context/api/categoryApi";
import { toast } from "react-toastify";

const Update = ({ editProduct, setEditProduct }) => {
  const [fileList, setFileList] = useState([]);
  const [update, { isLoading, isSuccess, isError, error }] =
    useUpdateProductMutation();
  const { data: categoriesData } = useGetCategoriesQuery();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Product updated successfully");
      setEditProduct(null);
    }
    if (isError) {
      toast.error(error?.data?.msg || "Failed to update product");
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    if (editProduct) {
      setFileList(
        editProduct.photos?.map((photo, index) => ({
          uid: index,
          name: photo,
          status: "done",
          url: photo,
        })) || []
      );
    }
  }, [editProduct]);

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

    await update({ id: editProduct._id, body: formData }).unwrap();
  };

  return (
    <Form
      name="update-product"
      layout="vertical"
      className="w-full max-sm:w-full p-6"
      initialValues={{
        title: editProduct?.title || "",
        desc: editProduct?.desc || "",
        price: editProduct?.price || "",
        units: editProduct?.units || "",
        category: editProduct?.categoryId || "",
        stock: editProduct?.stock || "",
      }}
      onFinish={handleSubmit}
      autoComplete="off"
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please enter the title",
          },
        ]}
      >
        <Input placeholder="Enter title" />
      </Form.Item>

      <Form.Item
        label="Description"
        name="desc"
        rules={[
          {
            required: true,
            message: "Please enter the description",
          },
        ]}
      >
        <Input placeholder="Enter description" />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[
          {
            required: true,
            message: "Please enter the price",
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
            message: "Please select a unit",
          },
        ]}
      >
        <Select placeholder="Select a unit">
          <Select.Option value="kg">kg</Select.Option>
          <Select.Option value="dona">dona</Select.Option>
          <Select.Option value="m">m</Select.Option>
          <Select.Option value="litr">litr</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Category"
        name="category"
        rules={[
          {
            required: true,
            message: "Please select a category",
          },
        ]}
      >
        <Select placeholder="Select a category">
          {categoriesData?.payload?.map((category) => (
            <Select.Option key={category._id} value={category._id}>
              {category.title}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Stock"
        name="stock"
        rules={[
          {
            required: true,
            message: "Please enter the stock",
          },
        ]}
      >
        <Input placeholder="Enter stock" />
      </Form.Item>

      <Form.Item label="Photos">
        <Upload
          listType="picture"
          multiple
          beforeUpload={() => false}
          onChange={handleFileChange}
          fileList={fileList}
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </Form.Item>

      <div className="flex gap-3 items-center justify-end">
        <Button onClick={() => setEditProduct(null)} type="default">
          Cancel
        </Button>
        <Button loading={isLoading} type="primary" htmlType="submit">
          {isLoading ? "Saving..." : "Save"}
        </Button>
      </div>
    </Form>
  );
};

export default memo(Update);
