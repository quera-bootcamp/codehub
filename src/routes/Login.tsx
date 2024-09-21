// import loginDarkImage from "../../public/images/loginDarkMode.png"
import loginLightImage from "../../public/images/loginLightMode.png"
import LoginForm from "../components/LoginForm.tsx";

const Login = () => {
    return (
        <div className={'flex items-start justify-between pt-8'}>
            <div className={'w-1/2'}>
                <LoginForm/>
            </div>
            <div className={'w-1/2'}>
                <img
                    src={loginLightImage}
                    alt="logo"
                />
            </div>
        </div>
    );
};

export default Login;