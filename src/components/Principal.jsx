import React from "react";
import Navbar from "./Navbar";
import portada from "../images/playa-portada.webp";
import Products from "./Products";
import Instagram from "./Instagram";
import Footer from "./Footer";
Products;
const Principal = () => {
  return (
    <div>
      <div className="Portada">
        <Navbar />
        <section className="Portada_contenido">
          <div className="Portada_msj">
            <h1>
              ESTÁR CÓMODO <br /> NUNCA FUE TAN FÁCIL.
            </h1>
          </div>
          <div className="Portada_button_shop">
            <button>SHOP</button>
          </div>
          <div className="Portada_radio">
            <input type={"radio"} />
            <input type={"radio"} />
            <input type={"radio"} />
          </div>
        </section>
      </div>
      <Products />
      <Instagram/>
      <Footer/>
    </div>
  );
};

export default Principal;
