import Link from "next/link";
import React from "react";

const DynamicRoutesPage = () => {
   return (
      <div>
         <Link href="/route-1">Route 1</Link>
         <Link href="/route-2">Route 2</Link>
      </div>
   );
};

export default DynamicRoutesPage;
