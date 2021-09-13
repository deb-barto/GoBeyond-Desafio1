import React from "react";
import './footer.css'

function Footer() {
 
    return (
      <div className="footer">
          <div className="local">
              <div className="titulo-footer"></div>
              <div className="linha"></div>
              <div className="endereço"></div>
              <div className="cidade"></div>
              <div className="email"></div>
              <div className="telefo"></div>
          </div>

          <div className="botões">
                <button className="email-button"></button>
                <button className="faleConosco"></button>
          </div>

          <div className="logos">
              <div className="core">
                  <div className="subtitulo-logo"></div>
                  <div className="corebizLogo" ></div>
              </div>
              <div className="vtex">
              <div className="subtitulo-logo"></div>
                  <div className="vtexLogo" ></div>
              </div>
          </div>
      </div>
    );
  }
  
  export default Footer;