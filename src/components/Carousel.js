import React from 'react'

import youtuImage from '../images/youtube.jpg'
import ineImage from '../images/cita.jpg'
import whatsImage from '../images/whats.jpg'
import converterImage from '../images/converter.jpg'
import curpImage from '../images/curp.jpg'
import gmailImage from '../images/gmail.jpg'
import educacion from '../images/educacion.png'
import googleIcon from '../images/googleIcon.png'


export const Carousel = () => {
    return (
        <section id="carousel"  className='mb-3'>
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
                    <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                    <img className='carousel__container-item__img' src={googleIcon} alt=""/>
                    </a>
                </div>
                <div className="carousel__container-item">
                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                    <img className='carousel__container-item__img' src={youtuImage} alt=""/>
                    </a>
                </div>
            </div>
        </section>
    )
}
