// "use client";

import { MenuProvider } from '@/app/context/MenuContext'
import React, { ReactNode } from 'react'

export default function ClientLayout({children}: {children: ReactNode}) {
  return (
    <MenuProvider>
        {children}
    </MenuProvider>
  )
}
