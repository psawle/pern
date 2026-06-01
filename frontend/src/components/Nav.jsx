import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from '../feature/pages/Login'

const Nav = () => {
  return (
   <nav className='flex justify-center items-cente2 gap-1'>
    <NavLink to="/" >Home</NavLink>
    <NavLink to="/products">Products</NavLink>
    <NavLink to="/login">Login</NavLink>
   </nav>
  )
}

export default Nav