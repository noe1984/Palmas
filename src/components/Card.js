import React from 'react'
import './styles/Card.css'

export const Card = ({children, title}) => {
    return (
        <div className='Card-container'>
            <h1 className='Card-title'>{title}</h1>
            <div className='Card-links'>
                {children}
            </div>
        </div>
    )
}
