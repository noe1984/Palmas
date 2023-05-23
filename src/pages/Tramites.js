import React from 'react'
import './styles/Tramites.css'

import Imss from '../components/Imss'
import Sat from '../components/Sat'
import Otros from '../components/Otros' 
import Vuelos from '../components/Vuelos' 
import { Carousel } from '../components/Carousel'
import Citas from '../components/Citas'


function Tramites() {
    return (
        <>
        <div className='Tramites-container'>
            <div className='container-fluid'>
                {/* <div className='container'> */}
{/* 
                    <div> 
                        <h1 id='Tramites-title'>Trámites</h1>
                    </div> */}

                    <div className='row' id='Tramites-cards'>
                        <Imss />
                        <Sat />
                        <Vuelos />
                        <Citas />
                        <Otros /> 
                    </div>

                {/* </div> */}
            </div>
        <Carousel />    
        </div>
        </>
    )
}

export default Tramites