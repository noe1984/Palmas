import React from 'react'
import './styles/Home.css'
import video from '../videos/tech.mp4'

export const Home = () => {
    return (
        <>
        <div className='cover-container'>
            <video src={video} autoPlay loop muted />
            <h1>Internet Las Palmas</h1>
        </div>  
        
        </>  
    ) 
} 


