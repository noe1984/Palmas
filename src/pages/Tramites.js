import React from 'react'
import './styles/HomePage.css'

import Imss from '../components/Imss'
import Sat from '../components/Sat'
import Otros from '../components/Otros' 

import { Footer } from '../components/Footer'
import { Carousel } from '../components/Carousel'
import { ServicioTecnico } from '../components/ServicioTecnico'


function Tramites() {
    return (
        <div id='HomePage-container'>
            <header id="navbarX">
                <h1>Internet Las Palmas</h1>
            </header>
            <Carousel />
            <h3 id='HomePage-title'>Trámites</h3>
            <main id='HomePage-cards'>
                <div className="row w-100 ">
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
        </div>
    )
}

export default Tramites