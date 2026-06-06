import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import WeatherApp from './WeatherApp';

function SearchBox({updateInfo}) {
    let [city , setCity] = useState("")
    let [error, setError] = useState(false)
  

  const API_URL = "https://api.openweathermap.org/data/2.5/weather"
  const API_KEY = "9f5a90df6eabf396462e4c9e1babe381"


  

  let getWeatherInfo = async()=>{
    try{
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    let jsonResponse = await response.json()
    console.log(jsonResponse)

    let res = {
      temp: jsonResponse.main.temp,
      humidity: jsonResponse.main.humidity,
      pressure: jsonResponse.main.pressure,
      weatherMood: jsonResponse.weather[0].main,
      name: jsonResponse.name,
      speed: jsonResponse.wind.speed,
      country: jsonResponse.sys.country,
      feelslike: jsonResponse.main.feels_like
    }
    return res;;
  }
    catch(error)
    {
      throw error
    }
  }


  let handleChange = (e) =>{

    setCity(e.target.value)
  }

  let handleSubmit = async(e)=>{
        try{
            e.preventDefault();
            setCity("")
            let newInfo =await getWeatherInfo();
            updateInfo(newInfo)
        }
          catch(e){
            setError(true)
          }
        }

  return (
    <div className='SearchBox'>
        <form onSubmit={handleSubmit}>
              <TextField id="outlined-basic" label="City Name" variant="outlined" required onChange={handleChange}/>
              <br /><br />
              <Button variant='contained' type='submit' >Search</Button>
              <br /><br /><br /><br />
              {error && <p style={{ color: 'red' }}>City Not Found</p>}
        </form>
    </div>
  )
}

export default SearchBox;