import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import "./styles.css";
import Cards from "../Common/Cards";
function Cart({ setCartItems, cartItems }) {
  function handleClick(){
    if (cartItems.length>0) {
      setCartItems([])
      alert("Successfully Checked out")
    }
  }
  return (
    <div>
      <Header />
      <p className="all-items">My cart</p>

      <div className="cart-container items-list">
        {cartItems.map((item) => {
          return (
            <Cards
              id={item.id}
              key={item.id}
              item={item}
              addOrRemove={"Remove from Cart"}
              setCartItems={setCartItems}
            />
          );
        })}

        <button className="checkout" onClick={handleClick}>Continue to Checkout </button>
      </div>
    </div>
  );
}

export default Cart;
