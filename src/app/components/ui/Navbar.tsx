import React from 'react'
import { Search } from './Search'
import { NavList } from './NavList'

export const Navbar = () => {
  return (
    <div className="flex items-center flex-col-reverse md:flex-row mt-8 md:mt-0">
        <Search />
        <NavList />
    </div>  
  )
}
