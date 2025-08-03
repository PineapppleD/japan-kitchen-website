import React from "react";
import { BasketCard } from "./BasketCard";

export const BasketCardList = () => {
  const data = [
    {
      id: 1,
      name: "Ramen with chicken",
      description:
        "A delicious blend of noodles, broth, and toppings for a hearty meal.",
      kcal: 605,
      weight_grams: 698,
      price_usd: 38.48,
      image: "ramen_with_chicken.png",
      image_url:
        "https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg",
      type: "ramen",
    },
    {
      id: 2,
      name: "Unagi crunch",
      description: "Crispy rolls with eel, shrimp, and creamy sauce.",
      kcal: 830,
      weight_grams: 948,
      price_usd: 48.63,
      image: "unagi_crunch.png",
      image_url:
        "https://images.pexels.com/photos/30987130/pexels-photo-30987130.jpeg",
      type: "ramen",
    },
    {
      id: 3,
      name: "Tom Yum",
      description: "Spicy soup with shrimp, mushrooms, and herbs.",
      kcal: 894,
      weight_grams: 606,
      price_usd: 35.21,
      image: "tom_yum.png",
      image_url:
        "https://images.pexels.com/photos/18485395/pexels-photo-18485395.jpeg",
      type: "ramen",
    },
  ];

  return <div className="flex flex-col gap-10">
    {data.map((item, index) => {
        return <BasketCard menuItem={item} key={index}/>
    })}
  </div>;
};
