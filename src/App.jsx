import React from 'react'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Cart from './Pages/Cart'
import Wishlist from './Pages/Wishlist'

function App() {


  return (
    <>
    <Header/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/cart' element={<Cart/>} />
  <Route path='/wishlist' element={<Wishlist/>} />
</Routes>
    <Footer/>
      
    </>
  )
}

export default App
