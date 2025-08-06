import { BasketCardList } from '@/app/components/layout/basket/BasketCardList';
import { OrderForm } from '@/app/components/layout/basket/OrderForm';
import React from 'react'

export default async function Basket() {
  return (
    <div className='w-full flex justify-between items-start'>
        <BasketCardList />
        <OrderForm />
    </div>
  )
}
