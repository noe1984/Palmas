import React from 'react'

import youtubeImage from '../images/youtube.jpg'
import whatsImage from '../images/whats.jpg'
import converterImage from '../images/converter.jpg'
import curpImage from '../images/curp.jpg'
import educacion from '../images/educacion.png'
import googleIcon from '../images/googleIcon.png'
import './styles/Carousel.css'


export const Carousel = () => {  
    return (
        <section className='carousel'>  
            <div className="carousel__container">
                <div className="carousel__container-item">
                    <a href="https://www.ilovepdf.com/es/jpg_a_pdf" target="_blank" rel="noreferrer">
                    <img className='carousel__container-item__img' src={converterImage} alt=""/>
                    </a>
                </div>
                <div className="carousel__container-item">
                    <a href="https://www.gob.mx/curp/" target="_blank" rel="noreferrer">
                    <img className='carousel__container-item__img' src={curpImage} alt=""/>
                    </a>
                </div>

                <div className="carousel__container-item">
                    <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
                    <img className='carousel__container-item__img' src={whatsImage} alt=""/>
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
                    <img className='carousel__container-item__img' src={youtubeImage} alt=""/>
                    </a>
                </div>

            </div>
        </section>
    )
}
