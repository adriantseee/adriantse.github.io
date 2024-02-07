import './App.css'
import { Hero } from './Hero.jsx'
import { About } from './About.jsx'
import {Skills} from './Skills.jsx'
import { Contact } from './Contact.jsx'
import React, { useEffect, useState} from 'react';
import {Projects} from './Projects.jsx'
import {motion} from 'framer-motion'

export const App = () => {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Hero />
      <About />
  <Skills />
  <Projects />
  <Contact />
  </>
  )
}

export default App
