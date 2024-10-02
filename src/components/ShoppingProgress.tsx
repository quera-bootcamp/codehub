import Stepper from "./Stepper";
import useInput from "../hooks/useInput";
import Input from "./Input";

const ShoppingProgress: React.FC = () => {
  const { formData, error, handleInputChange, handleSubmit } = useInput();
  return (
    <div className="mx-96">
      <div className="pb-24">
        <Stepper />
      </div>
      <div>
        <form onSubmit={handleSubmit} className=" space-y-6">
          <span className="font-primaryBold text-xl block">خرید</span>

          <Input
            label="آدرس"
            name="address"
            type="text"
            error={error.address}
            value={formData.address}
            onChange={handleInputChange}
            placeholder="آدرس را وارد فرمایید"
          />

          <Input
            label="شهر"
            name="city"
            type="text"
            error={error.city}
            value={formData.city}
            onChange={handleInputChange}
            placeholder="شهر را وارد نمایید"
          />

          <Input
            label="کشور"
            name="country"
            type="text"
            error={error.country}
            value={formData.country}
            onChange={handleInputChange}
            placeholder="کشور را وارد نمایید"
          />

          <Input
            label="کدپستی"
            name="postID"
            type="number"
            error={error.postID}
            value={formData.postID}
            onChange={handleInputChange}
            placeholder="کد پستی را وارد نمایید"
          />
          <div>
            <span className="text-default-700 text-sm block pb-2 ">
              روش پرداخت
            </span>
            <div className="flex gap-2 items-center">
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="1"
                  width="12"
                  height="12"
                  rx="6"
                  fill="black"
                />
                <rect
                  x="0.5"
                  y="1"
                  width="12"
                  height="12"
                  rx="6"
                  stroke="#DB2777"
                />
                <rect
                  x="2.6001"
                  y="3.09961"
                  width="7.8"
                  height="7.8"
                  rx="3.9"
                  fill="#DB2777"
                />
              </svg>
              <span>درگاه پرداخت پاسارگاد</span>
            </div>
          </div>

          <button
            type="submit"
            className="block px-6 py-2 bg-danger rounded-3xl text-white w-full"
            disabled={Object.values(error).some((err) => err !== "")}
          >
            ادامه
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShoppingProgress;
