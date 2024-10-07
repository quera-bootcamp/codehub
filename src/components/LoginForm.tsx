import axios from "axios";
import Input from "./Input";
import React, {useState} from "react";
import {Button} from "./Common/Button.tsx";
import {Link, useNavigate} from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateInput = () => {
        if (!email || !password) {
            return "کدهابی عزیز، وارد کردن ایمیل و رمز اجباری است";
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
            const response = await axios.post("http://localhost:5000/api/users/auth", {
                email,
                password,
            }, {withCredentials: true});

            if (response.status === 200) {
                navigate('/');
                location.reload();
            } else {
                setError(response.data.message || 'Login failed.');
            }
        } catch {
            setError('کدهابی بازی در نیار، ایمیل یا رمزت اشتباهه');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-2/3 space-y-6">
            <span className="font-primaryBold text-xl block">ورود</span>

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

            {error && <p className="text-red-500">{error}</p>}

            <div className="pb-4 mt-6">
                <Button
                    type="submit"
                    button_style={'block px-6 py-2 rounded-lg text-white'}>
                    ورود
                </Button>
            </div>

            <span>
                عضو نیستید؟
                <Link className="text-danger pr-2" to={"/Register"}>
                     ثبت نام
                </Link>
            </span>
        </form>
    );
};

export default LoginForm;
