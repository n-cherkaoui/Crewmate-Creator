import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="homePage">
      <h1>Welcome to the Crewmate Creator!</h1>
      <h3>Here is where you can create you very own set of crewmates before sending them off into space!</h3>
      <img className="welcomeImages" src="./src/assets/images/crewmates.png"></img>
      <img className="welcomeImages" src="./src/assets/images/spaceship.png"></img>
    </div>
  )
}

export default App
