import React from "react";
import puff_puff from "../images/iconos/puff_nap.svg";
import puff_rain from "../images/iconos/umbrella.svg";
import puff_cart from "../images/iconos/bolso.svg";
import puff_nap from "../images/iconos/puff.svg";
const Navbar = () => {
  return (
    <div className="navBar">
      {" "}
      <div className="navBar_item">
        <h1>Pufi </h1> <h6>®</h6>
      </div>
      <div className="navBar_item">
          <div className="navBar_item_seccion">
            <img src={puff_puff} alt="icono" />
            <h1>PUFI PUFF</h1>
          </div>
          <div className="navBar_item_seccion">
            <img src={puff_rain} alt="icono" />
            <h1>PUFI RAIN</h1>
          </div>
          <div className="navBar_item_seccion">
            <img src={puff_cart} alt="icono" />
            <h1>PUFI CART</h1>
          </div>
          <div className="navBar_item_seccion">
            <img src={puff_nap} alt="icono" />
            <h1>PUFI NAP</h1>
          </div>
      </div>
      <div className="navBar_item">
            <h5>MI CUENTA </h5>
            <h5>MI COMPRA </h5> 
      </div>
    </div>
  );
};

export default Navbar;
