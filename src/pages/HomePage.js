import React from 'react'
import './styles/HomePage.css'

import Imss from '../components/Imss'
import Sat from '../components/Sat'
import Otros from '../components/Otros' 

import { Footer } from '../components/Footer'
import { Carousel } from '../components/Carousel'


function HomePage() {
    return (
        <div id='HomPage__container'>

            <header id="navbarX">
                <h1>Internet Las Palmas</h1>
            </header>
            <h2 id='tramites'>Trámites</h2>
            <main id='tramites' >
                <div className="row w-100 offset-2 offset-md-0 offset-lg-1 mr-lg-2 mr-xl-3">
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
            <Carousel />
            <Footer />
        </div>
    )
}

export default HomePage