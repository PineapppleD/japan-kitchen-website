"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/app/lib/supabase";

type ActionImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  link: string;
  badge?: number;
};

export const HeaderActions = () => {
  const [cartCount, setCartCount] = useState<number>(0);

  // Получение количества товаров в корзине
  useEffect(() => {
    const fetchCartCount = async () => {
      const { count, error } = await supabase
        .from("cart_items")
        .select("*", { count: "exact", head: true })

      console.log(count)

      if (!error) setCartCount(count || 0);
    };

    fetchCartCount();

    const channel = supabase.
      channel("realtime:cart_items")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "cart_items",
        },
        () => {
          fetchCartCount();
        }
      )
      .subscribe();

      return () => {
        supabase.removeChannel(channel);
      }
  }, []);

  const actionImages: ActionImage[] = [
    {
      src: "/heart.svg",
      alt: "favorite food",
      width: 30,
      height: 30,
      link: "/favorites",
    },
    {
      src: "/cart.svg",
      alt: "cart",
      width: 30,
      height: 30,
      link: "/menu/basket",
      badge: cartCount, // динамическое значение
    },
    {
      src: "/profile.svg",
      alt: "log in",
      width: 35,
      height: 35,
      link: "/profile",
    },
  ];

  return (
    <ul className="flex items-center gap-4 md:gap-2 lg:gap-6">
      {actionImages.map((image, index) => (
        <li
          key={index}
          className={clsx("relative", {
            "hover:cursor-pointer": true,
            "w-[30px] md:w-[20px] lg:w-[30px]": image.width === 30,
            "w-[35px] md:w-[20px] lg:w-[35px]": image.width === 35,
          })}
        >
          <Link href={image.link}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
            {image.badge !== undefined && image.badge > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {image.badge}
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};
