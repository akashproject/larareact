
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Card, CardContent, CardMedia, CardActions, Typography, IconButton, Button } from '@mui/material';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const cardData = [
    {
        id: 1,
        title: 'Advanced accounts course online',
        description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species.',
        image: '/larareact/public/advanced-accounts-course-online.webp'
    },
    {
        id: 2,
        title: 'Advanced accounts course online',
        description: 'The cheetah is a large cat native to Africa and central Iran. It is the fastest land animal.',
        image: '/larareact/public/advanced-accounts-course-online.webp'
    },
    {
        id: 3,
        title: 'Advanced accounts course online',
        description: 'Elephants are the largest existing land animals. Three living species are currently recognized.',
        image: '/larareact/public/advanced-accounts-course-online.webp'
    }
    ,
    {
        id: 4,
        title: 'Advanced accounts course online',
        description: 'Elephants are the largest existing land animals. Three living species are currently recognized.',
        image: '/larareact/public/advanced-accounts-course-online.webp'
    }
    ,
    {
        id: 5,
        title: 'Advanced accounts course online',
        description: 'Elephants are the largest existing land animals. Three living species are currently recognized.',
        image: '/larareact/public/advanced-accounts-course-online.webp'
    }
];

export default function CourseCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid container spacing={3} sx={{ p: 3 }}>
            {cardData.map((item) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.id} >
                    <Card sx={{ maxWidth: 'auto' }}>
                        <CardMedia
                            component="img"
                            height="194"
                            image={item.image}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {item.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing className='flex flex-row justify-between'>
                            <a className='inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-500 active:bg-blue-700 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500'>Explore Course</a>
                            <a className='inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-500 active:bg-blue-700 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500'>Brochure</a>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
