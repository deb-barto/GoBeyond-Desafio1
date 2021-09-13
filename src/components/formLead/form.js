import React from "react";
import './form.css'
function Form() {
 
  return (
    <div className="Form">
      <div className="title">Participe de nossas news com promoções e novivdades!</div>
      <div className="inputs">
        <form >
          <input
            type="text"
            name="firstName"
            placeholder=" Digite seu nome" 
            className="name"
          />
          <input
            type="text"
            name="email"
            placeholder=" Digite seu email"
            className="email"
          />
        </form>
        <button className="button"> Eu quero!</button>
      </div>
    </div>
  );
}

export default Form;