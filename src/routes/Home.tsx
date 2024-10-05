import Slider from "../components/Slider";
import productInfo from "../../mock-data/ProductInfo";
import WelcomeHomePage from "../components/WelcomeHomePage.tsx";
import { useEffect, useState } from "react";
import { SpecialProductHomepage } from "../components/SpecialProductHomepage.tsx";
import axios from "axios";

interface items_type {
    title: string;
    price: string | number;
    imgsrc?: string;
}

const Home = () => {
    const [items, setItems] = useState<items_type[]>([]);

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        try {
            const response = await axios.get("http://185.8.174.74:8090/localhost:5000/api/products/allproducts");
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const tempItems: items_type[] = response.data.map((item: any) => ({
                imgsrc: item.image,
                price: item.price.toString(),
                title: item.name,
            }));
            setItems(tempItems);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="flex justify-between">
                <WelcomeHomePage />
                <Slider sliderData={productInfo} />
            </div>
            <div className="mt-14 pr-20">
                <SpecialProductHomepage items={items} />
            </div>

            
        </>
    );
};

export default Home;
