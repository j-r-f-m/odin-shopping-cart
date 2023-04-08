import React, { useState } from "react";
import uniqid from "uniqid";
import imgAmy from "../images/amy.png";
import imgBender from "../images/bender.png";
import imgBrannigan from "../images/brannigan.png";
import imgFry from "../images/fry.png";
import imgLeela from "../images/leela.png";
import imgLuigi from "../images/luigi.png";
import imgMario from "../images/mario.png";
import imgMom from "../images/mom.png";
import imgNibbler from "../images/nibbler.png";

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
            <button>Add to shopping cart</button>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
