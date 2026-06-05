import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"


function SearchBox() {
  let [city , setCity] = useState("")

  let handleChange = (e) =>{
    setCity(e.target.value)
  }

  let handleSubmit = (e)=>{
    e.preventDefault();
    console.log(city)
    setCity("")
  }

  return (
    <div className='SearchBox'>
        <h1>search box for weather</h1>
        <form onSubmit={handleSubmit}>
              <TextField id="outlined-basic" label="City Name" variant="outlined" required onChange={handleChange}/>
              <br /><br />
              <Button variant='contained' type='submit' >Search</Button>
        </form>
    </div>
  )
}

export default SearchBox;