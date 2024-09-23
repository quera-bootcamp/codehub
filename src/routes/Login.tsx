import LoginForm from "../components/LoginForm.tsx";
import LoginRegisterImage from "../components/LoginRegisterImage.tsx";

const Login = () => {
    return (
        <div className={'flex items-start justify-between pt-8'}>
            <div className={'w-1/2'}>
                <LoginForm/>
            </div>
            <LoginRegisterImage/>
        </div>
    );
};

export default Login;