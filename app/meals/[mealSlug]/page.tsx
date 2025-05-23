"use client";

import React from "react";
import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { notFound, useParams } from "next/navigation";

// Dynamic metadata
export async function generateMetadata({ params }: { params: { mealSlug: string } }) {
   const meal = getMeal(params.mealSlug);

   if (!meal) {
      notFound();
   }

   return {
      title: meal.title,
      description: meal.summary,
   };
}

const MealDetailsPage = () => {
   const params = useParams<{ mealSlug: string }>();
   const meal = getMeal(params.mealSlug);

   if (!meal) {
      notFound();
   }

   // Add this to make the Instructions look more neat
   meal.instructions = meal.instructions.replace(/\n/g, "<br />");

   return (
      <>
         <header className={classes.header}>
            <div className={classes.image}>
               <Image fill src={meal.image} alt={meal.title} />
            </div>
            <div className={classes.headerText}>
               <h1>{meal.title}</h1>
               <p className={classes.creator}>
                  by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
               </p>
               <p className={classes.summary}>{meal.summary}</p>
            </div>
         </header>
         <main>
            <p
               className={classes.instructions}
               dangerouslySetInnerHTML={{
                  // Store this as HTML => Could be XSS actack here
                  __html: meal.instructions,
               }}
            ></p>
         </main>
      </>
   );
};

export default MealDetailsPage;
