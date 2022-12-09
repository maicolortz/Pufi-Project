import React from "react";
import "../css/Instagram.scss";
import ContactForm from "./ContactForm";
const Instagram = () => {
  const imagenes_instagram = [
    "src/images/sombrillas.webp",
    "src/images/lagopuff.webp",
    "src/images/almohada.webp",
    "src/images/pufi-playa.webp",
    "src/images/pufi-puff.webp",
    "src/images/pufi-nap.webp",
  ];
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
      {/* <div className="newsletter_contenedor">
        <h3>NEWSLETTER</h3>
        <h1>SUSCRIBETE</h1>
        <h4>Y enterate de todas las novedades</h4>
        <input placeholder="ingresa tu email" type={"email"} />
      </div> */}
      <ContactForm/>
    </div>
  );
};

export default Instagram;
