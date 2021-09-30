import React from 'react'
import { Card } from './Card'

function Sat() {
    return (
        <Card title='SAT'>
            <a target="_blank" rel="noreferrer" href="https://www.sat.gob.mx/tramites/operacion/28753/obten-tu-rfc-con-la-clave-unica-de-registro-de-poblacion-curp">RFC</a><br />
            <a target="_blank" rel="noreferrer" href="https://www.sat.gob.mx/aplicacion/operacion/29073/verifica-si-estas-registrado-en-el-rfc">Validar Rfc</a><br />
            <a target="_blank" rel="noreferrer" href="https://www.mi-rfc.com.mx/consulta-rfc-homoclave">RFC no Oficial</a><br />
            <a target="_blank" rel="noreferrer" href="https://www.sat.gob.mx/tramites/operacion/83843/rfc-con-la-clave-unica-de-registro-de-poblacion-(curp),-para-personas-fisicas-menores-de-edad-a-partir-de-16-anos">RFC Menor de edad</a><br />
            <a target="_blank" rel="noreferrer" href="https://www.sat.gob.mx/personas/tramites-del-rfc">Mas trámites del RFC</a><br />
        </Card>
    )
}

export default Sat