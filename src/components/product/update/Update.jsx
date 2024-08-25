import React, { memo, useEffect, useState } from "react";
import { useUpdateProductMutation } from "../../../context/api/productApi";
import { useGetCategoriesQuery } from "../../../context/api/categoryApi";
import { toast } from "react-toastify";
import { useGetProfileQuery } from "../../../context/api/adminApi";

const Update = ({ editProduct, setEditProduct }) => {
  const [formValues, setFormValues] = useState({
    title: editProduct?.title,
    desc: editProduct?.desc,
    price: editProduct?.price,
    units: editProduct?.units,
    categoryId: editProduct?.categoryId?._id,
    stock: editProduct?.stock,
  });

  const [update, { isLoading, isSuccess, isError, error }] =
    useUpdateProductMutation();
  const { data: categoriesData } = useGetCategoriesQuery();
  const { data: profileData } = useGetProfileQuery();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Product updated successfully");
      setEditProduct(null);
    }
    if (isError) {
      toast.error(error?.data?.msg || "Failed to update product");
    }
  }, [isSuccess, isError, setEditProduct, error]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      ...formValues,
      urls: editProduct?.urls,
      adminId: profileData?.payload?._id,
    };

    update({
      id: editProduct._id,
      body: newProduct,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-sm:w-full p-6">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          name="title"
          value={formValues.title}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
          placeholder="Enter title"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="desc">
          Description
        </label>
        <input
          id="desc"
          name="desc"
          value={formValues.desc}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
          placeholder="Enter description"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="price">
          Price
        </label>
        <input
          id="price"
          name="price"
          type="number"
          value={formValues.price}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
          placeholder="Enter price"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="units">
          Units
        </label>
        <select
          id="units"
          name="units"
          value={formValues.units}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
        >
          <option value="" disabled>
            Select a unit
          </option>
          <option value="kg">kg</option>
          <option value="dona">dona</option>
          <option value="m">m</option>
          <option value="litr">litr</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="category">
          Category
        </label>
        <select
          id="category"
          name="category"
          value={formValues.categoryId}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
        >
          <option value="" disabled>
            Select a category
          </option>
          {categoriesData?.payload?.map((category) => (
            <option key={category._id} value={category._id}>
              {category.title}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="stock">
          Stock
        </label>
        <input
          id="stock"
          name="stock"
          type="number"
          value={formValues.stock}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
          placeholder="Enter stock"
        />
      </div>

      <div className="flex gap-3 items-center justify-end">
        <button
          type="button"
          onClick={() => setEditProduct(null)}
          className="px-4 py-2 border border-gray-300 rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded"
          disabled={isLoading}
        >
          {isLoading ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
};

export default memo(Update);
