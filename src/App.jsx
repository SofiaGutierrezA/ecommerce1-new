import { useState } from 'react'
import './App.css'
import { Search, ShoppingCart } from "lucide-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";


function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);

  function addToCart(product) {
    setCart([...cart, product]); //Agrega el producto al carrito, crea un array
  }

  function removeFromCart(indexToRemove) {
    setCart(cart.filter((_, index) => index !== indexToRemove)); //Borra el producto del carrito filtrando por id, si el id del item es diferente al id que se pasa como argumento, se mantiene en el carrito, si es igual, se elimina.
  }

  return (

    <BrowserRouter>
      <Navbar cart={cart} />
      <Routes>
        <Route
          path="/"
          element={<Home addToCart={addToCart} />}
          />
          <Route
          path="/cart"
          element={
          <Cart 
            cart={cart} 
            removeFromCart={removeFromCart} />}
          />
          <Route 
          path="/men"
          element={<Men addToCart={addToCart} />}
          />
          <Route 
          path="/women"
          element={<Women addToCart={addToCart} />}
          />
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
