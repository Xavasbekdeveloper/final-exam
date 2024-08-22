import React, { memo, useState } from "react";
import { useGetCategoriesQuery } from "../../../context/api/categoryApi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import Modal from "../../../components/modal/Modal";
import Delete from "./delete/Delete";
import Update from "./update/Update";

const ManageCategory = () => {
  const [deleteCategory, setDeleteCategory] = useState(null);
  const [editCategory, setEditCategory] = useState(null);
  const { data, isLoading, isSuccess } = useGetCategoriesQuery();

  console.log(data);

  return (
    <>
      <section className="p-6 min-h-screen">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data?.payload?.map((category) => (
              <div
                key={category?._id}
                className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-1.5">
                    {category.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Admin: {category?.adminId?.fname || "N/A"}
                  </p>
                </div>
                <div className="mt-4 flex justify-end space-x-2">
                  <button onClick={() => setEditCategory(category)}>
                    <FiEdit className="w-5 h-5" />
                  </button>
                  <button onClick={() => setDeleteCategory(category)}>
                    <RiDeleteBin6Line className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {deleteCategory ? (
        <Modal close={setDeleteCategory} width={400}>
          <Delete
            deleteCategory={deleteCategory}
            setDeleteCategory={setDeleteCategory}
          />
        </Modal>
      ) : (
        <></>
      )}
      {editCategory ? (
        <Modal close={setEditCategory} width={500}>
          <Update
            editCategory={editCategory}
            setEditCategory={setEditCategory}
          />
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default memo(ManageCategory);
