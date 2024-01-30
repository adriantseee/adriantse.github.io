import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Suspense } from 'react'
import './App.css'
import { Hero } from './Hero.jsx'
import { About } from './About.jsx'
import {Skills} from './Skills.jsx'

function App() {
  return (
    <>
    <Hero />
    <About />
    <Skills />
    </>
  )
}

export default App
