import React from "react";
import "../css/Footer.scss";
import facebook from "../images/iconos/facebook_logo.svg" 
import instagram from"../images/iconos/instagram.svg" 
import twitter from"../images/iconos/twitter_logo.svg" 
import brandlive from "../images/iconos/brandlive.webp"
import qr from "../images/iconos/qr.webp" 
import seguridad from "../images/iconos/seguridad.svg" 
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
            <img src={qr}alt="" />
            <img src={seguridad} alt="" />

            <h4>COMPRA CON <br/>LA GARANTIA DE<br/> PUFI</h4>
          
          </div>
        </div>
        <div className="footer_info_redes">
        
          <h4>SEGUINOS EN </h4>
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
      
        </div>
      </div>
      <div className="footer_derechos">
        <h4>PUFI Copright 2017 . Todos los derechos reservados</h4>
        <img src={brandlive}></img>
      </div>
    </div>
  );
};

export default Footer;
