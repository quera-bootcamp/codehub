import {useTheme} from "../stroe/ThemeContext.tsx";
import loginDarkImage from "../../public/images/loginDarkMode.png";
import loginLightImage from "../../public/images/loginLightMode.png";

const LoginRegisterImage = () => {
    const {darkMode} = useTheme();
    return (
        <div className={'w-1/2'}>
            <img
                src={darkMode ? loginDarkImage : loginLightImage}
                alt="logo"
            />
        </div>
    );
};

export default LoginRegisterImage;