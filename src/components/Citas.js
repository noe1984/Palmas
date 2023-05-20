import React from 'react'
import { Card } from './Card'

function Citas() {
    return (
        <Card title='Citas'>
            <a target="_blank" rel="noreferrer" href="https://citas.sat.gob.mx/datosPersonales">SAT</a><br />
            <a target="_blank" rel="noreferrer" href="https://citas.fonacot.gob.mx/citasReg/">Fonacot</a><br />
            <a target="_blank" rel="noreferrer" href="https://app-inter.ife.org.mx/siac2011/citas_initCapturaCitas.siac">INE</a><br />
            <a target="_blank" rel="noreferrer" href="https://citas.ebajacalifornia.gob.mx/">Licencia</a><br />
            <a target="_blank" rel="noreferrer" href="https://citas.sre.gob.mx/">Pasaporte</a><br />
            
        </Card> 
    )
}

export default Citas