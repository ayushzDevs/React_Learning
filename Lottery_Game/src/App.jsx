import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TicketNum from './TicketNum'
import Ticket from './Ticket'


function App() {
  

  return (
    <div className="page-center">
      <div className="ticket-row">
        <Ticket ticket={[0,1,2]} />
      </div>
    </div>
  )
}


export default App;