import { MenuItem } from '@/app/interfaces/MenuItem'
import React from 'react'
import { BasketItem } from './BasketCardList';

type BasketResultsProps = {
    items: BasketItem[];
}

export const BasketResults = ({items}: BasketResultsProps) => {

  const check = items.reduce((acc, curr) => curr.menu_item.price_usd + acc, 0);
  const calories = items.reduce((acc, curr) => curr.menu_item.kcal + acc, 0);
  const grams = items.reduce((acc, curr) => curr.menu_item.weight_grams + acc, 0);

  return (
    <div className='w-full flex justify-between text-main-text text-3xl font-bold'>
        <span>Result: ${check}</span>
        <span className='inline-block w-1 border-r-2  border-main-text'></span>
        <span>Calories: {calories}</span>
        <span className='inline-block w-1 border-r-2  border-main-text'></span>
        <span>Grams: {grams}</span>
    </div>
  )
}
