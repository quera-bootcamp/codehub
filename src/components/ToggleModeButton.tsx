import {useState, useEffect} from 'react';

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
            className="px-2 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
        >
            {darkMode ? 'Light' : 'Dark'} Mode
        </button>
    );
}
export default ToggleModeButton;