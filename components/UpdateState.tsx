// ===================== UPDATE STATE BASE ON PREVIOUS STATE =====================
"use clien";
import React, { useState } from "react";

interface Item {
   id: number;
   name: string;
}

const UpdateState = () => {
   const [items, setItems] = useState<Item[]>([]);

   // ===================== UPDATE STATE BASE ON PREVIOUS STATE =====================
   const handleAddItem = () => {
      const item: Item = { id: 1, name: "One" };
      setItems((existingItems) => [item, ...existingItems]);
      // NOT THIS
      // setItems([item, ...items]);
   };
   return (
      <div>
         {items.map((item) => {
            return <p key={item.id}>1</p>;
         })}
         <button onClick={handleAddItem}>Add item</button>
      </div>
   );
};

export default UpdateState;
