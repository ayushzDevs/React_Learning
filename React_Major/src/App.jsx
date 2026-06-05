import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Button from '@mui/material/Button';

function App() {

  let handleClick = ()=>{
    console.log("button was clickede")
  }
  

  return (
    <>
      <h1>Welcome to React Major</h1>
      <Button variant='contained' onClick={handleClick}>Click Me !</Button>
      <Button variant='contained' onClick={handleClick} disabled>Click Me again !</Button>
      <Button variant='contained' onClick={handleClick} color='error'>Click Me !</Button>
    </>
  )
}

export default App
