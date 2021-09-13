import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderprod.css"
import OFF from "../imgs/Polygon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farFaUser} from "@fortawesome/free-regular-svg-icons";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"



export default class Responsive extends Component {
    render() {
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplaySpeed: 10000,
        pauseOnHover: true,
        arrows: true,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div className="itens-prod-container">
          <h2 className="Title-Prod">Mais Vendidos</h2>
          <div className="linha"></div>
          <Slider {...settings} className="sliderteste">

            <div className="produto">
              <div className="immage1">
                <div className="off">
                <img className="off" src={OFF} alt="off"/>
                </div>
              </div>
              <div className="elements">
                  <div className="text1">Vestido Curto Preto</div>
                  <div className="stars">
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStarHalfAlt}/>
                       <FontAwesomeIcon icon={farFaUser}/>
                  
                  </div>
                  <div className="preço1">de R$157,99</div>
                  <div className="preço2">por R$130,00</div>
                  <div className="preço3">ou tem 9x de  R$14,44</div>
                  <div className="buttonZap">
                      <button className="buyButton">
                        <div className="icon"> 
                        <FontAwesomeIcon icon={faWhatsapp}/>
                        </div>
                        <p className="buyButton">COMPRAR</p>
                      </button>
                  </div>
              </div>      
            </div>
       

            <div className="produto">
              <div className="immage2">
                <div className="off">
                <img className="off" src={OFF} alt="off"/>
                </div>
              </div>
              <div className="elements">
                  <div className="text1">Moletom Predo Masculino</div>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                  </div>
                  <div className="preço1">de R$160,99</div>
                  <div className="preço2">por R$120,00</div>
                  <div className="preço3">ou tem 9x de  R$13,33</div>
                  <div className="buttonZap">
                      <button className="buyButton">
                        <div className="icon"> 
                        <FontAwesomeIcon icon={faWhatsapp}/>
                        </div>
                        <p className="buyButton">COMPRAR</p>
                      </button>
                  </div>
              </div>      
            </div>

            <div className="produto">
              <div className="immage3">
                <div className="off">
                <img className="off" src={OFF} alt="off"/>
                </div>
              </div>
              <div className="elements">
                  <div className="text1"> Chapéu Bucket HAPPY</div>
                  <div className="stars">
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={farFaUser}/>
                  </div>
                  <div className="preço1">de R$60,99</div>
                  <div className="preço2">por R$25,00</div>
                  <div className="preço3">ou tem 9x de  R$2,77</div>
                  <div className="buttonZap">
                      <button className="buyButton">
                        <div className="icon"> 
                        <FontAwesomeIcon icon={faWhatsapp}/>
                        </div>
                        <p className="buyButton">COMPRAR</p>
                      </button>
                  </div>
              </div>      
            </div>

            <div className="produto">
              <div className="immage4">
                <div className="off">
                <img className="off" src={OFF} alt="off"/>
                </div>
              </div>
              <div className="elements">
                  <div className="text1">Jaqueta puffer amarela</div>
                  <div className="stars">
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStar}/>
                  </div>
                  <div className="preço1">de R$250,99</div>
                  <div className="preço2">por R$100,50</div>
                  <div className="preço3">ou tem 9x de  R$11,16</div>
                  <div className="buttonZap">
                      <button className="buyButton">
                        <div className="icon"> 
                        <FontAwesomeIcon icon={faWhatsapp}/>
                        </div>
                        <p className="buyButton">COMPRAR</p>
                      </button>
                  </div>
              </div>      
            </div>

            <div className="produto">
              <div className="immage5">
                <div className="off">
                <img className="off" src={OFF} alt="off"/>
                </div>
              </div>
              <div className="elements">
                  <div className="text1">Calça Jogger Preto </div>
                  <div className="stars">
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStarHalfAlt}/>
                       <FontAwesomeIcon icon={farFaUser}/>
                       <FontAwesomeIcon icon={farFaUser}/>

                  </div>
                  <div className="preço1">de R$140,99</div>
                  <div className="preço2">por R$75,50</div>
                  <div className="preço3">ou tem 9x de  R$8,78</div>
                  <div className="buttonZap">
                      <button className="buyButton">
                        <div className="icon"> 
                        <FontAwesomeIcon icon={faWhatsapp}/>
                        </div>
                        <p className="buyButton">COMPRAR</p>
                      </button>
                  </div>
              </div>      
            </div>

            <div className="produto">
              <div className="immage6">
                <div className="off">
                <img className="off" src={OFF} alt="off"/>
                </div>
              </div>
              <div className="elements">
                  <div className="text1">Camisa manga longa amarela</div>
                  <div className="stars">
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={faStar}/>
                       <FontAwesomeIcon icon={farFaUser}/>
                  </div>
                  <div className="preço1">de R$99,99</div>
                  <div className="preço2">por R$75,50</div>
                  <div className="preço3">ou tem 9x de  R$8,78</div>
                  <div className="buttonZap">
                      <button className="buyButton">
                         <div className="icon"> 
                        <FontAwesomeIcon icon={faWhatsapp}/>
                        </div>
                        <p className="buyButton">COMPRAR</p>
                      </button>
                  </div>
              </div>      
            </div>
          </Slider>
        </div>
      );
    }
  }