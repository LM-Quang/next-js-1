import React from "react";

type PageProps = {
   params: {
      routeName: string;
   };
};

// The "routeName" is the name of the [routeName] folder that will show up in the URL
// Ex: http://localhost:3000/dynamic-routes/route-1
// => routeName = route-1
const RoutePage = ({ params }: PageProps) => {
   return (
      <div>
         <p>{params.routeName}</p>
      </div>
   );
};

export default RoutePage;
