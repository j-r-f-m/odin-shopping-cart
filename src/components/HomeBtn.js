import React from "react";
import { Link } from "react-router-dom";
function HomeBtn() {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumyeirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed divoluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        Ste clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
        sitamet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat,sed diam voluptua. At vero eos et accusam et justo duo dolores et
        earebum. Stet clita kasd gubergren, no sea takimata sanctus est
        Loremipsum dolor sit amet.
      </p>
      <Link to="/products">
        <button id="btn--home">Products</button>
      </Link>
    </>
  );
}

export default HomeBtn;
