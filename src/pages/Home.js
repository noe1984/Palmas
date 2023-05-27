import React from 'react'
import './styles/Home.css'
import newVideo from '../videos/newVideo.mp4'

export const Home = () => {
    return (
        <>
        <div className='cover-container'>
            <video src={newVideo} autoPlay loop muted />
            <h1>Internet Las Palmas</h1>
        </div>  
        
        </>  
    ) 
} 


