import { BasketCard } from '@/app/components/layout/basket/BasketCard';
import { BasketCardList } from '@/app/components/layout/basket/BasketCardList';
import React from 'react'

export default async function Basket() {
    const data = await fetch("https://688b08f42a52cabb9f4fc059.mockapi.io/menu");
    const res = await data.json();
  return (
    <div>
        <BasketCardList />
    </div>
  )
}
