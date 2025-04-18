import React from "react";
import classes from "./MealsGrid.module.css";
import MealItem from "./MealItem";
import { Meal } from "@/type/Meal";

const MealsGrid = ({ meals }: { meals: Meal[] }) => {
   return (
      <ul className={classes.meals}>
         {meals.map((meal) => {
            return (
               <li key={meal.id}>
                  <MealItem {...meal} />
               </li>
            );
         })}
      </ul>
   );
};

export default MealsGrid;
