import React from 'react'
import { Card } from './Card'
import imss from '../images/imss.svg'

function Imss() {
    return (     
        <Card imgSource={imss}>
            <ul>
                <a target="_blank" rel="noreferrer" href="https://serviciosdigitales.imss.gob.mx/gestionAsegurados-web-externo/asignacionNSS">Num Seguro</a><br />
                <a target="_blank" rel="noreferrer" href="https://serviciosdigitales.imss.gob.mx/semanascotizadas-web/usuarios/IngresoAsegurado">Semanas Cotizadas</a><br />
                <a target="_blank" rel="noreferrer" href="https://serviciosdigitales.imss.gob.mx/gestionAsegurados-web-externo/vigencia">Vigencia de derechos</a><br /> 
                <a target="_blank" rel="noreferrer" href="https://serviciosdigitales.imss.gob.mx/portal-ciudadano-web-externo/derechohabientes/tramite/registro">Alta en clínica</a><br />
                <a target="_blank" rel="noreferrer" href="https://digital.imss.gob.mx/derechohabiencia/tramite/solicitudConstancia">No Derechohabiencia</a><br />
                <a target="_blank" rel="noreferrer" href="https://serviciosdigitales.imss.gob.mx/portal-ciudadano-web-externo/derechohabientes/tramite/registro">Alta En Clinica</a><br />
                <a target="_blank" rel="noreferrer" href="https://serviciosdigitales.imss.gob.mx/gestionAsegurados-web-externo/cartilla">Reimpresión De Cartilla</a><br />
                <a target="_blank" rel="noreferrer" href="http://www.imss.gob.mx/imssdigital">Mas Trámites...</a><br />
                
            </ul>
        </Card> 
    )
}

export default Imss 