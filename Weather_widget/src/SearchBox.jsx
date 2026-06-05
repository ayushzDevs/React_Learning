import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"


function SearchBox() {

  

  const API_URL = "https://api.openweathermap.org/data/2.5/weather"
  const API_KEY = "9f5a90df6eabf396462e4c9e1babe381"


  

  let getWeatherInfo = async()=>{
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    let jsonResponse = await response.json()
    // console.log(jsonResponse)

    let res = {
      temp: jsonResponse.main.temp,
      humidity: jsonResponse.main.humidity,
      pressure: jsonResponse.main.pressure,
      weatherMood: jsonResponse.weather[0].main,
      name: jsonResponse.name,
      speed: jsonResponse.wind.speed,
      country: jsonResponse.sys.country
    }
    console.log(res);
  }

  let [city , setCity] = useState("")

  let handleChange = (e) =>{
    setCity(e.target.value)
  }

  let handleSubmit = (e)=>{
    e.preventDefault();
    
    setCity("")
    getWeatherInfo();
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