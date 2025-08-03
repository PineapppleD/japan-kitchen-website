import React from 'react'
import Breadcrumb from '../components/ui/Breadcrumb';


export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full xl:px-[105px] px-[20px]">
        <Breadcrumb />
        {children}
    </div>
  );
}

