import React from "react";
import Orders from "./components/Orders";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from "./components/Footer";
import BestSellers from "./components/BestSellers";
import WhyChooseUs from "./components/WhyChooseUs";
import Admin from "./components/Admin";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Checkout from "./components/Checkout";
import OrderSuccess from "./components/OrderSuccess";
import { useLocation } from "react-router-dom";
import Wishlist from "./components/Wishlist";
import Contact from "./components/Contact";
const App = () => {
  // Cart State
 const [cart, setCart] = React.useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});
  // Search State
  const [search, setSearch] = React.useState("")
  // Dark Mode
  const [darkMode, setDarkMode] = React.useState(false)
React.useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

  // Add To Cart
  const addToCart = (product) => {
   
    const existingProduct = cart.find(
      (item) => item.id === product.id
    )

    if (existingProduct) {

      const updatedCart = cart.map((item) =>

        item.id === product.id

          ? {
              ...item,
              quantity: item.quantity + 1
            }

          : item
      )

      setCart(updatedCart)

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ])
    }

    alert("Added To Cart ")
  }
const decreaseQuantity = (id) => {

  const updatedCart = cart
    .map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity - 1
          }
        : item
    )
    .filter((item) => item.quantity > 0);

  setCart(updatedCart);
};
  // Remove From Cart
  const removeFromCart = (indexToRemove) => {

    const updatedCart = cart.filter(
      (_, index) => index !== indexToRemove
    )

    setCart(updatedCart)

    alert("Removed From Cart")
  }

  // Wishlist
  // Wishlist
 const [wishlist, setWishlist] = React.useState([]);
const addToWishlist = (product) => {

  const exists = wishlist.find(
    (item) => item.id === product.id
  );

  if (exists) {
    alert("Already In Wishlist ❤️");
    return;
  }

  setWishlist([...wishlist, product]);

  alert("Added To Wishlist ❤️");
};
const removeFromWishlist = (id) => {

  const updatedWishlist = wishlist.filter(
    (item) => item.id !== id
  );

  setWishlist(updatedWishlist);

  alert("Removed From Wishlist 💔");
};

  return (

    <BrowserRouter>

      <div
        className={
          darkMode
            ? "dark bg-gray-900 text-white min-h-screen"
            : "bg-white text-black min-h-screen"
        }
      >

        {/* Navbar */}
     <Navbar
  cart={cart}
  wishlist={wishlist}
  darkMode={darkMode}
  setDarkMode={setDarkMode}
  search={search}
  setSearch={setSearch}
/>
        {/* Hero */}
        

        <Routes>

          {/* Products */}
          <Route
  path="/"
  element={
    <>
      <Hero darkMode={darkMode} />
      <Products
        addToCart={addToCart}
        search={search}
        addToWishlist={addToWishlist}
      />
        <BestSellers />

  <WhyChooseUs />

  <Footer />
    </>
  }
/>

          {/* Cart */}
          <Route
  path="/cart"
  element={
    <Cart
      cart={cart}
      removeFromCart={removeFromCart}
      addToCart={addToCart}
      decreaseQuantity={decreaseQuantity}
    />
  }
/>

          {/* Checkout */}
          <Route
            path="/checkout"
            element={
              <Checkout cart={cart} />
            }
          />

          {/* Success */}
          <Route
            path="/success"
            element={<OrderSuccess />}
          />

          {/* Login */}
          <Route
            path="/login"
            element={<Login />}
          />

          {/* Signup */}
          <Route
            path="/signup"
            element={<Signup />}
          />
<Route
  path="/orders"
  element={<Orders />}
/>
<Route
  path="/profile"
  element={<Profile />}
/>
<Route
  path="/admin"
  element={
    localStorage.getItem("role") === "ADMIN"
      ? <Admin />
      : <Login />
  }
/>
<Route
  path="/wishlist"
  element={
    <Wishlist
      wishlist={wishlist}
      removeFromWishlist={removeFromWishlist}
    />
  }
/>
<Route
  path="/contact"
  element={<Contact />}
/>

        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App