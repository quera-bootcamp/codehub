import {Button} from "./Common/Button.tsx";
import {FaArrowLeftLong} from "react-icons/fa6";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {shopItem} from "../../mock-data/ShopPageItems.ts";
import {Link} from "react-router-dom";
import {LikeIcon} from "./LikeIcon.tsx";
import {Badge} from "./Badge.tsx";

const ShopCards = () => {
    return (
        <div className={'grid grid-cols-3 h-fit gap-6'}>
            {shopItem.map((item) =>
                <div key={item.id} className={'bg-default-600 dark:bg-default-900 rounded-lg w-96'}>
                    <div className={'relative'}>
                        <img src={item.image} alt={item.alt}/>
                        <div className={'absolute bottom-2 right-2'}>
                            <Badge price={'Apple'}/>
                        </div>
                        <div className={'absolute top-2 right-4'}>
                            <LikeIcon/>
                        </div>
                    </div>
                    <div className={'p-4 space-y-2'}>
                        <div className={'flex justify-between items-center font-primaryBold'}>
                            <span className={'dark:text-white'}>{item.title}</span>
                            <span className={'text-danger'}>{item.price} تومان</span>
                        </div>
                        <p className={'line-clamp-2  text-default-400'}>{item.description}</p>
                        <div className={'flex justify-between items-center'}>
                            <Button
                                button_style={'bg-danger py-1 px-3 rounded-lg flex justify-between items-center text-white'}
                            >
                                مشاهده بیشتر
                                <FaArrowLeftLong size={30} className={'ps-3'}/>
                            </Button>

                            <Link to={item.href}>
                                <AiOutlineShoppingCart size={25}/>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShopCards;