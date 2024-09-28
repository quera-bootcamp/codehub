import ShopCards from "../components/ShopCards.tsx";
import ShopFilter from "../components/ShopFilter.tsx";

export default function Shop() {
    return (
        <div className={'flex space-x-8 space-x-reverse'}>
            <ShopFilter/>
            <ShopCards/>
        </div>
    )
}