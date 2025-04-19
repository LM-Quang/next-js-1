"use client";

import React, { useRef, useState } from "react";
import classes from "./ImagePicker.module.css";
import Image from "next/image";

type Props = {
   label: string;
   name: string;
};

const ImagePicker = ({ label, name }: Props) => {
   const [pickedImage, setPickedImage] = useState<string | null>();
   const imageInput = useRef<HTMLInputElement>(null);

   const handlePickClick = () => {
      imageInput.current?.click();
   };

   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (!files || files.length === 0) {
         setPickedImage(null);
         return;
      }

      const file = files[0];
      const fileReader = new FileReader();
      fileReader.onload = () => {
         if (typeof fileReader.result === "string") {
            setPickedImage(fileReader.result);
         }
      };
      fileReader.readAsDataURL(file);
   };

   return (
      <div className={classes.picker}>
         <label className={classes.input} htmlFor={name}>
            {label}
         </label>
         <div className={classes.controls}>
            <div className={classes.preview}>
               {!pickedImage && <p>No Image picked yet...</p>}
               {pickedImage && <Image src={pickedImage} alt="Selected image" fill />}
            </div>
            <input
               className={classes.input}
               type="file"
               name={name}
               id={name}
               accept="image/png, image/jpeg"
               ref={imageInput}
               onChange={handleImageChange}
               required
            />
            <button className={classes.button} type="button" onClick={handlePickClick}>
               Pick an Image
            </button>
         </div>
      </div>
   );
};

export default ImagePicker;
