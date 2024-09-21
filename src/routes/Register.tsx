import RegisterForm from "../components/RegisterForm.tsx";
import loginLightImage from "../../public/images/loginLightMode.png"

const Register = () => {
    return (
        <div className={'flex items-start justify-between pt-8'}>
            <div className={'w-1/2'}>
                <RegisterForm/>
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

export default Register;