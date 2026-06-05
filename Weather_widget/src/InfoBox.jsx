import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

function InfoBox() {

    let info = {

        country: "IN",
        humidity: 65,
        name: "Kolkata",
        pressure: 1001,
        speed: 4.52,
        temp: 30,
        feels_like: 38,
    }
  return (
    <div className='InfoBox'>
        <h1>Weather Info</h1>
        <div className='Card'>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Country : {info.country}
                    <br />    
                    Humidity : {info.humidity} 
                    <br /> 
                    Pressure : {info.pressure}
                    <br />  
                    Wind Speed : {info.speed}  
                    <br />
                    Temperature : {info.temp}  
                    <br /> 
                    Feelslike : {info.feels_like}   
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        </div>
    </div>
  )
}

export default InfoBox