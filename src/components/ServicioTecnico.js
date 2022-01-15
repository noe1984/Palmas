import React from 'react'
import './styles/ServicioTecnico.css'
import format from '../images/format.jpg'
import programs from '../images/programs.jpg'
import venta from '../images/venta.png'
import { ServicioTecnicoCard } from './ServicioTecnicoCard'

export const ServicioTecnico = () => {
    return (
        <div className="container-fluid ">
            <div id='ServicioTecnico'>
                <ServicioTecnicoCard src={format} width='13rem' height='20rem'>
                    Formateo de computadoras, incluye sistema operativo y el office mas reciente.
                </ServicioTecnicoCard>

                <ServicioTecnicoCard src={programs} width='13rem' height='20rem'>
                    Instalacion de distintos programas como office, programas de diseño, drivers etc...
                </ServicioTecnicoCard>

                <ServicioTecnicoCard src={venta} width='13rem' height='20rem'>
                    Venta de equipos de cómputo completos y también accesorios por separado.
                </ServicioTecnicoCard>
            </div> 
        </div>
    )  
} 
 