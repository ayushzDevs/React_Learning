import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'

function WeatherApp() {

    const [weatherInfo,setWeatherInfo] = useState({
        country: "IN",
        humidity: 65,
        name: "Wonderland",
        pressure: 1001,
        speed: 4.52,
        temp: 30,
        feels_like: 38,
    });

    let updateInfo = (newInfo)=>{

        setWeatherInfo(newInfo);

    }

  return (
    <div style={{textAlign:"center"}}>
        <br /><br />
        <h1>Weather App</h1>
        <br /><br />
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info = {weatherInfo}/>
    </div>
  )
}

export default WeatherApp