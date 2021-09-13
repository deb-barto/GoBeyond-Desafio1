import React from "react";
import './footer.css'
import LogoCore from '../imgs/corebiz.png'
import LogoVtex from '../imgs/Vtex.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faHeadset} from '@fortawesome/free-solid-svg-icons'


function Footer() {
 
    return (
      <div className="footer">
          <div className="local">
              <div className="titulo-footer">Localização</div>
              <div className="linha"></div>
              <div className="endereço">Avenida Andrômeda, 2000, Bloco 6 e B </div>
              <div className="cidade">Alphavile SP</div>
              <div className="emailfooter">brasil@corebiz.ag</div>
              <div className="telefo">+55 11 3090 1039</div>
          </div>

          <div className="botoesFooter">
                <button className=" email-button"> <FontAwesomeIcon icon={faEnvelopeSquare}/>  Entre em Contato</button>
                <button className=" faleConosco"> <FontAwesomeIcon icon={faHeadset}/> Fale conosco</button>
          </div>

          <div className="logos">
              <div className="core">
                  <div className="subtitulo-logo">Created By</div>
                  <div className="corebizLogo" >  <img src={LogoCore} alt="logo"/></div>
              </div>
              <div className="vtex">
              <div className="subtitulo-logo">Powered By</div>
                  <div className="vtexLogo">  <img src={LogoVtex} alt="logo"/></div>
              </div>
          </div>
      </div>
    );
  }
  
  export default Footer;