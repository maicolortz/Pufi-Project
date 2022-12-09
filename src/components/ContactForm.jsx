import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("myyvrbna");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form className="newsletter_contenedor" onSubmit={handleSubmit}>
      <h3>NEWSLETTER</h3>
      <h1>SUSCRIBETE</h1>
      <h4>Y enterate de todas las novedades</h4>
      <div className="contenedor_input">
        <input
          placeholder="ingresa tu email"
          id="email"
          type="email"
          name="email"
          required
        ></input>

        <button type="submit" disabled={state.submitting}>
          {" > "}
          
        </button>
      </div>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
    </form>
  );
}
export default ContactForm;
