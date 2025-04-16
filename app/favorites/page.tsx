import FavoritesContext from "@/store/favorites-context";
import React, { useContext } from "react";

const FavoritesPage = () => {
   const favoriteCtx = useContext(FavoritesContext);

   return (
      <div>
         <p>Total: {favoriteCtx.totalFavorites}</p>
         {favoriteCtx.totalFavorites === 0 ? (
            <p>You dont have any favorite yet</p>
         ) : (
            favoriteCtx.favorites.map((favorite) => <p key={favorite.id}>{favorite.name}</p>)
         )}
      </div>
   );
};

export default FavoritesPage;
