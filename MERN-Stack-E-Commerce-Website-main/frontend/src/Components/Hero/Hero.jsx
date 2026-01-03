import React from 'react';
import { motion } from 'framer-motion'; // Import animation
import './Hero.css';
import hero_image from '../Assets/hero_image.png'; // Make sure this image has a transparent background!

const Hero = () => {
  return (
    <div className='hero'>
      {/* Background Gradient Blob */}
      <div className="hero-blob"></div>

      <div className="hero-left">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          REDEFINING FRESHNESS
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          SNAP. <span className="highlight">SHAKE.</span> DRINK.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Experience the world's first active-cap technology. 
          Fresh powder released instantly for maximum potency.
        </motion.p>

        <motion.button 
          className="hero-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore the Tech
        </motion.button>
      </div>

      <div className="hero-right">
        <motion.img 
          src={hero_image} 
          alt="Yumora Bottle"
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="hero-product-img"
        />
      </div>
    </div>
  )
}

export default Hero;