import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Canvas} from '@react-three/fiber'
import { RocketTimeline } from './RocketTimeline'

function App() {
  return (
    <Canvas>
      <RocketTimeline />
    </Canvas>
  )
}

export default App
