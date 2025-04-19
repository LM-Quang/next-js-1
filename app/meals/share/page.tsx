"use client";

import ImagePicker from "@/components/meals/ImagePicker";
import classes from "./page.module.css";

{
   /* Calling Sever Action here */
}
import { shareMeal } from "@/lib/actions";
import MealsFormSubmission from "@/components/meals/MealsFormSubmission";
import { useActionState } from "react";

type ShareMealState = { message: string };

export default function ShareMealPage() {
   // Input validation
   const [state, formAction] = useActionState<ShareMealState, FormData>(shareMeal, { message: "" });
   return (
      <>
         <header className={classes.header}>
            <h1>
               Share your <span className={classes.highlight}>favorite meal</span>
            </h1>
            <p>Or any other meal you feel needs sharing!</p>
         </header>
         <main className={classes.main}>
            {/* Using Sever Action here: action={shareMeal} */}
            {/* Change to action={formAction}, to work with input validation */}
            <form className={classes.form} action={formAction}>
               <div className={classes.row}>
                  <p>
                     <label htmlFor="name">Your name</label>
                     <input type="text" id="name" name="name" required />
                  </p>
                  <p>
                     <label htmlFor="email">Your email</label>
                     <input type="email" id="email" name="email" required />
                  </p>
               </div>
               <p>
                  <label htmlFor="title">Title</label>
                  <input type="text" id="title" name="title" required />
               </p>
               <p>
                  <label htmlFor="summary">Short Summary</label>
                  <input type="text" id="summary" name="summary" required />
               </p>
               <p>
                  <label htmlFor="instructions">Instructions</label>
                  <textarea id="instructions" name="instructions" rows={10} required></textarea>
               </p>

               <ImagePicker label="image" name="image" />

               {/* Input validation */}
               {/* The message will show up when input is invalid */}
               {state.message && <p>{state.message}</p>}

               <p className={classes.actions}>
                  <MealsFormSubmission />
               </p>
            </form>
         </main>
      </>
   );
}
