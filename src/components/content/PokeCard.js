import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
    margin:10,
    
    
  },
  media: {
    height: 200,
    width: 200,
  },
});

export default function MediaCard({data}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={"https://pokeres.bastionbot.org/images/pokemon/" + String(data.id) +".png"}
          
        />
        <CardContent>

          <Typography gutterBottom variant="h5" component="h2">
            {data.forms[0].name}
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Like
        </Button>
        
      </CardActions>
    </Card>
  );
}