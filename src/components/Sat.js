import React from 'react'
import { TramitesCard } from './TramitesCard'
import sat from '../images/sat.png'

function Sat() {
    return (
        <TramitesCard imgSource={sat}>
            <a target="_blank" rel="noreferrer" href="http://chat.sat.gob.mx/">Chat RFC</a><br />
            <a target="_blank" rel="noreferrer" href="https://www.sat.gob.mx/aplicacion/login/53027/genera-tu-constancia-de-situacion-fiscal.">Imprimir Constancia</a><br />
            <a target="_blank" rel="noreferrer" href="https://www.sat.gob.mx/aplicacion/login/43824/reimprime-tus-acuses-del-rfc">Reimprimir Constancia</a><br />
            <a target="_blank" rel="noreferrer" href="https://www.mi-rfc.com.mx/consulta-rfc-homoclave">RFC Pag. no Oficial</a><br />
            <a target="_blank" rel="noreferrer" href="https://agsc.siat.sat.gob.mx/PTSC/ValidaRFC/">Validar RFC</a><br />
            <a target="_blank" rel="noreferrer" href="https://www.sat.gob.mx/personas/tramites-del-rfc">Mas tramites RFC...</a><br />
            
        </TramitesCard> 
    )
}

export default Sat