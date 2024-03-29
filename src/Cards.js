import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@mui/material';

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px'
  },
  media: {
    height: 440,
  },
  title: {
      fontWeight: 'bold',
      fontSize: '2rem',
      color: '#fff',
  },
  body: {
    fontSize: '1.1rem',
    color: '#ddd',
  }
});

export default function ImageCard({ service, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {... (checked ? {timeout : 1000} : {})}>
        <Card className={classes.root}>
            <CardMedia
            className={classes.media}
            image={service.imageUrl}
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h1" className={classes.title}>
                {service.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.body}>
                {service.description}
            </Typography>
            </CardContent>
        </Card>
    </Collapse> 
  );
}