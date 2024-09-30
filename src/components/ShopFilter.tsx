import {Button} from "./Common/Button.tsx";
import Input from "./Input.tsx";
import RadioInput from "./RadioInput.tsx";

const ShopFilter = () => {
    return (
        <div className={'w-64 h-[810px] bg-default-600 dark:bg-default-950 flex flex-col items-center sticky top-2'}>
            <div>
                <Button button_style={'bg-white dark:bg-black rounded-full w-56 mt-2 py-2'}>
                    فیلتر برند
                </Button>

                <div className={'pt-6 ps-3'}>
                    <RadioInput name={'radio'} type={'radio'} title={'Apple'}/>
                    <RadioInput name={'radio'} type={'radio'} title={'Microsoft'}/>
                </div>
            </div>

            <Button button_style={'bg-white dark:bg-black rounded-full w-56 mt-2 py-2 mt-6'}>
                فیلتر قیمت
            </Button>

            <div className={'w-3/4 py-6'}>
                <Input
                    name={'text'}
                    type={'number'}
                    placeholder={'قیمت را وارد کنید'}
                />
            </div>

            <Button button_style={'w-3/4 bg-inherit border-default-400 border-[1.5px] p-0.5 rounded-md font-primaryBold'}>
                حذف فیلتر ها
            </Button>
        </div>
    );
};

export default ShopFilter;