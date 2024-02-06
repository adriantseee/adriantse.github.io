import './App.css'
import { Hero } from './Hero.jsx'
import { About } from './About.jsx'
import {Skills} from './Skills.jsx'
import { Timeline } from './Timeline.jsx'
import { Contact } from './Contact.jsx'
import React, { useEffect, useState} from 'react';
import {motion} from 'framer-motion'

export const App = () => {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const mouseMove = e =>{
      setMousePos({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener('mousemove', mouseMove);

    return() => {
      window.removeEventListener('mousemove', mouseMove);
  }
  }, []);
  
  const variants = {
    default: {
      x: mousePos.x-16,
      y: mousePos.y-16
    }
  }
  return (
    <>
      <Hero />
      <About />
      <Timeline/>
      <Skills />
      <Contact />
    </>
  )
}

export default App
