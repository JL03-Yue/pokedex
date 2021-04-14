import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Home.css'
import SignInPage from '../components/signIn/SignIn'
import SignUpPage from '../components/register/SignUp'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 20,
    },
    button: {
        margin: 20,
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

export default function Home() {
    const classes = useStyles();
    const [signInOpen, setSignInOpen] = useState(false);
    const [signUpOpen, setSignUpOpen] = useState(false);

    const handleSignInOpen = () => {
        setSignInOpen(true);
    };

    const handleSignInClose = () => {
        setSignInOpen(false);
    };

    const handleSignUpOpen = () => {
        setSignUpOpen(true);
    };

    const handleSignUpClose = () => {
        setSignUpOpen(false);
    };
    return (
        <div className="home-wrap">

            <Button className={classes.button} variant="contained" color="secondary" onClick={handleSignUpOpen}>
                Sign Up
            </Button>
            <Button className={classes.button} variant="contained" color="secondary" onClick={handleSignInOpen}>
                Sign In
            </Button>



            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={signInOpen}
                onClose={handleSignInClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={signInOpen}>
                    <div className={classes.paper}>
                        <SignInPage/>
                    </div>
                </Fade>
            </Modal>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={signUpOpen}
                onClose={handleSignUpClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={signUpOpen}>
                    <div className={classes.paper}>
                        <SignUpPage/>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}
