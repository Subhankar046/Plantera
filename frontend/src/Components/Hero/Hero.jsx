import React from 'react'
import './Hero.css'
//eslint-disable-next-line
import hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
//eslint-disable-next-line
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS!!!</h2>
        <div>
            <div className="hero-hand-icon">
                <p>New</p>
            </div>
                <p>hybrids</p>
                <p>for everyone.</p>    
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow} alt=""/>
        </div>
      </div>
      <div className="hero-right">
        
      </div>
    </div>
  )
}

export default Hero
