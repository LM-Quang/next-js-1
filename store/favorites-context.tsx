import { createContext, useState, ReactNode } from "react";

// Define the type for a Meetup item
interface Meetup {
   id: string;
   name: string; // You can replace or expand this based on the structure of your data
}

// Define the type for the context
interface FavoritesContextType {
   favorites: Meetup[];
   totalFavorites: number;
   addFavorite: (favoritesMeetup: Meetup) => void;
   removeFavorite: (meetupId: string) => void;
   isItemFavorite: (meetupId: string) => boolean;
}

// Initial dummy values (used only for default context)
const FavoritesContext = createContext<FavoritesContextType>({
   favorites: [],
   totalFavorites: 0,
   addFavorite: () => {},
   removeFavorite: () => {},
   isItemFavorite: () => false,
});

export default FavoritesContext;

// Define props type for the provider
interface FavoritesContextProviderProps {
   children: ReactNode;
}

export function FavoritesContextProvider({ children }: FavoritesContextProviderProps) {
   // These are states and methods required for manipulating this Context
   const [userFavorites, setUserFavorites] = useState<Meetup[]>([]);

   function addFavoritesHandler(favoritesMeetup: Meetup) {
      // ===================== UPDATE STATE BASE ON PREVIOUS STATE =====================
      setUserFavorites((prevUserFavorites) => {
         return prevUserFavorites.concat(favoritesMeetup);
      });
      // NOT THIS
      // setUserFavorites([favoritesMeetup,...userFavorites])
   }

   function removeFavoritesHandler(meetupId: string) {
      setUserFavorites((prevUserFavorites) => {
         return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
      });
   }

   function itemIsFavoritesHandler(meetupId: string) {
      return userFavorites.some((meetup) => meetup.id === meetupId);
   }

   const context: FavoritesContextType = {
      favorites: userFavorites,
      totalFavorites: userFavorites.length,
      addFavorite: addFavoritesHandler,
      removeFavorite: removeFavoritesHandler,
      isItemFavorite: itemIsFavoritesHandler,
   };

   return <FavoritesContext.Provider value={context}>{children}</FavoritesContext.Provider>;
}
