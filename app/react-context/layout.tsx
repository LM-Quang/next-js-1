import { FavoritesContextProvider } from "@/store/favorites-context";

export default function ReactContextLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <div>
         <FavoritesContextProvider>{children}</FavoritesContextProvider>
      </div>
   );
}
