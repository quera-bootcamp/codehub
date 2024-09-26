// Import React and Tailwind
import React from "react";

// Define the TypeScript type for the data
interface ProductInfo {
  id: number;
  rating: number;
  brand: string;
  time: string;
  quantity: number;
  comments: number;
  stock: number;
}

// Component that will display the product information
const ProductInfoList: React.FC = () => {
  // Sample product data array with unique ids
  const productData: ProductInfo[] = [
    {
      id: 1,
      rating: 5,
      brand: "اپل",
      time: "چند لحظه قبل",
      quantity: 52,
      comments: 4202,
      stock: 10,
    },
    // You can add more products here with unique ids
  ];

  return (
    <div className=" p-6">
      {/* Iterate over productData using map */}
      {productData.map((product) => (
        <div key={product.id} className="grid grid-cols-2 gap-4 text-right">
          {/* First column with labels */}
          <div className="flex flex-col">
            <div className="flex items-center justify-end">
              <span>برند:</span>
              <span className="ml-2">{product.brand}</span>
              <span className="ml-2">🛍️</span>
            </div>
            <div className="flex items-center justify-end">
              <span>زمان بروزرسانی:</span>
              <span className="ml-2">{product.time}</span>
              <span className="ml-2">ℹ️</span>
            </div>
            <div className="flex items-center justify-end">
              <span>نظرات:</span>
              <span className="ml-2">{product.comments}</span>
              <span className="ml-2">⭐</span>
            </div>
          </div>

          {/* Second column with data */}
          <div className="flex flex-col">
            <div className="flex items-center">
              <span>{product.rating}</span>
              <span className="ml-2">: امتیاز</span>
              <span className="ml-2">⭐</span>
            </div>
            <div className="flex items-center">
              <span>{product.quantity}</span>
              <span className="ml-2">: تعداد</span>
              <span className="ml-2">🛒</span>
            </div>
            <div className="flex items-center">
              <span>{product.stock}</span>
              <span className="ml-2">: موجودی</span>
              <span className="ml-2">🎁</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductInfoList;
