import React from "react";
import playa_portada from "../images/playa-portada.webp"
import almohada_fondo from "../images/almohada.webp"
import bolso_puff from "../images/bolso_puff.webp"
import lagopuff_fondo from "../images/lagopuff.webp"
import almohada_puff from "../images/puf-almoha-.webp"
/* import bolso_puff from "../images/puff-bolso.webp" */
import cart_puff from "../images/puffi-cart.webp"
import pufi_puff from "../images/pufi-puff.webp"
import pufi_puff_largo from "../images/pufi-puff_.webp"
import sombrillas from "../images/sombrillas.webp"
import puff_rain from "../images/pufi_rain.webp"


const Products = () => {
  return (
    <div className="productos_contenedor">
      <div className="productos_item">
        <div className="productos_item_detalle">
          <img src={sombrillas}></img>
          <p>Descripcion Sombrillas</p>
          <h2>{">"} VER MAS</h2>
        </div>
        <div className="producto_item_img">

        </div>
      </div>
      <div className="productos_item">
        <div className="productos_item_detalle">
          <img></img>
          <p></p>
          <h2></h2>
        </div>
        <div className="producto_item_img">

        </div>
      </div>
      <div className="productos_item">
        <div className="productos_item_detalle">
          <img></img>
          <p></p>
          <h2></h2>
        </div>
        <div className="producto_item_img">

        </div>
      </div>
      <div className="productos_item">
        <div className="productos_item_detalle">
          <img></img>
          <p></p>
          <h2></h2>
        </div>
        <div className="producto_item_img">

        </div>
      </div>
    </div>
  );
};

export default Products;
