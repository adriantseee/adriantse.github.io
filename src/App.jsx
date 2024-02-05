import './App.css'
import { Hero } from './Hero.jsx'
import { About } from './About.jsx'
import {Skills} from './Skills.jsx'
import { Timeline } from './Timeline.jsx'
import { Projects } from './Projects.jsx'
import { Contact } from './Contact.jsx'
import { Component } from 'react'

class App extends Component{
  state = {
    bgcolor: 'black',
    color: 'white'
  }

  listenScrollEvent = e => {
    if (window.scrollY < 400) {
      this.setState({bgcolor: 'black', color: 'white'})
    } else if (window.scrollY < 800) {
      this.setState({bgcolor: 'white', color: 'black'})
    }
    else{
      this.setState({bgcolor: 'black', color: 'white'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }
  render(){
  return (
    <div style={{background:this.state.bgcolor,  width: "100%", margin: "0", transition: "background-color 0.25s linear", color: this.state.color}}>
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
  }
}

export default App
