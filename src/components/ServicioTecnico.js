import React from 'react'
import './styles/ServicioTecnico.css'
import format from '../images/format.jpg'
import programs from '../images/programs.jpg'
import venta from '../images/venta.png'
import { ServicioTecnicoCard } from './ServicioTecnicoCard'

export const ServicioTecnico = () => {
    return (
        <div className="container-fluid " id='ServicioTecnico'>
            <h4 className='ServicioTecnico-title'>Servicio tecnico</h4>
            <div className='row'>
                <ServicioTecnicoCard src={format} width='12rem' height='16rem'>
                    Formateo de computadoras, incluye sistema operativo y el Office mas reciente
                </ServicioTecnicoCard>

                <ServicioTecnicoCard src={programs} width='12rem' height='16rem'>
                    Instalacion de distintos programas, como office, programas de diseño, drivers etc...
                </ServicioTecnicoCard>

                <ServicioTecnicoCard src={venta} width='12rem' height='16rem'>
                    Venta de equipos de computo completos y tambien accesorios por separado
                </ServicioTecnicoCard>
            </div>
        </div>
    )  
} 
 