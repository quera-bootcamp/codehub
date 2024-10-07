import { CardHomepage } from "../components/CardHomepage";
import {useFavorites} from "../hooks/FavoritesContext"
const Favorites = () => {
    const { favorites } = useFavorites();
    if(favorites.length){
      return (
        <div className="flex flex-row w-full gap-7 flex-wrap justify-start items-start">
             {
               favorites.map((element)  => (
                <CardHomepage  style="w-56" id={element.id} imgsrc={element.imgsrc} title={element.title} price={element.price} />
               ))
             }
        </div>
    );
    }else{
      return(
        <div className="h-screen flex justify-center items-center text-default-950 font-bold text-xl">شما کالای مورد علاقه ای ندارید . </div>
      );
    }
};

export default Favorites;