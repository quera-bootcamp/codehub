import {useTheme} from "../stroe/ThemeContext.tsx";
import {MdOutlineDarkMode, MdOutlineLightMode} from "react-icons/md";

const ToggleModeButton = () => {
    const {darkMode, toggleDarkMode} = useTheme();

    return (
        <button
            onClick={toggleDarkMode}
            className={"p-2"}
        >
            {darkMode ? <MdOutlineLightMode size={25}/> : <MdOutlineDarkMode size={25}/>}
        </button>
    );
}

export default ToggleModeButton;