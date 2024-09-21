import Input from "./Input.tsx";
import {Link} from "react-router-dom";
import useInput from "../hooks/useInput.ts";

const LoginForm = () => {
    const {formData, error, handleInputChange, handleSubmit} = useInput();

    return (
        <form onSubmit={handleSubmit} className="w-2/3 space-y-6">
            <span className="font-primaryBold text-xl block">ورود</span>

            <Input
                label="ایمیل"
                name="email"
                type="email"
                error={error.email}
                value={formData.email}
                onChange={handleInputChange}
                placeholder="ایمیل خود را وارد نمایید"
            />

            <Input
                label="رمز عبور"
                name="password"
                type="password"
                error={error.password}
                value={formData.password}
                onChange={handleInputChange}
                placeholder="رمز عبور خود را وارد نمایید"
            />

            <div className="pb-4 mt-6">
                <button
                    type="submit"
                    className="block px-6 py-2 bg-danger rounded-lg text-white"
                    disabled={Object.values(error).some((err) => err !== "")}
                >
                    ثبت نام
                </button>
            </div>

            <span>
                عضو نیستید؟
                <Link className="text-danger pr-2" to="/Register">
                     ثبت نام
                </Link>
            </span>
        </form>
    );
};

export default LoginForm;