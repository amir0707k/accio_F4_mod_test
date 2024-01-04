import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemsPage from "./Components/ItemsPage";
import Cart from "./Components/CartPage";
import { useEffect, useState } from "react";
import BackToTop from "./Components/Common/BackToTop";


function App() {
  const cartItemsString = localStorage.getItem("cart");
  const [cartItems, setCartItems] = useState(cartItemsString ? JSON.parse(cartItemsString) : [])
  useEffect(() => {
    console.log(cartItems)
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <div>
      <BackToTop />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ItemsPage setCartItems={setCartItems} cartItems={cartItems} />
            }
          />
          <Route
            path="/cart"
            element={<Cart setCartItems={setCartItems} cartItems={cartItems} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
