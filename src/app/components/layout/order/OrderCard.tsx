import { supabase } from '@/app/lib/supabase'
import React from 'react'

export const OrderCard = async () => {

  const {data: orderlist, error} = await supabase.from("cart_items").select("*, menu_item: menu_item_id(name, price_usd)");

  if (error) console.log(error);
  console.log(orderlist)

  return (
    <div className='w-[700px] rounded-[37px] bg-secondary-bg py-4 px-8 text-main-text'>
        <h1 className='text-center text-main-text text-3xl'>Your Order</h1>
        <ul>
        {orderlist?.map((order, index) => {
            const {menu_item} = order
            return (
                <li key={index} className='flex items-center justify-between gap-2'>
                    <p>{menu_item.name}</p>
                    <div className='border-1 border-main-text/30 flex-1'></div>
                    <p>${menu_item.price_usd}</p>
                </li>
            )
        })}
        </ul>
        <p>Result: {orderlist?.reduce((acc, prev) => acc + prev.menu_item.price_usd, 0).toFixed(2)}</p>
    </div>
  )
}
