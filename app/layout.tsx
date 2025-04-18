import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/main-header/MainHeader";

export const metadata: Metadata = {
   title: "Learning Next JS",
   description: "Learning Next JS",
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
