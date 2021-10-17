import React from 'react'
import './styles/Contacto.css'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'
import { Map } from '../components/Map'


export const Contacto = () => {
    return (
        <footer id="Contacto">
            <div className="container-fluid"  >
                
                <section className="row mb-5">
                    <div className="col">
                        <p className='font-weight-bold'>Contáctanos</p>
                        <small>Tel: 664 524 30 83</small><br />
                        <small>internet.palmas1@gmail.com</small>
                    </div>
                </section>
                
                <div id='Contacto-map' className="row mb-5">
                    <Map />
                </div>
 
                
                <section className="row">
                    <div className="col">
                        <p className='font-weight-bold'>Síguenos</p><br />

                        <div id='Contacto-network_icons'>
                            <img className='mr-3'  src={facebook} alt=""/>
                            <br/>
                            <img className='mr-3' src={twitter} alt=""/>
                            <br/>
                            <img src={instagram} alt=""/>
                        </div>
                    </div>
                </section>
                
            </div>
        </footer>
    )
}
