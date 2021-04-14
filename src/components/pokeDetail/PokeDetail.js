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
        
        padding:10,

    },
    media: {
        height: 150,
        width: 150,
        justifyContent:'center',
        
    },
});

export default function PokeDetailCard({ data }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>


            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={"https://pokeres.bastionbot.org/images/pokemon/" + String(data.id) + ".png"}

                />
                <CardContent>

                    {/* name */}
                    <Typography gutterBottom variant="h5" component="h5">
                        {data.forms[0].name}
                    </Typography>


                    {/* detail */}
                    <Typography gutterBottom variant="body2" component="p">
                        <p>Ability: {data.abilities[0].ability.name}</p>
                    </Typography>

                    <Typography gutterBottom variant="body2" component="p">
                        <p>Move: {data.moves[0].move.name}</p>
                    </Typography>


                    <Typography gutterBottom variant="body2" component="p">
                        <p>Height: {data.height}</p>
                    </Typography>

                    <Typography gutterBottom variant="body2" component="p">
                        <p>Weight: {data.weight}</p>
                    </Typography>



                </CardContent>
            </CardActionArea>

        </Card>
    );
}