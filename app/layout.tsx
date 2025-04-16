import type { Metadata } from "next";
import "./globals.css";

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
         <body>{children}</body>
      </html>
   );
}
