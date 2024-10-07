import axios from "axios";
import { Badge } from "./Badge.tsx";
import { Link } from "react-router-dom";
import { LikeIcon } from "./LikeIcon.tsx";
import { useState, useEffect } from "react";
import { Button } from "./Common/Button.tsx";
import { FaArrowLeftLong } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Product } from "../../mock-data/ProductsTypes.ts";

const ShopCards = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
          "http://localhost:5000/api/products/allproducts"
        );
        setProducts(response.data);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    };
    void fetchProducts();
  }, []);

  if (loading) {
    return <p>درحال دریافت اطلاعات...</p>;
  }

  return (
    <div className={"grid grid-cols-3 h-fit gap-6"}>
      {products?.map((item) => (
        <div
          key={item._id}
          className={"bg-default-600 dark:bg-default-900 rounded-lg w-96"}
        >
          <div className={"relative"}>
            <img src={item.image} alt={item.name} />
            <div className={"absolute bottom-2 right-2"}>
              <Badge>{item.category.name}</Badge>
            </div>
            <div className={"absolute top-2 right-4"}>
              <LikeIcon
                id={item._id}
                price={item.price.toString()}
                title={item.name}
                imgsrc={item.image}
              />
            </div>
          </div>
          <div className={"p-4 space-y-2"}>
            <div
              className={"flex justify-between items-center font-primaryBold"}
            >
              <span className={"dark:text-white"}>{item.name}</span>
              <span className={"text-danger"}>
                {item.price.toLocaleString()} تومان
              </span>
            </div>
            <p
              className={`break-words whitespace-normal line-clamp-2 min-h-12 text-default-400`}
            >
              {item.description}
            </p>
            <div className={"flex justify-between items-center"}>
              <Link to={`/products/${item._id}`}>
                <Button
                  button_style={
                    "bg-danger py-1 px-3 rounded-lg flex justify-between items-center text-white"
                  }
                >
                  مشاهده بیشتر
                  <FaArrowLeftLong size={25} className={"ps-3"} />
                </Button>
              </Link>
              <AiOutlineShoppingCart size={25} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopCards;
