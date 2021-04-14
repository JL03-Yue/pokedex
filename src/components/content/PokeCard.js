import React,{useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import PokeDetailCard from '../pokeDetail/PokeDetail'

const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: 245,
    margin:10,
    
    
  },
  media: {
    height: 200,
    width: 200,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function MediaCard({data}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

    <div>
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

        <Button size="small" color="primary" onClick={handleOpen}>
          Detail
        </Button>
        
      </CardActions>
    </Card>
    

    {/* pop up detail */}
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <PokeDetailCard data ={data}/>
          </div>
        </Fade>
      </Modal>
    
    </div>

    
  );
}