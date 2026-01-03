import React from 'react';
import { motion } from 'framer-motion';
import './TechSection.css';

const TechSection = () => {
  const steps = [
    { id: 1, title: "Seal", desc: "Patented nitrogen seal keeps powder fresh." },
    { id: 2, title: "Press", desc: "Release the active ingredients instantly." },
    { id: 3, title: "Shake", desc: "Mix thoroughly for peak performance." },
  ];

  return (
    <div className='tech-section'>
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        THE TECHNOLOGY
      </motion.h2>
      
      <div className="tech-cards">
        {steps.map((step, i) => (
          <motion.div 
            className="tech-card"
            key={step.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            whileHover={{ y: -10, backgroundColor: "#1a1a1a" }}
          >
            <h1>0{step.id}</h1>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TechSection;