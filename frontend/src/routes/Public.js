import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../feature/pages/Home'
import Product from '../feature/pages/Product'

const Public = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/products' element={<Product/>} />
   </Routes>
  )
}

export default Public