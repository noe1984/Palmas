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
        <div className='Tramites'>

            <div className='Tramites-container'>
                <div className ='Tramites-cards'>
                    <Sat />
                    <Imss /> 
                    <Otros /> 
                    <Citas />
                    <Vuelos />
                </div>
                
                <div>
                    <Carousel />    
                </div>
            </div>

        </div>
    )
}

export default Tramites