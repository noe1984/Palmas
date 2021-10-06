import React from 'react'
import { Card } from '../components/Card'
import '../components/styles/Card.css'
import './styles/Precios.css'

const Precios = () => { 
    return (
        <>
        <h1 className='Precios-title'>Precios</h1>
        <div className='row w-100 offset-2 offset-lg-1'>
            <div className="col-12 col-md-4" >
                <Card title='Imss'>
                    Nss $35<br />
                    Semanas Cotizadas $40<br />
                    Vigencia de derechos $35<br />
                    Alta en clínica $ $40
                </Card>
            </div>
            <div className="col-12 col-md-4" >
                <Card title='RFC'>
                    RFC $40<br /> 
                    Validar RFC $35<br />
                    RFC Menor de edad $40<br />
                </Card>
            </div>
            <div className="col-12 col-md-4" >
                <Card title='Otros'>
                    Recibo CFE $35<br />
                    Mi cuenta infonavit $35<br />
                    Certificado Covid $35
                </Card>
            </div>
        </div>
        </ >
    )
}


export default Precios  