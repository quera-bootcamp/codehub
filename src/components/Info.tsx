import productInfo from "../../mock-data/ProductInfo";

const ProductInfoList: React.FC<{ productId: number }> = ({ productId }) => {
  const product = productInfo.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex justify-between gap-10 text-right">
      <div className="flex flex-col">
        <div className="flex items-center whitespace-nowrap">
          <span className="ml-2">
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
                  fill="black"
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
          </span>
          <span className="ml-2">امتیاز : </span>
          <span>{product.rating}</span>
        </div>
        <div className="flex items-center whitespace-nowrap">
          <span className="ml-2">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_25_862)">
                <path
                  d="M15.17 9.25889L16.4831 3.48111C16.5779 3.06394 16.2609 2.66669 15.8331 2.66669H4.92244L4.66783 1.42197C4.60439 1.11172 4.33139 0.888916 4.01469 0.888916H1.16667C0.798472 0.888916 0.5 1.18739 0.5 1.55558V2.00003C0.5 2.36822 0.798472 2.66669 1.16667 2.66669H3.10786L5.05919 12.2066C4.59236 12.475 4.27778 12.9784 4.27778 13.5556C4.27778 14.4147 4.97422 15.1111 5.83333 15.1111C6.69244 15.1111 7.38889 14.4147 7.38889 13.5556C7.38889 13.1202 7.20981 12.7268 6.92156 12.4445H12.7451C12.4569 12.7268 12.2778 13.1202 12.2778 13.5556C12.2778 14.4147 12.9742 15.1111 13.8333 15.1111C14.6924 15.1111 15.3889 14.4147 15.3889 13.5556C15.3889 12.9397 15.0309 12.4075 14.5117 12.1554L14.6649 11.4811C14.7597 11.0639 14.4427 10.6667 14.0149 10.6667H6.55881L6.377 9.77781H14.5199C14.8312 9.77781 15.101 9.56242 15.17 9.25889Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_25_862">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span className="ml-2">تعداد : </span>
          <span>{product.quantity}</span>
        </div>
        <div className="flex items-center whitespace-nowrap">
          <span className="ml-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_25_868)">
                <path
                  d="M16.4219 5.26875L14.8406 0.525C14.6375 -0.0875 14.0656 -0.5 13.4187 -0.5H9V5.5H16.4594C16.4469 5.42188 16.4469 5.34375 16.4219 5.26875ZM8 -0.5H3.58125C2.93437 -0.5 2.3625 -0.0875 2.15937 0.525L0.578125 5.26875C0.553125 5.34375 0.553125 5.42188 0.540625 5.5H8V-0.5ZM0.5 6.5V14C0.5 14.8281 1.17188 15.5 2 15.5H15C15.8281 15.5 16.5 14.8281 16.5 14V6.5H0.5Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_25_868">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span className="ml-2">
            {product.stock ? `موجودی : ${product.stock}` : "ناموجود"}
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-start">
        <div className="flex items-center whitespace-nowrap">
          <span className="ml-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_25_837)">
                <path
                  d="M16.1364 3.93117L14.4507 1.24026C14.3 0.998699 14.0325 0.850647 13.7468 0.850647H3.25325C2.96754 0.850647 2.7 0.998699 2.54935 1.24026L0.863639 3.93117C-0.00649071 5.32078 0.764938 7.25324 2.39091 7.47402C2.5078 7.48961 2.62728 7.4974 2.74676 7.4974C3.51559 7.4974 4.19611 7.15974 4.66364 6.63766C5.13117 7.15974 5.81429 7.4974 6.58052 7.4974C7.34935 7.4974 8.02987 7.15974 8.49741 6.63766C8.96494 7.15974 9.64806 7.4974 10.4143 7.4974C11.1831 7.4974 11.8636 7.15974 12.3312 6.63766C12.8013 7.15974 13.4818 7.4974 14.2481 7.4974C14.3701 7.4974 14.487 7.48961 14.6039 7.47402C16.2351 7.25584 17.0091 5.32337 16.1364 3.93117ZM14.2533 8.33117C13.9935 8.33117 13.7364 8.29221 13.487 8.23247V10.8247H3.51299V8.23247C3.26364 8.28961 3.0065 8.33117 2.74676 8.33117C2.59091 8.33117 2.43247 8.32078 2.27922 8.3C2.13377 8.27922 1.99091 8.24545 1.85325 8.20649V13.3182C1.85325 13.7779 2.22468 14.1493 2.68442 14.1493H14.3208C14.7805 14.1493 15.152 13.7779 15.152 13.3182V8.20649C15.0117 8.24805 14.8714 8.28182 14.726 8.3C14.5675 8.32078 14.4117 8.33117 14.2533 8.33117Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_25_837">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span className="ml-2">برند : </span>
          <span>{product.brand}</span>
        </div>
        <div className="flex items-center whitespace-nowrap">
          <span className="ml-2">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_25_843)">
                <path
                  d="M8.5 0.25C4.21875 0.25 0.75 3.71875 0.75 8C0.75 12.2812 4.21875 15.75 8.5 15.75C12.7812 15.75 16.25 12.2812 16.25 8C16.25 3.71875 12.7812 0.25 8.5 0.25ZM11.3903 10.0312L10.7653 10.8125C10.7243 10.8638 10.6736 10.9065 10.6161 10.9382C10.5585 10.9698 10.4954 10.9899 10.4301 10.9971C10.3648 11.0044 10.2988 10.9987 10.2357 10.9804C10.1726 10.9622 10.1138 10.9316 10.0625 10.8906L7.96875 9.33687C7.82246 9.21975 7.70437 9.07122 7.62323 8.90229C7.54209 8.73336 7.49998 8.54834 7.5 8.36094V3.5C7.5 3.36739 7.55268 3.24021 7.64645 3.14645C7.74021 3.05268 7.86739 3 8 3H9C9.13261 3 9.25979 3.05268 9.35355 3.14645C9.44732 3.24021 9.5 3.36739 9.5 3.5V8L11.3125 9.32812C11.3638 9.36917 11.4065 9.41992 11.4382 9.47747C11.4699 9.53503 11.4899 9.59826 11.4971 9.66356C11.5043 9.72886 11.4986 9.79494 11.4803 9.85804C11.462 9.92113 11.4314 9.97998 11.3903 10.0312Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_25_843">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>

          <span className="ml-2">زمان بروزرسانی : </span>
          <span>{product.time}</span>
        </div>
        <div className="flex items-center whitespace-nowrap">
          <span className="ml-2">
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
                  fill="black"
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
          </span>
          <span className="ml-2">نظرات : </span>
          <span>{product.comments}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoList;
