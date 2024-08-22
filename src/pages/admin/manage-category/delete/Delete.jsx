import React, { memo, useEffect } from "react";
import { useDeleteCategoryMutation } from "../../../../context/api/categoryApi";
import { toast } from "react-toastify";

const Delete = ({ deleteCategory, setDeleteCategory }) => {
  const [categoryDelete, { isLoading, isSuccess }] =
    useDeleteCategoryMutation();

  const handleDelete = () => {
    categoryDelete(deleteCategory?._id);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully !");
      setDeleteCategory(null);
    }
  }, [isSuccess]);

  return (
    <div className="px-3 py-2">
      <h3 className="mb-3 text-xl font-semibold">Are you sure delete ?</h3>
      <div className="flex items-center justify-end gap-3">
        <button
          className="px-3 py-1 rounded-lg border border-black"
          onClick={() => setDeleteCategory(null)}
        >
          cancel
        </button>
        <button
          className="px-3 py-1 rounded-lg border border-black"
          onClick={handleDelete}
          disabled={isLoading}
        >
          {isLoading ? "loading..." : "delete"}
        </button>
      </div>
    </div>
  );
};

export default memo(Delete);
