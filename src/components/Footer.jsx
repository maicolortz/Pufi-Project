import React from "react";
import "../css/Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_info">
        <div>
          <h1>Pufi </h1>
          <h6>®</h6>
        </div>
        <div>
          <ol>
            <li>PUFI RAIN</li>
            <li>PUFI PUFF</li>
            <li>PUFI CART</li>
            <li>PUFI NAP</li>
          </ol>
        </div>
        <div>
          <ol>
            <li>CONTACTO</li>
            <li>AYUDA</li>
            <li>COMO COMPRAR</li>
            <li>TERMINOS Y CONDICIONES</li>
          </ol>
        </div>
        <div  className="footer_info_compra_segura">
          <div>
            <h4>COMPRA 100% SEGURA</h4>
          </div>
          <div>
            <img src="src/images/iconos/qr.webp" alt="" />
            <img src="src/images/iconos/seguridad.svg" alt="" />

            <h4>COMPRA CON <br/>LA GARANTIA DE<br/> PUFI</h4>
          
          </div>
        </div>
        <div className="footer_info_redes">
        
          <h4>SEGUINOS EN </h4>
          <img src="src/images/iconos/facebook_logo.svg" alt="" />
          <img src="src/images/iconos/instagram.svg" alt="" />
          <img src="src/images/iconos/twitter_logo.svg" alt="" />
      
        </div>
      </div>
      <div className="footer_derechos">
        <h4>PUFI Copright 2017 . Todos los derechos reservados</h4>
        <img src="src/images/iconos/brandlive.webp"></img>
      </div>
    </div>
  );
};

export default Footer;
