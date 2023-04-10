import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="header--container">
      <h1>Structures</h1>
      <ul id="link--container">
        <li>
          <Link
            className="header--link"
            to="/"
            style={{ textDecoration: "none", color: "black" }}
          >
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="header--link"
            to="/products"
            style={{ textDecoration: "none", color: "black" }}
          >
            Products
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="header--link"
            to="/cart"
            style={{ textDecoration: "none", color: "black" }}
          >
            Shopping Cart
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
