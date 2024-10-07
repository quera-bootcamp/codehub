import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "./Common/Button";
import Dropdown from "./DropDown";
import Info from "./Info";
import { LikeIcon } from "./LikeIcon";
import { useParams } from "react-router-dom";

interface productTypes {
  _id: string;
  name: string;
  image: string;
  quantity: number;
  category: string;
  description: string;
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
  reviews: [];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

function convertToPersianNumber(number: string | number): string {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return number
    .toString()
    .replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
}

const ProductPage = () => {
  const [score, setScore] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [product, setProduct] = useState<productTypes | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams<string>();

  function getTimeDifference(timestamp: string) {
    const now = new Date().getTime();
    const givenTime = new Date(timestamp).getTime();

    const differenceInMs = now - givenTime;

    const differenceInMinutes = Math.floor(differenceInMs / (1000 * 60));

    if (differenceInMinutes < 60) {
      return `${differenceInMinutes} دقیقه قبل`;
    } else if (differenceInMinutes >= 60) {
      return `${convertToPersianNumber(differenceInMinutes % 60)} ساعت قبل`;
    }
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (id) {
          const response = await axios.get(
            `http://localhost:5000/api/products/${id}`
          );
          setProduct(response.data);
          console.log(response.data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>درحال دریافت اطلاعات...</p>;
  }

  const handleDropdownSelect = (value: string | number) => {
    console.log("Selected value:", value);
  };

  return (
    <div className="flex flex-col">
      <div className="flex gap-x-32 py-11">
        <img className="rounded-lg" src={product?.image} alt="" />

        <div className="flex flex-col gap-y-24 w-1/3">
          <h1 className="font-bold text-2xl">{product?.name}</h1>
          <h5 className="text-lg w-full break-words">{product?.description}</h5>
          <p className="text-5xl">
            {convertToPersianNumber(product?.price ?? 0)} تومان
          </p>
          <Info
            name={product?.name ?? ""}
            quantity={product?.quantity ?? 0}
            rating={product?.rating ?? 0}
            numReviews={product?.numReviews ?? 0}
            countInStock={product?.countInStock ?? 0}
            time={
              getTimeDifference(
                product?.updatedAt
                  ? `${product?.updatedAt}`
                  : `${product?.createdAt}`
              ) ?? ""
            }
          />
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <p className=" ">
                {convertToPersianNumber(product?.numReviews ?? 0)} نظر
              </p>
              <div className="flex">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_37_750)">
                    <path
                      d="M15.1805 6.17781L10.8112 5.54169L8.85869 1.58975C8.68317 1.23661 8.34078 1.05811 7.9984 1.05811C7.6581 1.05811 7.3181 1.23422 7.14198 1.58975L5.18884 5.54139L0.819292 6.17691C0.0357097 6.29034 -0.27832 7.25422 0.289739 7.80646L3.45063 10.8811L2.70257 15.2238C2.59631 15.8441 3.09153 16.3417 3.64616 16.3417C3.79332 16.3417 3.94466 16.3068 4.09004 16.2297L7.99899 14.1796L11.9076 16.2303C12.0527 16.3065 12.2038 16.3411 12.3503 16.3411C12.9056 16.3411 13.4017 15.8453 13.2954 15.2247L12.5482 10.8817L15.7097 7.80766C16.2781 7.25542 15.9641 6.29124 15.1805 6.17781ZM11.5465 9.85542L11.0056 10.3814L11.1333 11.1241L11.716 14.5106L8.66735 12.9109L7.99929 12.5605L8.00019 3.09214L9.52347 6.17542L9.8572 6.85094L10.6038 6.9596L14.0136 7.45602L11.5465 9.85542Z"
                      className="fill-default-950 dark:fill-default-50"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_37_750">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0 0.699951)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_37_747)">
                    <path
                      d="M7.20268 2.08318L5.38879 5.76095L1.33046 6.35262C0.602682 6.45818 0.311016 7.3554 0.838794 7.86929L3.7749 10.7304L3.08046 14.7721C2.95546 15.5026 3.7249 16.0498 4.36935 15.7082L7.99991 13.7998L11.6305 15.7082C12.2749 16.0471 13.0443 15.5026 12.9193 14.7721L12.2249 10.7304L15.161 7.86929C15.6888 7.3554 15.3971 6.45818 14.6693 6.35262L10.611 5.76095L8.79713 2.08318C8.47213 1.42762 7.53046 1.41929 7.20268 2.08318Z"
                      className="fill-default-950 dark:fill-default-50"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_37_747">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0 0.699951)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_37_747)">
                    <path
                      d="M7.20268 2.08318L5.38879 5.76095L1.33046 6.35262C0.602682 6.45818 0.311016 7.3554 0.838794 7.86929L3.7749 10.7304L3.08046 14.7721C2.95546 15.5026 3.7249 16.0498 4.36935 15.7082L7.99991 13.7998L11.6305 15.7082C12.2749 16.0471 13.0443 15.5026 12.9193 14.7721L12.2249 10.7304L15.161 7.86929C15.6888 7.3554 15.3971 6.45818 14.6693 6.35262L10.611 5.76095L8.79713 2.08318C8.47213 1.42762 7.53046 1.41929 7.20268 2.08318Z"
                      className="fill-default-950 dark:fill-default-50"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_37_747">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0 0.699951)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_37_747)">
                    <path
                      d="M7.20268 2.08318L5.38879 5.76095L1.33046 6.35262C0.602682 6.45818 0.311016 7.3554 0.838794 7.86929L3.7749 10.7304L3.08046 14.7721C2.95546 15.5026 3.7249 16.0498 4.36935 15.7082L7.99991 13.7998L11.6305 15.7082C12.2749 16.0471 13.0443 15.5026 12.9193 14.7721L12.2249 10.7304L15.161 7.86929C15.6888 7.3554 15.3971 6.45818 14.6693 6.35262L10.611 5.76095L8.79713 2.08318C8.47213 1.42762 7.53046 1.41929 7.20268 2.08318Z"
                      className="fill-default-950 dark:fill-default-50"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_37_747">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0 0.699951)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_37_747)">
                    <path
                      d="M7.20268 2.08318L5.38879 5.76095L1.33046 6.35262C0.602682 6.45818 0.311016 7.3554 0.838794 7.86929L3.7749 10.7304L3.08046 14.7721C2.95546 15.5026 3.7249 16.0498 4.36935 15.7082L7.99991 13.7998L11.6305 15.7082C12.2749 16.0471 13.0443 15.5026 12.9193 14.7721L12.2249 10.7304L15.161 7.86929C15.6888 7.3554 15.3971 6.45818 14.6693 6.35262L10.611 5.76095L8.79713 2.08318C8.47213 1.42762 7.53046 1.41929 7.20268 2.08318Z"
                      className="fill-default-950 dark:fill-default-50"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_37_747">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0 0.699951)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <Dropdown
              options={["۱", "۲", "۳", "۴", "۵"]}
              defaultValue={"۱"}
              onSelect={handleDropdownSelect}
            />
          </div>
          <div>
            <Button
              button_style="rounded-lg bg-danger-400 hover:bg-danger-500 active:bg-danger-600 text-default-50 p-3"
              children="افزودن به سبد خرید"
            />
          </div>
        </div>
        <div className="absolute top-20 left-40">
          <LikeIcon
            id={product?._id ?? ""}
            price={product?.price.toString() ?? ""}
            title={product?.name ?? ""}
            imgsrc={product?.image ?? ""}
          />
        </div>
      </div>
      <div className="flex gap-48 p-6">
        <div className="flex flex-col gap-6">
          <span className="font-extrabold text-lg  ">ثبت نظر</span>
          <span className=" ">مشاهده نظرات</span>
          <span className=" ">محصولات مرتبط</span>
        </div>
        <div className=" w-full max-w-3xl">
          <form className="flex flex-col space-y text-right">
            <div className="pb-6">
              <label className="block text-sm   font-bold mb-2" htmlFor="score">
                امتیاز
              </label>
              <select
                id="score"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                className="block bg-default-50 w-full border border-default-300 rounded-md shadow-sm dark:bg-default-950 dark:border-default-800 focus:border-danger-500 focus:outline-none p-2 text-right"
              >
                <option value="" disabled>
                  انتخاب امتیاز
                </option>
                <option value="1">۱</option>
                <option value="2">۲</option>
                <option value="3">۳</option>
                <option value="4">۴</option>
                <option value="5">۵</option>
              </select>
            </div>
            <div>
              <label
                className="block text-sm font-bold mb-2  "
                htmlFor="comment"
              >
                نظر
              </label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="block w-full border border-default-300 rounded-md shadow-sm dark:bg-default-950 dark:border-default-800 focus:border-danger-500 focus:outline-none p-2 h-32 text-right"
                placeholder="نظر خود را وارد نمایید"
              />
            </div>
            <div>
              <Button
                button_style="rounded-lg bg-danger-400 hover:bg-danger-500 active:bg-danger-600 px-4 py-2 text-default-50 mt-6"
                children="ثبت نظر"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
