import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for your items
interface items_type {
  title: string;
  price: string;
  imgsrc?: string;
  id: string;
}

// Define the context's shape, including setFavorites
interface FavoritesContextProps {
  favorites: items_type[];
  addToFavorites: (item: items_type) => void;
  setFavorites: React.Dispatch<React.SetStateAction<items_type[]>>; // Add setFavorites here
}

// Create the context
const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

// Create a custom hook to use the FavoritesContext
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

// Create the provider component
export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<items_type[]>([]);

  const addToFavorites = (item: items_type) => {
    setFavorites(prev => [...prev, item]);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
