"use server";

import { Meal } from "@/type/Meal";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";

// Server Actions for Handling Form submissions
export const shareMeal = async (formData: FormData) => {
   const title = formData.get("title") as string;
   const summary = formData.get("summary") as string;
   const instructions = formData.get("instructions") as string;
   const image = formData.get("image") as File;
   const creator = formData.get("name") as string;
   const creator_email = formData.get("email") as string;

   const meal: Meal = {
      id: 0,
      title: title,
      slug: "",
      image: "",
      summary: summary,
      instructions: instructions,
      creator: creator,
      creator_email: creator_email,
   };

   await saveMeal(meal, image);
   redirect("/meals");
};
