import React from 'react'
import { TramitesCard } from './TramitesCard'

function Otros() {
    return (
        <TramitesCard title='Otros'>
            <a target="_blank" rel="noreferrer" href="https://www.gob.mx/ActaNacimiento/">ACTA</a><br />
            <a target="_blank" rel="noreferrer" href="https://www.gob.mx/tramites/ficha/expedicion-de-la-copia-certificada-del-acta-de-nacimiento-en-linea/RENAPO187#costos">Actas Precios</a><br />
            <a target="_blank" rel="noreferrer" href="https://app.cfe.mx/Aplicaciones/CCFE/SolicitudesCFE/Solicitudes/ConsultaTuReciboLuzGmx.aspx">Recibo CFE</a><br />
            <a target="_blank" rel="noreferrer" href="https://micuenta.infonavit.org.mx/">Mi cuenta infonavit</a><br />
            <a target="_blank" rel="noreferrer" href="https://www.gob.mx/sesnsp/articulos/regularizacion-de-vehiculos-usados-de-procedencia-extranjera?idiom=es">Reg. de Vehiculos</a><br />
            <a target="_blank" rel="noreferrer" href="https://pagos.tijuana.gob.mx/PagosenLinea/">Recibo Predial</a><br />
            <a target="_blank" rel="noreferrer" href="https://rel.educacionbc.edu.mx/consultacalif/">Boletas</a><br />
            
        </TramitesCard> 
    )
}

export default Otros

