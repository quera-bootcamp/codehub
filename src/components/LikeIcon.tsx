import { useState , useEffect } from "react";
import {useFavorites} from "../hooks/FavoritesContext"

interface itemsType {
  title : string;
  price : string;
  imgsrc? : string;
  id:string;
  initialState?:boolean;
}

export const LikeIcon : React.FC<itemsType> = ({title , price , imgsrc , id , initialState}) => {
  const [like, setlike] = useState<boolean>(initialState ?? false);
  const { addToFavorites , setFavorites ,favorites } = useFavorites();

  useEffect(() => {
    const isFavorite = favorites.some((item) => item.id === id);
    setlike(isFavorite);
  }, [favorites, id]);

  const handleClick = () => {
    
    if(!like){
      
      const temp = {
        title : title,
        price : price,
        imgsrc : imgsrc,
        id : id
      }
      
      addToFavorites(temp);
      setlike(!like)

    }else{

      setFavorites(favorites.filter((element) => {
        return element.id !== id;
      }))
      setlike(!like);
    }
  }

  if (like) {
    return (
      <svg onClick={handleClick} className="cursor-pointer absolute right-2 top-2" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.4469 0.95625C12.7344 -0.503125 10.1875 -0.240625 8.61564 1.38125L8.00002 2.01562L7.38439 1.38125C5.81564 -0.240625 3.26564 -0.503125 1.55314 0.95625C-0.409358 2.63125 -0.512483 5.6375 1.24377 7.45312L7.29064 13.6969C7.68127 14.1 8.31564 14.1 8.70627 13.6969L14.7531 7.45312C16.5125 5.6375 16.4094 2.63125 14.4469 0.95625Z" fill="#DB2777"/>
      </svg>
    );
  } else {
    return (
      <svg onClick={handleClick} className="cursor-pointer absolute right-2 top-2" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.4469 1.95625C13.7344 0.496875 11.1875 0.759375 9.61564 2.38125L9.00002 3.01562L8.38439 2.38125C6.81564 0.759375 4.26564 0.496875 2.55314 1.95625C0.590642 3.63125 0.487517 6.6375 2.24377 8.45312L8.29064 14.6969C8.68127 15.1 9.31564 15.1 9.70627 14.6969L15.7531 8.45312C17.5125 6.6375 17.4094 3.63125 15.4469 1.95625Z" stroke="#DFE3E8"/>
      </svg>
    );
  }
};
