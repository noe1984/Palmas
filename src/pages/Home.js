import React from 'react'
import cover from '../images/cover.mp4'
import './styles/Home.css'
import { ServicioTecnico } from '../components/ServicioTecnico'
import coverImage from '../images/cover.jpg'

export const Home = () => {
    return (
        <>
        <div className='cover-container'>
            <div className='cover-title'>
                <h1>Internet Las Palmas</h1>
                <h2>Bienvenido</h2>
            </div>
            <div className='cover-video'>
                <video src={cover} autoPlay loop muted />
            </div>

            <section className='cover-servicios'>
                <div className='cover-servicios_description'>
                    <img className='cover-image' src={coverImage} alt="" />
                    <div className='cover-servicios_titles'>
                        <h3>Contamos con:</h3>
                        <h5>Impresiones, Escaner, copias y videojuegos  </h5>
                        <h5>Acta de nacimiento, RFC, Numero de seguro, Solicitud de credito fonacot y mas </h5>
                    </div>
                </div>
                <div className='cover-servicioTecnico'>
                    <ServicioTecnico />
                </div>
            </section> 
        </div> 
        </>
        
    ) 
}
 