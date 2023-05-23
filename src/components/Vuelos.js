import React from 'react'
import { Card } from './Card'
import avion from '../images/avion.svg'

function Otros() {
    return (
        <Card imgSource={avion}>
            <a target="_blank" rel="noreferrer" href="https://www.volaris.com/">Volaris</a><br />
            <a target="_blank" rel="noreferrer" href="https://aeromexico.com/es-mx/check-in">Aeromexico</a><br />
            <a target="_blank" rel="noreferrer" href="https://www.vivaaerobus.com/es-mx/manage/find-booking">Viva Aerobus</a><br />
        </Card> 
    )
}

export default Otros

