import { dummyMeals } from "@/data/meals";

export const getMeals = async () => {
   // To simulate API calling time
   await new Promise((resolve) => setTimeout(resolve, 2000));
   return dummyMeals;
};

export const getMealsError = async () => {
   await new Promise((resolve) => setTimeout(resolve, 1000));
   // To simulate Error
   throw new Error("Simulate error happens during calling API");
};
