import './App.css'
import { Hero } from './Hero.jsx'
import { About } from './About.jsx'
import {Skills} from './Skills.jsx'
import { Timeline } from './Timeline.jsx'
import { Projects } from './Projects.jsx'
import { Contact } from './Contact.jsx'
import React from 'react';
import ReactDOM from 'react-dom';

export const App = () => {
  return (
    <>
      <Hero />
      <About />
      <Timeline/>
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
