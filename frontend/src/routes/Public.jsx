import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../feature/pages/Home'
import Product from '../feature/pages/Product'
import Register from '../feature/pages/Register'
import Login from '../feature/pages/Login'

const Public = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/products' element={<Product/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
   </Routes>
  )
}

export default Public