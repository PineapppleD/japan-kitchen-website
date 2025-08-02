import React from 'react'
import Breadcrumb from '../components/ui/Breadcrumb';


export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Breadcrumb />
        {children}
    </>
  );
}

