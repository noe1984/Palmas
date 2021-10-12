import React from 'react'
import './styles/Tramites.css'

import Imss from '../components/Imss'
import Sat from '../components/Sat'
import Otros from '../components/Otros' 

import { Footer } from '../components/Footer'
import { Carousel } from '../components/Carousel'
import { ServicioTecnico } from '../components/ServicioTecnico'


function Tramites() {
    return (
        <>
        <div className='container-fluid'>
                <div className='container'>
                    <h1 id='Tramites-title'>Trámites</h1> 
                    <div className='row' id='Tramites-cards'>
                            <Imss />
                            <Sat />
                            <Otros />
                    </div>
                </div>
        </div>
        <Carousel />
        </>
    )
}

export default Tramites