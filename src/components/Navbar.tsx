import NavbarLinks from './NavbarLinks.tsx';
import {useUser} from '../userStore/UserContext.tsx';
import ToggleModeButton from './ToggleModeButton.tsx';
import LoginRegisterLinks from './LoginRegisterLinks.tsx';
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import {modalItems} from "../../mock-data/NavbarModalItems.ts";

const Navbar = () => {
    const {user} = useUser();

    return (
        <nav
            className='group w-20 hover:w-64 h-screen flex flex-col justify-between bg-white dark:bg-black fixed top-0 right-0 z-50 shadow-lg p-4 transition-all duration-300'>
            <div className="flex flex-col gap-8">
                <NavbarLinks/>
                <ToggleModeButton/>
            </div>

            <div>
                {user ? (
                    <div className="relative group">
                        <button className='relative flex items-center'>
                            کاربر
                            <MdOutlineKeyboardArrowDown className={' group-hover:rotate-180 transition duration-100'}/>
                        </button>

                        <div
                            className="absolute bottom-6 bg-default-300 dark:bg-default-950 w-full mt-2 rounded-md dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {modalItems.map((item) =>
                                <div key={item.id}
                                      className='block text-right p-2 hover:bg-white dark:hover:bg-danger-900 dark:hover:text-danger rounded-lg  m-4'>
                                    {item.title()}
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <LoginRegisterLinks/>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
