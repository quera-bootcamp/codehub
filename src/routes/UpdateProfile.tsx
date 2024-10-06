import React, { useState } from 'react';
import Input from "../components/Input.tsx";
import { Button } from '../components/Common/Button.tsx';

const UpdateProfile = () => {
  const [name,setName] = useState<string>("");
  const [email,setEmail] = useState<string>("");
  const [password,setPassword] = useState<string>("");
  const [reEnterpassword,setreEnterpassword] = useState<string>("");
  const [error,setError] = useState<string>("");

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!name.trim() || !email.trim() || !password.trim() || !reEnterpassword.trim()){
      setError("یکی از فیلد ها خالی میباشد .");
      return;
    }

    if(password !== reEnterpassword){
      setError("رمز های وارد شده یکی نمیباشد");
      return;
    }
  }
  return (
    <div className='w-1/2 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <form onSubmit={handlesubmit}>
        <h1 className='mb-5'>بروز رسانی پروفایل</h1>
        <Input label='نام' placeholder='نام خود را وارد نمایید' name='name' type='text' value={name}  onChange={(e) => setName(e.target.value)} />
        <Input name='email' label='ایمیل' type='email' placeholder='ایمیل خود را وارد نمایید' value={email}  onChange={(e) => setEmail(e.target.value)}  />
        <Input name='password' label='رمز عبور' placeholder='رمز عبور خود را وارد نمایید' type='password' value={password} onChange={(e) => setPassword(e.target.value)}   />
        <Input name='password' label='تکرار رمز عبور' placeholder='تکرار رمز عبور خود را وارد نمایید' type='password' value={reEnterpassword} onChange={(e) => setreEnterpassword(e.target.value)} />
        <p className='text-danger-800 text-lg font-light mt-4 mb-4'>{error}</p>
        <div className='w-full flex flex-row justify-between items-center'>
        <Button button_style='px-2 py-2 rounded-xl' children={
          <p className='text-default-50 text-base'>سفارشات من</p>
        } />
        <Button type='submit' button_style='px-2 py-2 rounded-xl'  children={
          <p className='text-default-50 text-base'>بروز رسانی</p>
        } />
        </div>
        </form>
    </div>
  )
}

export default UpdateProfile