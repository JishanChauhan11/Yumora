import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
const Hero = () => {
  return (
    <>
            <div className="hero">
                <div className="hero-left">
                <h2>INSTANT FUEL</h2>
<div>
    <div className="hero-hand-icon">
        <p>Twist</p>
        {/* You can remove the hand_icon image line if you don't want the waving hand */}
    </div>
    <p>Shake</p>
    <p>And Drink</p>
</div>
                    <div className="hero-latest-btn">
                    <div>Shop Flavors</div>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
                <div className="hero-right">
                    <img src={hero_image} alt="" />
                </div>
            </div>
        </>
  )
}

export default Hero;
