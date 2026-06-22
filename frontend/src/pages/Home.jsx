import React, { useState } from 'react'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Offers from '../components/Offers'
import Footer from '../components/Footer'
import Cart from '../components/Cart'

const Home = ({
  cart,
  setCart,
  addToCart,
  wishlist,
  addToWishlist,
  darkMode,
setDarkMode
}) => {

  const [isOpen, setIsOpen] = useState(false)

  const [search, setSearch] = useState("")

  return (

    <div>

      <Navbar
        setIsOpen={setIsOpen}
        cart={cart}
        search={search}
        setSearch={setSearch}
        wishlist={wishlist}
      />

      <Hero />

      <Categories />

      <Products
        addToCart={addToCart}
        search={search}
        addToWishlist={addToWishlist}
      />

      <Offers />

      <Footer />

      <Cart
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        cart={cart}
        setCart={setCart}
      />

    </div>

  )
}

export default Home