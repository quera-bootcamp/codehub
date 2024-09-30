import {Link} from "react-router-dom";
import Slider from "../components/Slider";
import {useTheme} from "../stroe/ThemeContext.tsx";
import {useUser} from "../userStore/UserContext.tsx";
import productInfo from "../../mock-data/ProductInfo";
import codeHubDark from "../../public/images/codeHubDark.png";
import codeHubLight from "../../public/images/codeHubLight.png";

const Home = () => {
    const {user} = useUser();
    const {darkMode} = useTheme();
    return (
        <>
            <div className="flex justify-between">
                <div>
                    <img
                        src={darkMode ? codeHubDark : codeHubLight}
                        alt="logo"
                        className={'w-60 mx-auto'}
                    />
                    {user ?
                        <>
                            <p><span className={'text-2xl'}>{user.email}</span> به<span
                                className={'font-primaryBold text-xl'}> کد<span
                                className={'text-orange-500'}>هاب</span></span> خوش امدید</p>
                            <p className={'pt-8'}>اوقات خوشی را برای شما <span className={'font-primaryBold text-xl'}> کد<span
                                className={'text-orange-500'}>هابی</span></span> عزیز آرزومندیم</p>
                        </>
                        :
                        <>
                            <p className={'-mt-8'}>
                                لذت استفاده از<span className={'font-primaryBold text-xl'}> کد<span
                                className={'text-orange-500'}>هاب</span></span> را
                                با
                                <Link className={'text-danger font-primaryBold text-xl px-2'} to={'/Register'}> ثبت
                                    نام </Link>
                                رایگان تجربه کنید
                            </p>
                        </>
                    }
                </div>
                <Slider sliderData={productInfo}/>
            </div>
            {/* مجصولات ویژه */}
        </>
    );
};
export default Home;
