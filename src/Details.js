import React from 'react'
import { useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Details() {
    let location = useLocation();
    let data = location.state?.data
  return (
    <div>
        <Box sx={{mt: 5}}>
            <Card sx={{ maxWidth: 1000, m: 'auto', background: '#20202A', color: '#b8b8b8' }}>
                <iframe
                    width="100%" 
                    height="500" 
                    src="https://www.youtube.com/embed/kYrUWfLlYI0" 
                    title="YouTube Video"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data?.label}
                    </Typography>
                    <Typography variant="body2" color="#b8b8b8">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    </div>
  )
}
