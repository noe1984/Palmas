import React from 'react'
import './styles/HomePage.css'
import 'bootstrap/dist/css/bootstrap.css';

import Imss from '../components/Imss'
import Sat from '../components/Sat'
import Otros from '../components/Otros'

import youtuImage from '../images/youtube.jpg'
import whatsImage from '../images/whats.jpg'
import converterImage from '../images/converter.jpg'
import curpImage from '../images/curp.jpg'
import gmailImage from '../images/gmail.jpg'


function HomePage() {
    return (
        <div className='HomPage__container'>
            
            <div className='container__hero'>
                <h1>Internet Las Palmas</h1>
                <small className='container__contacto'>contacto<br /> Noe: 6645845589<br /> Jesus: 6645215894</small>
            </div>

            <div className='components'>
                <div className="row">
                    <div className="col">
                        <Imss />
                    </div>
                    
                    <div className="col">
                        <Sat />
                    </div>
                        
                    <div className="col">
                        <Otros />
                    </div>
                    
                </div>
            </div>

            
                    <div className='carousel'>
                        <div className="carousel__container">

                            <div className="carousel__container-item">
                                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                                <img className='carousel__container-item__img' src={youtuImage} alt=""/>
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


                        </div>
                    </div>

            

        </div>
    )
}

export default HomePage