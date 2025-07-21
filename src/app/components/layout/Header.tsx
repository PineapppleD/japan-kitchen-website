import React from 'react'
import { Navbar } from '../ui/Navbar';
import { Logo } from '../ui/Logo';
import { HeaderActions } from '../ui/HeaderActions';

export const Header = () => {
  return (
    <header
        className="w-full xl:px-[105px] px-[20px] md:p-[4px] flex flex-col md:flex-row justify-between items-center border border-main-text/15 py-2">
            <Logo />
            <Navbar />
            <HeaderActions />
        </header>
  )
}
