import React, { memo, useEffect } from "react";
import { toast } from "react-toastify";
import { useDeleteProductMutation } from "../../../context/api/productApi";

const Delete = ({ deleteProduct, setDeleteProduct }) => {
  const [productDelete, { isLoading, isSuccess }] = useDeleteProductMutation();

  const handleDelete = () => {
    productDelete(deleteProduct?._id);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully !");
      setDeleteProduct(null);
    }
  }, [isSuccess]);

  return (
    <div className="px-3 py-2">
      <h3 className="mb-3 text-xl font-semibold">Are you sure delete ?</h3>
      <div className="flex items-center justify-end gap-3">
        <button
          className="px-3 py-1 rounded-lg border border-black"
          onClick={() => setDeleteProduct(null)}
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
