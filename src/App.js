import "./App.css";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Cart from "./Cart/Cart";


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    // Side Effects
    fetch("https://65571300bd4bcef8b611ff00.mockapi.io/product/cart")
      .then((data) => data.json())
      .then((res) => {

        setProducts(res);
      });
  }, []);

  const handleAddtoCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {

      const updatedCart = cart.map((item) =>
        item.id === existingItem.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);

    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    setTotal(total + product.price);
  };


  const handleRemoveItem = (item) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setTotal(total - item.price * item.quantity);
    setCart(newCart);
  };

  const handleIncreaseQuantity = (price) => {
    setTotal(total + price);
  };

  const handleDecreaseQuantity = (price) => {
    setTotal(total - price);
  };
  const isInCart = (pro) => cart.some(item => item.id === pro.id)



  return (
    <>
      <BrowserRouter>
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={
            <Home
              products={products}
              handleAddtoCart={handleAddtoCart}
              handleRemoveItem={handleRemoveItem}
              isInCart={isInCart} />}
          />
          <Route path="/cart" element={
            <Cart handleIncreaseQuantity={handleIncreaseQuantity}
              handleDecreaseQuantity={handleDecreaseQuantity}
              handleRemoveItem={handleRemoveItem}
              total={total}
              cart={cart} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;