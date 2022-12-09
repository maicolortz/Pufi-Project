import React from "react";
import "../css/Instagram.scss";
import ContactForm from "./ContactForm";
import sombrilla from "../images/sombrillas.webp"
import lago from "../images/lagopuff.webp"
import almohada from "../images/almohada.webp"
import playa from "../images/pufi-playa.webp"
import puffi from "../images/pufi-puff.webp"
import puffinap from "../images/pufi-nap.webp"
const Instagram = () => {
  const imagenes_instagram = [
    sombrilla, lago,almohada,playa,puffi,puffinap ];
  const Img_instagram = ({ img }) => {
    return <img src={img} alt="imagen" />;
  };
  return (
    <div className="contenedor_instagram_newsletter">
      <div className="contenedor_instagram">
        <div className="texto_instagram">
          <h3>INSTAGRAM</h3>
          <h1>#ESPUFI</h1>
        </div>
        <div className="imgs_instagram">
          {imagenes_instagram.map((e) => {
            return (
              <div className="imgs_instagram_item">
                <Img_instagram img={e} />
              </div>
            );
          })}
        </div>
      </div>
     
      <ContactForm/>
    </div>
  );
};

export default Instagram;
