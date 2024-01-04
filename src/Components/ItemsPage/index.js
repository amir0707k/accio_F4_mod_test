import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import "./styles.css";
import Cards from "../Common/Cards";
import Loader from "../Common/Loader";
import NewItem from "../Common/Cards/NewItem";
import './styles.css'

function ItemsPage({ setCartItems, cartItems }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [adding, setAdding] = useState(false);

  console.log(items);
  useEffect(() => {
    const response = axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setItems(response.data.products);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <Header />
      <p className="all-items">All Items</p>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="items-list">
          {items.map((item) => {
            return (
              <Cards
                id={item.id}
                item={item}
                setAdding={setAdding}
                setCartItems={setCartItems}
                cartItems={cartItems}
                addOrRemove = {"Add to Cart"}
              />
            );
          })}
        </div>
      )}
      {adding ? <NewItem /> : ""}
    </div>
  );
}

export default ItemsPage;
