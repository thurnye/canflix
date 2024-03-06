import React from 'react';
import Link from '@mui/material/Link';
import {  useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const images = [
    {
      label: 'San Francisco – Oakland Bay Bridge, United States',
      imgPath:
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bird',
      imgPath:
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bali, Indonesia',
      imgPath:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
      label: 'Goč, Serbia',
      imgPath:
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'San Francisco – Oakland Bay Bridge, United States',
      imgPath:
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bird',
      imgPath:
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bali, Indonesia',
      imgPath:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
      label: 'Goč, Serbia',
      imgPath:
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

export default function Home() {
    let navigate = useNavigate();

  return (
    <div>
      <Box sx={{my: 5,}}>
        <div class="owl-carousel owl-theme">
            {images.map((el) => <div class="item" key={el.label}>
                <Box sx={{ width: 150, height: 280 }}>
                    <Card sx={{
                            maxWidth: 150,
                            height: 280,
                            transition: 'box-shadow 0.3s',
                            '&:hover, &:focus-within': {
                                boxShadow: '0px 0px 10px 2px rgba(0,0,0,0.5)', // Add elevation of 6 when hovered or focused
                            },
                            cursor: 'pointer',
                            background: '#20202A',
                        }}
                        elevation={1}
                        onClick={() => navigate("details", { state: { data: el }})}
                        >
                        <CardMedia
                            component="img"
                            height="194"
                            image={el.imgPath}
                            alt={el.label}
                        />
                            <Typography variant="body2" sx={{textAlign: 'start', py: 2, px: 1, color: '#b8b8b8'}}>
                            {el.label}
                            </Typography>
                    </Card>
                </Box>
            </div>)}
        </div>
      </Box>
    </div>
  )
}


