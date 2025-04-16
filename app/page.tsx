import FavoritesContext from "@/store/favorites-context";
import { useContext } from "react";

interface HomeProps {
   id: string;
}

export default function Home(props: HomeProps) {
   const favoritesCtx = useContext(FavoritesContext);
   const isItemFavorite = favoritesCtx.isItemFavorite(props.id);

   function toggleFavoriteStatusHandle() {
      if (isItemFavorite) {
         favoritesCtx.removeFavorite(props.id);
      } else {
         favoritesCtx.addFavorite({ id: "123", name: "Quang" });
      }
   }

   return (
      <div>
         <button onClick={toggleFavoriteStatusHandle}>
            {isItemFavorite ? "Remove from Favorites" : "Add to Favorites"}
         </button>
      </div>
   );
}
