import React from 'react'
import cover from '../images/cover.mp4'
import './styles/Home.css'
import coverImage from '../images/cover.jpg'

export const Home = () => {
    return (
        <>
        <div className='cover-container'>

            <div className='cover-video'>
                <div className='cover-title'>
                    <h1>Internet Las Palmas</h1>
                    <h2>Bienvenido</h2>
                </div>

                <div className='blur'>
                    <video src={cover} autoPlay loop muted />
                </div>
            </div>
            
            <div className='servicioTecnico'>
                
                    
                
                <div className='Info'>
                    <h3>Videojuegos, Impresiones, Tramites <br /> 
                        Escaner, Actas de Nacimiento, NSS, Copias,<br />
                        Citas INE, Citas SAT etc...
                    </h3>
                </div>
            </div>

        </div>  
        
        </>
        
    ) 
}
