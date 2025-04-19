"use client";

import { useParams } from "next/navigation";
import React from "react";

// The "routeName" is the name of the [routeName] folder that will show up in the URL
// Ex: http://localhost:3000/dynamic-routes/route-1
// => routeName = route-1
const RoutePage = () => {
   const params = useParams<{ routeName: string }>();
   return (
      <div>
         <p>{params.routeName}</p>
      </div>
   );
};

export default RoutePage;
