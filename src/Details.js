import React from 'react'
import { useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const cloudFrontUrl = 'https://d10orkjie08mwi.cloudfront.net/4bfe49d0-d4a2-4f09-af62-70949edeadd0/S1940E01 - Puss Gets The Boot (1080p BluRay x265 Ghost).mp4';

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
                    src={cloudFrontUrl} 
                    title="YouTube Video"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Puss Gets The Boot (1080p BluRay x265 Ghost)
                    </Typography>
                    <Typography variant="body2" color="#b8b8b8">Enjoy Tom and Jerry!
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    </div>
  )
}
