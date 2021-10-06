import React from 'react'

export const ServicioTecnicoCard = ({ children, src={}, width='25rem', height='30rem'}) => {
    return (
        <div className="card mr-3 text-white bg-dark mb-3" style={{width: width, height: height}}>
            <img src={src} id='ServicioTecnicoCard-img' className="card-img-top" alt="..." />
            <div className="card-body">
                <div >
                    <p>
                        {children}
                    </p>
                </div>
            </div>
        </div>
    )
}
