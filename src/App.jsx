import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Suspense } from 'react'
import './App.css'
import {Canvas} from '@react-three/fiber'
import {Track} from './Track.jsx'
import { OrbitControls } from '@react-three/drei'
import { Car } from './Car.jsx'
import { About } from './About.jsx'


function App() {
  return (
    <>
    <About />
    </>
  )
}

export default App
