import React, { useState } from 'react'
import "./styles.css"
import NewItem from './NewItem'
function Cards({ item, setAdding, setCartItems, cartItems, addOrRemove }) {
  // console.log(item);
  const [timeoutId, setTimeoutId] = useState(null);
  // console.log(addOrRemove)
  function handleAdd(e) {

    if (e.target.innerText === "Remove from Cart") {
      setCartItems((prevCartItems) => {
        return prevCartItems.filter((current) => current.id !== item.id);
      });
    } else {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      setAdding(true);
      const newTimeoutId = setTimeout(() => {
        setAdding(false);
      }, 1500);

      setTimeoutId(newTimeoutId);
      setCartItems([...cartItems, item]);
    }
    }
    

  return (
    <div className="card">
      <img src={item.images[0]} alt={item.description} />
      <div className="prices">
        <p>Title : {item.title}</p>
        <p>Price : ${item.price}</p>
      </div>

      <button className="add-button" onClick={handleAdd}>
        {addOrRemove}
      </button>
    </div>
  );
}

export default Cards