import React from 'react'
import './HeroSection.css'
import { Button } from '../ButtonElements'

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Tranel More</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button fontBig big primary>Get Started</Button>
            </div>
        </div>
    )
}

export default HeroSection