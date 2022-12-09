import React from "react";

import bolso_puff from "../images/puff-bolso.webp";
import almohada_puff from "../images/puf-almoha-.webp";
import pufi_puff_largo from "../images/pufi-puff_.webp";
import puff_rain from "../images/pufi_rain.webp";

import "../css/Products.scss";
const Products = () => {
  function product_Item({img, titulo}) {
   return( <div className="productos_item">
      <div className="producto_item_img"></div>
      <div className="productos_item_detalle">
        <img src={img}></img>
        <h1>{titulo}</h1>
        <p>
          Descripcion del producto, <br /> este es un texto simulado
        </p>
        <h4>{">"} VER MAS</h4>
      </div>
    </div>)
  };
  return (
    <div className="productos_contenedor">
      
      {product_Item({img:puff_rain, titulo:"Pufi RAIN"})}
      {product_Item({img:pufi_puff_largo , titulo:"Pufi PUFF"})}
      {product_Item({img:bolso_puff , titulo:"Pufi CART"})}
      {product_Item({img:almohada_puff , titulo:"Pufi NAP"})}
      
    </div>
  );
};

export default Products;
