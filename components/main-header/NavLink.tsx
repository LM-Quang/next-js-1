"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import classes from "./NavLink.module.css";

type Props = {
   pathName: string;
   children: React.ReactNode;
};

const NavLink = ({ pathName, children }: Props) => {
   const path = usePathname();

   return (
      <Link href={pathName} className={path.startsWith(`${pathName}`) ? classes.active : undefined}>
         {children}
      </Link>
   );
};

export default NavLink;
