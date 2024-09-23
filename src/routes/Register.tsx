import RegisterForm from "../components/RegisterForm.tsx";
import LoginRegisterImage from "../components/LoginRegisterImage.tsx";

const Register = () => {
    return (
        <div className={'flex items-start justify-between pt-8'}>
            <div className={'w-1/2'}>
                <RegisterForm/>
            </div>
            <LoginRegisterImage/>
        </div>
    );
};

export default Register;