import React from 'react'
import './styles/Card.css'

export const Card = ({children, title, imgSource}) => {
    return (
        <div className='Card-item'>
            <div className='Card-title'>
                <h2>{title}</h2>
                <img src={imgSource}/>
            </div>
            <div className='Card-links'>
                {children}
            </div> 
        </div> 
    ) 
}
 