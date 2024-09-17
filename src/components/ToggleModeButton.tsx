import {useState, useEffect} from 'react';
import {MdOutlineDarkMode} from "react-icons/md";
import {MdOutlineLightMode} from "react-icons/md";

const ToggleModeButton = () => {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem('theme', newMode ? 'dark' : 'light');
            return newMode;
        });
    };

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