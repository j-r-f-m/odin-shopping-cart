import React, { useState } from "react";

function shoppingCart(props) {
  return (
    <div className="shopping--container">
      <h1 className="shopping--header">Your shopping cart</h1>
      {props.productCards.map((card) => {
        if (card.amount > 0) {
          return (
            <div key={card.id} className="card" id={card.id} alt="card">
              <h1>{card.name}</h1>
              <img className="card--image" src={card.img} alt="card" />
              <div className="item--price">Price: {card.price},00 $</div>
              <div className="totalPrice--container">
                <button
                  className="btn--amount"
                  id={card.id}
                  onClick={props.takeFromCart}
                >
                  -
                </button>
                <div className="card--amount">Amount: {card.amount}</div>
                <button
                  className="btn--amount"
                  id={card.id}
                  onClick={props.addToCart}
                >
                  +
                </button>
              </div>
              <div className="card--price">
                Total Price: {card.price * card.amount},00 $
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default shoppingCart;
