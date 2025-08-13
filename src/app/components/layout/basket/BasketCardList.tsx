"use client";

import React, { useEffect, useState } from "react";
import { BasketCard } from "./BasketCard";
import { getCartItems } from "@/app/lib/menuApi";
import { MenuItem } from "@/app/interfaces/MenuItem";
import { supabase } from "@/app/lib/supabase";
import { BasketResults } from "./BasketResults";

export type BasketItem = {
  id: number;
  menu_item_id: number;
  user_id: number;
  menu_item: MenuItem;
};

export const BasketCardList = () => {
  const [menuItems, setMenuItems] = useState<BasketItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Функция получения данных
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getCartItems();
      setMenuItems(data || []);
      setLoading(false);
    };
    fetchData();

    // Подписка на realtime
    const channel = supabase
      .channel("realtime:cart_items:basket")
      .on(
        "postgres_changes",
        {
          event: "*", // можно "INSERT" | "DELETE" | "UPDATE"
          schema: "public",
          table: "cart_items",
        },
        () => {
          fetchData();
        }
      )
      .subscribe();

    // Отписка при размонтировании
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (loading) {
    return <div className="text-center text-gray-500">Загрузка корзины...</div>;
  }

  if (menuItems.length === 0) {
    return <div className="text-center text-gray-500">🛒 Корзина пуста</div>;
  }

  return (
    <div className="flex flex-col gap-10 w-[700px]">
      {menuItems.map((item) => {
        const { menu_item } = item;
        return <BasketCard menuItem={menu_item} key={item.id} />;
      })}
      <BasketResults items={menuItems} />
    </div>
  );
};
