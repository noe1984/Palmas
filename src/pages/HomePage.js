import React from 'react'
import './styles/HomePage.css'



import Imss from '../components/Imss'
import Sat from '../components/Sat'
import Otros from '../components/Otros' 

import venta from '../images/venta.png'
import programs from '../images/programs.jpg'
import format from '../images/format.jpg'

import youtuImage from '../images/youtube.jpg'
import ineImage from '../images/cita.jpg'
import whatsImage from '../images/whats.jpg'
import converterImage from '../images/converter.jpg'
import curpImage from '../images/curp.jpg'
import gmailImage from '../images/gmail.jpg'
import educacion from '../images/educacion.png'

import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'


function HomePage() {
    return (
        <div className='HomPage__container'>

            <header id="navbarX">
                <h1>Internet Las Palmas</h1>
            </header>
            
            <main id='tramites' >
                <div className="row w-100 offset-2 offset-md-0 offset-lg-2 mr-lg-2 mr-xl-3">
                    <div className="col-12 col-md-4">
                        <Imss />
                    </div>
                    
                    <div className="col-12 col-md-4">
                        <Sat />
                    </div>
                        
                    <div className="col-12 col-md-4">
                        <Otros />
                    </div>
                </div>
            </main>
                
            {/* <section id="carousel"  className='mb-3'>
                    <div className="carousel__container">

                        <div className="carousel__container-item">
                            <a href="https://app-inter.ife.org.mx/siac2011/citas_initCapturaCitas.siac" target="_blank" rel="noreferrer">
                            <img className='carousel__container-item__img' src={ineImage} alt=""/>
                            </a>
                        </div>
                        <div className="carousel__container-item">
                            <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
                            <img className='carousel__container-item__img' src={whatsImage} alt=""/>
                            </a>
                        </div>
                        <div className="carousel__container-item">
                            <a href="https://www.google.com/intl/es-419/gmail/about/" target="_blank" rel="noreferrer">
                            <img className='carousel__container-item__img' src={gmailImage} alt=""/>
                            </a>
                        </div>


                        <div className="carousel__container-item">
                            <a href="https://www.gob.mx/curp/" target="_blank" rel="noreferrer">
                            <img className='carousel__container-item__img' src={curpImage} alt=""/>
                            </a>
                        </div>
                        
                        <div className="carousel__container-item">
                            <a href="https://www.ilovepdf.com/es/jpg_a_pdf" target="_blank" rel="noreferrer">
                            <img className='carousel__container-item__img' src={converterImage} alt=""/>
                            </a>
                        </div>

                        <div className="carousel__container-item">
                            <a href="http://www.educacionbc.edu.mx/" target="_blank" rel="noreferrer">
                            <img className='carousel__container-item__img' src={educacion} alt=""/>
                            </a>
                        </div>
                        <div className="carousel__container-item">
                            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                            <img className='carousel__container-item__img' src={youtuImage} alt=""/>
                            </a>
                        </div>
                    </div>
            </section> */}


            <section id='servicios' >
                <h1 >Servicio técnico</h1>
                <div className="row">
                    <div class="card col-12 col-md-4">
                        <img class="card-img-top" src={format} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title font-weight-bold">Formateo de pc's</h5>
                            <p class="card-text">
                                Formateo de pc's de escritorio y laptops.
                            </p>
                        </div>
                    </div>
                    <div class="card col-12 col-md-4">
                        <img class="card-img-top" src={venta} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title font-weight-bold">Venta de pc's de escritorio</h5>
                            <p class="card-text">
                                Venta de pc's de escritorio completas, también vendemos monitores, teclados y mouse por separado.
                            </p>
                            
                        </div>
                    </div>
                    <div class="card col-12 col-md-4">
                        <img class="card-img-top" src={programs} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title font-weight-bold">Instalación de programas</h5>
                            <p class="card-text">Instalación de programas como Office, programas de diseño, drivers etc.</p>
                        </div>
                    </div>
                </div>
            </section>
            
                <footer id="footer">
                    <div className="container-fluid"  >
                        <div className="row">
                            <div className="col">
                                <p className='font-weight-bold '>Contáctanos</p>
                                <small >Móvil: 664 584 55 89</small><br />
                                <small>Tel: 664 448 23 95</small><br />
                                <small>email: internet.palmas1@gmail.com</small>
                            </div>
                            <div className="col">
                                <p className='font-weight-bold'>Ubicación</p>
                                <iframe className='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3363.1629083955295!2d-116.89510548487056!3d32.54849720290926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9473517346a95%3A0xb118c257df981135!2sQuer%C3%A9taro%20639%2C%20Las%20Torres%2C%2022470%20Tijuana%2C%20B.C.!5e0!3m2!1ses!2smx!4v1613533856149!5m2!1ses!2smx" width="230" height="180" frameborder="0"allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </div>
                            <div className="col">
                                <p className='font-weight-bold'>Síguenos</p><br />
                                <img className='mb-2' src={facebook} alt=""/>
                                <small> Facebook</small><br/>
                                <img className='mb-2' src={twitter} alt=""/>
                                <small className='mr-3'> Twitter</small><br/>
                                <img className='mb-2' src={instagram} alt=""/>
                                <small> Instagram</small><br/>
                            </div>
                        </div>
                    </div>
                </footer>
            
        </div>
    )
}

export default HomePage