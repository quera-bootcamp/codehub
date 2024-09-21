import {FaRegHeart} from "react-icons/fa";
import {PiSignInBold} from "react-icons/pi";
import {IoHomeOutline} from "react-icons/io5";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {BiShoppingBag, BiUserPlus} from "react-icons/bi";

export const NavbarItems = [
    {
        id: 1,
        icon: <IoHomeOutline size={25}/>,
        title: "داشبورد",
        href: '/',
    },
    {
        id: 2,
        icon: <BiShoppingBag size={25}/>,
        title: "فروشگاه",
        href: '/testing',
    },
    {
        id: 3,
        icon: <AiOutlineShoppingCart size={25}/>,
        title: "سبد خرید",
        href: '/ShoppingBasket',
    },
    {
        id: 4,
        icon: <FaRegHeart size={23}/>,
        title: "علاقه‌مندی‌ها",
        href: '/Favorites',
    },
]

export const loginItems = [
    {
        id: 1,
        icon: <PiSignInBold size={25}/>,
        title: "ورود",
        href: '/login',
    },
    {
        id: 2,
        icon: <BiUserPlus size={25}/>,
        title: "ثبت نام",
        href: '/register',
    },
]