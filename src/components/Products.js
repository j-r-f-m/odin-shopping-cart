import React, { useState } from "react";

function Products(props) {
  return (
    <div id="product--container">
      {props.productCards.map((card) => {
        // className={`${}`}
        return (
          <div key={card.id} className="card" id={card.id} alt="card">
            <h1>{card.name}</h1>
            <img className="card--image" src={card.img} alt="card" />
            <p className="card--description">{card.description}</p>
            <div className="card--price">{card.price},00 $</div>
            <button id={card.id} onClick={props.addToCart}>
              Add to shopping cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
