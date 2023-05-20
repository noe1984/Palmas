import React from 'react'
import './styles/Card.css'

export const Card = ({children, title}) => {
    return (
        <div className='Card-item'>
            <h2 className='Card-title'>{title}</h2>
            <div className='Card-links'>
                {children}
            </div>
        </div> 
    ) 
}
 