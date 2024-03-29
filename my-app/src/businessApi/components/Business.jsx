import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Business = ({data}) => {
  // console.log(data)
  return (
    <div>
   <Card sx={{ maxWidth: 345 }}>
     <CardMedia
      component="img"
      alt="image"
      height="140"
      src={data.image_url}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {data.name}
      </Typography>
      {/* <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography> */}
    </CardContent>
    {/* <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
  </div>
  )
}

export default Business