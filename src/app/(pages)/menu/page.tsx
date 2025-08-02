import { FilterList } from '@/app/components/common/FilterList';
import { Slider } from '@/app/components/layout/menu/Slider'
import React from 'react'
import ClientLayout from './ClientLayout';

export default async function Menu() {

  const data = await fetch('https://688b08f42a52cabb9f4fc059.mockapi.io/menu');
  const menuItems = await data.json();

  return (
    <ClientLayout>
      <FilterList className='mb-20'/>
      <Slider menuItems={menuItems}/>
    </ClientLayout>
  )
}
