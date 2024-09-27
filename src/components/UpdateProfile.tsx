import React from 'react';
import Input from "./Input.tsx";
import useInput from "../hooks/useInput.ts";

const UpdateProfile = () => {
    const {formData, error, handleInputChange, handleSubmit} = useInput();
  return (
    <div className='w-full'>
        <h1></h1>
        <Input name='username' type='text' placeholder='نام خود را وارد کنید' value='' />
        <Input  />
        <Input  />
        <Input  />
        <div className='w-full flex flex-row justify-between items-center'>

        </div>
    </div>
  )
}

export default UpdateProfile