import React, { useState } from "react";
import Input from "../components/Input.tsx";
import useInput from "../hooks/useInput.ts";

const AddProduct: React.FC = () => {
  const { formData, error, handleInputChange, handleSubmit } = useInput();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mx-32 mt-8 space-y-6">
      <h2 className="text-2xl font-semibold mb-6 text-right">محصول جدید</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-6">
          {imagePreview && (
            <div className="mb-4">
              <img
                src={imagePreview}
                alt="Product Preview"
                className=" object-cover rounded-md w-9/12 h-2/5 mx-auto"
              />
            </div>
          )}

          <div className="border-2 border-dashed border-default-300 rounded-md h-40 flex items-center justify-center relative">
            <span className="text-default-400">آپلود عکس</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
        </div>

        <Input
          label="نام"
          name="name"
          type="text"
          error={error.name}
          value={formData.name}
          onChange={handleInputChange}
          placeholder="نام محصول را وارد نمایید"
        />

        <div className="flex gap-4">
          <div className="flex-1">
            <Input
              label="قیمت"
              name="price"
              type="number"
              error={error.price}
              value={formData.price}
              onChange={handleInputChange}
              placeholder="قیمت محصول را وارد نمایید"
            />
          </div>
          <div className="flex-1">
            <Input
              label="برند"
              name="brand"
              type="text"
              error={error.brand}
              value={formData.brand}
              onChange={handleInputChange}
              placeholder="برند محصول را وارد نمایید"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm mb-2">توضیحات</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="توضیحات محصول را وارد نمایید"
            className={`w-full p-3 border dark:bg-default-950 ${
              error.description
                ? "border-red-500"
                : "border-default-300 dark:border-default-800"
            } rounded-md`}
            rows={4}
          ></textarea>
          {error.description && (
            <span className="text-red-500 text-sm">{error.description}</span>
          )}
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <Input
              label="تعداد قابل خرید"
              name="stock"
              type="number"
              error={error.stock}
              value={formData.stock}
              onChange={handleInputChange}
              placeholder="تعداد قابل خرید را وارد نمایید"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm mb-2">موجودی</label>
            <select
              name="availability"
              value={formData.availability}
              onChange={handleInputChange}
              className={`w-full p-2 border dark:bg-default-950 ${
                error.availability
                  ? "border-red-500"
                  : "border-default-300 dark:border-default-800"
              } rounded-lg`}
            >
              <option value="in-stock">موجودی</option>
              <option value="out-of-stock">ناموجود</option>
            </select>
            {error.availability && (
              <span className="text-red-500 text-sm">{error.availability}</span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="bg-danger-400 hover:bg-danger-500 active:bg-danger-600 text-default-50 font-semibold py-2 px-4 rounded-md"
          disabled={Object.values(error).some((err) => err !== "")}
        >
          ساخت محصول جدید
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
