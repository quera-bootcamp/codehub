import React, {useState, useCallback} from "react";
import {useNavigate} from "react-router-dom";

const initialFormState = {
    email: "",
    name: "",
    password: "",
    reEnterPassword: "",
};

const initialErrorState = {
    email: "",
    name: "",
    password: "",
    reEnterPassword: "",
};

const validationMessages = {
    requiredName: "کدهابی عزیز لطفا نام خود را وارد کنید",
    requiredEmail: "کدهابی عزیز لطفا ایمیل خود را وارد کنید",
    requiredPassword: "کدهابی عزیز لطفا رمز عبور را وارد کنید",
    requiredReEnterPassword: "کدهابی عزیز لطفا رمز عبور خود را مجددا وارد کنید",
    passwordMismatch: "کدهابی عزیز رمزهای عبور تطابق ندارند",
};

const useInput = () => {
    const [formData, setFormData] = useState(initialFormState);
    const [error, setError] = useState(initialErrorState);

    const navigate = useNavigate();

    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const {name, value} = e.target;
            setFormData((prev) => ({...prev, [name]: value}));
            setError((prev) => ({...prev, [name]: ""}));
        },
        []
    );

    const validateForm = useCallback(() => {
        const newError = {...initialErrorState};
        let isValid = true;

        if (!formData.name.trim()) {
            newError.name = validationMessages.requiredName;
            isValid = false;
        }
        if (!formData.email.trim()) {
            newError.email = validationMessages.requiredEmail;
            isValid = false;
        }
        if (!formData.password.trim()) {
            newError.password = validationMessages.requiredPassword;
            isValid = false;
        }
        if (!formData.reEnterPassword.trim()) {
            newError.reEnterPassword = validationMessages.requiredReEnterPassword;
            isValid = false;
        } else if (formData.password !== formData.reEnterPassword) {
            newError.reEnterPassword = validationMessages.passwordMismatch;
            isValid = false;
        }

        setError(newError);
        return isValid;
    }, [formData]);

    const handleSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (validateForm()) {
                navigate("/");
            }
        },
        [validateForm, navigate]
    );

    return {
        formData,
        error,
        handleInputChange,
        handleSubmit,
    };
};

export default useInput;