import React from 'react';
import { AppBar, Typography, Toolbar, Button, Avatar} from '@material-ui/core';
import useStyles from './styles';
import memories from '../../images/memories.png';
import {Link} from 'react-router-dom'; //use react router dom to make app multiple pages
// go to the App.js and import {BrowserRouter, Switch, Route}

const Navbar=()=>{
    const classes= useStyles(); 
    const user= null; 
    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <div className={classes.brandContainer}>
                <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
                <img className= {classes.image} src= {memories} alt='memories' height='60 ' ></img>    
            </div>
            <Toolbar className={classes.brandContainer.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.results.imageUrl}></Avatar>
                        <Typography className={classes.userName} variant='h6'>{user.results.name}</Typography>
                        <Button variant='contained' className={classes.logout} color='secondary'>Log out</Button>
                    </div>
                ):(
                    <Button component={Link} to='/auth'></Button>

                )}
            </Toolbar>
        </AppBar>
    );
};
export default Navbar