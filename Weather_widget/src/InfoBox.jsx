import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

function InfoBox({ info }) {

    const INIT_URL = "https://images.unsplash.com/vector-1775847261677-3a68249f433a?q=80&w=789&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL="https://plus.unsplash.com/premium_vector-1721216582924-6eeccd62eb24?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const COLD_URL="https://plus.unsplash.com/premium_vector-1728551180293-92d0f794988a?q=80&w=747&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAINY_URL="https://images.unsplash.com/vector-1747330794373-9210743903c3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <div className='InfoBox'>
        <div className='CardContainer'>
        <Card sx={{ maxWidth: 500 }}>
            <CardMedia
                sx={{ height: 140, width: 500 }}
                image={info.humidity>80 ? RAINY_URL : info.temp>26 ? HOT_URL:COLD_URL}
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
                    Feelslike : {info.feelslike}   
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