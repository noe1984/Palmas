import React from 'react'
import './styles/Contacto.css'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'


export const Contacto = () => {
    return (
        <footer id="footer">
            <div className="container-fluid"  >
                
                <div id='footer-contact' className="row">
                    <div className="col">
                        <p className='font-weight-bold '>Contáctanos</p>
                        <small>Tel: 664 524 30 83</small><br />
                        <small>internet.palmas1@gmail.com</small>
                    </div>
                </div>
                
                <div id='footer-map' className="row">
                    <div className="col">
                        <p className='font-weight-bold'>Ubicación</p>
                        <iframe className='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3363.1629083955295!2d-116.89510548487056!3d32.54849720290926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9473517346a95%3A0xb118c257df981135!2sQuer%C3%A9taro%20639%2C%20Las%20Torres%2C%2022470%20Tijuana%2C%20B.C.!5e0!3m2!1ses!2smx!4v1613533856149!5m2!1ses!2smx" width="500" height="300" frameBorder="0"allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                </div>

                <div id='footer-network' className="row">
                    <div>
                        <p className='font-weight-bold'>Síguenos</p><br />
                        <img className='mb-4' src={facebook} alt=""/>
                        <br/>
                        <img className='mb-4' src={twitter} alt=""/>
                        <br/>
                        <img src={instagram} alt=""/>
                    </div>
                </div>
                
            </div>
        </footer>
    )
}
