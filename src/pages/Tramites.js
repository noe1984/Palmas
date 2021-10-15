import React from 'react'
import './styles/Tramites.css'

import Imss from '../components/Imss'
import Sat from '../components/Sat'
import Otros from '../components/Otros' 

import { Carousel } from '../components/Carousel'


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