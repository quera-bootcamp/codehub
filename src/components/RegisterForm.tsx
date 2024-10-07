import axios from "axios";
import Input from "./Input.tsx";
import React, {useState} from "react";
import {Button} from "./Common/Button.tsx";
import {Link, useNavigate} from "react-router-dom";

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_Password, setConfirm_Password] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateInput = () => {
        if (!username || !email || !password || !confirm_Password) {
            return "پر کردن فرم های بالا برای کدهابی شدنت اجباریه";
        }
        return "";
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const validationError = validateInput();
        if (validationError) {
            setError(validationError);
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/api/users", {
                username,
                email,
                password,
                confirm_Password,
            }, {withCredentials: true});

            if (response.status >= 200 && response.status < 300) {
                navigate('/');
                location.reload();
            } else {
                setError(response.data.message || 'مشکلی پیش اومده، لطفا بعدا تلاش کنید');
            }
        } catch {
            if (password != confirm_Password)
                setError('کدهابی بازی در نیار، رمز های عبورت باهم متفاوتن');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-2/3 space-y-6">
            <span className="font-primaryBold text-xl block">ثبت نام</span>

            <Input
                label="نام"
                name="name"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="نام خود را وارد نمایید"
            />

            <Input
                label="ایمیل"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ایمیل خود را وارد نمایید"
            />

            <Input
                label="رمز عبور"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="رمز عبور خود را وارد نمایید"
            />

            <Input
                type="password"
                label="تکرار رمز عبور"
                name="reEnterPassword"
                value={confirm_Password}
                onChange={(e) => setConfirm_Password(e.target.value)}
                placeholder="رمز عبور را مجددا وارد نمایید"
            />

            {error && <p className="text-red-500">{error}</p>}

            <div className="pb-4 mt-6">
                <Button
                    type="submit"
                    button_style={'block px-6 py-2 rounded-lg text-white'}>
                    ثبت نام
                </Button>
            </div>

            <span>
                عضو هستید؟
                <Link className="text-danger pr-2" to={"/Login"}>
                    ورود
                </Link>
            </span>
        </form>
    );
};

export default RegisterForm;