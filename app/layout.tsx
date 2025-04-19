import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/main-header/MainHeader";

// Add Metadata to a Layout, it will automatically be added to all the pages wrapped by this layout
// unless a page specifies it's own Metadata
export const metadata: Metadata = {
   title: "Static Metadata",
   description: "Whole website",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body>
            <MainHeader />
            {children}
         </body>
      </html>
   );
}
