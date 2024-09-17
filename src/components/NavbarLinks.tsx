import {Link} from "react-router-dom";
import {NavbarItems} from "../../mock-data/NavbarItems.tsx";

const NavbarLinks = () => {
    return (
        <>
            {NavbarItems.map((item) => (
                <Link key={item.id} to={item.href}
                      className="flex gap-4 hover:bg-default-300 dark:hover:bg-danger-900 dark:hover:text-danger rounded-lg w-full focus:text-danger p-2">
                    <span>
                        {item.icon}
                    </span>
                    <span className="hidden group-hover:inline-block whitespace-nowrap">
                        {item.title}
                    </span>
                </Link>
            ))}
        </>
    )
}
export default NavbarLinks;