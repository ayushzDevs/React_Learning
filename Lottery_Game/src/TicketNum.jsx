import React from 'react'
import "./TicketNum.css"
import "./Ticket"

function TicketNum({ num }) {
  return <span className='TicketNum'>{num}</span>;
}

export default TicketNum