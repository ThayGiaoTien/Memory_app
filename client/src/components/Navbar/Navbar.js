import React, {useState, useEffect} from 'react';
import { AppBar, Typography, Toolbar, Button, Avatar} from '@material-ui/core';
import useStyles from './styles';
import memories from '../../images/memories.png';
import {Link, useHistory, useLocation} from 'react-router-dom'; //use react router dom to make app multiple pages
// go to the App.js and import {BrowserRouter, Switch, Route}
import {useDispatch} from 'react-redux';
import decode from 'jwt-decode';


const Navbar=()=>{
    const classes= useStyles(); 
    const dispatch= useDispatch();
    const history= useHistory();
    const [user, setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    
    const location=useLocation(); //when location changes, simply set the user
    
    const logout=() =>{
        dispatch({type: 'LOGOUT'});
        history.push('/');

        setUser(null); 
    };

    //change status from Sign In to User's profile
    useEffect(()=>{
        const token= user?.token;
        if(token){
            const decodedToken=decode(token);
            if(decodedToken.exp*1000< new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    },[location]);
    
    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <div className={classes.brandContainer}>
                <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
                <img className= {classes.image} src= {memories} alt='memories' height='60 ' ></img>    
            </div>
            <Toolbar className={classes.brandContainer.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}></Avatar>
                        <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                        <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>Log out</Button>
                    </div>
                ):(
                    <Button component={Link} to='/auth' variant='contained' color='primary'>Log In</Button>

                )}
            </Toolbar>
        </AppBar>
    );
};
export default Navbar;
