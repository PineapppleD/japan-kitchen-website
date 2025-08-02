import React from 'react';
import Breadcrumb from '../../components/ui/Breadcrumb';

type MenuItem = {
  id: string;
  name: string;
  description: string;
  kcal: number;
  weight_grams: number;
  price_usd: number;
  image_url: string;
  image: string;
  source: string;
}

export default async function Cabinet() {

  const data = await fetch("https://688b08f42a52cabb9f4fc059.mockapi.io/menu");
  const menu: MenuItem[] = await data.json();

  return (
    <div>
      <Breadcrumb />
      
      <ul>
        {
          menu.map((item, index) => {
            return (
              <li key={index}>{item.name}</li>
            )
          })
        }
      </ul>
    </div>
    
  )
}
