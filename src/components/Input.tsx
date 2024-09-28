import React from "react";

const Input = ({
                   name,
                   type,
                   value,
                   error,
                   label,
                   onChange,
                   placeholder,
               }: {
    name: string;
    type: string;
    value?: string;
    error?: string;
    label?: string;
    placeholder: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
    return (
        <div className="relative">
            <label className="text-sm pb-2 font-primaryBold">
                {label}
                <input
                    name={name}
                    type={type}
                    value={value}
                    autoComplete="on"
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`rounded-lg h-10 ps-2 mt-1 border-[0.063rem] w-full ${error ? "border-red-500" : "border-default-300 dark:border-default-800"} dark:bg-default-950`}
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </label>
        </div>
    );
};

export default Input;