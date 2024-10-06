import React, { useState } from 'react';
import Input from "./Input.tsx";
import { Button } from './Common/Button.tsx';

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
    <div className='w-full'>
      <form>
        <h1 className='mb-5'>بروز رسانی پروفایل</h1>
        <Input label='نام' placeholder='نام خود را وارد نمایید' name='name' type='text' value={name}  onChange={(e) => setName(e.target.value)} />
        <Input name='email' label='ایمیل' type='email' placeholder='ایمیل خود را وارد نمایید' value={email}  onChange={(e) => setEmail(e.target.value)}  />
        <Input name='password' label='رمز عبور' placeholder='رمز عبور خود را وارد نمایید' type='password' value={password} onChange={(e) => setPassword(e.target.value)}   />
        <Input name='password' label='تکرار رمز عبور' placeholder='تکرار رمز عبور خود را وارد نمایید' type='password' value={reEnterpassword} onChange={(e) => setreEnterpassword(e.target.value)} />
        <p className='text-danger-800 text-lg font-light mt-4'>{error}</p>
        <div className='w-full flex flex-row justify-between items-center'>
        <Button button_style='px-5 py-3 rounded-2xl' children={
          <p className='text-default-50 text-xl font-normal'>سفارشات من</p>
        } />
        <Button func={() => handlesubmit} button_style='px-5 py-3 rounded-2xl'  children={
          <p className='text-default-50 text-xl font-normal'>بروز رسانی</p>
        } />
        </div>
        </form>
    </div>
  )
}

export default UpdateProfile