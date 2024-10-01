import {Link} from "react-router-dom";
import {loginItems} from "../../mock-data/NavbarItems.tsx";

const LoginRegisterLinks = () => {
    return (
        <div className="flex flex-col gap-y-4">
            {loginItems.map((item) =>
                <Link key={item.id} to={item.href}
                      className="flex hover:bg-default-300 dark:hover:bg-danger-900 dark:hover:text-danger p-2 rounded-lg">
                    {item.icon}
                    <span
                        className="hidden group-hover:inline-block mr-2 whitespace-nowrap">{item.title}</span>
                </Link>
            )}
        </div>
    );
};

export default LoginRegisterLinks;