import React from 'react' 
import './styles/Home.css'
import { HomeCard } from '../components/HomeCard'

import install from "../images/install.jpg"
import repair from "../images/repair.jpg"
import update from "../images/update.jpg"
import gaming from "../images/gaming.jpg"
import print from "../images/print.jpg"
import copy from "../images/copy.jpg" 

const images = [
    {name: "programas", src: install},
    {name: "reparacion", src: repair},
    {name: "actualizacion", src: update},
    {name: "juegos", src: gaming},
    {name: "impresiones", src: print},
    {name: "copias", src: copy},
]


export const Home = () => {
    return (
        <div className='Home'>

            <h1>Internet Las Palmas</h1>

            <section className='Home-images'>
                {images.map(image => (
                    <HomeCard title={image.name} imgSrc={image.src} />
                ))}
            </section>
        </div>  

    ) 
} 


