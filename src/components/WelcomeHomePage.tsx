import {Link} from "react-router-dom";
import {useTheme} from "../stroe/ThemeContext.tsx";
import {useUser} from "../userStore/UserContext.tsx";
import codeHubDark from "../../public/images/codeHubDark.png";
import codeHubLight from "../../public/images/codeHubLight.png";

const WelcomeHomePage = () => {
    const {user} = useUser();
    const {darkMode} = useTheme();
    return (
        <div className="flex flex-col">
            <img
                src={darkMode ? codeHubDark : codeHubLight}
                alt="logo"
                className={'w-60 mx-auto'}
            />
            {user ?
                <>
                    <p>
                        <span className={'text-2xl'}>{user.email}</span> به
                        <span className={'font-primaryBold text-xl'}> کد
                        <span className={'text-orange-500'}>هاب </span></span>
                        خوش امدید
                    </p>

                    <p className={'pt-8'}>اوقات خوشی را برای شما
                        <span className={'font-primaryBold text-xl'}> کد
                        <span className={'text-orange-500'}>هابی </span></span>
                        عزیز آرزومندیم
                    </p>
                </>
                :
                <>
                    <p className={'-mt-8'}>
                        لذت استفاده از
                        <span className={'font-primaryBold text-xl'}> کد
                        <span className={'text-orange-500'}>هاب</span></span> را با
                        <Link className={'text-danger font-primaryBold text-2xl px-2'} to={'/Register'}> ثبت
                            نام </Link>
                        رایگان تجربه کنید
                    </p>
                </>
            }
        </div>
    );
};

export default WelcomeHomePage;