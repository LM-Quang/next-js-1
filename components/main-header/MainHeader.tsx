import Image from "next/image";
import Link from "next/link";

import React from "react";
import logo from "@/public/images/logo.png";
import classes from "./MainHeader.module.css";
import Background from "./Background";
import NavLink from "./NavLink";
// import { usePathname } from "next/navigation";

const MainHeader = () => {
   // const path = usePathname();
   return (
      <>
         <Background />
         <header className={classes.header}>
            <Link className={classes.logo} href="/">
               <Image src={logo} alt="Logo" priority /> Food
            </Link>

            <nav className={classes.nav}>
               <ul>
                  <li>
                     <NavLink pathName="/meals">Browse Meals</NavLink>

                     {/* When use this Link, you need usePathname Hook that turns this component to Client component */}
                     {/* Seperate this Link to NavLink component for better use */}
                     {/* <Link
                        href="/meals"
                        className={path.startsWith("/meals") ? classes.active : undefined}
                     >
                        Browse Meals
                     </Link> */}
                  </li>
                  <li>
                     <NavLink pathName="/community">Foodie Community</NavLink>
                  </li>
               </ul>
            </nav>
         </header>
      </>
   );
};

export default MainHeader;
