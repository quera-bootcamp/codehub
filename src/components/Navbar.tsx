import {Link} from "react-router-dom";
import NavbarLinks from "./NavbarLinks.tsx";
import ToggleModeButton from "./ToggleModeButton.tsx";
import {loginItems} from "../../mock-data/NavbarItems.tsx";

const Navbar = () => {
    return (
        <nav
            className='group w-20 hover:w-64 h-screen flex flex-col  justify-between bg-white dark:bg-black fixed top-0 right-0 shadow-lg p-4 transition-all duration-300'>
            <div className="flex flex-col gap-8">
                <NavbarLinks/>
                <ToggleModeButton/>
            </div>

            <div className="flex flex-col gap-y-4">
                {loginItems.map((item) =>
                    <Link key={item.id} to={'/'}
                          className="flex hover:bg-default-300 dark:hover:bg-danger-900 dark:hover:text-danger p-2 rounded-lg">
                        {item.icon}
                        <span className="hidden group-hover:inline-block mr-2 whitespace-nowrap">{item.title}</span>
                    </Link>
                )}
            </div>
        </nav>
    );
};
export default Navbar;