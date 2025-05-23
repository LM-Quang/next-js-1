import type { Metadata } from "next";
import React, { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/MealsGrid";
import { getMeals } from "@/lib/meals";
import MealsLoadingPage from "./loading-out";

export const metadata: Metadata = {
   title: "Static Metadata",
   description: "Meals page",
};

const Meals = async () => {
   const meals = await getMeals();
   return <MealsGrid meals={meals} />;
};

const MealsPage = () => {
   // const meals = await getMeals();
   return (
      <>
         <header className={classes.header}>
            <h1>
               Delicous meals, created <span className={classes.highlight}>by you</span>
            </h1>
            <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
            <p className={classes.cta}>
               <Link href="/meals/share">Share Your Favorite Recipe</Link>
            </p>
         </header>
         <main className={classes.main}>
            {/* <MealsGrid meals={meals} /> */}

            {/* Suspense is provided by React that allows you to handle Loading state  */}
            <Suspense fallback={<MealsLoadingPage />}>
               <Meals />
            </Suspense>
         </main>
      </>
   );
};

export default MealsPage;
