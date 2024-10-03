import Stepper from "./Stepper";
import useInput from "../hooks/useInput";
import Input from "./Input";
import { useState } from "react";
import { CustomIcon } from "./CustomIcon";

interface PaymentMethod {
  id: string;
  label: string;
}

const ShoppingProgress: React.FC = () => {
  const { formData, error, handleInputChange, handleSubmit } = useInput();

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);

  const paymentMethods: PaymentMethod[] = [
    { id: "pasargad", label: "درگاه پرداخت پاسارگاد" },
    { id: "anotherMethod", label: "روش پرداخت دیگر" },
  ];

  return (
    <div className="mx-96">
      <div className="pb-24">
        <Stepper />
      </div>
      <div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <span className="font-primaryBold text-xl block">
            آدرس دریافت کننده
          </span>

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
            <span className="text-default-700 text-sm block pb-2">
              روش پرداخت
            </span>

            {paymentMethods.map((method) => (
              <div key={method.id} className="flex gap-2 items-center">
                <CustomIcon
                  selected={selectedPaymentMethod === method.id}
                  onClick={() => setSelectedPaymentMethod(method.id)}
                />
                <span>{method.label}</span>
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="block px-6 py-2 bg-danger-400 hover:bg-danger-500 active:bg-danger-600 rounded-3xl text-white w-full"
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
