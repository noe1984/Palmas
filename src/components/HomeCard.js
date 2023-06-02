import React from 'react'
import './styles/HomeCard.css'

function HomeCard({title, imgSrc}) {
    return (
        <div className='HomeCard'>
            <h4>{title}</h4>
            <img src={imgSrc} />
        </div>
    )
}

export { HomeCard }